"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { LogOut, Home, Settings, PlusCircle } from "lucide-react"
import { signOut } from "@/lib/actions"

export function AppSidebar() {
    const pathname = usePathname()
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={pathname === "/"}>
                                <a href="/">
                                    <Home className="size-4" />
                                    <span>Home</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={pathname.includes("/settings")}>
                                <a href={pathname.includes("/settings") ? pathname : `${pathname}/settings`}>
                                    <Settings className="size-4" />
                                    <span>Settings</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={pathname.includes("/register-goal")}>
                                <a href={pathname.includes("/register-goal") ? pathname : `${pathname}/register-goal`}>
                                    <PlusCircle className="size-4" />
                                    <span>Register Goal</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <form action={signOut}>
                            <SidebarMenuButton type="submit" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Sign Out</span>
                            </SidebarMenuButton>
                        </form>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}