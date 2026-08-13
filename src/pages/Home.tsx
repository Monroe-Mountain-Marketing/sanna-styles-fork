import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const switchingTextOptions = [
  'Corporate Event',
  'Anniversary',
  'Wedding',
  'Retreat',
  'Birthday',
  'Party',
];

const GALLERY_IMAGE_COUNT = 183;
const SERVICE_SLIDER_IMAGE_COUNT = 16;
const EXCLUDED_GALLERY_NUMBERS = new Set([57, 167]);

const serviceSliderImages = (() => {
  const allNumbers = Array.from({ length: GALLERY_IMAGE_COUNT }, (_, index) => index + 1)
    .filter((number) => !EXCLUDED_GALLERY_NUMBERS.has(number));

  const shuffled = [...allNumbers].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, SERVICE_SLIDER_IMAGE_COUNT);

  return selected.map((number) => {
    const imageId = String(number).padStart(3, '0');
    return {
      src: `/images/sanna/gallery/gallery-${imageId}-opt.webp`,
      alt: `Sanna gallery nail image ${number}`,
    };
  });
})();

const HomePage: React.FC = () => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [serviceSlideStart, setServiceSlideStart] = useState(0);
  const [visibleServiceCount, setVisibleServiceCount] = useState(4);

  const serviceSlideCount = serviceSliderImages.length;
  const visibleServiceImages = Array.from({ length: visibleServiceCount }, (_, index) => {
    const imageIndex = (serviceSlideStart + index) % serviceSlideCount;
    return serviceSliderImages[imageIndex];
  });

  useEffect(() => {
    const currentWord = switchingTextOptions[activeOptionIndex];
    const isWordComplete = typedText === currentWord;
    const isWordCleared = typedText.length === 0;

    let timeoutMs = isDeleting ? 60 : 110;

    if (!isDeleting && isWordComplete) {
      timeoutMs = 1200;
    }

    if (isDeleting && isWordCleared) {
      timeoutMs = 250;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordCleared) {
        setIsDeleting(false);
        setActiveOptionIndex((prev) => (prev + 1) % switchingTextOptions.length);
        return;
      }

      setTypedText(currentWord.slice(0, typedText.length + (isDeleting ? -1 : 1)));
    }, timeoutMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeOptionIndex, isDeleting, typedText]);

  useEffect(() => {
    const updateVisibleServiceCount = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) {
        setVisibleServiceCount(4);
        return;
      }

      if (window.matchMedia('(min-width: 768px)').matches) {
        setVisibleServiceCount(2);
        return;
      }

      setVisibleServiceCount(1);
    };

    updateVisibleServiceCount();
    window.addEventListener('resize', updateVisibleServiceCount);

    return () => window.removeEventListener('resize', updateVisibleServiceCount);
  }, []);

  const showNextServiceSlides = () => {
    setServiceSlideStart((prev) => (prev + 1) % serviceSlideCount);
  };

  const showPreviousServiceSlides = () => {
    setServiceSlideStart((prev) => (prev - 1 + serviceSlideCount) % serviceSlideCount);
  };

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/stock/iridescent-opt.webp')" }}
      >
        <div className="absolute inset-0 bg-white/60 z-0" aria-hidden="true" />
        <div className="relative z-[1] container mx-auto px-4 pt-16 pb-8 md:pt-24 md:pb-12 lg:pb-20">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          <div className="w-full space-y-8 lg:flex-1">
            <h1 className="text-4xl font-bold uppercase leading-tight text-primary md:text-6xl">
              Beautiful Nails, <span className="font-display text-[#ed3559]">Wherever You Are!</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Utah's premier mobile nail services that bring the salon experience directly to your home, office, or special event.
            </p>

            <div className="inline-flex max-w-full flex-col items-start gap-2 rounded-3xl double-accent-border bg-white px-5 py-3 text-base text-foreground md:text-lg sm:flex-row sm:items-center sm:gap-0 sm:rounded-full">
              <span>Book our salon services for your upcoming</span>
              <span className="inline-flex items-center gap-1 sm:mx-1">
                <span className="inline-flex whitespace-nowrap rounded-full bg-primary px-3 py-1 font-semibold text-white shadow-sm">
                  <span className="italic tracking-wide">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </span>
                <span>today!</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pb-1 sm:flex sm:flex-nowrap">
              <Button asChild className="w-full border-0 bg-[#ed3559] text-white hover:bg-[#ed3559]/90 sm:w-auto">
                <a rel="noreferrer noopener" href="https://www.vagaro.com/sannastyles" target="_blank">
                  Book Now!
                </a>
              </Button>

              <Button asChild className="w-full border-0 bg-[#ed3559] text-white hover:bg-[#ed3559]/90 sm:w-auto">
                <Link to="/book-a-large-party-today">
                  Parties & Events
                </Link>
              </Button>

              <Button asChild className="w-full border-0 bg-[#f49ca2] text-white hover:bg-[#f49ca2]/90 sm:w-auto">
                <Link to="/services">
                  All Services
                </Link>
              </Button>

              <Button asChild className="w-full border-0 bg-[#f49ca2] text-white hover:bg-[#f49ca2]/90 sm:w-auto">
                <Link to="/contact">
                  Contact
                </Link>
              </Button>
            </div>
            </div>

            {/* Rounded square image frame */}
            <div className="relative z-10 mb-2 mt-0 flex w-full max-w-[21rem] shrink-0 self-center sm:max-w-[23rem] md:mb-4 md:max-w-[25rem] lg:order-last lg:ml-auto lg:mr-6 lg:mb-[-140px] lg:mt-[-60px] lg:w-[30rem] lg:max-w-none xl:w-[34rem]">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/sanna/gallery/gallery-039-opt.webp"
                  alt="Nail salon service"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section aria-label="Live Colorfully" className="w-full">
        <img
          src="/images/stock/live-colorfully-opt.webp"
          alt="Colorful nail design showcase"
          className="w-full h-auto"
        />
      </section>

      <section className="bg-background pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-stretch">
            <div className="order-1 mt-3 max-w-3xl text-center lg:order-2 lg:col-start-2 lg:mt-6">
              <h2 className="text-3xl font-bold text-primary md:text-4xl">The <span className="font-display italic">Sanna Styles</span> Experience</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every appointment is designed around your schedule, your location, and your style.
              </p>
            </div>

            <div className="relative order-2 mx-auto flex w-full max-w-[17rem] shrink-0 self-center sm:max-w-[19rem] md:max-w-[21rem] lg:order-1 lg:row-span-2 lg:mx-0 lg:w-[24rem] lg:max-w-none lg:self-stretch xl:w-[28rem]">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/sanna/about/sanna-styles-opt.webp"
                  alt="Nail service in progress"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>

            <div className="order-3 lg:col-start-2">
              <div className="grid items-start gap-8 md:grid-cols-2">
                <article className="h-fit self-start rounded-none double-accent-left bg-transparent p-0 pl-4">
                  <h3 className="text-xl font-semibold text-foreground">More Than a Nail Appointment</h3>
                  <p className="mt-2 text-muted-foreground">
                    Personalized service that feels effortless, polished, and tailored to exactly what you need.
                  </p>
                </article>

                <article className="h-fit self-start rounded-none double-accent-left bg-transparent p-0 pl-4">
                  <h3 className="text-xl font-semibold text-foreground">Mobile Convenience</h3>
                  <p className="mt-2 text-muted-foreground">
                    No traffic. No waiting rooms. Just professional nail services brought directly to your door.
                  </p>
                </article>

                <article className="h-fit self-start rounded-none double-accent-left bg-transparent p-0 pl-4">
                  <h3 className="text-xl font-semibold text-foreground">Events &amp; Group Bookings</h3>
                  <p className="mt-2 text-muted-foreground">
                    From bridal parties to private events, we create a luxurious experience your guests will love.
                  </p>
                </article>

                <article className="h-fit self-start rounded-none double-accent-left bg-transparent p-0 pl-4">
                  <h3 className="text-xl font-semibold text-foreground">Personalized Service</h3>
                  <p className="mt-2 text-muted-foreground">
                    Every appointment is tailored to your preferences, with one-on-one attention and nail designs that reflect your unique style.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 pt-8 pb-16 md:pt-10 md:pb-20">
        <div
          className="border-y-4 border-[#f49ca3] bg-cover bg-center bg-no-repeat py-8 md:py-10"
          style={{ backgroundImage: "url('/branding/large-background-opt.webp')" }}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-3xl double-accent-border bg-white/85 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Nails That Come to You</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl"><span className="font-display italic">Mobile Nail Services</span> for Every Occasion</h2>
              <p className="mt-4 text-lg text-muted-foreground">Sanna Styles is a great fit for:</p>

              <ul className="mt-6 grid list-disc gap-3 pl-6 text-foreground md:grid-cols-2">
                <li>Busy professionals</li>
                <li>Stay-at-home moms</li>
                <li>Brides and bridal parties</li>
                <li>Birthday celebrations</li>
                <li>Girls' nights</li>
                <li>Vacation rentals</li>
                <li>Seniors who prefer at-home services</li>
                <li>Anyone who values convenience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-4 pt-10 md:px-8 lg:px-12">
          <div className="w-full py-2">
            <div className="flex flex-col items-center text-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Sanna Styles Services</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Popular Service Categories</h2>
                <p className="mt-3 text-lg text-muted-foreground">Choose from our most-booked nail services.</p>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-3 text-foreground">
              <li className="inline-flex items-center rounded-sm bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">Manicures</li>
              <li className="inline-flex items-center rounded-sm bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">Pedicures</li>
              <li className="inline-flex items-center rounded-sm bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">Lacquer Polish</li>
              <li className="inline-flex items-center rounded-sm bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">Gel Polish</li>
              <li className="inline-flex items-center rounded-sm bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">Builder Gel</li>
              <li className="inline-flex items-center rounded-sm bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">Acrylic</li>
              <li className="inline-flex items-center rounded-sm bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">Custom Nail Art</li>
              <li className="inline-flex items-center rounded-sm bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">Parties &amp; More!</li>
            </ul>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="h-12 border-2 border-[#ed3559] bg-[#ed3559] px-8 text-base font-semibold text-white hover:bg-[#ed3559]/90">
                <Link to="/services">
                  More Services
                </Link>
              </Button>
              <Button asChild className="h-12 border-2 border-[#f49ca2] bg-[#f49ca2] px-8 text-base font-semibold text-white hover:bg-[#f49ca2]/90">
                <Link to="/nail-gallery">
                  View Full Gallery
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Show previous service images"
                onClick={showPreviousServiceSlides}
                className="shrink-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="grid flex-1 gap-3" style={{ gridTemplateColumns: `repeat(${visibleServiceCount}, minmax(0, 1fr))` }}>
                {visibleServiceImages.map((image) => (
                  <div key={image.src} className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted/20">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Show next service images"
                onClick={showNextServiceSlides}
                className="shrink-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-y-4 border-[#f49ca3] bg-background py-16 md:py-20"
      >
        <img
          src="/images/page/gradient-opt.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
        />
        <div className="relative z-[1] container mx-auto px-4">
          <div className="mx-auto max-w-5xl double-accent-left bg-transparent p-0 pl-5 md:pl-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Training &amp; Rentals</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Grow Your Nail Business With <span className="font-display italic">Sanna Styles</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">
              For already licensed nail technicians, explore hands-on trainings, mobile salon rentals, and specialty support designed to expand your skills and services.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/for-nail-technicians">
                  Explore Options For Nail Techs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-[#f49ca3] bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">Reviews / Testimonials</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-foreground md:text-4xl">What Clients Are Saying</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-none double-accent-left bg-transparent p-0 pl-4">
              <p className="text-muted-foreground">
                "The easiest salon day ever. Sanna came to my home, and my nails lasted beautifully for weeks."
              </p>
              <p className="mt-4 font-semibold text-foreground">- Emily R.</p>
            </article>

            <article className="rounded-none double-accent-left bg-transparent p-0 pl-4">
              <p className="text-muted-foreground">
                "We booked for a bridal party and every guest loved their set. Professional, clean, and so fun."
              </p>
              <p className="mt-4 font-semibold text-foreground">- Marissa T.</p>
            </article>

            <article className="rounded-none double-accent-left bg-transparent p-0 pl-4">
              <p className="text-muted-foreground">
                "Perfect for my schedule. I can finally keep up with nail appointments without leaving the house."
              </p>
              <p className="mt-4 font-semibold text-foreground">- Lauren D.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 md:py-20"
        style={{ backgroundImage: "url('/images/stock/floating-water-opt.webp')" }}
      >
        <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black md:text-4xl">Ready for nails without the salon trip?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">
            Book your mobile appointment today.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild className="h-12 border-2 border-[#f49ca3] bg-[#f49ca3] px-8 text-base font-semibold text-white hover:bg-[#f49ca3]/90">
              <a rel="noreferrer noopener" href="https://www.vagaro.com/sannastyles" target="_blank">
                Book Your Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="h-0" />
      <section id="ui-components" className="h-0" />
      <section id="features" className="h-0" />
      <section id="architecture" className="h-0" />
      <section id="deployment" className="h-0" />
      <section id="getting-started" className="h-0" />
    </div>
  );
}
export default HomePage;