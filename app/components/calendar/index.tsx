import { CalendarProps } from "@/interfaces/interfaces";
import React, { useState } from "react";
import Items from "./items";
import { useCalendar } from "@/lib/calendar";

const Calendar = () => {
  const [calendar, setCalendar] = useState<CalendarProps[]>();
  const [dataCheck, setDataCheck] = useState(false);

  const { all } = useCalendar();

  const fetchCalendar = async () => {
    const res = await all();
    setCalendar(res);
    setDataCheck(true);
  };

  if (!dataCheck) {
    fetchCalendar();
  }

  return (
    <>
      {calendar && (
        <Items onFormSubmit={() => fetchCalendar()} holidays={calendar} />
      )}
    </>
  );
};

export default Calendar;
