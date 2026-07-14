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
  'Bountiful',
];

const travelNotes = [
  'Primary service area includes Salt Lake County and nearby communities.',
  'Additional travel may be available for larger events or premium bookings.',
  'Final travel availability is confirmed at booking based on date, time, and location.',
];

const ServiceAreasPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/gradient-sky.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">Service Areas</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Sanna Styles provides luxury mobile nail services across Salt Lake City and surrounding Utah communities.
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#ff2c56] bg-background py-14 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Cities We Serve</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          We come to homes, offices, hotels, and event venues throughout these areas.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {primaryAreas.map((area) => (
            <article key={area} className="rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{area}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-14 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Travel & Booking Notes</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-lg text-muted-foreground">
          {travelNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-7 text-base">
            <Link to="/contact">Check My Address</Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-7 text-base">
            <Link to="/how-to-book">How to Book</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default ServiceAreasPage;
