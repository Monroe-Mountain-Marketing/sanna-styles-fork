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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button, buttonVariants } from "./ui/button";
import { ChevronDown, Facebook, Instagram, Menu } from "lucide-react";
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
      { href: "/meet-the-team", label: "Meet the Team" },
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
const businessDomain = "/";
const businessEmail = "contact@sannastyles.com";
const businessPhone = "(801) 923-3148";
const facebookHref = "https://www.facebook.com/sannastylessalon";
const instagramHref = "https://www.instagram.com/sanna_styles_salon";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bookMenuOpen, setBookMenuOpen] = useState<boolean>(false);

  return (
    <header className="border-b-2 border-[#f49ca3] md:double-accent-bottom sticky top-0 z-40 w-full bg-white/95 backdrop-blur dark:bg-background/95 md:border-b-0">
      <div className="bg-white">
        <div className="container grid h-20 grid-cols-2 items-center px-4 md:grid-cols-3">
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={facebookHref}
            aria-label="Sanna Styles Facebook"
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={instagramHref}
            aria-label="Sanna Styles Instagram"
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>

        <div className="flex justify-start md:justify-center">
          <Link
            to={businessDomain}
            className="inline-flex items-center"
          >
            <img
              src="/branding/pink-horizontal-opt.webp"
              alt="Sanna Styles Mobile Salon"
              className="h-12 w-auto no-image-shadow md:h-16"
            />
          </Link>
        </div>

        <div className="hidden items-center justify-end gap-2 md:flex">
          <Button asChild size="sm" className="h-11 border-2 border-[#ed3559] bg-white px-4 text-black hover:bg-[#ed3559] hover:text-black">
            <Link to={contactPageHref}>
              Contact Us Today!
            </Link>
          </Button>

          <DropdownMenu open={bookMenuOpen} onOpenChange={setBookMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                className="h-11 gap-2 border-2 border-[#f49ca3] bg-white px-4 text-black hover:bg-[#f49ca3] hover:text-black"
                onMouseEnter={() => setBookMenuOpen(true)}
                onMouseLeave={() => setBookMenuOpen(false)}
                onFocus={() => setBookMenuOpen(true)}
                onBlur={() => setBookMenuOpen(false)}
              >
                <span>Book Now!</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-52 rounded-xl border-[#f49ca3] bg-white p-1 shadow-lg"
              onMouseEnter={() => setBookMenuOpen(true)}
              onMouseLeave={() => setBookMenuOpen(false)}
            >
              <DropdownMenuItem asChild className="cursor-pointer rounded-lg focus:bg-[#f9d6d9] focus:text-black">
                <a rel="noreferrer noopener" href={bookNowHref} target="_blank" className="flex w-full items-center justify-between px-2 py-1.5">
                  <span>Book Now</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer rounded-lg focus:bg-[#f9d6d9] focus:text-black">
                <Link to="/how-to-book" className="flex w-full items-center justify-between px-2 py-1.5">
                  <span>How to Book</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-end gap-2 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="px-2" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] sm:max-w-md">
              <SheetHeader>
                <SheetTitle>
                  <Link to={businessDomain} onClick={() => setIsOpen(false)} className="inline-block">
                    <img
                      src="/branding/pink-horizontal-opt.webp"
                      alt="Sanna Styles"
                      className="mx-auto h-12 w-auto no-image-shadow"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                <div className="flex justify-center">
                  <Link
                    to="/book-a-large-party-today"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-11 items-center justify-center rounded-full border-2 border-[#ed3559] bg-white px-5 text-base font-semibold text-black transition-colors hover:bg-[#ed3559] hover:text-black"
                  >
                    Large Parties & Events
                  </Link>
                </div>

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
                  <Button asChild className="h-11 w-full border-2 border-[#f49ca3] bg-white text-black hover:bg-[#f49ca3] hover:text-black">
                    <Link to={contactPageHref} onClick={() => setIsOpen(false)}>
                      Contact Us Today!
                    </Link>
                  </Button>
                  <Button asChild className="h-11 w-full border-2 border-[#f49ca3] bg-white text-black hover:bg-[#f49ca3] hover:text-black">
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
                    <a href={facebookHref} target="_blank" rel="noreferrer noopener" className="hover:text-primary">
                      Facebook
                    </a>
                    <a href={instagramHref} target="_blank" rel="noreferrer noopener" className="hover:text-primary">
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

      <NavigationMenu className="double-accent-top double-accent-bottom soft-pink-bottom-border mx-auto hidden w-full max-w-none bg-white md:flex dark:bg-background">
        <NavigationMenuList className="container h-16 w-screen justify-center gap-2 px-4">
          {megaMenuSections.map((section) => (
            <NavigationMenuItem key={section.title} className="relative">
              <NavigationMenuTrigger className="h-11 px-5">{section.title}</NavigationMenuTrigger>
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

          <NavigationMenuItem>
            <Link
              to="/book-a-large-party-today"
              className="inline-flex h-11 items-center justify-center rounded-full border-2 border-[#ed3559] bg-white px-5 text-base font-semibold text-black transition-colors hover:bg-[#ed3559] hover:text-black"
            >
              Large Parties & Events
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
