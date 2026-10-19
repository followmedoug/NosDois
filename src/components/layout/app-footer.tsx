import { RiLockLine } from "@remixicon/react"

const footerLinks = ["Auditoria Conjunta", "Exportar Relatório", "Privacidade 50/50"]

export function AppFooter() {
  return (
    <footer className="fixed right-0 bottom-0 left-72 z-30 flex h-10 items-center justify-between bg-surface-container-lowest/90 px-8 text-on-surface-variant shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md dark:border-t dark:border-line dark:bg-surface/90 dark:text-slate-400">
      <div className="flex items-center gap-2">
        <RiLockLine className="size-3.5 text-primary-container dark:text-emerald-400" />
        <span className="text-label-sm text-on-surface-variant dark:text-slate-400">
          Sincronização bancária segura e criptografada (Open Finance Brasil)
        </span>
        <span className="ml-1 h-1.5 w-1.5 rounded-full bg-primary-container dark:bg-emerald-400 dark:shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
        <span className="text-label-sm font-semibold text-primary-container dark:text-emerald-400">
          Atualizado há 4 min
        </span>
      </div>
      <div className="flex items-center gap-6">
        {footerLinks.map((link) => (
          <button
            key={link}
            type="button"
            className="text-label-sm text-secondary transition-colors hover:text-on-surface dark:text-slate-400 dark:hover:text-slate-200"
          >
            {link}
          </button>
        ))}
      </div>
    </footer>
  )
}
