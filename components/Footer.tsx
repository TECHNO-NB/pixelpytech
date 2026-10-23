import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Mail,
  Palette,
  Smartphone,
  Facebook,
  Instagram
} from "lucide-react";
import { SITE } from "@/lib/about-data";
import { WhatsAppIcon } from "./whatsapp-icon";
import { WhatsAppFloat } from "./whatsapp-float";
import { BackToTop, FooterContainer, FooterItem } from "./footer-motion";


const PHONE = "9779869991666";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi PixelPy Tech, I'd like to discuss a project.",
)}`;

const SERVICES = [
  {
    name: "Website Development",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    name: "Web Application Development",
    href: "/services/web-application-development",
    icon: Code2,
  },
  { name: "UI/UX Design", href: "/services/ui-ux-design", icon: Palette },
];

const COMPANY = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const LEGAL = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
];


const SOCIALS = [
  { name: "Facebook", href: SITE.sameAs[0], icon: Facebook },
  { name: "Instagram", href: SITE.sameAs[1], icon: Instagram }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: SITE.logo,
  email: SITE.email,
  sameAs: SITE.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    telephone: `+${PHONE}`,
    url: `${SITE.url}/contact`,
    availableLanguage: ["English"],
  },
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      url: `${SITE.url}${s.href}`,
      provider: { "@id": `${SITE.url}/#organization` },
    },
  })),
};

const linkClass =
  "group inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-indigo dark:text-paper/60 dark:hover:text-mint";

const underline =
  "relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100";

const gradientBtn =
  "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition hover:brightness-90";

export function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative overflow-hidden border-t border-ink-line/10 pt-0 dark:border-paper-line/10 md:pt-4 lg:px-20"
    >
      <h2 id="footer-heading" className="sr-only">
        PixelPy Tech footer
      </h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-sm text-ink-line/60 dark:text-paper-line/[0.15]"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 100%, black 30%, transparent 85%)",
        }}
      />

      <div className="container-px relative">
        <FooterContainer>
          {/* ===== link grid ===== */}
          <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">
            {/* brand */}
            <FooterItem className="space-y-5 sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                aria-label="PixelPy Tech home"
                className="inline-flex items-center gap-2"
              >
                <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-blue-500 to-purple-500" />
                <span className="font-display text-lg font-semibold">
                  PixelPy Tech
                </span>
              </Link>

              <p className="max-w-sm text-sm leading-7 text-ink/60 dark:text-paper/60">
                PixelPy Tech is a web and mobile app development company
                building modern websites, custom web applications and mobile
                apps for businesses. We turn ideas into reliable, user-friendly
                digital products.
              </p>

              <ul className="flex items-center gap-3">
                {SOCIALS.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={`PixelPy Tech on ${name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line/15 text-ink/55 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:text-indigo dark:border-paper-line/15 dark:text-paper/55 dark:hover:text-mint"
                    >
                      <Icon size={17} />
                    </a>
                  </li>
                ))}
              </ul>
            </FooterItem>

            <FooterItem>
              <nav aria-label="Our services">
                <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-paper/40">
                  Services
                </h3>
                <ul className="space-y-3.5">
                  {SERVICES.map(({ name, href, icon: Icon }) => (
                    <li key={href}>
                      <Link href={href} className={linkClass}>
                        <Icon
                          size={15}
                          aria-hidden
                          className="shrink-0 opacity-60 transition-transform group-hover:scale-110"
                        />
                        <span className={underline}>{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </FooterItem>

            {/* company */}
            <FooterItem>
              <nav aria-label="Company">
                <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-paper/40">
                  Company
                </h3>
                <ul className="space-y-3.5">
                  {COMPANY.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkClass}>
                        <span className={underline}>{l.name}</span>
                        <ArrowUpRight
                          size={13}
                          aria-hidden
                          className="-translate-x-1 translate-y-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </FooterItem>

            {/* contact */}
            <FooterItem>
              <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-paper/40">
                Get in touch
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a href={`mailto:${SITE.email}`} className={linkClass}>
                    <Mail
                      size={15}
                      aria-hidden
                      className="shrink-0 opacity-60"
                    />
                    <span className={underline}>{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-[#25D366] dark:text-paper/60"
                  >
                    <WhatsAppIcon size={15} className="shrink-0 opacity-70" />
                    <span className={underline}>Chat on WhatsApp</span>
                  </a>
                </li>
              </ul>
              <p className="mt-5 max-w-xs text-sm leading-6 text-ink/50 dark:text-paper/50">
                Websites · Mobile apps · Web applications · UI/UX design
              </p>
            </FooterItem>
          </div>

          {/* ===== bottom bar ===== */}
          <FooterItem className="mt-14 flex flex-col gap-5 border-t border-ink-line/10 pt-6 dark:border-paper-line/10 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-xs text-ink/50 dark:text-paper/50">
                © {new Date().getFullYear()} PixelPy Tech. All rights reserved.
              </p>
              <nav aria-label="Legal" className="flex gap-5">
                {LEGAL.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-xs text-ink/50 transition-colors hover:text-indigo dark:text-paper/50 dark:hover:text-mint"
                  >
                    {l.name}
                  </Link>
                ))}
              </nav>
            </div>
            <BackToTop />
          </FooterItem>
        </FooterContainer>
      </div>

      {/* giant wordmark (decorative, hidden from screen readers) */}
      <div
        aria-hidden
        className="pointer-events-none relative mt-6 select-none overflow-hidden text-center md:mt-10"
      >
        <p className="translate-y-[18%] bg-gradient-to-b from-ink/20 to-transparent bg-clip-text font-display text-[24vw] font-semibold leading-none tracking-tighter text-transparent dark:from-paper/20 lg:text-[13rem]">
          PixelPy
        </p>
      </div>

      <WhatsAppFloat />
    </footer>
  );
}
