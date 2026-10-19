import {
  RiArrowRightLine,
  RiCalendarLine,
  RiSparkling2Line,
  RiVerifiedBadgeLine,
} from "@remixicon/react"
import { CreditCardVisual } from "@/features/wallets/components/credit-card-visual"
import type { CreditCard } from "@/features/wallets/types"
import { formatCurrency } from "@/lib/format"

const limitBarClass: Record<CreditCard["visual"], string> = {
  emerald: "bg-primary-container dark:bg-emerald-500 dark:shadow-[0_0_8px_rgba(16,185,129,0.5)]",
  violet: "bg-secondary dark:bg-purple-500 dark:shadow-[0_0_8px_rgba(168,85,247,0.5)]",
}

function JointCreditCardItem({ card }: { card: CreditCard }) {
  const availableLimit = card.creditLimit - card.usedLimit
  const usedPercent = (card.usedLimit / card.creditLimit) * 100

  return (
    <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-card-border bg-card p-6 shadow-sm dark:shadow-xl">
      <CreditCardVisual card={card} />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-label-sm text-secondary dark:text-slate-400">
              Fatura Atual ({card.invoiceNote})
            </span>
            <p className="text-headline-sm font-semibold text-on-surface dark:font-bold">
              {formatCurrency(card.currentInvoice)}
            </p>
          </div>
          <div className="text-right">
            <span className="text-label-sm text-secondary dark:text-slate-400">
              Melhor Dia de Compra
            </span>
            <p className="flex items-center justify-end gap-1 text-label-md font-bold text-primary-container dark:text-emerald-400">
              <RiCalendarLine className="size-3.5" /> Dia {card.bestPurchaseDay}
            </p>
          </div>
        </div>

        {/* Barra de limite */}
        <div>
          <div className="mb-1 flex justify-between text-xs dark:mb-1.5">
            <span className="text-secondary dark:text-slate-400">
              Limite Utilizado:{" "}
              <strong className="text-on-surface dark:text-slate-100">
                {formatCurrency(card.usedLimit)}
              </strong>
            </span>
            <span className="text-secondary dark:text-slate-400">
              Disponível:{" "}
              <strong className="text-on-surface dark:text-emerald-400">
                {formatCurrency(availableLimit)}
              </strong>
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container dark:bg-slate-800">
            <div
              className={`h-full rounded-full ${limitBarClass[card.visual]}`}
              style={{ width: `${usedPercent}%` }}
            />
          </div>
          <span className="mt-1 block text-right text-label-sm text-secondary dark:text-slate-400">
            Limite total: {formatCurrency(card.creditLimit)}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-inset-border bg-inset p-3 text-xs">
          <span className="flex items-center gap-1.5 text-on-surface-variant dark:text-slate-300">
            {card.footerIcon === "verified" ? (
              <RiVerifiedBadgeLine className="size-3.5 text-primary dark:text-emerald-400" />
            ) : (
              <RiSparkling2Line className="size-3.5 text-tertiary-container dark:text-amber-400" />
            )}
            {card.footerIcon === "cashback" ? (
              <>
                Cashback acumulado: <strong>{formatCurrency(38.8)}</strong>
              </>
            ) : (
              card.footerInfo
            )}
          </span>
          <button
            type="button"
            className="font-semibold text-primary transition-colors hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Ver Lançamentos
          </button>
        </div>
      </div>
    </div>
  )
}

export function JointCreditCards({ cards }: { cards: CreditCard[] }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-headline-sm text-on-surface">Cartões Conjuntos</h2>
          <p className="text-body-sm text-secondary dark:text-slate-400">
            Faturas compartilhadas debitadas da Conta Inter Conjunta
          </p>
        </div>
        <span className="flex cursor-pointer items-center gap-1 text-label-md font-semibold text-primary-container transition-colors hover:underline dark:text-emerald-400 dark:hover:text-emerald-300 dark:hover:no-underline">
          Gerenciar adicionais <RiArrowRightLine className="size-3.5" />
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {cards.map((card) => (
          <JointCreditCardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
