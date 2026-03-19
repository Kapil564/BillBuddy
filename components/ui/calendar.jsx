"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        // Card shell — matches your auth card style
        "p-5 rounded-2xl bg-[#f4f1eb] border border-[#d6d0c4] shadow-sm w-fit",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row gap-6",
        month: "space-y-4",

        // Header row: "March 2025" + arrows
        month_caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-semibold text-[#1c1c1a] tracking-wide",

        // Nav arrows
        nav: "flex items-center gap-1",
        button_previous: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 p-0 absolute left-1",
          "text-[#7a7570] hover:text-[#1c1c1a] hover:bg-[#eae7df]",
          "border border-[#d6d0c4] rounded-lg"
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 p-0 absolute right-1",
          "text-[#7a7570] hover:text-[#1c1c1a] hover:bg-[#eae7df]",
          "border border-[#d6d0c4] rounded-lg"
        ),

        // Grid
        month_grid: "w-full border-collapse",
        weekdays: "flex w-full mb-1",
        weekday:
          "text-[#b8b2aa] rounded-md w-9 font-medium text-[0.7rem] uppercase tracking-wider text-center",
        week: "flex w-full mt-1",

        // Individual day cell
        day: cn(
          "relative p-0 text-center text-sm",
          "focus-within:relative focus-within:z-20",
          "[&:has([aria-selected])]:bg-[#2d4a3e]/10",
          "[&:has([aria-selected].day-outside)]:bg-[#2d4a3e]/5",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-lg [&:has(>.day-range-start)]:rounded-l-lg first:[&:has([aria-selected])]:rounded-l-lg last:[&:has([aria-selected])]:rounded-r-lg"
            : "[&:has([aria-selected])]:rounded-lg"
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal rounded-lg",
          "text-[#1c1c1a] hover:bg-[#eae7df] hover:text-[#1c1c1a]",
          "aria-selected:opacity-100 transition-colors"
        ),

        // Range selection
        range_start:
          "day-range-start aria-selected:bg-[#2d4a3e] aria-selected:text-[#f4f1eb] rounded-l-lg",
        range_end:
          "day-range-end aria-selected:bg-[#2d4a3e] aria-selected:text-[#f4f1eb] rounded-r-lg",
        range_middle:
          "aria-selected:bg-[#2d4a3e]/10 aria-selected:text-[#1c1c1a]",

        // Selected single day
        selected:
          "bg-[#2d4a3e] text-[#f4f1eb] hover:bg-[#1e3329] hover:text-[#f4f1eb] focus:bg-[#2d4a3e] focus:text-[#f4f1eb] rounded-lg",

        // Today
        today:
          "bg-[#eae7df] text-[#2d4a3e] font-semibold ring-1 ring-[#2d4a3e]/30 rounded-lg",

        // Outside month days
        outside:
          "day-outside text-[#c2bdb5] opacity-40 aria-selected:bg-[#2d4a3e]/5 aria-selected:text-[#7a7570]",

        disabled: "text-[#c2bdb5] opacity-40 cursor-not-allowed",
        hidden: "invisible",

        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: cls, ...rest }) => {
          const Comp = orientation === "left" ? ChevronLeft : ChevronRight;
          return <Comp className={cn("size-4", cls)} {...rest} />;
        },
      }}
      {...props}
    />
  );
}

export { Calendar }