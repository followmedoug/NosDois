import { JointBalanceCard } from "@/features/wallets/components/joint-balance-card"
import { CompositionChart } from "@/features/wallets/components/composition-chart"
import { JointCreditCards } from "@/features/wallets/components/joint-credit-cards"
import { SettlementsList } from "@/features/wallets/components/settlements-list"
import { PersonalWalletsSection } from "@/features/wallets/components/personal-wallets-section"
import type { WalletsData, WalletView } from "@/features/wallets/types"

interface JointWalletViewProps {
  data: WalletsData
  onViewChange: (view: WalletView) => void
}

export function JointWalletView({ data, onViewChange }: JointWalletViewProps) {
  return (
    <div className="space-y-8">
      {/* Top Row: Balance + Composition */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <JointBalanceCard jointAccount={data.jointAccount} />
        <CompositionChart
          composition={data.composition}
          partners={data.partners}
        />
      </div>

      {/* Credit Cards */}
      <JointCreditCards cards={data.jointCards} />

      {/* Settlements */}
      <SettlementsList items={data.settlements} />

      {/* Personal Wallets */}
      <PersonalWalletsSection
        wallets={data.personalWallets}
        partners={data.partners}
        onViewChange={onViewChange}
      />
    </div>
  )
}
