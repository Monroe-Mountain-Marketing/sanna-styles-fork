import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const MobileSalonRentPage: React.FC = () => (
  <div className="mint-framed-media-page">
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/iridescent-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <img src="/images/page/wavy-2-opt.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover z-[1] pointer-events-none" />
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black md:text-5xl">Mobile Salon Rentals</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Professional mobile setup options for licensed nail technicians serving clients on-location.
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#f49ca3] bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_minmax(240px,360px)] md:gap-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Mobile Salon Rent</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Offering Mobile Nail Technician services can be complicated and difficult. There is a lot that goes into being a Mobile Nail Technician, from what services to offer to how to package everything you need.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sanna Styles has been perfecting the art of mobile services since 2020. We have spent thousands of dollars and hundreds of hours iterating through different products and materials to find a suitable system to efficiently and effectively offer mobile services.
            </p>
            <p className="mt-6 text-2xl font-bold text-primary">$300.00</p>
          </div>
          <img
            src="/images/sanna/events/events5-opt.webp"
            alt="Mobile salon rental setup"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="bg-background py-14 md:py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-6 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-semibold">What happens if the items get damaged?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              All of our products provided are covered by our extensive warranty. Short of obvious and purposeful damage, we will replace and refill all items as needed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-semibold">Can I use these items as I see fit?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes, absolutely. From day 1, we expect you to treat these items as if they were your own. We hope they are as useful for you as they are for us!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base font-semibold">How does payment work?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              When you rent your own mobile salon with Sanna Styles you will be charged a $50 one time setup fee and a $300 booth renter fee. Then, on the first day of every month you will be charged $300. As long as your payment processes, the items provided are yours to use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base font-semibold">What about disposable products?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <p>Sanna Styles provides refills or resupplies of the following consumable products:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Pedicure liners</li>
                <li>Files (180/100 grit)</li>
                <li>Trash liners</li>
                <li>Acetone, Scrub Fresh, Alcohol (99% Isopropyl)</li>
                <li>Lotion</li>
                <li>Cuticle Oil</li>
                <li>Disinfectant wipes</li>
                <li>Gloves</li>
                <li>Lucascide</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base font-semibold">How does the warranty work?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              If you run out of materials or have damaged materials and need replacements, simply email <a href="mailto:contact@sannastyles.com" className="font-medium text-primary underline-offset-4 hover:underline">contact@sannastyles.com</a> with a subject of &ldquo;Warranty Replacement&rdquo; and attach any relevant images or videos along with a description of what you are encountering, and we will take it from there.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-base font-semibold">How long is my Mobile Salon Rental agreement?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              All Mobile Salon Rental agreements start with a required 12-month agreement. After 12 months, your agreement will transition into a month-to-month agreement.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <section
      className="relative border-t-4 border-[#f49ca3] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Rent?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">Check availability and get your mobile setup scheduled.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-12 border-2 border-[#f49ca3] bg-[#f49ca3] px-8 text-base font-semibold text-white hover:bg-[#f49ca3]/90">
            <Link to="/contact">Request Rental Availability</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default MobileSalonRentPage;
