"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import countriesData from "@/lib/countries.json";
import CardGroup from "@/app/ui/card";
import Countries from "./countries";
import Holidays from "./holidays";
import { HolidayProps } from "@/interfaces/interfaces";

const Collections = () => {
  const [year, setYear] = useState<number>(2024);
  const [country, setCountry] = useState("TR");
  const [dataCheck, setDataCheck] = useState(true);
  const [holidays, setHolidays] = useState<HolidayProps[]>();

  const fetchPublicHolidays = async (year: number, countryCode: string) => {
    try {
      const response = await fetch(
        `https://date.nager.at/api/v2/PublicHolidays/${year}/${countryCode}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const holidaysData = await response.json();
      setHolidays(holidaysData);
      setDataCheck(true);
    } catch (error) {
      setHolidays([]);
      setDataCheck(false);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPublicHolidays(year, country);
        }}
      >
        <CardGroup>
          <div className="grid grid-rows-3 grid-flow-col gap-x-4 mx-4">
            <Label className="flex items-end pb-2" htmlFor="country">
              Ülke
            </Label>
            <Countries
              allCountries={countriesData}
              countryValue={country}
              onCountryChange={setCountry}
            />
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-x-4 mx-4">
            <Label className="flex items-end pb-2" htmlFor="year">
              Yıl
            </Label>
            <Input
              type="number"
              onChange={(e) => {
                setYear(parseInt(e.target.value));
              }}
              min="1970"
              max="2100"
              value={year}
              id="year"
            />
            <Button
              className="col-start-2 row-start-2"
              variant="secondary"
              type="submit"
            >
              Getir
            </Button>
          </div>
        </CardGroup>
      </form>

      {holidays && dataCheck && <Holidays holidays={holidays} />}

      {!dataCheck && (
        <div className="text-center my-8">
          Bu ülkeye ait veriler bulunamadı.
        </div>
      )}
    </>
  );
};

export default Collections;
