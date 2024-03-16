import { PERKS_LISTS } from "@/configs";
import React from "react";

export const Perks = () => {
  return (
    <div
      className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 
          sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
    >
      {PERKS_LISTS.map((perk, index) => (
        <div
          key={index}
          className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
        >
          <div className="md:flex-shrink-0 flex justify-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-full text-primary bg-primary/20">
              <perk.icon className="h-1/3 w-1/3" />
            </div>
          </div>

          <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-base font-medium">{perk.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {perk.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
