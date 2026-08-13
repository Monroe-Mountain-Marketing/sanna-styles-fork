import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BookingStep {
  step: string;
  title: string;
  description: React.ReactNode;
  cta?: { label: string; href: string };
}

const steps: BookingStep[] = [
  {
    step: '1',
    title: 'Open Vagaro',
    description: 'Click "Book Now" to open our Vagaro booking page.',
    cta: { label: 'Book Now', href: 'https://www.vagaro.com/sannastyles' },
  },
  {
    step: '2',
    title: 'Select Service(s)',
    description: 'Select your desired service(s).',
  },
  {
    step: '3',
    title: 'Choose Stylist, Date, and Time',
    description: 'Choose your preferred stylist, or "Any Available," along with your preferred date and time.',
  },
  {
    step: '4',
    title: 'Add Upgrades',
    description: 'Add any additional services or upgrades that apply.',
  },
  {
    step: '5',
    title: 'Sign In or Create Account',
    description: 'Sign into your Vagaro account or create one.',
  },
  {
    step: '6',
    title: 'Enter Required Details',
    description: (
      <>
        Complete all required information, including the best phone number for text reminders and the{' '}
        <strong>address where the service will actually take place</strong>.
      </>
    ),
  },
  {
    step: '7',
    title: 'Choose Who the Appointment Is For',
    description: 'Indicate whether you are booking for yourself or someone else.',
  },
  {
    step: '8',
    title: 'Add Helpful Notes',
    description: 'Add any helpful notes for your stylist, such as parking instructions, gate codes, accessibility or special client needs, or anything else we should know.',
  },
  {
    step: '9',
    title: 'Submit Request',
    description: 'Submit your appointment request.',
  },
  {
    step: '10',
    title: 'Watch for Confirmation',
    description: 'Watch for your confirmation email or text. If anything needs to be adjusted or rescheduled, we will reach out.',
  },
];

const HowToBookPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/iridescent-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
      <img src="/images/page/wavy-2-opt.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover z-[1] pointer-events-none" />
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black md:text-5xl">How to Book</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Booking your mobile nail appointment is quick and easy. Here's how it works.
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#f49ca3] bg-background py-14 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Your Booking Process</h2>
        <p className="mt-3 max-w-4xl text-base text-muted-foreground">
          Important: if you are booking for someone else or from out of state, please enter the{' '}
          <strong>actual service-location address</strong> where our stylist should arrive.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <article key={item.step} className="flex flex-col rounded-none double-accent-left bg-transparent p-0 pl-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f49ca3] text-lg font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.description}</p>
              {item.cta && (
                <Button asChild className="mt-4 h-9 w-fit border-2 border-[#ed3559] bg-[#ed3559] px-5 text-sm font-semibold text-white hover:bg-[#ed3559]/90">
                  <a rel="noreferrer noopener" href={item.cta.href} target="_blank">{item.cta.label}</a>
                </Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-muted/40 py-14 md:py-16">
      <img
        src="/images/page/gradient-opt.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
      />
      <div className="relative z-[1] container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Booking for a Group or Event?</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          For large parties, bridal groups, or special events, email <a href="mailto:contact@sannastyles.com" className="font-medium text-primary hover:underline">contact@sannastyles.com</a> with your event date, location, guest count, and service preferences. We'll put together a custom package for you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-11 border-2 border-[#ed3559] bg-[#ed3559] px-7 text-base font-semibold text-white hover:bg-[#ed3559]/90">
            <Link to="/book-a-large-party-today">Large Parties &amp; Events</Link>
          </Button>
          <Button asChild className="h-11 border-2 border-[#f49ca2] bg-[#f49ca2] px-7 text-base font-semibold text-white hover:bg-[#f49ca2]/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>

    <section
      className="relative border-t-4 border-[#f49ca3] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Book?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">
          Schedule your mobile nail appointment on Vagaro today.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-12 border-2 border-[#f49ca3] bg-[#f49ca3] px-8 text-base font-semibold text-white hover:bg-[#f49ca3]/90">
            <a rel="noreferrer noopener" href="https://www.vagaro.com/sannastyles" target="_blank">Book on Vagaro</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default HowToBookPage;
