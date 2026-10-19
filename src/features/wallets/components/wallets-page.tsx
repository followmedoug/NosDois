import { WalletsHeader } from "@/features/wallets/components/wallets-header"
import { WalletTabs } from "@/features/wallets/components/wallet-tabs"
import { JointWalletView } from "@/features/wallets/components/joint-wallet-view"
import { PersonalWalletView } from "@/features/wallets/components/personal-wallet-view"
import { walletsMock } from "@/features/wallets/data/wallets.mock"
import type { WalletView } from "@/features/wallets/types"

interface WalletsPageProps {
  view: WalletView
  onViewChange: (view: WalletView) => void
}

export function WalletsPage({ view, onViewChange }: WalletsPageProps) {
  const data = walletsMock
  const partner = data.partners.find((p) => p.id === view)
  const detail = data.personalDetails.find((d) => d.partnerId === view)

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 pb-12 pt-2">
      <WalletsHeader />

      <WalletTabs
        view={view}
        onViewChange={onViewChange}
        splitSummary={data.couple.splitSummary}
      />

      {view === "conjunta" ? (
        <JointWalletView data={data} onViewChange={onViewChange} />
      ) : partner && detail ? (
        <PersonalWalletView
          detail={detail}
          partnerName={partner.firstName}
          partnerInitial={partner.initial}
          onViewChange={onViewChange}
        />
      ) : null}
    </div>
  )
}
