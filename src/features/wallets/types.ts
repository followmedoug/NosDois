/**
 * Tipos da feature "Carteiras & Cartões" (MVP1).
 * Os dados atuais são mockados (data/wallets.mock.ts) e fiéis ao spec.
 */

/** Identificador de cada membro do casal. */
export type PartnerId = "lucas" | "beatriz"

/** Visão selecionável no seletor de contexto / abas da página. */
export type WalletView = "conjunta" | PartnerId

export interface Partner {
  id: PartnerId
  name: string
  firstName: string
  /** Inicial usada nos avatares. */
  initial: string
  /** Percentual de contribuição no acordo do casal (ex.: 55). */
  sharePercent: number
}

export interface SubAccount {
  id: string
  /** Sigla exibida no avatar da conta (ex.: "IN", "NU"). */
  initials: string
  name: string
  description: string
  balance: number
  note: string
  /** Tom de destaque da nota (ex.: rendimento "100% CDI"). */
  noteTone?: "default" | "accent"
  /** Cor de marca do avatar no dark mode (ex.: Inter = laranja, Nubank = roxo). */
  brandTone?: "default" | "orange" | "purple"
}

export interface JointAccount {
  totalBalance: number
  monthlyChangePercent: number
  status: string
  subAccounts: SubAccount[]
}

/** Fatia de participação de um membro no patrimônio compartilhado. */
export interface CompositionSlice {
  partnerId: PartnerId
  amount: number
}

export interface CreditCard {
  id: string
  brand: "visa" | "mastercard"
  label: string
  purpose: string
  lastFourDigits: string
  holderName: string
  expiresAt: string
  /** Variante visual do cartão físico. */
  visual: "emerald" | "violet"
  currentInvoice: number
  invoiceNote: string
  bestPurchaseDay: number
  creditLimit: number
  usedLimit: number
  footerInfo: string
  footerIcon: "verified" | "cashback"
}

export type SettlementStatusTone = "success" | "neutral"

export interface Settlement {
  id: string
  icon: "renew" | "medical" | "flight"
  title: string
  status: string
  statusTone: SettlementStatusTone
  dateLabel: string
  description: string
  amount: number
  /** Quando true, o valor é exibido com a cor de destaque primária. */
  amountAccent?: boolean
  directionLabel: string
}

export interface PersonalExpense {
  id: string
  icon: "fitness" | "games" | "tech" | "education" | "beauty" | "books"
  title: string
  category: string
  amount: number
}

export interface PersonalCard {
  label: string
  brandLine: string
  invoiceAmount: number
}

export interface PersonalWallet {
  partnerId: PartnerId
  freeBalance: number
  spentAmount: number
  spendingCap: number
  card: PersonalCard
  recentExpenses: PersonalExpense[]
}

/** Dados detalhados da visão individual (abas Lucas / Beatriz). */
export interface PersonalWalletDetail {
  partnerId: PartnerId
  salaryAccountLabel: string
  salaryBalance: number
  coupleContributionPercent: number
  coupleContributionAmount: number
  autonomyBalance: number
  cardLine: string
  cardLimitInfo: string
  cardInvoiceAmount: number
}

export interface CoupleProfile {
  displayName: string
  planLabel: string
  splitSummary: string
}

export interface WalletsData {
  couple: CoupleProfile
  partners: Partner[]
  jointAccount: JointAccount
  composition: {
    monthLabel: string
    slices: CompositionSlice[]
    note: string
    noteHighlight: string
  }
  jointCards: CreditCard[]
  settlements: Settlement[]
  personalWallets: PersonalWallet[]
  personalDetails: PersonalWalletDetail[]
}
