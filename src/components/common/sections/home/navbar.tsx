import React from "react";
import { Container } from "../../layouts/container";
import Link from "next/link";
import { APP_ROUTES } from "@/configs/routes";
import { NavItems } from "./nav-items";
import { locale } from "@/locale/locale";

export const Navbar = () => {
  return (
    <nav className="sticky z-50 bg-white top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <Container>
          <div className="border-b border-accent">
            <div className="flex h-16 items-center">
              {/* TODO: mobile nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href={APP_ROUTES.home}>
                  <h3 className="font-bold text-3xl">{locale.app.shortName}</h3>
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </nav>
  );
};
