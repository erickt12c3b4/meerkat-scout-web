"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS, SIGN_IN_HREF, type NavKey } from "@/components/site/site-header";

/**
 * Drawer navigation for viewports under 1024px (not in the design files; see MOBILE-NOTES.md).
 */
export function MobileNav({ active, demoHref }: { active?: NavKey; demoHref: string }) {
  return (
    <div className="hidden max-lg:block">
      <Sheet>
        <SheetTrigger
          aria-label="Open menu"
          className="inline-flex size-[44px] items-center justify-center rounded-8 text-ink"
        >
          <Menu size={24} strokeWidth={1.8} />
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] max-w-[85vw] bg-paper text-ink" showCloseButton>
          <SheetTitle className="px-[20px] pt-[24px] text-[13px] font-semibold tracking-[.14em] text-rust uppercase">
            Menu
          </SheetTitle>
          <nav className="flex flex-col px-[8px] pt-[8px]">
            {NAV_ITEMS.map((item) => (
              <SheetClose
                key={item.key}
                render={
                  <Link
                    href={item.href}
                    className={
                      "flex min-h-[48px] items-center rounded-8 px-[12px] text-[17px] " +
                      (item.key === active ? "font-semibold text-ink" : "font-medium text-nav")
                    }
                  />
                }
              >
                {item.label}
              </SheetClose>
            ))}
            <SheetClose
              render={
                <a
                  href={SIGN_IN_HREF}
                  className="flex min-h-[48px] items-center rounded-8 px-[12px] text-[17px] font-medium text-nav"
                />
              }
            >
              Sign in
            </SheetClose>
          </nav>
          <div className="mt-auto px-[20px] pb-[24px]">
            <SheetClose
              render={
                <Link
                  href={demoHref}
                  className="flex min-h-[50px] items-center justify-center rounded-8 bg-rust-button text-[16px] font-semibold text-white shadow-hairline"
                />
              }
            >
              Book a demo
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
