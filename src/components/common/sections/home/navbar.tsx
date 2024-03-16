import React from "react";
import { Container } from "../../layouts/container";
import Link from "next/link";
import { APP_ROUTES } from "@/configs/routes";
import { NavItems } from "./nav-items";
import { locale } from "@/locale/locale";
import { buttonVariants } from "@/components/ui/button";
import { Cart } from "./cart";

export const Navbar = () => {
  const user = null;

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

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-3">
                  {user ? null : (
                    <Link
                      href={APP_ROUTES.signIn}
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Sign in
                    </Link>
                  )}

                  {user ? null : (
                    <span
                      className="h-6 w-px bg-secondary"
                      aria-hidden="true"
                    />
                  )}

                  {user ? null : (
                    <Link
                      href={APP_ROUTES.createAccount}
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span
                      className="h-6 w-px bg-secondary"
                      aria-hidden="true"
                    />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-3">
                      <span
                        className="h-6 w-px bg-secondary"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <div className="ml-2 flow-root lg:ml-3">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </nav>
  );
};
