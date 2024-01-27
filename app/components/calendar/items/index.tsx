import React, { useState } from "react";
import CardGroup from "@/app/ui/card";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { CalendarPageProp } from "@/interfaces/interfaces";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useCalendar } from "@/lib/calendar";
import { useRouter } from "next/navigation";

interface FormData {
  id: number;
  title: string;
  note: string;
  date: Date;
}

const Items: React.FC<CalendarPageProp> = ({ holidays, onFormSubmit }) => {
  const { update } = useCalendar();
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    title: "",
    note: "",
    date: new Date(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    if (date !== undefined) {
      setFormData((prevData) => ({
        ...prevData,
        date: date,
      }));
    }
  }, [date]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await update(formData);
    if (res === "OK") {
      onFormSubmit();
      handleDialog(formData.id, false);
    }
  };

  const [dialogStates, setDialogStates] = useState(
    Object.fromEntries(holidays.map((data) => [data.id, false]))
  );

  const handleDialog = (dialogName: any, status: boolean) => {
    setDialogStates((prevState) => ({
      ...prevState,
      [dialogName]: status,
    }));
  };

  return (
    <>
      {holidays.map((data, index) => (
        <CardGroup key={index}>
          <div className="grid grid-rows-2 grid-flow-col lg:gap-x-4 m-4">
            <div>{format(data.date, "PPP, EEEE", { locale: tr })}</div>
            <div>{data.title}</div>
          </div>
          <div className="flex justify-end items-center gap-x-4 m-4">
            <Dialog
              key={data.id}
              open={dialogStates[data.id]}
              onOpenChange={(e) => {
                handleDialog(data.id, e);
                setDate(data.date);
                setFormData({
                  id: data.id,
                  title: data.title,
                  note: data.note,
                  date: data.date,
                });
              }}
            >
              <DialogTrigger asChild>
                <Button variant="outline">Düzenle</Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[655px]">
                <form
                  key={index}
                  onSubmit={handleSubmit}
                  className="w-full space-y-6"
                >
                  <DialogHeader>
                    <DialogTitle>Düzenle</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-right">
                        Tarih
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "col-span-3 w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date
                              ? format(date, "PPP", { locale: tr })
                              : format(data.date, "PPP", { locale: tr })}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            locale={tr}
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label htmlFor="date" className="text-right">
                        Title
                      </Label>
                      <Input
                        name="title"
                        onChange={handleChange}
                        defaultValue={data.title}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-right">
                      Not ekle
                    </Label>
                    <Textarea
                      name="note"
                      defaultValue={data.note}
                      onChange={handleChange}
                      placeholder="Mesajınızı buraya yazınız."
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit" variant="secondary">
                      Kaydet
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardGroup>
      ))}
    </>
  );
};

export default Items;
