import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { APP_ROUTES } from "@/configs/routes";
import { cn } from "@/lib/utils";
import { locale } from "@/locale/locale";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {locale.home.title}{" "}
        <span className="text-primary">{locale.home.accentTitle}</span>.
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        {locale.home.description}
      </p>

      <div className="flex flex-col sm:flex-row mt-6 gap-4">
        <Link className={cn(buttonVariants())} href={APP_ROUTES.browseTrending}>
          {locale.home.browseTrending}
        </Link>
        <Button variant="ghost">{locale.home.ourQualityPromise} &rarr;</Button>
      </div>
    </div>
  );
};
