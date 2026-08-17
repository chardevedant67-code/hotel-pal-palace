import Logo from "./Logo";
import { siteConfig, callHref } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream pt-16">
      <div className="container-edge">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Premium rooms and comfortable stays in Nagpur.
            </p>
            <a
              href="#booking"
              className="mt-5 inline-block rounded-full bg-burgundy px-5 py-2.5 text-xs font-semibold tracking-wide text-white"
            >
              Book Your Stay
            </a>
          </div>

          <div>
            <h3 className="eyebrow !text-ink-soft">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink-soft hover:text-burgundy">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow !text-ink-soft">Contact</h3>
            <address className="mt-4 not-italic text-sm leading-relaxed text-ink-soft">
              {siteConfig.address.line1},
              <br />
              {siteConfig.address.line2},
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}
            </address>
            <div className="mt-3 space-y-1">
              {siteConfig.phones.map((p) => (
                <a key={p.raw} href={callHref(p.intl)} className="block text-sm text-ink-soft hover:text-burgundy">
                  {p.display}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow !text-ink-soft">Follow</h3>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-ink-soft hover:text-burgundy"
            >
              Instagram — {siteConfig.instagram.handle}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/10 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Hotel Pal Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
