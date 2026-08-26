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

  const trustPillars = [
    {
      title: 'Licensed Professionals',
      description: 'Experienced nail professionals you can trust for polished, professional service.',
    },
    {
      title: 'Full Mobile Setup',
      description: 'Professional tables, lighting, tools, and products come with us.',
    },
    {
      title: 'Sanitation Systems',
      description: 'Professional sanitation practices are built into every setup.',
    },
    {
      title: 'Managed Coordination',
      description: 'Staffing and service flow are planned around your event timeline.',
    },
  ];

  const planningTypes = [
    {
      label: 'WEDDINGS',
      title: 'Weddings & Bridal Celebrations',
      description: 'Wedding mornings, bridal parties, bachelorettes, showers, and full wedding weekends.',
      image: '/images/sanna/events/events2-opt.webp',
      href: '/blog/bridal-pampering',
      cta: 'Explore Wedding Experiences',
    },
    {
      label: 'CORPORATE',
      title: 'Corporate & Team Events',
      description: 'Employee appreciation, client experiences, conferences, team celebrations, and hosted activations.',
      image: '/images/sanna/events/events3-opt.webp',
      href: '/blog/corporate-pampering',
      cta: 'Plan a Corporate Event',
    },
    {
      label: 'PRIVATE EVENTS',
      title: 'Private Parties & Retreats',
      description: 'Birthdays, celebrations, girls weekends, retreats, and private gatherings.',
      image: '/images/sanna/events/events1-opt.webp',
      href: '#form',
      cta: 'Request a Quote',
    },
  ];

  const faqs = [
    {
      id: 'event-cost-booking',
      step: '01',
      title: 'Pricing & Booking',
      items: [
        {
          question: 'How much does a mobile nail event cost in Utah?',
          answer:
            'Sanna Styles event experiences currently start at $449 for Classic and $699 for Luxe. Your final quote is based on service count, service selection, timeline, and location.',
        },
        {
          question: 'Do I have to pay for the entire event at once?',
          answer:
            'Not necessarily. Qualifying individual clients may be able to explore available pay-over-time options through secure checkout.',
        },
        {
          question: 'How far in advance should I request an event?',
          answer:
            'Earlier inquiries give more flexibility for availability and planning, especially weddings, weekends, and larger groups. If your date is soon, send the request anyway and we can review options.',
        },
      ],
    },
    {
      id: 'event-logistics',
      step: '02',
      title: 'What We Bring & How It Works',
      items: [
        {
          question: 'What does Sanna Styles bring to an event?',
          answer:
            'We bring professional technicians, manicure equipment, tools, products, lighting, and sanitation setup, then coordinate staffing and service flow around your event.',
        },
        {
          question: 'Can multiple guests receive services at the same time?',
          answer:
            'Yes. For group events, we plan multiple technicians and stations so several guests can be served simultaneously based on space and timeline.',
        },
        {
          question: 'How long does a group event take?',
          answer:
            'Timing depends on guest count, selected services, and staffing plan. We build a realistic service window around your full event schedule.',
        },
      ],
    },
    {
      id: 'event-types-guide',
      step: '03',
      title: 'Weddings, Teams, and Private Gatherings',
      items: [
        {
          question: 'Can you do nails for a bridal party at a hotel or venue?',
          answer:
            'Yes. Wedding mornings, bridal parties, bachelorettes, showers, and weekend celebrations are all natural fits for on-location nail service.',
        },
        {
          question: 'Can Sanna Styles support corporate or employee events?',
          answer:
            'Yes. Mobile nail services can be incorporated into employee appreciation, team events, conferences, client experiences, retreats, and hosted activations.',
        },
        {
          question: 'What is different from taking the group to a salon?',
          answer:
            'Your group stays at the event. We bring the setup, coordinate staffing, and align service flow with your timeline so logistics are simpler for hosts.',
        },
      ],
    },
    {
      id: 'event-travel',
      step: '04',
      title: 'Utah Locations & Travel',
      items: [
        {
          question: 'Where can mobile nail services be set up?',
          answer:
            'Many private homes, hotels, vacation rentals, event venues, workplaces, and retreat properties can work. We confirm setup needs before event day.',
        },
        {
          question: 'Do you travel to Park City, Salt Lake City, and other Utah destinations?',
          answer:
            'Yes, throughout Utah based on technician availability and event logistics. Send your date, location, guest count, and service goals and we will confirm support.',
        },
      ],
    },
  ];

  return (
  <div>
    <section
      className="relative bg-cover bg-top bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/iridescent-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <img src="/images/page/wavy-2-opt.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover z-[1] pointer-events-none" />
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <h1 className="mt-3 text-4xl font-bold text-black md:text-5xl">We bring the nail experience to your event.</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          You host the moment. We bring the professionals, products, equipment, sanitation systems, setup, and service coordination.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-base text-foreground/75">
          Weddings, private celebrations, corporate events, retreats, and hosted gatherings across Utah.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="h-11 border-2 border-[#f49ca3] bg-[#f49ca3] px-7 text-base font-semibold text-white hover:bg-[#f49ca3]/90">
            <a href="#form">Request an Event Quote</a>
          </Button>
          <Button asChild variant="outline" className="h-11 border-2 border-black/20 px-7 text-base font-semibold">
            <Link to="/blog/bridal-pampering">Planning a Wedding?</Link>
          </Button>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold text-black/70">
          Flexible payment options available for qualifying individual clients.
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#f49ca3] bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#f49ca3]">POLISHED EVENT PRICING</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Event experiences currently start at $449.</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Pay in full or explore flexible payment options for qualifying individual clients.
            </p>
            <div className="mt-6">
              <Button asChild className="h-11 border-2 border-[#f49ca3] bg-[#f49ca3] px-7 text-base font-semibold text-white hover:bg-[#f49ca3]/90">
                <a href="#event-pricing">View Event Pricing</a>
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-[#f49ca3]/35 bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#f49ca3]/35 shadow-lg">
            <img
              src="/images/sanna/events/events4-opt.webp"
              alt="Sanna Styles nail technician providing an on-location manicure while another technician serves a guest."
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-muted/40 py-16 md:py-20">
      <img
        src="/images/page/gradient-opt.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
      />
      <div className="relative z-[1] container mx-auto px-4">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#f49ca3]">BUILT AROUND THE WAY YOU ARE CELEBRATING</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">What are you planning?</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Every experience is built around your location, guest count, services, and timeline.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {planningTypes.map((type) => (
            <article key={type.title} className="overflow-hidden rounded-3xl border border-[#f49ca3]/30 bg-background shadow-sm">
              <img src={type.image} alt={type.title} className="h-52 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#f49ca3]">{type.label}</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{type.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{type.description}</p>
                <div className="mt-5">
                  <a href={type.href} className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">
                    {type.cta} -&gt;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y-4 border-[#f49ca3] bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-[#f49ca3]/35 shadow-md">
            <img
              src="/images/sanna/events/events2-opt.webp"
              alt="Sanna Styles mobile nail event setup with technicians, manicure stations, and professional equipment."
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#f49ca3]">THE EXPERIENCE COMES TO YOU</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">The salon setup arrives with us.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Less coordinating. More enjoying the event. Sanna Styles is built specifically for on-location service.
            </p>
            <p className="mt-3 text-muted-foreground">
              Our team arrives with professional tools and products, then coordinates service flow around your space and timeline.
            </p>
            <ul className="mt-6 grid gap-2 text-sm font-medium text-foreground sm:grid-cols-2">
              <li>✓ Professional technicians</li>
              <li>✓ Products + equipment</li>
              <li>✓ Sanitation setup</li>
              <li>✓ Event service coordination</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="event-pricing" className="relative overflow-hidden bg-muted/40 py-16 md:py-20">
      <img
        src="/images/page/gradient-opt.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
      />
      <div className="relative z-[1] container mx-auto px-4">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#f49ca3]">EVENT EXPERIENCES</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Choose your level of experience.</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Your final proposal is based on guest count, service selection, timeline, and location. You receive one clear event total.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#f49ca3]/35 bg-background p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f49ca3]">CLASSIC EVENT EXPERIENCE</p>
            <p className="mt-3 text-3xl font-bold text-foreground">From $449</p>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">Polished, professional, and beautifully simple.</h3>
            <p className="mt-3 text-muted-foreground">
              A streamlined nail experience designed for efficient, professional group service.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Ideal when you want professional nail care incorporated into the event without making it the entire event.
            </p>
            <div className="mt-5">
              <a href="#form" className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">Request Classic Pricing</a>
            </div>
          </article>

          <article className="rounded-3xl border border-[#f49ca3]/35 bg-background p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f49ca3]">LUXE EVENT EXPERIENCE</p>
            <p className="mt-3 text-3xl font-bold text-foreground">From $699</p>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">Make the nail experience part of the event.</h3>
            <p className="mt-3 text-muted-foreground">
              A more indulgent service experience with additional time and elevated care for your guests.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Ideal when nail services are a featured part of the guest experience.
            </p>
            <div className="mt-5">
              <a href="#form" className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">Request Luxe Pricing</a>
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-[#f49ca3]/35 bg-background p-5">
          <p className="text-sm font-semibold text-foreground">FLEXIBLE PAYMENT OPTIONS</p>
          <p className="mt-2 text-sm text-muted-foreground">
            You may not have to pay for the entire event at once. Qualifying individual clients can explore available pay-over-time options through secure checkout.
          </p>
        </div>
      </div>
    </section>

    <section className="border-t-4 border-[#f49ca3] bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#f49ca3]">OKAY, BUT HOW DOES THIS ACTUALLY WORK?</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">The things people usually want to know before booking.</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Pricing. Timing. Equipment. Hotels. Big groups. Tiny groups. The practical stuff matters, so here it is.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {faqs.map((group) => (
            <article key={group.id} id={group.id} className="rounded-3xl border border-[#f49ca3]/30 bg-muted/20 p-6">
              <p className="text-sm font-semibold text-[#f49ca3]">{group.step}</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">{group.title}</h3>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div key={item.question}>
                    <h4 className="text-base font-semibold text-foreground">{item.question}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="form" className="relative overflow-hidden border-t-4 border-[#f49ca3] bg-muted/40 py-16 md:py-20">
      <img
        src="/images/page/gradient-opt.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
      />
      <div className="relative z-[1] container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Request a Quote for Your Upcoming Event</h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-muted-foreground">
            Tell us what you are planning, including your guest count, timeline, and location. We will build a coordinated event plan around your details.
          </p>
        </div>
        <div>
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
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
          Still have a very specific question? Share the weird details. The more specific you are, the better we can map the experience.
        </p>
      </div>
    </section>

    <section className="border-t-4 border-[#f49ca3] bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#f49ca3]">REAL SANNA STYLES EXPERIENCES</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">This is what mobile looks like.</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">Real events. Real setups. Real Sanna Styles experiences.</p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/sanna/events/events1-opt.webp" alt="Multiple Sanna Styles nail technicians serving several guests during a coordinated group event." className="h-72 w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/sanna/events/events3-opt.webp" alt="Sanna Styles nail technician and client smiling together during an on-location manicure." className="h-72 w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/sanna/events/events4-opt.webp" alt="Close-up of a Sanna Styles manicure setup with tools, polish, towels, and task lighting." className="h-72 w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section
      className="relative border-t-4 border-[#f49ca3] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Plan Your Event?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">One quote. One coordinated nail experience. A lot less running around.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-12 border-2 border-[#f49ca3] bg-[#f49ca3] px-8 text-base font-semibold text-white hover:bg-[#f49ca3]/90">
            <a href="#form">Tell Us What You Are Planning</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
  );
};

export default BookLargePartyPage;
