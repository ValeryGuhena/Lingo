import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export const LearnHeader = ({ title }: { title: string }) => {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
      <Button variant="ghost" size="sm" asChild>
        <Link href={"/courses"}>
          <ArrowLeft className="w-5 h-5 stroke-2 text-neutral-400" />
        </Link>
      </Button>

      <h1 className="font-bold text-lg">{title}</h1>
      <div></div>
    </div>
  );
};
