import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountryListProps {
  name: string;
  code: string;
}

interface CountryProps {
  allCountries: CountryListProps[];
  countryValue?: string;
  onCountryChange?: (newType: string) => void;
}

const Countries = ({
  countryValue,
  onCountryChange,
  allCountries,
}: CountryProps) => {
  return (
    <>
      <Select
        onValueChange={(value) => onCountryChange?.(value)}
        defaultValue={countryValue}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Turkey" />
        </SelectTrigger>
        <SelectContent>
          {allCountries.map((country: CountryListProps) => (
            <SelectItem key={country.name} value={country.code}>
              {country.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default Countries;
