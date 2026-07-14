import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BookLargePartyPage: React.FC = () => {
  useEffect(() => {
    const scriptId = 'gohighlevel-form-embed';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
  <div>
    <section
      className="relative bg-cover bg-top bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/passion-balloons.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white/65" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">Large Parties &amp; Events</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Sanna Styles specializes in large party services.
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#ff2c56] bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Book Your Large Party Now!</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Sanna Styles is purposefully built to allow our team to perform professional salon services in every environment.
          </p>
          <div className="mt-6">
            <Button asChild className="h-11 border-2 border-[#ff2c56] bg-[#ff2c56] px-7 text-base font-semibold text-white hover:bg-[#ff2c56]/90">
              <a rel="noreferrer noopener" href="https://sannastyles.com/book-a-large-party-today/#form" target="_blank">Book Now</a>
            </Button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/sanna/events/events1.jpg" alt="Large party event 1" className="aspect-square h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/sanna/events/events3.jpg" alt="Large party event 3" className="aspect-square h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/sanna/events/events2.jpg" alt="Large party event 2" className="aspect-square h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/sanna/events/events4.jpg" alt="Large party event 4" className="aspect-square h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Why You Should Entrust Your Event to Sanna Styles</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Our Entire Salon Set Up is 100% Mobile</h3>
            <p className="mt-3 text-muted-foreground">
              We bring everything you would expect to see in a salon environment with us, so no matter what you are needing or wanting — we got you covered.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">We've Been Doing This for Years</h3>
            <p className="mt-3 text-muted-foreground">
              Sanna Styles has been the go-to mobile salon in Utah since 2020. At the height of Covid, we launched Sanna Styles and never looked back.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Licensed, Authorized &amp; Insured</h3>
            <p className="mt-3 text-muted-foreground">
              Due to our mobile salon set up, we take extra precautions to ensure the health and safety of everyone involved. Every one of our beauty professionals — Sanna Stylists as we call them — receive weekly guidance and training by Sanna herself.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Beauty is Our Bread and Butter</h3>
            <p className="mt-3 text-muted-foreground">
              Each of our team members brings with them the love and attention to detail that you would expect, to every service. Whatever you need or want to accomplish — Sanna Styles is there to lend a hand.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className="border-t-4 border-[#ff2c56] bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-xl border border-border bg-white p-2 shadow-sm">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/h8MxaoKgq43YIvAZFBGI"
            style={{ width: '100%', height: '3674px', border: 'none', borderRadius: '8px' }}
            id="inline-h8MxaoKgq43YIvAZFBGI"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Large Party Quote"
            data-height="3674"
            data-layout-iframe-id="inline-h8MxaoKgq43YIvAZFBGI"
            data-form-id="h8MxaoKgq43YIvAZFBGI"
            title="Large Party Quote"
          />
        </div>
      </div>
    </section>

    <section
      className="relative border-t-4 border-[#ff2c56] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water.png')" }}
    >
      <div className="absolute inset-0 bg-white/35" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Plan Your Event?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">Get in touch to discuss pricing, guest count, and event details.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-12 border-2 border-[#ff2c56] bg-[#ff2c56] px-8 text-base font-semibold text-white hover:bg-[#ff2c56]/90">
            <Link to="/contact">Request Event Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
  );
};

export default BookLargePartyPage;
