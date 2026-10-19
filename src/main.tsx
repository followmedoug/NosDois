import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createRouter, createRootRoute, createRoute, RouterProvider, Outlet, redirect, useNavigate } from "@tanstack/react-router"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { AppShell } from "@/components/layout/app-shell"
import { WalletsPage } from "@/features/wallets/components/wallets-page"
import type { WalletView } from "@/features/wallets/types"
import { parseWalletView } from "@/features/wallets/views"

const rootRoute = createRootRoute({
  component: () => (
    <AppShell>
      <Outlet />
    </AppShell>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/carteiras" })
  },
})

const carteirasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "carteiras",
  validateSearch: (search: Record<string, unknown>): { visao: WalletView } => ({
    visao: parseWalletView(search.visao),
  }),
  component: () => {
    const search = carteirasRoute.useSearch()
    const navigate = useNavigate()

    const handleViewChange = (nextView: WalletView) => {
      void navigate({ to: "/carteiras", search: { visao: nextView } })
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return <WalletsPage view={search.visao} onViewChange={handleViewChange} />
  },
})

const routeTree = rootRoute.addChildren([indexRoute, carteirasRoute])
const router = createRouter({ routeTree })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
