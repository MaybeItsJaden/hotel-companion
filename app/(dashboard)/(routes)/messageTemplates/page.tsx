"use client";

import { Copy } from "lucide-react";
import { useRouter } from "next/router";
// import { useEffect, useState } from "react";  // Comment this out for now

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Function for copying text to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      // Successful copy
      console.log("Text successfully copied");
    },
    (err) => {
      // Unsuccessful copy
      console.error("Unable to copy text", err);
    }
  );
};

// Comment out the database-related code for now
/*
async function fetchEvents() {
  return [
    // Your events fetched from the database
  ];
}
*/

export default function MessageTemplatesPage() {
//  const router = useRouter();
  // const [events, setEvents] = useState([]);  // Comment this out for now

  // Comment out the database-related code for now
  /*
  useEffect(() => {
    fetchEvents().then(fetchedEvents => {
      setEvents(fetchedEvents);
    });
  }, []);
  */


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
        {/* Hardcoded Cards for styling */}
        <Card 
          onClick={() => copyToClipboard('Hello, my name is Jaden and I am the great creator of this amazing functionality')}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
        >
          <div className="text-lg flex items-center gap-x-4">
            <div className="font-semibold">
              Hello, my name is Jaden and I am the great creator of this amazing functionality</div>
          </div>
          <Copy className="w-7 h-7" />
        </Card>
        {/* Add more hardcoded Cards as needed */}
      </div>
    </div>
  );
}
