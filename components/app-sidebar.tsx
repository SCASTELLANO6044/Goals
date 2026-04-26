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
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export function AppSidebar() {
    const pathname = usePathname()
    const [email, setEmail] = useState<string | null>(null)
    const supabase = createClient()

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                setEmail(user.user_metadata?.email || user.email || null)
            }
        }
        getUser()
    }, [supabase.auth])

    const baseUrl = email ? `/profile/${email}` : ""

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={pathname === baseUrl}>
                                <a href={baseUrl || "/"}>
                                    <Home className="size-4" />
                                    <span>Home</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={pathname === `${baseUrl}/settings`}>
                                <a href={baseUrl ? `${baseUrl}/settings` : "#"}>
                                    <Settings className="size-4" />
                                    <span>Settings</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={pathname === `${baseUrl}/register-goal`}>
                                <a href={baseUrl ? `${baseUrl}/register-goal` : "#"}>
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