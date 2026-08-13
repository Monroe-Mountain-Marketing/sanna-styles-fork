import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { label: "About Sanna Styles", href: "/about" },
      { label: "Contact Us!", href: "/contact" },
      { label: "Nail Gallery", href: "/nail-gallery" },
      { label: "Policies", href: "/policies" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Large Parties & Events", href: "/book-a-large-party-today" },
      { label: "The Luxe Night Market", href: "/the-luxe-night-market-by-sanna-styles" },
    ],
  },
  {
    title: "For Nail Techs",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Trainings", href: "/for-nail-technicians" },
      { label: "Rentals", href: "/mobile-salon-rent" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="footer" className="mt-0 border-t-4 border-[#f49ca3] bg-background">
      <section className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <div className="max-w-md justify-self-start md:col-start-1 md:row-start-1 lg:justify-self-center lg:row-span-2">
            <Link to="/" className="inline-flex w-full justify-start lg:justify-center">
              <img
                src="/branding/pink-stacked-opt.webp"
                alt="Sanna Styles Mobile Salon"
                className="h-44 w-auto no-image-shadow"
              />
            </Link>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:col-start-2 md:row-start-1 md:justify-self-center md:self-center md:text-center lg:justify-self-start lg:text-left">
            Utah's premier mobile nail salon, bringing professional manicures, pedicures, parties, and more directly to you!
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-2 md:grid-cols-3 lg:col-span-1 lg:col-start-2 lg:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h3 className="font-semibold text-primary">{section.title}</h3>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-primary">
        <div className="container flex flex-col items-start justify-between gap-3 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-white">
            &copy; 2026 <span className="text-white">Sanna Styles</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white">
            <Link to="/privacy" className="hover:text-black">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-black">
              Terms of Use
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
