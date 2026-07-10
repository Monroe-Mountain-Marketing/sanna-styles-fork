import React from 'react';
import { Button } from '@/components/ui/button';

const CareersPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/doing-nails.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">Careers</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Join a growing mobile beauty brand focused on premium service, flexibility, and creative excellence.
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#ff2c56] bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_minmax(240px,360px)] md:gap-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Why Work for Sanna Styles?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sanna Styles is a woman owned and operated business built around empowering others from within. Our slogan is <span className="font-semibold text-foreground">"Be the Brightness"</span>. We provide our Sanna Stylists with all the tools needed to grow individually and professionally.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We provide regular one-on-one training that is built to directly improve your speed, confidence, and skills, not just to review your metrics and set goals. You will walk away from each meeting with the knowledge necessary to directly impact your paycheck.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sanna Stylists are eager learners, lovers of life, and thrive on challenging their abilities every day.
            </p>
            <p className="mt-6 text-lg font-semibold text-foreground">Do you have what it takes? We think you do.</p>
          </div>
          <img
            src="/images/sanna/careers/careers.jpg"
            alt="Nail technician at work"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-foreground">Open Positions</h2>

        <h3 className="mt-8 text-xl font-bold text-foreground">Booth Renting</h3>
        <ul className="mt-4 space-y-3">
          <li>
            <a
              href="https://sannastyles.com/job-application-sanna-stylist/"
              rel="noreferrer noopener"
              target="_blank"
              className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
            >
              Mobile Nail Technician
            </a>
          </li>
          <li>
            <a
              href="https://sannastyles.com/job-application-sanna-stylist/"
              rel="noreferrer noopener"
              target="_blank"
              className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
            >
              Mobile Hair Stylist
            </a>
          </li>
          <li>
            <a
              href="https://sannastyles.com/job-application-sanna-stylist/"
              rel="noreferrer noopener"
              target="_blank"
              className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
            >
              Mobile Massage Therapist
            </a>
          </li>
          <li>
            <a
              href="https://sannastyles.com/job-application-sanna-stylist/"
              rel="noreferrer noopener"
              target="_blank"
              className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
            >
              Mobile Makeup Artist
            </a>
          </li>
        </ul>

        <h3 className="mt-10 text-xl font-bold text-foreground">Large Events</h3>
        <ul className="mt-4 space-y-3">
          <li>
            <a
              href="https://sannastyles.com/large-event-technician/"
              rel="noreferrer noopener"
              target="_blank"
              className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
            >
              Large Event Nail Technician
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section
      className="relative border-t-4 border-[#ff2c56] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water.png')" }}
    >
      <div className="absolute inset-0 bg-white/35" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Join the Team?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">Apply today and bring your skills to Utah's premier mobile nail salon.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-12 border-2 border-[#ff2c56] bg-[#ff2c56] px-8 text-base font-semibold text-white hover:bg-[#ff2c56]/90">
            <a rel="noreferrer noopener" href="/contact">Apply Now</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default CareersPage;
