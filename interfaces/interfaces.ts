export interface HolidayProps {
  date?: Date;
  name?: string;
  localName?: string;
  type?: string;
  title?: string;
}

export interface CalendarProps {
  id: number;
  date: Date;
  title: string;
  note: string;
}

export interface CalendarPageProp {
  holidays: CalendarProps[];
  onFormSubmit: () => Promise<void>;
}

export interface HolidayPageProp {
  holidays: HolidayProps[];
}
