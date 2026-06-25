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
      { href: "/policies", label: "Policies" },
    ],
  },
  {
    title: "Services",
    items: [
      { href: "/services", label: "All Services" },
      { href: "/book-a-large-party-today", label: "Large Parties & Events" },
      { href: "/the-luxe-night-market-by-sanna-styles", label: "The Luxe Night Market" },
    ],
  },
  {
    title: "For Nail Techs",
    items: [
      { href: "/careers", label: "Careers" },
      { href: "/for-nail-technicians", label: "Trainings" },
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
          <a
            rel="noreferrer noopener"
            href={facebookHref}
            aria-label="Sanna Styles Facebook"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            rel="noreferrer noopener"
            href={instagramHref}
            aria-label="Sanna Styles Instagram"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>

        <div className="flex justify-start md:justify-center">
          <a
            rel="noreferrer noopener"
            href={businessDomain}
            className="inline-flex items-center"
          >
            <img
              src="/branding/pink-horizontal.png"
              alt="Sanna Styles Mobile Salon"
              className="h-12 w-auto md:h-16"
            />
          </a>
        </div>

        <div className="hidden items-center justify-end gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <a rel="noreferrer noopener" href={contactPageHref}>
              Contact Us Today!
            </a>
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
                        <a
                          key={item.label}
                          rel="noreferrer noopener"
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={buttonVariants({ variant: "ghost", size: "sm" })}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                ))}

                <div className="space-y-2 border-t pt-4">
                  <Button asChild className="w-full" variant="outline">
                    <a rel="noreferrer noopener" href={contactPageHref} onClick={() => setIsOpen(false)}>
                      Contact Us Today!
                    </a>
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
                    <a rel="noreferrer noopener" href={facebookHref} className="hover:text-primary">
                      Facebook
                    </a>
                    <a rel="noreferrer noopener" href={instagramHref} className="hover:text-primary">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </div>

      <NavigationMenu className="mx-auto hidden border-t md:flex">
        <NavigationMenuList className="container h-14 w-screen justify-center gap-2 px-4">
          <NavigationMenuItem>
            <a
              rel="noreferrer noopener"
              href={businessDomain}
              className={buttonVariants({ variant: "ghost" })}
            >
              Home
            </a>
          </NavigationMenuItem>

          {megaMenuSections.map((section) => (
            <NavigationMenuItem key={section.title}>
              <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[560px] grid-cols-[1fr_1.2fr] gap-3 p-5">
                  <div key={section.title}>
                    <h3 className="mb-2 text-sm font-semibold text-primary">{section.title}</h3>
                    <nav className="flex flex-col gap-1">
                      {section.items.map((item) => (
                        <a
                          key={item.label}
                          rel="noreferrer noopener"
                          href={item.href}
                          className={cn(
                            buttonVariants({ variant: "ghost", size: "sm" }),
                            "justify-start text-left"
                          )}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="rounded-lg border bg-muted/30 p-4 text-sm">
                    <p className="font-semibold text-foreground">{businessName}</p>
                    <p className="mt-1 text-muted-foreground">Mobile nail services across Utah</p>
                    <div className="mt-3 space-y-1">
                      <p>{businessEmail}</p>
                      <p>{businessPhone}</p>
                    </div>
                    <div className="mt-3 flex gap-3">
                      <a rel="noreferrer noopener" href={facebookHref} className="text-primary hover:underline">
                        Facebook
                      </a>
                      <a rel="noreferrer noopener" href={instagramHref} className="text-primary hover:underline">
                        Instagram
                      </a>
                    </div>
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
