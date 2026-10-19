import { Link } from "@tanstack/react-router"
import {
  RiDashboardLine,
  RiFlagLine,
  RiGroupLine,
  RiHeart2Line,
  RiPieChartLine,
  RiQuestionLine,
  RiReceiptLine,
  RiSettings3Line,
  RiWallet3Line,
} from "@remixicon/react"

interface NavItem {
  label: string
  icon: typeof RiDashboardLine
  /** Rota do item; itens sem rota são visuais (fora do escopo do MVP1). */
  to?: string
}

const navItems: NavItem[] = [
  { label: "Visão Geral", icon: RiDashboardLine },
  { label: "Despesas & Receitas", icon: RiReceiptLine },
  { label: "Carteiras & Cartões", icon: RiWallet3Line, to: "/carteiras" },
  { label: "Metas & Sonhos", icon: RiFlagLine },
  { label: "Planejamento & Orçamento", icon: RiPieChartLine },
]

const navItemBaseClass =
  "flex items-center gap-3.5 rounded-xl px-3.5 py-2.5 transition-all"
const navItemActiveClass =
  "bg-primary-container font-semibold text-on-primary shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:shadow-lg dark:shadow-emerald-500/20"
const navItemInactiveClass =
  "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface dark:text-slate-400 dark:hover:bg-slate-800/40 dark:hover:text-white"

export function AppSidebar() {
  return (
    <aside className="fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between bg-sidebar shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:border-r dark:border-line dark:shadow-2xl">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center gap-3 px-6 dark:border-b dark:border-line">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-container text-on-primary">
            <RiHeart2Line className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-headline-sm tracking-tight text-primary dark:font-bold">
              NósDois
            </span>
            <span className="text-label-sm font-medium text-on-surface-variant dark:text-slate-400">
              Finanças Compartilhadas
            </span>
          </div>
        </div>

        {/* Card do casal */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-3 rounded-xl border border-card-border bg-card p-3 shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:shadow-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-fixed text-primary dark:border dark:border-emerald-500/30 dark:bg-emerald-500/15">
              <RiGroupLine className="size-4.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-label-md font-semibold text-on-surface">
                Lucas &amp; Beatriz
              </span>
              <span className="flex items-center gap-1 text-label-sm font-semibold text-primary-container dark:text-primary">
                <span className="hidden h-1.5 w-1.5 rounded-full bg-primary dark:inline-block dark:animate-pulse" />
                Plano Duo Premium
              </span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-6 pt-4 pb-2">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary dark:text-slate-400">
            Menu Principal
          </span>
        </div>
        <nav className="flex flex-col space-y-1 px-4">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                aria-current="page"
                className={`${navItemBaseClass} ${navItemActiveClass}`}
              >
                <item.icon className="size-5" />
                <span className="text-label-md">{item.label}</span>
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                className={`${navItemBaseClass} ${navItemInactiveClass}`}
              >
                <item.icon className="size-5" />
                <span className="text-label-md">{item.label}</span>
              </button>
            )
          )}
        </nav>
      </div>

      {/* Rodapé da sidebar */}
      <div className="flex flex-col gap-2 p-4 dark:border-t dark:border-line">
        <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container p-3 dark:border dark:border-line dark:gap-2 dark:p-3.5">
          <div className="flex items-center justify-between">
            <span className="text-label-sm font-medium text-secondary dark:text-slate-400">
              Fechamento Mensal
            </span>
            <span className="text-label-sm font-semibold text-primary dark:font-bold">78%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-outline-variant dark:bg-slate-800">
            <div className="h-full w-[78%] rounded-full bg-primary-container dark:bg-gradient-to-r dark:from-emerald-500 dark:to-teal-400" />
          </div>
          <span className="text-label-sm text-on-surface-variant dark:text-slate-400">
            Orçamento sob controle
          </span>
        </div>
        <div className="flex items-center justify-between px-2 pt-2 text-on-surface-variant dark:text-slate-400">
          <button
            type="button"
            className="flex items-center gap-2 transition-colors hover:text-on-surface dark:hover:text-slate-200"
          >
            <RiQuestionLine className="size-4" />
            <span className="text-label-sm">Suporte do Casal</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 transition-colors hover:text-on-surface dark:hover:text-slate-200"
          >
            <RiSettings3Line className="size-4" />
            <span className="text-label-sm">Ajustes</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
