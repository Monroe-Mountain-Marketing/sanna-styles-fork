import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LUXE_IMAGES = Array.from({ length: 11 }, (_, i) => ({
  src: `/images/sanna/luxenight/luxenight-${String(i + 1).padStart(2, '0')}-opt.webp`,
  alt: `Luxe Night Market event photo ${i + 1}`,
}));

const VISIBLE = 3;

const LuxeNightMarketPage: React.FC = () => {
  const [slideStart, setSlideStart] = useState(0);
  const total = LUXE_IMAGES.length;

  const prev = () => setSlideStart((s) => (s - 1 + total) % total);
  const next = () => setSlideStart((s) => (s + 1) % total);

  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    LUXE_IMAGES[(slideStart + i) % total]
  );

  return (
  <div className="mint-framed-media-page">
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/iridescent-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <img src="/images/page/wavy-2-opt.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover z-[1] pointer-events-none" />
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black md:text-5xl">The Luxe Night Market By Sanna Styles</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Where Community, Empowerment, and Celebration Meet!
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#f49ca3] bg-background py-14 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(280px,440px)_1fr] md:gap-10">
          <img
            src="/images/sanna/events/luxenight-opt.webp"
            alt="Luxe Night Market celebration atmosphere"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-bold text-foreground">Welcome to The Luxe Night Market</h2>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              The Luxe Night Market by Sanna Styles brings together women, entrepreneurs, and small businesses in a vibrant, community-driven marketplace designed for shopping, networking, and empowerment. Whether you're a vendor ready to showcase your brand or an attendee looking for an unforgettable experience, our events are all about connection, creativity, and celebration. Join us and be part of the movement!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-11 border-2 border-[#ed3559] bg-[#ed3559] px-7 text-base font-semibold text-white hover:bg-[#ed3559]/90">
                <a rel="noreferrer noopener" href="https://sannastyles.com/vendor-registration-form/" target="_blank">Become a Vendor</a>
              </Button>
              <Button asChild className="h-11 border-2 border-[#f49ca2] bg-[#f49ca2] px-7 text-base font-semibold text-white hover:bg-[#f49ca2]/90">
                <a rel="noreferrer noopener" href="https://sannastyles.com/rsvp" target="_blank">R.S.V.P. as a Guest</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden border-b-4 border-[#f49ca3] bg-background py-14 md:py-16">
      <img
        src="/images/page/gradient-opt.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
      />
      <div className="relative z-[1] container mx-auto px-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous images"
            className="shrink-0 rounded-full double-accent-border bg-white p-2 shadow-sm hover:bg-muted"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="grid flex-1 grid-cols-3 gap-4">
            {visible.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next images"
            className="shrink-0 rounded-full double-accent-border bg-white p-2 shadow-sm hover:bg-muted"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-14 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Why The Luxe Night Market is Unique</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          At The Luxe Night Market by Sanna Styles, we create more than just a shopping experience — we build a thriving community of women entrepreneurs, small businesses, and passionate artisans. Our markets are carefully curated to ensure a diverse selection of high-quality vendors while fostering an atmosphere of collaboration, connection, and opportunity.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-none double-accent-left bg-transparent p-0 pl-4">
            <h3 className="text-xl font-semibold text-foreground">Empowerment-Focused</h3>
            <p className="mt-2 text-muted-foreground">Every event is designed to uplift and support women-owned businesses.</p>
          </article>
          <article className="rounded-none double-accent-left bg-transparent p-0 pl-4">
            <h3 className="text-xl font-semibold text-foreground">Curated Vendor Selection</h3>
            <p className="mt-2 text-muted-foreground">We handpick vendors who bring unique, high-quality products in fashion, beauty, wellness, and lifestyle.</p>
          </article>
          <article className="rounded-none double-accent-left bg-transparent p-0 pl-4">
            <h3 className="text-xl font-semibold text-foreground">Engaging Experience</h3>
            <p className="mt-2 text-muted-foreground">Beyond shopping, our markets offer opportunities for networking and meaningful interactions.</p>
          </article>
          <article className="rounded-none double-accent-left bg-transparent p-0 pl-4">
            <h3 className="text-xl font-semibold text-foreground">Community &amp; Collaboration</h3>
            <p className="mt-2 text-muted-foreground">We prioritize a supportive environment where vendors and attendees can connect and grow together.</p>
          </article>
        </div>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
          The Luxe Night Market by Sanna Styles is more than just a place to shop — it's a platform for inspiration, connection, and empowerment. Apply to be a vendor or RSVP today and experience the difference.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-11 border-2 border-[#ed3559] bg-[#ed3559] px-7 text-base font-semibold text-white hover:bg-[#ed3559]/90">
            <a rel="noreferrer noopener" href="https://sannastyles.com/vendor-registration-form/" target="_blank">Apply to Be a Vendor</a>
          </Button>
          <Button asChild className="h-11 border-2 border-[#f49ca2] bg-[#f49ca2] px-7 text-base font-semibold text-white hover:bg-[#f49ca2]/90">
            <a rel="noreferrer noopener" href="https://sannastyles.com/rsvp" target="_blank">R.S.V.P. Today</a>
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
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Book the Experience?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">Tell us your date and vibe. We'll bring the luxury to you.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-12 border-2 border-[#f49ca3] bg-[#f49ca3] px-8 text-base font-semibold text-white hover:bg-[#f49ca3]/90">
            <Link to="/contact">Inquire About Availability</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
  );
};

export default LuxeNightMarketPage;
