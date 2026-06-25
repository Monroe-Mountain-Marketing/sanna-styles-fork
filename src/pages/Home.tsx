import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const switchingTextOptions = [
  'Corporate Event',
  'Anniversary',
  'Wedding',
  'Retreat',
  'Birthday',
  'Party',
];

const HomePage: React.FC = () => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/stock/iridescent.jpeg')" }}
      >
        <div className="absolute inset-0 bg-white/70 z-0" aria-hidden="true" />
        <div className="relative z-[1] container mx-auto px-4 pt-16 pb-8 md:pt-24 md:pb-12 lg:pb-20">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          <div className="w-full space-y-8 lg:flex-1">
            <h1 className="text-4xl font-bold uppercase leading-tight text-primary md:text-6xl">
              Beautiful Nails, Wherever You Are!
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Utah's premier mobile nail services that bring the salon experience directly to your home, office, or special event.
            </p>

            <div className="inline-flex max-w-full flex-col items-start gap-2 rounded-3xl border border-border bg-white px-5 py-3 text-base text-foreground md:text-lg sm:flex-row sm:items-center sm:gap-0 sm:rounded-full">
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
              <Button asChild className="w-full border-0 bg-[#ff2c56] text-white hover:bg-[#ff2c56]/90 sm:w-auto">
                <a rel="noreferrer noopener" href="/services">
                  All Services
                </a>
              </Button>

              <Button asChild className="w-full border-0 bg-[#f49ca3] text-black hover:bg-[#f49ca3]/90 sm:w-auto">
                <a rel="noreferrer noopener" href="/book-a-large-party-today">
                  Parties & Events
                </a>
              </Button>

              <Button asChild className="w-full border-0 bg-[#85bfd6] text-black hover:bg-[#85bfd6]/90 sm:w-auto">
                <a rel="noreferrer noopener" href="/contact">
                  Contact
                </a>
              </Button>

              <Button asChild className="w-full border-0 bg-[#e2cf5d] text-black hover:bg-[#e2cf5d]/90 sm:w-auto">
                <a rel="noreferrer noopener" href="https://www.vagaro.com/sannastyles" target="_blank">
                  Book Now!
                </a>
              </Button>
            </div>
            </div>

            {/* Arched image frame */}
            <div className="relative z-10 mb-2 mt-0 flex w-full max-w-[21rem] shrink-0 self-center sm:max-w-[23rem] md:mb-4 md:max-w-[25rem] lg:order-last lg:ml-auto lg:mr-6 lg:mb-[-140px] lg:mt-[-60px] lg:w-[30rem] lg:max-w-none xl:w-[34rem]">
              <div
                className="relative aspect-[10/11] w-full overflow-hidden shadow-2xl"
                style={{ borderRadius: '50% 50% 0 0 / 50% 50% 0 0' }}
              >
                <img
                  src="/images/sanna/pink-glitter-nail.png"
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
          src="/images/stock/live-colorfully.png"
          alt="Colorful nail design showcase"
          className="w-full h-auto"
        />
      </section>

      <section className="bg-background pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-stretch">
            <div className="order-1 max-w-3xl text-center lg:order-2 lg:col-start-2 lg:text-left">
              <h2 className="text-3xl font-bold text-primary md:text-4xl">The Sanna Styles Experience</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every appointment is designed around your schedule, your location, and your style.
              </p>
            </div>

            <div className="relative order-2 mx-auto flex w-full max-w-[17rem] shrink-0 self-center sm:max-w-[19rem] md:max-w-[21rem] lg:order-1 lg:row-span-2 lg:mx-0 lg:w-[24rem] lg:max-w-none lg:self-stretch xl:w-[28rem]">
              <div
                className="relative aspect-[10/11] w-full overflow-hidden shadow-2xl lg:h-full lg:aspect-auto"
                style={{ borderRadius: '50% 50% 0 0 / 50% 50% 0 0' }}
              >
                <img
                  src="/images/stock/doing-nails.jpeg"
                  alt="Nail service in progress"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>

            <div className="order-3 lg:col-start-2">
              <div className="grid items-start gap-8 md:grid-cols-2">
                <article className="h-fit self-start rounded-3xl border border-border bg-white p-3 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">More Than a Nail Appointment</h3>
                  <p className="mt-2 text-muted-foreground">
                    Personalized service that feels effortless, polished, and tailored to exactly what you need.
                  </p>
                </article>

                <article className="h-fit self-start rounded-3xl border border-border bg-white p-3 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">Mobile Convenience</h3>
                  <p className="mt-2 text-muted-foreground">
                    No traffic. No waiting rooms. Just professional nail services brought directly to your door.
                  </p>
                </article>

                <article className="h-fit self-start rounded-3xl border border-border bg-white p-3 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">Events &amp; Group Bookings</h3>
                  <p className="mt-2 text-muted-foreground">
                    From bridal parties to private events, we create a luxurious experience your guests will love.
                  </p>
                </article>

                <article className="h-fit self-start rounded-3xl border border-border bg-white p-3 shadow-sm">
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
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-white p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Perfect For</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Mobile Nail Services for Every Occasion</h2>
            <p className="mt-4 text-lg text-muted-foreground">Sanna Styles is perfect for:</p>

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
      </section>

      <section id="tech-stack" className="pt-36 bg-background" />
      <section id="ui-components" className="pt-36 bg-muted/50" />
      <section id="features" className="pt-36 bg-background" />
      <section id="architecture" className="pt-36 bg-muted/50" />
      <section id="deployment" className="pt-36 bg-background" />
      <section id="getting-started" className="pt-36 bg-primary/5" />
    </div>
  );
}
export default HomePage;