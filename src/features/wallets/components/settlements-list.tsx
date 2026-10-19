import {
  RiArrowLeftRightLine,
  RiFlightTakeoffLine,
  RiHeartPulseLine,
  RiRefreshLine,
  RiReceiptLine,
} from "@remixicon/react"
import type { Settlement } from "@/features/wallets/types"
import { formatCurrency } from "@/lib/format"
import { cn } from "@/lib/utils"

const iconByType: Record<Settlement["icon"], { Icon: typeof RiRefreshLine; label: string }> = {
  renew: { Icon: RiRefreshLine, label: "autorenew" },
  medical: { Icon: RiHeartPulseLine, label: "medical_services" },
  flight: { Icon: RiFlightTakeoffLine, label: "flight_takeoff" },
}

const iconContainerClass: Record<Settlement["icon"], string> = {
  renew:
    "bg-primary-fixed text-primary dark:bg-emerald-500/15 dark:border dark:border-emerald-500/30 dark:text-emerald-400",
  medical:
    "bg-tertiary-fixed text-tertiary dark:bg-amber-500/15 dark:border dark:border-amber-500/30 dark:text-amber-400",
  flight:
    "bg-secondary-container text-on-secondary-container dark:bg-sky-500/15 dark:border dark:border-sky-500/30 dark:text-sky-400",
}

const statusPillClass: Record<Settlement["statusTone"], string> = {
  success:
    "bg-primary-fixed text-primary dark:bg-emerald-500/15 dark:border dark:border-emerald-500/30 dark:text-emerald-300 dark:font-semibold",
  neutral:
    "bg-surface-container-highest text-secondary dark:bg-slate-800 dark:border dark:border-slate-700 dark:text-slate-300 dark:font-semibold",
}

function SettlementItem({ item }: { item: Settlement }) {
  const { Icon } = iconByType[item.icon]
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl border border-inset-border bg-inset p-4 transition-colors md:flex-row md:items-center dark:hover:border-slate-600">
      <div className="flex items-start gap-3.5 sm:items-center">
        <div
          className={cn(
            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:mt-0",
            iconContainerClass[item.icon]
          )}
        >
          <Icon className="size-4.5" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-label-md font-semibold text-on-surface">{item.title}</p>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-label-sm",
                statusPillClass[item.statusTone]
              )}
            >
              {item.status}
            </span>
            <span className="text-xs text-secondary dark:text-slate-400">{item.dateLabel}</span>
          </div>
          <p className="mt-0.5 text-body-sm text-on-surface-variant dark:text-slate-300">
            {item.description}
          </p>
        </div>
      </div>
      <div className="shrink-0 pl-12 text-left md:pl-0 md:text-right">
        <p
          className={cn(
            "text-label-md font-bold",
            item.amountAccent ? "text-primary dark:text-emerald-400" : "text-on-surface dark:text-white"
          )}
        >
          {formatCurrency(item.amount)}
        </p>
        <span className="text-label-sm text-secondary dark:text-slate-400">
          {item.directionLabel}
        </span>
      </div>
    </div>
  )
}

export function SettlementsList({ items }: { items: Settlement[] }) {
  return (
    <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8 dark:shadow-xl">
      <div className="flex flex-col justify-between gap-4 pb-6 sm:flex-row sm:items-center dark:border-b dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container dark:bg-sky-500/15 dark:border dark:border-sky-500/30 dark:text-sky-400">
            <RiArrowLeftRightLine className="size-5" />
          </div>
          <div>
            <h2 className="text-headline-sm text-on-surface">Histórico de Reembolsos &amp; Acertos</h2>
            <p className="text-body-sm text-secondary dark:text-slate-400">
              Equilíbrio contínuo para manter a proporção justa de 55/45 sem desgastes
            </p>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-xl border border-card-border bg-inset px-4 py-2 text-label-md text-on-surface transition-all dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <RiReceiptLine className="size-4 text-secondary dark:text-slate-400" />
          Simular Fechamento
        </button>
      </div>

      <div className="space-y-3 pt-6">
        {items.map((item) => (
          <SettlementItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
