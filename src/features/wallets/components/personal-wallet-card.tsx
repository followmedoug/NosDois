import {
  RiArrowRightLine,
  RiBookOpenLine,
  RiCpuLine,
  RiFlowerLine,
  RiGamepadLine,
  RiGraduationCapLine,
  RiRunLine,
  RiWifiLine,
} from "@remixicon/react"
import type { PersonalWallet, PersonalExpense } from "@/features/wallets/types"
import { formatCurrency } from "@/lib/format"

export type PersonTone = "a" | "b"

interface ToneConfig {
  avatar: string
  bar: string
  barTrack: string
  miniCard: string
  miniLabel: string
  miniInvoice: string
  miniInvoiceStrong: string
  miniIcon: string
  miniGlow: string
  contributionValue: string
  icon: string
}

export const personTones: Record<PersonTone, ToneConfig> = {
  a: {
    avatar:
      "bg-secondary-container text-on-secondary-container dark:border dark:border-sky-500/30 dark:bg-sky-500/15 dark:text-sky-400 dark:font-bold",
    bar: "bg-secondary dark:bg-sky-400 dark:shadow-[0_0_8px_rgba(56,189,248,0.5)]",
    barTrack: "bg-surface-container-highest dark:bg-slate-800",
    miniCard:
      "bg-gradient-to-r from-secondary to-inverse-surface dark:from-[#182338] dark:via-[#101826] dark:to-[#0a101d] dark:border-sky-500/30",
    miniLabel: "opacity-80 dark:text-sky-300 dark:opacity-100 dark:font-semibold",
    miniInvoice: "text-secondary-fixed-dim dark:text-slate-300",
    miniInvoiceStrong: "",
    miniIcon: "opacity-60 dark:text-sky-400/50 dark:opacity-100",
    miniGlow: "dark:bg-sky-500/15",
    contributionValue: "text-primary dark:text-emerald-400",
    icon: "text-sky-400",
  },
  b: {
    avatar:
      "bg-error-container text-on-error-container dark:border dark:border-rose-500/30 dark:bg-rose-500/15 dark:text-rose-400 dark:font-bold",
    bar: "bg-error dark:bg-rose-500 dark:shadow-[0_0_8px_rgba(244,63,94,0.5)]",
    barTrack: "bg-surface-container-highest dark:bg-slate-800",
    miniCard:
      "bg-gradient-to-r from-on-error-container via-error to-secondary dark:from-[#381622] dark:via-[#240e16] dark:to-[#120509] dark:border-rose-500/30",
    miniLabel: "opacity-80 dark:text-rose-300 dark:opacity-100 dark:font-semibold",
    miniInvoice: "text-surface-container-high dark:text-slate-300",
    miniInvoiceStrong: "",
    miniIcon: "opacity-60 dark:text-rose-400/50 dark:opacity-100",
    miniGlow: "dark:bg-rose-500/15",
    contributionValue: "text-tertiary dark:text-emerald-400",
    icon: "text-rose-400",
  },
}

const expenseIconClass: Record<PersonalExpense["icon"], string> = {
  fitness: "text-secondary dark:text-slate-400",
  games: "text-secondary dark:text-slate-400",
  tech: "text-secondary dark:text-slate-400",
  education: "text-secondary dark:text-slate-400",
  beauty: "text-secondary dark:text-slate-400",
  books: "text-secondary dark:text-slate-400",
}

const expenseIconComponent: Record<
  PersonalExpense["icon"],
  { Icon: typeof RiRunLine }
> = {
  fitness: { Icon: RiRunLine },
  games: { Icon: RiGamepadLine },
  tech: { Icon: RiCpuLine },
  education: { Icon: RiGraduationCapLine },
  beauty: { Icon: RiFlowerLine },
  books: { Icon: RiBookOpenLine },
}

interface PersonalWalletCardProps {
  wallet: PersonalWallet
  partnerName: string
  partnerInitial: string
  tone: PersonTone
  onOpenDetail: () => void
}

