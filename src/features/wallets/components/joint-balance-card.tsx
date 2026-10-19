import { RiBankLine } from "@remixicon/react"
import type { JointAccount, SubAccount } from "@/features/wallets/types"
import { formatCurrency } from "@/lib/format"
import { cn } from "@/lib/utils"

const brandToneClass: Record<NonNullable<SubAccount["brandTone"]>, string> = {
  default: "bg-surface-container-highest text-on-surface",
  orange:
    "bg-surface-container-highest text-on-surface dark:border dark:border-orange-500/30 dark:bg-orange-500/15 dark:text-orange-400",
  purple:
    "bg-surface-container-highest text-on-surface dark:border dark:border-purple-500/30 dark:bg-purple-500/15 dark:text-purple-400",
}

function SubAccountItem({ subAccount }: { subAccount: SubAccount }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-inset-border bg-inset p-3.5 transition-colors dark:hover:border-slate-600/70">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold dark:h-9 dark:w-9",
            brandToneClass[subAccount.brandTone ?? "default"]
          )}
        >
          {subAccount.initials}
        </div>
        <div>
          <p className="text-label-md font-semibold text-on-surface">{subAccount.name}</p>
          <p className="text-body-sm text-secondary dark:text-slate-400">
            {subAccount.description}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-label-md font-semibold text-on-surface">
          {formatCurrency(subAccount.balance)}
        </p>
        <p
          className={cn(
            "text-label-sm",
            subAccount.noteTone === "accent"
              ? "font-medium text-on-primary-fixed-variant dark:text-emerald-400"
              : "text-secondary dark:text-slate-400"
          )}
        >
          {subAccount.note}
        </p>
      </div>
    </div>
  )
}

export function JointBalanceCard({ jointAccount }: { jointAccount: JointAccount }) {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-7 dark:shadow-xl dark:backdrop-blur-sm">
      <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary-fixed/25 blur-3xl" />

      <div>
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-primary dark:border dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-400">
              <RiBankLine className="size-5" />
            </div>
            <div>
              <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary dark:text-slate-400">
                Patrimônio Compartilhado
              </span>
              <p className="text-headline-sm text-on-surface">Contas Conjuntas do Casal</p>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-primary-fixed px-3 py-1 text-label-sm font-semibold text-primary dark:gap-1.5 dark:border dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-primary dark:h-2 dark:w-2 dark:animate-pulse dark:bg-emerald-400" />
            {jointAccount.status}
          </span>
        </div>

        <div className="my-4 dark:my-5">
          <span className="text-label-md text-secondary dark:text-slate-400">
            Saldo Total Disponível
          </span>
          <div className="mt-1 flex items-baseline gap-2 dark:mt-1.5 dark:gap-3">
            <span className="text-currency-display tracking-tight text-primary dark:text-white">
              {formatCurrency(jointAccount.totalBalance)}
            </span>
            <span className="rounded-md bg-primary-fixed px-2 py-0.5 text-label-sm font-semibold text-on-primary-fixed-variant dark:border dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:px-2.5 dark:py-1 dark:text-emerald-300">
              +{jointAccount.monthlyChangePercent}% este mês
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 dark:gap-3.5">
        {jointAccount.subAccounts.map((subAccount) => (
          <SubAccountItem key={subAccount.id} subAccount={subAccount} />
        ))}
      </div>
    </div>
  )
}
