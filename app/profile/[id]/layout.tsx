import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 px-4 sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ transform: "translateY(var(--scroll-y, 0))" }}>
                    <SidebarTrigger className="-ml-1" />
                </header>
                <div className="flex-1 grid justify-items-center transition-[padding] duration-200 ease-linear md:peer-data-[state=expanded]:pr-[var(--sidebar-width)] md:peer-data-[state=collapsed]:peer-data-[collapsible=icon]:pr-[var(--sidebar-width-icon)]">
                    <div className="w-full max-w-screen-2xl px-4">
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}