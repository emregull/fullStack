import axios, { csrf } from "@/lib/axios";
import { HolidayProps, CalendarProps } from "@/interfaces/interfaces";
import { format } from "date-fns";

export const useCalendar = () => {
  const all = async (): Promise<CalendarProps[]> => {
    await csrf();

    try {
      const res = await axios.get("api/calendar");
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.status !== 422) {
        throw error;
      }
      return []; // Return an empty array on 422 error
    }
  };
  const add = async (args: HolidayProps) => {
    const { ...props } = args;

    await csrf();

    axios
      .post("api/calendar/add", { title: props.title, date: props.date })
      .catch((error) => {
        if (error.response.status !== 422) throw error;
      });
  };

  const update = async (args: CalendarProps) => {
    const { date, ...otherProps } = args;
    const formattedDate = format(date, "yyyy-MM-dd");
    await csrf();

    try {
      const response = await axios.post("api/calendar/update", {
        date: formattedDate,
        ...otherProps,
      });

      return response.statusText;
    } catch (error) {
      // Log the error or handle it in a specific way based on your requirements
      console.error("Error updating calendar:", error);
    }
  };

  return {
    add,
    all,
    update,
  };
};
