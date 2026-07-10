import React from 'react';

const AboutPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/color-swatches.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">All About Sanna Styles</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          We are a Mobile and Traveling Nail Salon
        </p>
      </div>
    </section>

    <section className="border-t-4 border-[#ff2c56] bg-background py-14 md:py-16">
      <div className="container mx-auto space-y-14 px-4 md:space-y-16">
        <article>
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-bold text-foreground">We are a Mobile and Traveling Nail Salon</h2>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Sanna established Sanna Styles, the Premier Mobile and Traveling Nail Salon Concierge of Salt Lake City, Utah, and surrounding areas with the belief that everyone deserves to feel special and loved and to be pampered. We accomplish this by providing nails, brows, and lashes individually, at parties or events. We specialize providing our services in any environment that you feel most comfortable in.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Whether a corporate event, a wedding party, a spa day for yourself or a loved one on hospice, Sanna Styles will provide an unforgettable experience.
              </p>
            </div>

            <div className="mx-auto aspect-square w-full max-w-md self-center overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src="/images/sanna/about/mobile.jpg"
                alt="Mobile nail service in progress"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </article>

        <article>
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="mx-auto aspect-square w-full max-w-md self-center overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src="/images/sanna/about/sanna.jpg"
                alt="Nail polish collection"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground">Why we started a mobile and traveling salon</h3>
              <p className="mt-4 max-w-4xl text-lg text-muted-foreground">
                Sanna got her start in the nail industry in March 2019 as an apprentice at a high-end nail salon in downtown Salt Lake City, Utah. She quickly became a skilled professional, mentor, as well as established herself as an authority in the nail industry by going from nail apprentice to a licensed technician, a nail instructor - teaching apprentices- to the Director of Operations and manager at the salon in under 10 months!
              </p>
              <p className="mt-4 max-w-4xl text-lg text-muted-foreground">
                Forever impacted by Covid-19, Sanna saw the need in the market to bring the professional high-end salon experience to people that needed it the most, but were not able to leave their homes. The Division of Professional Licensing let Sanna know that no one had done what she was hoping to do but if she could figure out a way to provide in-home services while maintaining health standards to give it a try.
              </p>
              <p className="mt-4 max-w-4xl text-lg text-muted-foreground">
                Sanna then invented her system and when she met with the Health Department they said she had exceeded their expectations and thought of things they had forgotten. In May 2020, Sanna Styles launched and quickly became the premier Mobile and Traveling Nail Salon Concierge of Utah, and she has stayed busy ever since!
              </p>
            </div>
          </div>
        </article>

        <article>
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Why we keep going</h3>
              <p className="mt-4 max-w-4xl text-lg text-muted-foreground">
                Sanna loves providing the premier Mobile and Traveling Nail Salon Concierge in Salt Lake City, Utah and surrounding areas. She has worked hard to perfect the Mobile and Traveling Nail Salon experience providing manicures and pedicures anywhere at any time. It was important to Sanna from the beginning to provide it all! Whether it is in colors, designs, nail health goals, service preferences, she wanted to provide variety and options to all her clients. She travels to homes, apartments, hotels, hospitals, and even work sites, everything you would expect to find in a professional, high-end salon - she brings it all in her compact setup.
              </p>
              <p className="mt-4 max-w-4xl text-lg text-muted-foreground">
                Sanna continues to run Sanna Styles for the same reasons it was started. People of all walks of life have the right to feel pampered and special, especially in the comfort of their home. Feeling special and being pampered is essential to Sanna, and is honored that so many entrust Sanna Styles to pamper them.
              </p>
            </div>

            <div className="mx-auto aspect-square w-full max-w-md self-center overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src="/images/sanna/events/eventmobile.jpg"
                alt="Nail technician with client"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </article>

        <article>
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="mx-auto aspect-square w-full max-w-md self-center overflow-hidden rounded-2xl border border-border shadow-sm">
              <video
                src="/images/sanna/videos/about.MOV"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Creative beauty vision and future growth"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground">What the future holds</h3>
              <p className="mt-4 max-w-4xl text-lg text-muted-foreground">
                Sanna Styles has high expectations for not just its future, but the future of the beauty industry as a whole. Sanna Styles is working on a roadmap for the next 20 years to impact the overall well-being of the nail and beauty industry. We will revolutionize the beauty industry through <a rel="noreferrer noopener" href="https://sannastyles.com/academy/" target="_blank" className="font-semibold text-primary hover:underline">education</a>, manufacturing, consumer awareness, and improve the health, safety, and "Sanna-tation" of work environments and materials used in services. We focus on the individual, one at a time, to bring lasting change in our community.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
);

export default AboutPage;
