import type { WalletView } from "@/features/wallets/types"

export const WALLET_VIEWS: WalletView[] = ["conjunta", "lucas", "beatriz"]

export const DEFAULT_WALLET_VIEW: WalletView = "conjunta"

/** Normaliza um valor desconhecido (ex.: search param) para uma WalletView válida. */
export function parseWalletView(value: unknown): WalletView {
  return WALLET_VIEWS.includes(value as WalletView) ? (value as WalletView) : DEFAULT_WALLET_VIEW
}
