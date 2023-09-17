import { MessageSquareDashed, PartyPopper, ListTodo, ConciergeBell } from "lucide-react";

// export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Message Templates",
    icon: MessageSquareDashed,
    href: "/messageTemplates",
    stroke: "#E74C3C",
    bgColor: "bg-red-500/10",
  },
  {
    label: "Happenings",
    icon: PartyPopper,
    href: "/happenings",
    stroke: "#9B59B6",
    bgColor: "bg-red-400/10",
  },
  {
    label: "Guest Requests & To Do's",
    icon: ListTodo,
    href: "/guestRequestsToDos",
    stroke: "#58D68D",
    bgColor: "bg-green-400/10",
  },
  {
    label: "Concierge",
    icon: ConciergeBell,
    href: "/concierge",
    stroke: "#5DADE2",
    bgColor: "bg-yellow-400/10",
  },
];

/* 
Ideas for sections

Message Templates
Happenings
Guest Requests
Concierge
*/