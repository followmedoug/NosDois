import { RiBankCardLine, RiEqualizerLine } from "@remixicon/react"

export function WalletsHeader() {
  return (
    <div className="flex flex-col justify-between gap-4 pt-2 md:flex-row md:items-end">
      <div>
        <div className="mb-1.5 flex items-center gap-2">
          <span className="rounded-full bg-primary-fixed px-2.5 py-0.5 text-label-sm uppercase tracking-wider text-on-primary-fixed dark:border dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:font-semibold dark:text-emerald-300">
            Gestão Patrimonial
          </span>
          <span className="text-label-sm text-secondary dark:text-slate-400">
            • Parceria &amp; Autonomia
          </span>
        </div>
        <h1 className="text-headline-lg tracking-tight text-on-surface">Carteiras &amp; Cartões</h1>
        <p className="mt-1 max-w-xl text-body-md text-on-surface-variant dark:text-slate-300">
          Equilíbrio entre a vida a dois e a independência pessoal. Acompanhe contas
          compartilhadas, faturas e seus orçamentos livres individuais.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border border-card-border bg-card px-4 py-2.5 text-label-md text-on-surface shadow-sm transition-all hover:bg-surface-container-high dark:text-slate-200 dark:hover:text-white"
        >
          <RiEqualizerLine className="size-4 text-secondary dark:text-slate-400" />
          Regras de Divisão
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-primary-container px-4 py-2.5 text-label-md text-on-primary shadow-md transition-all hover:bg-primary dark:font-bold dark:shadow-lg dark:shadow-emerald-500/25 dark:hover:bg-emerald-400"
        >
          <RiBankCardLine className="size-4" />
          Adicionar Cartão / Conta
        </button>
      </div>
    </div>
  )
}
