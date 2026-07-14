import { useState } from "react";
import {
  NavigationMenuContent,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { Facebook, Instagram, Menu } from "lucide-react";
import cn from "classnames";
import { Link } from "react-router-dom";

interface NavLink {
  href: string;
  label: string;
}

interface MegaMenuSection {
  title: string;
  items: NavLink[];
}

const megaMenuSections: MegaMenuSection[] = [
  {
    title: "About",
    items: [
      { href: "/about", label: "About Sanna Styles" },
      { href: "/contact", label: "Contact Us!" },
      { href: "/nail-gallery", label: "Nail Gallery" },
      { href: "/blog", label: "Blog" },
      { href: "/policies", label: "Policies" },
    ],
  },
  {
    title: "Services",
    items: [
      { href: "/services", label: "All Services" },
      { href: "/service-areas", label: "Service Areas" },
      { href: "/book-a-large-party-today", label: "Large Parties & Events" },
      { href: "/the-luxe-night-market-by-sanna-styles", label: "The Luxe Night Market" },
      { href: "/how-to-book", label: "How to Book" },
    ],
  },
  {
    title: "For Nail Techs",
    items: [
      { href: "/for-nail-technicians", label: "Trainings" },
      { href: "/careers", label: "Careers" },
      { href: "/mobile-salon-rent", label: "Rentals" },
    ],
  },
];

const contactPageHref = "/contact";
const bookNowHref = "https://www.vagaro.com/sannastyles";
const businessName = "Sanna Styles Mobile Salon";
const businessDomain = "/";
const businessEmail = "contact@sannastyles.com";
const businessPhone = "(801) 923-3148";
const facebookHref = "/contact";
const instagramHref = "/contact";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur dark:bg-background/95 dark:border-b-border">
      <div className="bg-white">
        <div className="container grid h-20 grid-cols-2 items-center px-4 md:grid-cols-3">
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to={facebookHref}
            aria-label="Sanna Styles Facebook"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <Facebook className="h-4 w-4" />
          </Link>
          <Link
            to={instagramHref}
            aria-label="Sanna Styles Instagram"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <Instagram className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex justify-start md:justify-center">
          <Link
            to={businessDomain}
            className="inline-flex items-center"
          >
            <img
              src="/branding/pink-horizontal.png"
              alt="Sanna Styles Mobile Salon"
              className="h-12 w-auto md:h-16"
            />
          </Link>
        </div>

        <div className="hidden items-center justify-end gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <Link to={contactPageHref}>
              Contact Us Today!
            </Link>
          </Button>
          <Button asChild size="sm">
            <a rel="noreferrer noopener" href={bookNowHref} target="_blank">
              Book Now!
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-end gap-2 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="px-2" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="font-semibold">{businessName}</SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {megaMenuSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-2 text-sm font-semibold text-primary">{section.title}</h3>
                    <nav className="flex flex-col gap-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={buttonVariants({ variant: "ghost", size: "sm" })}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                ))}

                <div className="space-y-2 border-t pt-4">
                  <Button asChild className="w-full" variant="outline">
                    <Link to={contactPageHref} onClick={() => setIsOpen(false)}>
                      Contact Us Today!
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <a rel="noreferrer noopener" href={bookNowHref} target="_blank" onClick={() => setIsOpen(false)}>
                      Book Now!
                    </a>
                  </Button>
                </div>

                <div className="border-t pt-4 text-sm text-muted-foreground">
                  <p>
                    <span>{businessEmail}</span>
                  </p>
                  <p>
                    <span>{businessPhone}</span>
                  </p>
                  <div className="mt-2 flex gap-4">
                    <Link to={facebookHref} className="hover:text-primary">
                      Facebook
                    </Link>
                    <Link to={instagramHref} className="hover:text-primary">
                      Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </div>

      <NavigationMenu className="mx-auto hidden w-full max-w-none border-t md:flex">
        <NavigationMenuList className="container h-14 w-screen justify-center gap-2 px-4">
          <NavigationMenuItem>
            <Link
              to={businessDomain}
              className={buttonVariants({ variant: "ghost" })}
            >
              Home
            </Link>
          </NavigationMenuItem>

          {megaMenuSections.map((section) => (
            <NavigationMenuItem key={section.title} className="relative">
              <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
              <NavigationMenuContent className="md:left-1/2 md:-translate-x-1/2">
                <div className="w-[300px] rounded-xl border bg-white p-5 shadow-lg">
                  <div key={section.title}>
                    <h3 className="mb-2 text-sm font-semibold text-primary">{section.title}</h3>
                    <nav className="flex flex-col gap-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className={cn(
                            buttonVariants({ variant: "ghost", size: "sm" }),
                            "justify-start text-left"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
