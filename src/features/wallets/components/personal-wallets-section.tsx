import { RiLockLine } from "@remixicon/react"
import { PersonalWalletCard } from "@/features/wallets/components/personal-wallet-card"
import type { PersonTone } from "@/features/wallets/components/personal-wallet-card"
import type { Partner, PersonalWallet, WalletView } from "@/features/wallets/types"

interface PersonalWalletsSectionProps {
  wallets: PersonalWallet[]
  partners: Partner[]
  onViewChange: (view: WalletView) => void
}

export function PersonalWalletsSection({
  wallets,
  partners,
  onViewChange,
}: PersonalWalletsSectionProps) {
  return (
    <div className="space-y-4 pt-4">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-headline-sm text-on-surface">
            Autonomia &amp; Individualidade (Lado a Lado)
          </h2>
          <p className="text-body-sm text-secondary dark:text-slate-400">
            Dinheiro pessoal para cada um gastar livremente, sem necessidade de prestação de contas.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-inset-border bg-inset px-3.5 py-1.5 text-xs text-secondary dark:text-slate-300">
          <RiLockLine className="size-3.5 text-primary dark:text-emerald-400" />
          Privacidade e transparência acordadas
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {wallets.map((wallet) => {
          const partner = partners.find((p) => p.id === wallet.partnerId)
          if (!partner) return null
          return (
            <PersonalWalletCard
              key={wallet.partnerId}
              wallet={wallet}
              partnerName={partner.firstName}
              partnerInitial={partner.initial}
              tone={(partner.id === "lucas" ? "a" : "b") as PersonTone}
              onOpenDetail={() => onViewChange(partner.id)}
            />
          )
        })}
      </div>
    </div>
  )
}
