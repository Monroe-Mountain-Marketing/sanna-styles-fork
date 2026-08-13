import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ForNailTechniciansPage: React.FC = () => (
  <div className="mint-framed-media-page">
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/iridescent-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <img src="/images/page/wavy-2-opt.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover z-[1] pointer-events-none" />
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black md:text-5xl">For <span className="font-display italic">Nail Technicians</span></h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          These programs are built for already licensed nail technicians looking to sharpen high-value skills, grow sustainable businesses, and offer premium mobile experiences. Explore two focused training paths designed to help you level up your career.
        </p>
      </div>
    </section>

    <section className="border-y-4 border-[#f49ca3] bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <article className="py-2">
          <div className="grid items-start gap-6 md:grid-cols-[minmax(240px,360px)_1fr] md:gap-8">
            <img
              src="/images/sanna/careers/mobile-cohort-opt.webp"
              alt="Nail technician training session"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div>
              <h3 className="text-3xl font-bold text-foreground">Mobile Nail Technician Recorded Cohort</h3>
              <p className="mt-1 text-lg font-semibold text-primary">$350.00</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                At the Utah Nail Expo, Sanna presented a class on the topic of "How to Become a Mobile Nail Technician" within the state of Utah. If you were unable to attend due to time constraints, then fret no more!
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We took that class and made it an online learning experience that you can watch at any time. By purchasing this digital access class you will be able to learn from the great Sanna herself on how to become a legal business and operate within Utah and each county you wish to perform services in.
              </p>
              <Button asChild className="mt-6 h-10 border-2 border-[#f49ca3] bg-[#f49ca3] px-6 text-sm font-semibold text-white hover:bg-[#f49ca3]/90">
                <Link to="/contact">Inquire to Enroll</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section className="bg-muted/40 py-16 md:py-20">
      <div className="container mx-auto px-4 space-y-14">
        {/* Row 1: Nailpreneur Masterclass */}
        <div className="grid items-start gap-6 md:grid-cols-[minmax(240px,360px)_1fr] md:gap-8">
          <img
            src="/images/sanna/careers/masterclass1-opt.webp"
            alt="Nailpreneur nail art training"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <div>
            <h3 className="text-3xl font-bold text-foreground">Nailpreneur Masterclass</h3>
            <p className="mt-1 text-lg font-semibold text-primary">$59.99</p>
            <h4 className="mt-5 text-xl font-bold text-foreground">Your Path to Becoming a Nail Industry Leader Starts Here!</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ready to elevate your nail career? With <span className="font-semibold text-foreground">Nailpreneur Masterclass</span>, you will gain exclusive access to three expert-led classes every month, tailored to help you master business strategies, perfect your services, and create stunning nail designs. Whether you are passionate about acrylic nails, gel nails, or advanced nail artistry, this membership has everything you need to succeed.
            </p>
            <h4 className="mt-6 text-xl font-bold text-foreground">Transform Your Career Today</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Whether you are just starting or looking to scale your business, <span className="font-semibold text-foreground">Nailpreneur Masterclass</span> gives you the tools, techniques, and confidence to excel. Don&apos;t just follow trends, set them. Join today and take the first step toward becoming a true <span className="font-semibold text-foreground">Nailpreneur</span>.
            </p>
            <Button asChild className="mt-6 h-10 border-2 border-[#f49ca3] bg-[#f49ca3] px-6 text-sm font-semibold text-white hover:bg-[#f49ca3]/90">
              <Link to="/contact">Inquire to Enroll</Link>
            </Button>
          </div>
        </div>

        {/* Row 2: Why Join */}
        <div className="grid items-start gap-6 md:grid-cols-[1fr_minmax(240px,360px)] md:gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground">Why Join Nailpreneur Masterclass?</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
              <li><span className="font-semibold text-foreground">Stay Ahead of the Trends:</span> Learn the latest techniques in nail art, acrylic nails, and gel nails.</li>
              <li><span className="font-semibold text-foreground">Affordable &amp; Flexible Learning:</span> Gain premium training at a fraction of the cost of other programs.</li>
              <li><span className="font-semibold text-foreground">Comprehensive Skills:</span> Build expertise in nails design, business management, and advanced nail artistry.</li>
              <li><span className="font-semibold text-foreground">Tailored for Nail Techs:</span> Classes are designed specifically for busy nail professionals looking to grow their careers.</li>
            </ul>
            <h4 className="mt-6 text-xl font-bold text-foreground">What&apos;s Included Each Month?</h4>
            <ol className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">1. Service-Specific Tutorials:</span> Master the art of delivering flawless nail services, including acrylic nails, gel nails, and more. Step-by-step guidance will help you perfect your techniques, ensuring your clients leave happy and impressed.
              </li>
              <li>
                <span className="font-semibold text-foreground">2. Nail Art Techniques &amp; Nail Design:</span> Unleash your creativity with in-depth classes on nail art and design. From chrome powders and intricate nail artistry to gel nail polish application and 3D designs, you will learn how to create trendy, Instagram-worthy looks that keep clients coming back.
              </li>
              <li>
                <span className="font-semibold text-foreground">3. Business Building Mastery:</span> Learn how to build and grow a successful nail business. From understanding legal, insurance, and tax essentials to scaling your brand, this class provides the foundation every <span className="font-semibold text-foreground">nailpreneur</span> needs to thrive.
              </li>
            </ol>
          </div>
          <img
            src="/images/sanna/careers/masterclass2-opt.webp"
            alt="Nailpreneur benefits"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section
      className="relative border-t-4 border-[#f49ca3] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water-opt.webp')" }}
    >
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Grow Your Nail Career?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">Explore training, rentals, and career opportunities with Sanna Styles.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild className="h-12 border-2 border-[#ed3559] bg-[#ed3559] px-8 text-base font-semibold text-white hover:bg-[#ed3559]/90">
            <Link to="/mobile-salon-rent">Explore Rental Options</Link>
          </Button>
          <Button asChild className="h-12 border-2 border-[#f49ca2] bg-[#f49ca2] px-8 text-base font-semibold text-white hover:bg-[#f49ca2]/90">
            <Link to="/careers">View Career Opportunities</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default ForNailTechniciansPage;
