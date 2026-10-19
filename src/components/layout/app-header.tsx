import { useNavigate, useSearch } from "@tanstack/react-router"
import { RiAddLine, RiHeart2Line, RiNotification3Line } from "@remixicon/react"
import type { WalletView } from "@/features/wallets/types"
import { parseWalletView } from "@/features/wallets/views"

const contextOptions: { id: WalletView; label: string; icon?: typeof RiHeart2Line }[] = [
  { id: "conjunta", label: "Visão Conjunta (NósDois)", icon: RiHeart2Line },
  { id: "lucas", label: "Lucas" },
  { id: "beatriz", label: "Beatriz" },
]

export function AppHeader() {
  const navigate = useNavigate()
  const search = useSearch({ strict: false }) as { visao?: unknown }
  const view = parseWalletView(search.visao)

  const setView = (visao: WalletView) => {
    void navigate({ to: "/carteiras", search: { visao } })
  }

  return (
    <header className="fixed top-0 right-0 left-72 z-40 flex h-20 items-center justify-between bg-surface/80 px-8 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-b dark:border-line dark:shadow-none">
      {/* Seletor de contexto */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 rounded-full bg-surface-container p-1 shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:border dark:border-card-border dark:shadow-inner">
          {contextOptions.map((option) => {
            const isActive = view === option.id
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setView(option.id)}
                className={
                  isActive
                    ? "flex items-center gap-1.5 rounded-full bg-primary-container px-3.5 py-1.5 text-label-sm font-semibold text-on-primary transition-all dark:font-bold dark:shadow-md dark:shadow-emerald-500/20"
                    : "rounded-full px-3.5 py-1.5 text-label-sm font-medium text-secondary transition-all hover:text-on-surface dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-white"
                }
              >
                {option.icon ? <option.icon className="size-3.5" /> : null}
                {option.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Ações + perfil */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-primary-container px-4 py-2 text-label-md font-semibold text-on-primary shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all hover:bg-primary dark:font-bold dark:shadow-lg dark:shadow-emerald-500/25 dark:hover:bg-emerald-400"
        >
          <RiAddLine className="size-4.5" />
          <span>Nova Despesa / Receita</span>
        </button>

        <div className="h-6 w-px bg-outline-variant dark:bg-slate-800" />

        <button
          type="button"
          className="relative rounded-xl p-2 text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface dark:border dark:border-card-border dark:bg-surface-container dark:p-2.5 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label="Notificações"
        >
          <RiNotification3Line className="size-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-error dark:top-2 dark:right-2 dark:bg-rose-500 dark:ring-2 dark:ring-surface-container" />
        </button>

        <div className="flex items-center gap-3 pl-2">
          <div className="flex flex-col text-right">
            <span className="text-label-md leading-tight font-semibold text-on-surface">
              Lucas &amp; Beatriz
            </span>
            <span className="text-label-sm font-semibold text-primary-container dark:text-primary">
              Premium Ativo
            </span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-container to-primary text-on-primary ring-2 ring-primary-fixed dark:shadow-md dark:ring-emerald-500/60">
            <RiHeart2Line className="size-4.5" />
          </div>
        </div>
      </div>
    </header>
  )
}
