import React from 'react';

const MeetTheTeamPage: React.FC = () => (
  <div className="mint-framed-media-page">
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/iridescent-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
      <img src="/images/page/wavy-2-opt.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover z-[1] pointer-events-none" />
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black md:text-5xl">Meet the <span className="font-display italic">Sanna Styles Team</span></h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          The passionate professionals behind your luxury mobile beauty experience.
        </p>
      </div>
    </section>

    <section className="relative overflow-hidden border-t-4 border-[#f49ca3] bg-background py-14 md:py-16">
      <img
        src="/images/page/gradient-opt.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
      />
      <div className="relative z-[1] container mx-auto space-y-14 px-4 md:space-y-16">
        <article>
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="mx-auto aspect-square w-full max-w-md self-center overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src="/images/sanna/about/meet-annika-opt.webp"
                alt="Team member performing a mobile nail service"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground">Meet <span className="font-display italic">Annika</span></h2>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Annika has been doing nails since 2023 and loves helping clients feel confident while giving them a chance to relax, have fun, and enjoy the experience. She loves the creativity that comes with nail artistry, but just as much, she values the relationships she gets to build with the people she serves.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                As a Sanna Styles stylist, Annika especially enjoys traveling to appointments and events because it gives her the opportunity to meet new people, learn alongside other artists, and create memorable experiences wherever the team goes. Outside of nails, she is also a social worker and a proud mom of two - two parts of her life that reflect how deeply she values connection, care, and helping others feel supported.
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>
  </div>
);

export default MeetTheTeamPage;
