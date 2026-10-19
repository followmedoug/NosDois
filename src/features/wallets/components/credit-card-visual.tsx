import { RiWifiLine } from "@remixicon/react"
import type { CreditCard } from "@/features/wallets/types"

interface VisualTheme {
  frame: string
  brandIcon: string
  brandLabel: string
  logoText: string
  chip: string
  chipLine: string
  purpose: string
  number: string
  holder: string
  expLabel: string
  expValue: string
}

/**
 * Temas visuais dos cartões físicos. Light segue
 * specs/MVP1/carteira_conjunta_pessoais; overrides `dark:` seguem
 * specs/MVP1/carteiras_cart_es_dark_mode.
 */
const visualThemes: Record<CreditCard["visual"], VisualTheme> = {
  emerald: {
    frame:
      "bg-gradient-to-tr from-primary to-on-primary-fixed-variant text-on-primary dark:border dark:border-emerald-500/30 dark:bg-gradient-to-br dark:from-[#0c1f17] dark:via-[#091510] dark:to-[#040806] dark:text-white",
    brandIcon: "text-primary-fixed dark:text-emerald-400",
    brandLabel: "text-primary-fixed dark:text-emerald-300 dark:font-bold",
    logoText: "VISA",
    chip:
      "bg-secondary-fixed-dim/40 dark:border dark:border-amber-300/40 dark:bg-gradient-to-br dark:from-amber-200 dark:to-amber-500/80",
    chipLine: "bg-secondary-fixed/50 dark:bg-amber-900/40",
    purpose: "text-primary-fixed/80 dark:font-medium dark:text-emerald-200/80",
    number: "text-secondary-fixed-dim dark:font-mono dark:text-slate-300",
    holder: "text-surface-container-lowest dark:text-white",
    expLabel: "text-secondary-fixed-dim dark:text-slate-400",
    expValue: "text-surface-container-lowest dark:font-mono dark:text-white",
  },
  violet: {
    frame:
      "bg-gradient-to-tr from-inverse-surface via-secondary to-on-surface text-on-primary dark:border dark:border-purple-500/30 dark:bg-gradient-to-br dark:from-[#1b102b] dark:via-[#11091d] dark:to-[#07030c] dark:text-white",
    brandIcon: "text-secondary-fixed dark:text-purple-300",
    brandLabel: "text-secondary-fixed dark:font-bold dark:text-purple-200",
    logoText: "",
    chip:
      "bg-secondary-fixed-dim/40 dark:border dark:border-slate-400/40 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-500/80",
    chipLine: "bg-secondary-fixed/50 dark:bg-slate-900/40",
    purpose: "text-secondary-fixed dark:font-medium dark:text-purple-200/80",
    number: "text-secondary-fixed-dim dark:font-mono dark:text-slate-300",
    holder: "text-surface-container-lowest dark:text-white",
    expLabel: "text-secondary-fixed-dim dark:text-slate-400",
    expValue: "text-surface-container-lowest dark:font-mono dark:text-white",
  },
}

function AmbientGlow({ visual }: { visual: CreditCard["visual"] }) {
  if (visual === "emerald") {
    return (
      <>
        <div className="pointer-events-none absolute -right-8 -bottom-8 h-44 w-44 rounded-full bg-surface-tint/20 blur-2xl dark:hidden" />
        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary-fixed/10 blur-xl dark:hidden" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 hidden h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl dark:block" />
        <div className="pointer-events-none absolute top-0 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent dark:block" />
      </>
    )
  }
  return (
    <>
      <div className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-tertiary-fixed-dim/20 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute -right-8 -bottom-8 hidden h-44 w-44 rounded-full bg-purple-600/20 blur-3xl dark:block" />
      <div className="pointer-events-none absolute top-0 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent dark:block" />
    </>
  )
}

export function CreditCardVisual({ card }: { card: CreditCard }) {
  const theme = visualThemes[card.visual]

  return (
    <div
      className={`relative flex h-52 w-full flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-xl dark:shadow-2xl ${theme.frame}`}
    >
      <AmbientGlow visual={card.visual} />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RiWifiLine className={`size-6 rotate-90 ${theme.brandIcon}`} />
          <span
            className={`text-label-sm uppercase tracking-widest font-semibold ${theme.brandLabel}`}
          >
            {card.label}
          </span>
        </div>
        {card.brand === "visa" ? (
          <span className="text-headline-sm font-bold tracking-tighter text-surface-container-lowest italic dark:font-extrabold dark:text-white dark:drop-shadow">
            {theme.logoText}
          </span>
        ) : (
          <div className="flex -space-x-2">
            <div className="h-6 w-6 rounded-full bg-error/90 dark:bg-rose-500 dark:shadow-md" />
            <div className="h-6 w-6 rounded-full bg-surface-tint/90 mix-blend-screen dark:bg-amber-400/90 dark:shadow-md" />
          </div>
        )}
      </div>

      <div className="relative z-10 flex items-center gap-3">
        <div
          className={`flex h-7 w-10 flex-col justify-around rounded-md p-1 dark:shadow-sm ${theme.chip}`}
        >
          <div className={`h-0.5 w-full rounded ${theme.chipLine}`} />
          <div className={`h-0.5 w-full rounded ${theme.chipLine}`} />
        </div>
        <span className={`text-label-sm ${theme.purpose}`}>{card.purpose}</span>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div>
          <p className={`text-label-sm tracking-widest ${theme.number}`}>
            •••• •••• •••• {card.lastFourDigits}
          </p>
          <p className={`text-label-md font-semibold tracking-wide ${theme.holder}`}>
            {card.holderName}
          </p>
        </div>
        <div className="text-right">
          <p className={`text-label-sm ${theme.expLabel}`}>EXP</p>
          <p className={`text-label-md font-semibold ${theme.expValue}`}>{card.expiresAt}</p>
        </div>
      </div>
    </div>
  )
}
