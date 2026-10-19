import { RiGroupLine, RiScales3Line } from "@remixicon/react"
import type { WalletView } from "@/features/wallets/types"

interface WalletTabsProps {
  view: WalletView
  onViewChange: (view: WalletView) => void
  splitSummary: string
}

const tabBaseClass =
  "flex items-center gap-2 rounded-lg px-4 py-2 text-label-md transition-all"
const tabActiveClass =
  "bg-primary-container font-semibold text-on-primary shadow-sm dark:font-bold dark:shadow-md dark:shadow-emerald-500/20"
const tabInactiveClass =
  "font-medium text-secondary hover:text-on-surface dark:text-slate-400 dark:hover:bg-slate-800/40 dark:hover:text-white"

export function WalletTabs({ view, onViewChange, splitSummary }: WalletTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface-container-low p-1.5 shadow-sm dark:shadow-md">
      <div className="flex items-center gap-1.5 rounded-xl border border-card-border bg-card p-1 shadow-sm">
        <button
          type="button"
          onClick={() => onViewChange("conjunta")}
          className={`${tabBaseClass} ${view === "conjunta" ? tabActiveClass : tabInactiveClass}`}
        >
          <RiGroupLine className="size-4" />
          <span>Carteira Conjunta</span>
          {view === "conjunta" ? (
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs dark:bg-slate-950/20 dark:font-semibold">
              Ativa
            </span>
          ) : (
            <span className="rounded-full bg-surface-container px-2 py-0.5 text-xs dark:bg-slate-800/60">
              Ativa
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => onViewChange("lucas")}
          className={`${tabBaseClass} ${view === "lucas" ? tabActiveClass : tabInactiveClass}`}
        >
          <span className="h-2 w-2 rounded-full bg-tertiary-container dark:bg-amber-400" />
          <span>Carteira Lucas</span>
        </button>
        <button
          type="button"
          onClick={() => onViewChange("beatriz")}
          className={`${tabBaseClass} ${view === "beatriz" ? tabActiveClass : tabInactiveClass}`}
        >
          <span className="h-2 w-2 rounded-full bg-error dark:bg-rose-400" />
          <span>Carteira Beatriz</span>
        </button>
      </div>

      <div className="flex items-center gap-3 px-3 py-1">
        <span className="text-label-sm text-secondary dark:text-slate-400">Acordo atual:</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary-fixed px-2.5 py-1 text-label-sm font-semibold text-primary dark:border dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300">
          <RiScales3Line className="size-3" /> {splitSummary}
        </span>
      </div>
    </div>
  )
}
