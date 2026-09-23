import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const primaryAreas = [
  'Salt Lake City',
  'South Salt Lake',
  'Millcreek',
  'Murray',
  'Holladay',
  'Sugar House',
  'Cottonwood Heights',
  'Sandy',
  'Draper',
  'West Valley City',
  'Taylorsville',
  'Midvale',
  'South Jordan',
  'Riverton',
  'Herriman',
  'Lehi',
  'Saratoga Springs',
  'American Fork',
  'Orem',
  'Provo',
];

const travelNotes = [
  'Primary service area includes Salt Lake County and nearby communities.',
  'Additional travel may be available for larger events or premium bookings.',
  'Final travel availability is confirmed at booking based on date, time, and location.',
];

const ServiceAreasPage: React.FC = () => (
  <div>
    <section className="relative py-24 md:py-32">
      <img src="/images/page/subpage/sanna_hero-banner.png" alt="" aria-hidden="true" className="absolute inset-0 hidden h-full w-full object-cover md:block" />
      <img src="/images/page/subpage/sanna_mobile-hero-banner.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover md:hidden" />
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black md:text-5xl">Service Areas</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Sanna Styles provides luxury mobile nail services across Salt Lake City and surrounding Utah communities.
        </p>
      </div>
    </section>

    <section className="relative overflow-hidden border-y-4 border-[#f49ca3] bg-background py-14 md:py-16">
      <img src="/images/page/subpage/sanna_cities.png" alt="" aria-hidden="true" className="absolute inset-0 hidden h-full w-full object-cover md:block" />
      <img src="/images/page/subpage/sanna_mobile-cities.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover md:hidden" />
      <div className="relative z-[1] container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Cities We Serve</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          We come to homes, offices, hotels, and event venues throughout these areas.
        </p>
        <p className="mt-3 max-w-3xl text-lg font-semibold text-foreground">
          This is just a sample of the areas we serve. Don't see your city? Reach out and we'd be happy to see if we can accommodate your location.
        </p>
        <div className="mt-4">
          <Button asChild className="h-11 border-2 border-[#f49ca2] bg-white px-7 text-base font-semibold text-black hover:bg-[#f49ca2] hover:text-black">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {primaryAreas.map((area) => (
            <article key={area} className="rounded-none double-accent-left bg-transparent px-0 py-2 pl-4 text-left">
              <h3 className="text-lg font-semibold text-foreground">{area}</h3>
            </article>
          ))}
        </div>
        <p className="mt-6 text-lg font-semibold text-foreground">...and more!</p>
      </div>
    </section>

    <section className="relative overflow-hidden bg-muted/40 py-14 md:py-16">
      <img src="/images/page/subpage/sanna_travel.png" alt="" aria-hidden="true" className="absolute inset-0 hidden h-full w-full object-cover md:block" />
      <img src="/images/page/subpage/sanna_mobile-travel.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover md:hidden" />
      <img
        src="/images/page/gradient-opt.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
      />
      <div className="relative z-[1] container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Travel & Booking Notes</h2>
        <p className="mt-3 text-lg font-semibold text-foreground">
          Serving Salt Lake County, Utah County, and nearby communities.
        </p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-lg text-muted-foreground">
          {travelNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-7 text-base">
            <Link to="/contact">Check My Address</Link>
          </Button>
          <Button asChild className="h-11 border-2 border-[#ed3559] bg-white px-7 text-base font-semibold text-black hover:bg-[#ed3559] hover:text-black">
            <Link to="/how-to-book">How to Book</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default ServiceAreasPage;
