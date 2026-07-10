import React from 'react';
import { Button } from '@/components/ui/button';

const PoliciesPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/shadows.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/75" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">Policies</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Clear service policies help protect your appointment time and ensure a smooth experience for everyone.
        </p>
      </div>
    </section>

    <section className="border-t-4 border-[#ff2c56] bg-background py-14 md:py-16">
      <div className="container mx-auto space-y-10 px-4">

        {/* Refunds */}
        <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Refunds</h2>
          <p className="mt-3 text-muted-foreground">
            Sanna Styles exercises a No Refund Policy on all services booked or rendered, classes or education purchased, and any equipment or gear purchased.
          </p>
        </article>

        {/* Cancellations */}
        <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Cancellations</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Less than 5 services per visit</h3>
              <p className="mt-2 text-muted-foreground">
                Cancelling your scheduled service or party without giving a 24 hour notice will result in full payment of the service cost due, regardless of attendance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">More than 5 services per visit</h3>
              <p className="mt-2 text-muted-foreground">
                Cancelling your scheduled party or event without giving a 7 business day notice will result in full payment of the service cost due, regardless of attendance.
              </p>
            </div>
          </div>
        </article>

        {/* No Shows */}
        <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">No Shows / No Showing</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Less than 5 services per visit</h3>
              <p className="mt-2 text-muted-foreground">No-Showing an appointment occurs in any of the following scenarios:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Not being available (within 15 minutes) of the scheduled time for the services booked</li>
                <li>Providing a false or incorrect address or location</li>
                <li>Canceling or rescheduling your appointment within 60 minutes of any scheduled service(s)</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                No Showed appointments are required to pay the full service cost total for the scheduled appointment plus $20 per service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">More than 5 services per visit</h3>
              <p className="mt-2 text-muted-foreground">No-Showing an event occurs in any of the following scenarios:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Not being available (within 30 minutes) of the scheduled time for the services booked</li>
                <li>Providing a false or incorrect address or location</li>
                <li>Canceling or rescheduling your appointment within 1 business day of any scheduled service(s)</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                No Showed events are required to pay in full for the scheduled appointment plus $150 per booked service.
              </p>
            </div>
          </div>
        </article>

        {/* Pets/animals/children */}
        <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Pets / Animals / Children</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">For Nail and Hair services</h3>
              <p className="mt-2 text-muted-foreground">
                There are no restrictions placed or expected except that our salon equipment isn't contaminated or impacted by anyone. This means, no animals or children are allowed in, on, or near any of our equipment in a way that could damage our materials or leave contaminants in our gear.
              </p>
              <p className="mt-2 text-muted-foreground">Having animals or other humans nearby is absolutely welcomed and encouraged.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">For Brows and Lash services</h3>
              <p className="mt-2 text-muted-foreground">
                Due to the nature of these services it is a requirement that our Sanna Stylist will not be interrupted or interfered with during the service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">For all services</h3>
              <p className="mt-2 text-muted-foreground">
                If the environment is deemed unsuitable for the service being rendered, our No Show policy will apply.
              </p>
            </div>
          </div>
        </article>

        {/* Covid-19 */}
        <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Covid-19</h2>
          <p className="mt-3 text-muted-foreground">
            Sanna Styles follows the CDC Utah Health guidelines. The only thing that pampering you comes in second to, is the health and wellbeing of our families and community. We ask the following from every guest:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Masks are optional since we are in your safe space. If you would like us to wear a mask, simply ask! We are prepared for such an occasion.</li>
            <li>If you have symptoms or have been exposed to someone with Covid-19, please let us know prior to your appointment.</li>
          </ul>
        </article>

        {/* Privacy & Terms */}
        <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Privacy Policy &amp; Terms of Use</h2>
          <p className="mt-3 text-muted-foreground">
            You may find our Privacy Policy located at{' '}
            <a href="/privacy" className="font-medium text-primary hover:underline">
              /privacy
            </a>
          </p>
          <p className="mt-2 text-muted-foreground">
            You may find our Terms of Use located at{' '}
            <a href="/terms" className="font-medium text-primary hover:underline">
              /terms
            </a>
          </p>
        </article>

      </div>
    </section>

    <section
      className="relative border-t-4 border-[#ff2c56] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water.png')" }}
    >
      <div className="absolute inset-0 bg-white/35" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Have a Question About Our Policies?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">We're happy to help clarify anything before your appointment.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-12 border-2 border-[#ff2c56] bg-[#ff2c56] px-8 text-base font-semibold text-white hover:bg-[#ff2c56]/90">
            <a rel="noreferrer noopener" href="/contact">Contact Support</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default PoliciesPage;