export function PersonalWalletCard({
  wallet,
  partnerName,
  partnerInitial,
  tone,
  onOpenDetail,
}: PersonalWalletCardProps) {
  const t = personTones[tone]
  const spentPercent = (wallet.spentAmount / wallet.spendingCap) * 100

  return (
    <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-card-border bg-card p-6 shadow-sm dark:shadow-xl">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-transparent pb-3 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-headline-sm ${t.avatar}`}
            >
              {partnerInitial}
            </div>
            <div>
              <span className="text-label-sm font-semibold uppercase text-secondary dark:text-slate-400">
                Carteira Pessoal
              </span>
              <p className="text-headline-sm font-semibold text-on-surface dark:font-bold">
                {partnerName}
              </p>
            </div>
          </div>
          <span className="rounded-full bg-surface-container px-2.5 py-1 text-label-sm text-secondary dark:border dark:border-slate-700 dark:bg-[#0F172A] dark:text-slate-300">
            Sem satisfação
          </span>
        </div>

        {/* Saldo Livre */}
        <div className="rounded-xl border border-inset-border bg-inset p-4 dark:mt-3">
          <span className="text-label-sm text-secondary dark:text-slate-400">
            Saldo Livre Próprio (Mês)
          </span>
          <p className="mt-0.5 text-currency-display font-bold text-on-surface dark:text-white">
            {formatCurrency(wallet.freeBalance)}
          </p>
          <div className={`mt-2 h-1.5 w-full overflow-hidden rounded-full ${t.barTrack}`}>
            <div className={`h-full rounded-full ${t.bar}`} style={{ width: `${spentPercent}%` }} />
          </div>
          <div className="mt-1 flex justify-between text-xs text-secondary dark:text-slate-400">
            <span>{formatCurrency(wallet.spentAmount)} gastos</span>
            <span>Teto pessoal: {formatCurrency(wallet.spendingCap)}</span>
          </div>
        </div>

        {/* Mini Cartão */}
        <div className="relative flex items-center justify-between overflow-hidden rounded-xl p-4 shadow-sm dark:border dark:shadow-lg dark:text-white">
          <div className={`absolute -right-6 -bottom-6 h-28 w-28 rounded-full blur-2xl ${t.miniGlow} pointer-events-none`} />
          <div className="relative z-10">
            <p className={`text-label-sm uppercase tracking-wider ${t.miniLabel}`}>
              {wallet.card.label}
            </p>
            <p className="mt-0.5 text-label-md font-bold text-on-primary dark:text-white">
              {wallet.card.brandLine}
            </p>
            <p className={`mt-1 text-body-sm ${t.miniInvoice}`}>
              Fatura atual: <strong className={t.miniInvoiceStrong || "font-semibold"}>
                {formatCurrency(wallet.card.invoiceAmount)}
              </strong>
            </p>
          </div>
          <RiWifiLine className={`relative z-10 size-8 rotate-90 ${t.miniIcon}`} />
        </div>

        {/* Gastos Livres */}
        <div>
          <p className="mb-2 text-label-sm font-semibold uppercase text-secondary dark:mb-2.5 dark:text-slate-400">
            Gastos Livres Recentes{" "}
            <span className="font-normal">(Sem cobrança de satisfação)</span>
          </p>
          <div className="space-y-2">
            {wallet.recentExpenses.map((expense) => {
              const { Icon } = expenseIconComponent[expense.icon]
              return (
                <div
                  key={expense.id}
                  className="flex items-center justify-between rounded-lg border border-inset-border bg-inset p-2.5 text-xs transition-colors dark:hover:border-slate-600"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`size-4 ${expenseIconClass[expense.icon]}`} />
                    <div>
                      <p className="text-label-md font-semibold text-on-surface dark:text-white">
                        {expense.title}
                      </p>
                      <p className="text-secondary dark:text-slate-400">{expense.category}</p>
                    </div>
                  </div>
                  <span className="text-label-md font-bold text-on-surface dark:text-white">
                    {formatCurrency(expense.amount)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={onOpenDetail}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-surface-container-high px-4 py-2.5 text-label-md font-semibold text-on-surface transition-colors hover:bg-surface-container-highest dark:border dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        >
          <span>Abrir Visão Completa de {partnerName}</span>
          <RiArrowRightLine className="size-3.5" />
        </button>
      </div>
    </div>
  )
}
