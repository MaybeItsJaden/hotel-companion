"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants/dashboardTools";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of efficiency and shared knowledge
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Efficiency, Effectiveness and Productivity
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-12">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="text-lg flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon style={{ stroke: tool.stroke }} className="w-8 h-8" />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-7 h-7" />
          </Card>
        ))}
      </div>
    </div>
  );
}

