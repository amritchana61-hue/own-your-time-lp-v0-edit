import { Mail } from "lucide-react"

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "mailto:hello@ownyourtime.ai" },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-lg font-bold text-foreground">
              Own Your Time
            </span>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              AI assistants and automation systems for real estate teams.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="mailto:hello@ownyourtime.ai"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              hello@ownyourtime.ai
            </a>
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Own Your Time. Front-end prototype. No live integrations connected.
          </p>
        </div>
      </div>
    </footer>
  )
}
