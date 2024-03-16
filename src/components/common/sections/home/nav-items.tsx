"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { PRODUCT_CATEGORIES } from "@/configs";
import Image from "next/image";

export const NavItems = () => {
  return (
    <div className="h-full flex gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          {PRODUCT_CATEGORIES.map((category) => {
            return (
              <NavigationMenuItem key={category.value}>
                <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="md:w-[60vw] lg:w-[80vw]">
                    <div className="mx-auto max-w-7xl px-8">
                      <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                        <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                          {category.featured.map((item) => (
                            <NavigationMenuLink
                              href={item.href}
                              key={item.name}
                            >
                              <div className="group relative text-base sm:text-sm">
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary/50 group-hover:opacity-75">
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.name}
                                    fill
                                    className="object-cover object-center"
                                  />
                                </div>

                                <p className="mt-6 block font-medium text-primary">
                                  {item.name}
                                </p>
                                <p className="mt-1" aria-hidden="true">
                                  Shop now
                                </p>
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
