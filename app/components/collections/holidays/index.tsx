import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import CardGroup from "@/app/ui/card";
import { Button } from "@/components/ui/button";
import { HolidayPageProp, HolidayProps } from "@/interfaces/interfaces";
import { CheckedState } from "@radix-ui/react-checkbox";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { useCalendar } from "@/lib/calendar";
import { usePageContext } from "@/app/context/page-context";

const Holidays: React.FC<HolidayPageProp> = ({ holidays }) => {
  const { setPage } = usePageContext();
  const { add } = useCalendar();
  const [checkedHolidays, setCheckedHolidays] = useState<HolidayProps[]>([]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkedHolidays.length !== 0) {
      try {
        checkedHolidays.map(async (holidays: HolidayProps) => {
          add({
            title: holidays.localName,
            date: holidays.date,
          });
        });
      } catch (error) {
        console.error("Error sending data:", error);
      }
      setPage("takvim");
    } else {
      alert("Not enough holiday selected");
    }
  };

  const handleCheckboxChange = (
    holidays: HolidayProps,
    isChecked: CheckedState
  ) => {
    setCheckedHolidays((prevCheckedHolidays) => {
      if (isChecked) {
        return [...prevCheckedHolidays, holidays];
      } else {
        return prevCheckedHolidays.filter((holiday) => holiday !== holidays);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {holidays.map((data, index) => (
        <CardGroup key={index}>
          <div className="grid grid-rows-3 grid-flow-col lg:gap-x-4 m-4">
            <div className="text-gray-500">
              {data.date !== undefined &&
                format(data.date, "PPP, EEEE", { locale: tr })}
            </div>
            <div>{data.localName}</div>
            <small className="text-xs text-gray-500">{data.name}</small>
          </div>
          <div className="flex justify-end items-center gap-x-4 m-4">
            <Checkbox
              onCheckedChange={(checked) => handleCheckboxChange(data, checked)}
              key={index}
            />
          </div>
        </CardGroup>
      ))}
      <div className="flex justify-center mb-4">
        <Button type="submit" size="lg" variant="secondary">
          İÇERİ AKTAR
        </Button>
      </div>
    </form>
  );
};

export default Holidays;
