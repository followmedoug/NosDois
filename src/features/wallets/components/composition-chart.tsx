import { RiPieChartLine } from "@remixicon/react"
import type { Partner, WalletsData } from "@/features/wallets/types"
import { formatCurrency } from "@/lib/format"

const DONUT_RADIUS = 14
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS

const sliceColorClass = ["stroke-split-a", "stroke-split-b"] as const
const dotColorClass = [
  "bg-split-a dark:shadow-[0_0_8px_rgba(52,211,153,0.5)]",
  "bg-split-b dark:shadow-[0_0_8px_rgba(251,191,36,0.5)]",
] as const
const valueColorClass = ["text-split-a", "text-split-b"] as const

interface CompositionChartProps {
  composition: WalletsData["composition"]
  partners: Partner[]
}

export function CompositionChart({ composition, partners }: CompositionChartProps) {
  let accumulatedOffset = 0
  const slices = composition.slices.map((slice, index) => {
    const percent = partners.find((p) => p.id === slice.partnerId)?.sharePercent ?? 0
    const length = (DONUT_CIRCUMFERENCE * percent) / 100
    const offset = accumulatedOffset
    accumulatedOffset += length
    return { slice, percent, length, offset, index }
  })

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-5 dark:shadow-xl">
      <div>
        <div className="mb-4 flex items-center justify-between dark:mb-3 dark:border-b dark:border-slate-800/70 dark:pb-3">
          <div className="flex items-center gap-2">
            <RiPieChartLine className="size-5 text-primary dark:text-emerald-400" />
            <h2 className="text-headline-sm text-on-surface">Composição Patrimonial</h2>
          </div>
          <span className="text-label-sm text-secondary dark:font-medium dark:text-slate-400">
            {composition.monthLabel}
          </span>
        </div>
        <p className="text-body-sm text-on-surface-variant dark:text-slate-300">
          Distribuição acordada e proporcional às rendas líquidas de cada um:
        </p>
      </div>

      <div className="flex flex-col items-center justify-around gap-6 py-4 sm:flex-row">
        {/* Donut chart */}
        <div className="relative h-36 w-36 shrink-0">
          <svg
            className="h-full w-full -rotate-90 dark:drop-shadow-[0_0_8px_rgba(16,185,129,0.25)]"
            viewBox="0 0 36 36"
          >
            <circle
              className="stroke-surface-container dark:stroke-slate-800"
              cx="18"
              cy="18"
              fill="none"
              r={DONUT_RADIUS}
              strokeWidth="4"
            />
            {slices.map(({ slice, length, offset, index }) => (
              <circle
                key={slice.partnerId}
                className={sliceColorClass[index % sliceColorClass.length]}
                cx="18"
                cy="18"
                fill="none"
                r={DONUT_RADIUS}
                strokeDasharray={`${length} ${DONUT_CIRCUMFERENCE}`}
                strokeDashoffset={-offset}
                strokeLinecap="round"
                strokeWidth="4"
              />
            ))}
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-label-sm uppercase tracking-wider text-secondary dark:font-semibold dark:text-slate-400">
              Total
            </span>
            <span className="text-headline-sm text-on-surface dark:font-bold">100%</span>
          </div>
        </div>

        {/* Legenda */}
        <div className="w-full space-y-3 sm:w-auto">
          {slices.map(({ slice, percent, index }) => {
            const partner = partners.find((p) => p.id === slice.partnerId)
            return (
              <div
                key={slice.partnerId}
                className="flex items-center justify-between gap-4 sm:justify-start"
              >
                <div className="flex items-center gap-2 dark:gap-2.5">
                  <span
                    className={`h-3 w-3 rounded-full ${dotColorClass[index % dotColorClass.length]}`}
                  />
                  <span className="text-label-md text-on-surface dark:text-slate-200">
                    {partner?.firstName} ({percent}%)
                  </span>
                </div>
                <span
                  className={`text-label-md font-semibold dark:font-bold ${valueColorClass[index % valueColorClass.length]}`}
                >
                  {formatCurrency(slice.amount)}
                </span>
              </div>
            )
          })}
          <div className="rounded-lg border border-inset-border bg-inset p-2 text-xs text-secondary dark:rounded-xl dark:p-2.5 dark:text-slate-300">
            <span className="font-semibold text-on-surface">{composition.noteHighlight}</span>{" "}
            {composition.note}
          </div>
        </div>
      </div>

      <div className="flex h-2 w-full overflow-hidden rounded-full bg-surface-container-high dark:bg-slate-800">
        {slices.map(({ slice, percent, index }) => (
          <div
            key={slice.partnerId}
            className={`h-full ${
              index === 0
                ? "bg-split-a dark:shadow-[0_0_6px_rgba(52,211,153,0.6)]"
                : "bg-split-b dark:shadow-[0_0_6px_rgba(251,191,36,0.6)]"
            }`}
            style={{ width: `${percent}%` }}
          />
        ))}
      </div>
    </div>
  )
}
