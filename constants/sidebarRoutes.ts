import { LayoutDashboard, MessageSquareDashed, Settings, PartyPopper, ListTodo, ConciergeBell } from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "#5DADE2",
  },
  {
    label: "Message Templates",
    icon: MessageSquareDashed,
    href: "/messageTemplates",
    stroke: "#E74C3C",
  },
  {
    label: "Happenings",
    icon: PartyPopper,
    href: "/happenings",
    stroke: "#9B59B6",
  },
  {
    label: "Guest Requests & To Do's",
    icon: ListTodo,
    href: "/guestRequestsToDos",
    stroke: "#58D68D",
  },
  {
    label: "Concierge",
    icon: ConciergeBell,
    href: "/concierge",
    stroke: "#5DADE2",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
