import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  {
    step: '1',
    title: 'Choose Your Service',
    description: 'Browse the full services menu to find the nail service that fits your style and budget. Not sure? Reach out and we\'ll help you choose.',
  },
  {
    step: '2',
    title: 'Pick Your Date & Location',
    description: 'Select a date and time that works for you. Share your location — whether it\'s your home, office, hotel, or event venue.',
  },
  {
    step: '3',
    title: 'Book on Vagaro',
    description: 'Complete your booking through our Vagaro page. You\'ll receive a confirmation with all the details for your appointment.',
  },
  {
    step: '4',
    title: 'We Come to You',
    description: 'Sanna Styles arrives with everything needed for a full professional nail experience — no salon trip required.',
  },
];

const HowToBookPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/iridescent.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">How to Book</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Booking your mobile nail appointment is quick and easy. Here's how it works.
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#ff2c56] bg-background py-14 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Your Booking Process</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <article key={item.step} className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff2c56] text-lg font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-14 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Booking for a Group or Event?</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          For large parties, bridal groups, or special events, email <a href="mailto:contact@sannastyles.com" className="font-medium text-primary hover:underline">contact@sannastyles.com</a> with your event date, location, guest count, and service preferences. We'll put together a custom package for you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-7 text-base">
            <Link to="/book-a-large-party-today">Large Parties &amp; Events</Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-7 text-base">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>

    <section
      className="relative border-t-4 border-[#ff2c56] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water.png')" }}
    >
      <div className="absolute inset-0 bg-white/35" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Book?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">
          Schedule your mobile nail appointment on Vagaro today.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-12 border-2 border-[#ff2c56] bg-[#ff2c56] px-8 text-base font-semibold text-white hover:bg-[#ff2c56]/90">
            <a rel="noreferrer noopener" href="https://www.vagaro.com/sannastyles" target="_blank">Book on Vagaro</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default HowToBookPage;
