import type { ReactNode } from "react"
import { AppFooter } from "@/components/layout/app-footer"
import { AppHeader } from "@/components/layout/app-header"
import { AppSidebar } from "@/components/layout/app-sidebar"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <AppSidebar />
      <div className="flex min-h-screen flex-col pl-72">
        <AppHeader />
        <main className="relative w-full flex-1 bg-surface px-8 pt-20 pb-16">{children}</main>
        <AppFooter />
      </div>
    </div>
  )
}
