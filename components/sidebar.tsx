"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes } from "@/constants/sidebarRoutes";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const Sidebar = () => {
    const pathname = usePathname();
    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            src="/logo.svg"
                            alt="logo"
                        />
                    </div>    
                    <h1 className={cn("text-xl font-bold", poppins.className)}>
                        Hotel Companion
                    </h1>
                </Link>    
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                            pathname === route.href ? "bg-white/10 text-white" : "text-zinc-500",)}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon style={{ stroke: route.stroke }} className="h-5 w-5 mr-3" />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;