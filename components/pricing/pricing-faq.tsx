"use client";

import type { ReactNode } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";

export type FaqItem = { id: string; q: string; a: ReactNode };

/**
 * Pricing FAQ. Design: native <details>/<summary>; here shadcn Accordion (base-ui) restyled to the file.
 * Props mirror the design's tweaks: firstFaqOpen (default true), oneOpenAtATime (default false).
 */
export function PricingFaq({
  items,
  firstFaqOpen = true,
  oneOpenAtATime = false,
}: {
  items: FaqItem[];
  firstFaqOpen?: boolean;
  oneOpenAtATime?: boolean;
}) {
  return (
    <Accordion
      multiple={!oneOpenAtATime}
      defaultValue={firstFaqOpen && items[0] ? [items[0].id] : []}
      className="overflow-hidden rounded-12 border border-line bg-white"
    >
      {items.map((it, i) => (
        <AccordionItem key={it.id} value={it.id} className={"border-b-0 not-last:border-b-0" + (i > 0 ? " border-t border-t-line" : "")}>
          <AccordionPrimitive.Header className="m-0 flex">
            <AccordionPrimitive.Trigger className="group/faq flex w-full cursor-pointer items-center justify-between gap-[20px] border-0 bg-transparent px-[26px] py-[18px] text-left select-none hover:bg-[#FAF9F7] focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-rust-button">
              <h3 className="m-0 text-[17px] font-semibold tracking-[-.01em] text-ink">{it.q}</h3>
              <ChevronDown
                size={20}
                aria-hidden="true"
                className="flex-none text-faint [transition:transform_.2s_ease] group-aria-expanded/faq:rotate-180 group-data-[panel-open]/faq:rotate-180"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="box-content max-w-[680px] px-[26px] pt-0 pb-[22px] text-[15.5px] leading-[1.6] text-pretty text-body [&_a]:text-rust [&_a]:no-underline [&_a]:hover:text-rust">
            {it.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
