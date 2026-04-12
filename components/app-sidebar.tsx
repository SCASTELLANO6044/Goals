"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

export function AppSidebar() {
    const pathname = usePathname()
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarMenuButton asChild isActive>
                    <a href="/">Home</a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild isActive>
                    <a href={`${pathname}/settings`}>Settings</a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild isActive>
                    <a href={`${pathname}/register-goal`}>Register Goal</a>
                </SidebarMenuButton>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}