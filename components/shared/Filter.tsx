import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  filters: { name: string; value: string }[];
  otherClasses?: string;
  containerClasses?: string;
}

function Filter({ filters, containerClasses, otherClasses }: Props) {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} min-w-[180px] body-regular light-border background-light800_dark300 w-full text-dark400_light500 border px-5 py-2.5`}
        >
          <SelectValue placeholder="Select a Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((f, i) => (
              <SelectItem
                value={f.value}
                key={f.value}
                className="py-3 text-light-500 capitalize px-8 background-light800_darkgradient"
              >
                {f.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Filter;
