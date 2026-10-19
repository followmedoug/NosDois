import { RiArrowLeftLine, RiBankCardLine } from "@remixicon/react"
import type { PersonalWalletDetail, WalletView } from "@/features/wallets/types"
import { formatCurrency } from "@/lib/format"
import { personTones, type PersonTone } from "@/features/wallets/components/personal-wallet-card"

interface PersonalWalletViewProps {
  detail: PersonalWalletDetail
  partnerName: string
  partnerInitial: string
  onViewChange: (view: WalletView) => void
}

export function PersonalWalletView({
  detail,
  partnerName,
  partnerInitial,
  onViewChange,
}: PersonalWalletViewProps) {
  const tone = personTones[(detail.partnerId === "lucas" ? "a" : "b") as PersonTone]

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8 dark:shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b border-transparent pb-6 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl text-headline-md font-bold ${tone.avatar}`}
            >
              {partnerInitial}
            </div>
            <div>
              <span className="text-label-sm font-semibold uppercase text-secondary dark:text-slate-400">
                Visão Individual Isolada
              </span>
              <h2 className="text-headline-md text-on-surface">Carteira Pessoal de {partnerName}</h2>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onViewChange("conjunta")}
            className="flex items-center gap-1.5 rounded-xl bg-surface-container px-3.5 py-1.5 text-label-sm text-on-surface transition-colors hover:bg-surface-container-high dark:border dark:border-slate-700 dark:bg-inset dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <RiArrowLeftLine className="size-3.5" /> Voltar para Visão Conjunta
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 dark:pt-6">
          <div className="rounded-xl border border-inset-border bg-inset p-4">
            <span className="text-label-sm text-secondary dark:text-slate-400">
              {detail.salaryAccountLabel}
            </span>
            <p className="mt-1 text-headline-sm font-bold text-on-surface dark:text-white">
              {formatCurrency(detail.salaryBalance)}
            </p>
            <span className="text-xs font-semibold text-primary dark:text-emerald-400">
              Renda líquida depositada
            </span>
          </div>

          <div className="rounded-xl border border-inset-border bg-inset p-4">
            <span className="text-label-sm text-secondary dark:text-slate-400">
              Cota Comprometida no Casal ({detail.coupleContributionPercent}%)
            </span>
            <p className={`mt-1 text-headline-sm font-bold ${tone.contributionValue}`}>
              {formatCurrency(detail.coupleContributionAmount)}
            </p>
            <span className="text-xs text-secondary dark:text-slate-400">
              Transferido para Inter Conjunto
            </span>
          </div>

          <div className="rounded-xl border border-inset-border bg-inset p-4">
            <span className="text-label-sm text-secondary dark:text-slate-400">
              Saldo de Autonomia Pessoal
            </span>
            <p className="mt-1 text-headline-sm font-bold text-on-surface dark:text-white">
              {formatCurrency(detail.autonomyBalance)}
            </p>
            <span className="text-xs text-secondary dark:text-slate-400">
              100% livre de supervisão
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="mt-6 flex items-center justify-between rounded-xl border border-inset-border bg-inset p-4 dark:border-inset-border">
          <div className="flex items-center gap-3">
            <RiBankCardLine className={`size-5 ${tone.icon}`} />
            <div>
              <p className="text-label-md font-semibold text-on-surface dark:text-white">
                {detail.cardLine}
              </p>
              <p className="text-body-sm text-secondary dark:text-slate-400">
                {detail.cardLimitInfo}
              </p>
            </div>
          </div>
          <span className="text-label-md font-bold text-on-surface dark:text-white">
            Fatura: {formatCurrency(detail.cardInvoiceAmount)}
          </span>
        </div>
      </div>
    </div>
  )
}
