import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCard {
  name: string;
  price: string;
  description: React.ReactNode;
  link?: { href: string; label: string };
}

interface ServiceSection {
  id: string;
  title: string;
  bg: string;
  cards: ServiceCard[];
}

const sections: ServiceSection[] = [
  {
    id: 'most-popular',
    title: 'Most Popular',
    bg: 'bg-background',
    cards: [
      {
        name: 'Custom Group or Party Service',
        price: '',
        description: <>Not seeing an option that you are needing? Wanting to do a larger party or event? Email <a href="mailto:contact@sannastyles.com" className="text-primary hover:underline font-medium">contact@sannastyles.com</a> with the services you need and want to schedule a time to get pampered!</>,
        link: { href: '/book-a-large-party-today', label: 'Large Parties & Events' },
      },
      {
        name: 'Mani/Pedi Spa Day For One — Polish',
        price: 'Starting at $140.00',
        description: <>Removal of existing polish or gel polish. Lacquer polish for all your nails, natural nail prep, cuticle care, hand lotion massage. Water soak for your feet, callus treatment, exfoliating scrub, foot lotion massage.<br /><br /><span className="italic">Upgrade to Gel for $20 per Mani and Pedi service. Upgrade your nails to an enhancement service for $45–$70. Inquire at booking.</span></>,
      },
      {
        name: 'Gel Manicure',
        price: 'Starting at $75.00',
        description: 'Removal of any polish or gel polish. Gel polish (shellac) over your natural nails, natural nail prep, cuticle care, hand lotion massage.',
      },
      {
        name: 'Enhancement Fill',
        price: 'Starting at $100.00',
        description: <>Looking to fill in that growth with a new fresh look? This service includes removal of old product and any lifting surfaces, nail health inspection and prep, cuticle care, reshaping, and your choice of Acrylic or Buildergel. Includes application of gel polish and ends with a lotion hand massage.<br /><br /><span className="italic">Don't forget to add time for Nail Art!</span></>,
      },
    ],
  },
  {
    id: 'manicures',
    title: 'Manicures',
    bg: 'bg-muted/40',
    cards: [
      {
        name: 'Lacquer Mani',
        price: 'Starting at $55.00',
        description: 'Removal of any polish or gel polish. Natural nail prep, application of regular polish on your natural nail, cuticle care, hand lotion massage. Upgrade to Gel for $20.',
      },
      {
        name: 'Gel Pedicure',
        price: '$105.00',
        description: 'Removal of existing polish or gel polish. Natural nail prep, cuticle care, gel polish over your natural nails. Relaxing water soak for your feet, callus treatment, exfoliating scrub, followed by a foot lotion massage.',
      },
    ],
  },
  {
    id: 'enhancement-overlays',
    title: 'Enhancement Overlays',
    bg: 'bg-background',
    cards: [
      {
        name: 'Acrylic Overlay, No Added Length, Placed on Natural Nails',
        price: '$100.00',
        description: 'Enhancement service to strengthen natural nails. Removal of any product, natural nail prep, cuticle care, application of enhancement product, overall balance, Gel polish (shellac) application included, followed by hand lotion massage.',
      },
      {
        name: 'Builder Gel Overlay, No Added Length, Placed on Your Natural Nails',
        price: 'Starting at $100.00',
        description: 'Enhancement service to strengthen natural nails. Removal of any product, natural nail prep, cuticle care, application of enhancement product, overall balance, Gel polish (shellac) application included, hand lotion massage.',
      },
    ],
  },
  {
    id: 'enhancement-fills',
    title: 'Enhancement Fills',
    bg: 'bg-muted/40',
    cards: [
      {
        name: 'Builder Gel Fill',
        price: 'Starting at $100.00',
        description: 'Replacement of existing enhancement where there is new growth. Removal of old polish and lifting, natural nail prep for enhancement, cuticle care, application of enhancement, overall balance, Gel polish (shellac) included, and a hand lotion massage.',
      },
      {
        name: 'Acrylic Fill',
        price: '$100.00',
        description: 'Replacement of existing enhancement where there is new growth. Removal of old polish and lifting, natural nail prep for enhancement, cuticle care, application of enhancement, overall balance, Gel polish (shellac) included, and a hand lotion massage.',
      },
    ],
  },
  {
    id: 'enhancement-fulls',
    title: 'Enhancement Fulls',
    bg: 'bg-background',
    cards: [
      {
        name: 'Acrylic Full',
        price: 'Starting at $115.00',
        description: 'Enhancement service to add length to nails. Removal of any product, natural nail prep, cuticle care, forms/tips for desired length, application of enhancement product, overall balance, Gel polish (shellac) application included, hand lotion massage.',
      },
      {
        name: 'Builder Gel Full',
        price: 'Starting at $115.00',
        description: 'Enhancement service to add length to nails. Removal of any product, natural nail prep, cuticle care, forms/tips for desired length, application of enhancement product, overall balance, Gel polish (shellac) application included, hand lotion massage.',
      },
    ],
  },
  {
    id: 'spa-day-one',
    title: 'Spa Day For One',
    bg: 'bg-muted/40',
    cards: [
      {
        name: 'Spa Day For One — Polish',
        price: '$140.00',
        description: <>Removal of existing polish or gel polish. Lacquer polish for all your nails, natural nail prep, cuticle care, hand lotion massage. Water soak for your feet, callus treatment, exfoliating scrub, foot lotion massage.<br /><br /><span className="italic">Upgrade nails to Gel for $20 per manicure or pedicure service. Upgrade nails to an enhancement service for $45–$60. Inquire at booking.</span></>,
      },
      {
        name: 'Spa Day For One — Gel Upgrades',
        price: '$180.00',
        description: <>Removal of existing polish or gel polish. Gel (Shellac) polish for both hands and toes, natural nail prep, cuticle care, hand lotion massage. Water soak for your feet, callus treatment, exfoliating scrub, foot lotion massage.<br /><br /><span className="italic">Upgrade nails to an enhancement service for $25–$40. Inquire at booking.</span></>,
      },
    ],
  },
  {
    id: 'spa-day-two',
    title: 'Spa Day For Two',
    bg: 'bg-background',
    cards: [
      {
        name: 'Two Lacquer Mani\'s',
        price: 'Starting at $110.00',
        description: <>Each Polish Mani includes removal of any polish or gel polish. Natural nail prep, application of regular polish on your natural nail, cuticle care, hand lotion massage.<br /><br /><span className="italic">Upgrade to Gel for $20 per service. Upgrade to an enhancement manicure for $45–60. Inquire at booking. Each guest saves $10 when booked as a party!</span></>,
      },
      {
        name: 'Two Lacquer Pedi\'s',
        price: 'Starting at $170.00',
        description: <>Each Polish Pedi includes removal of any polish or gel polish. Application of regular polish on your natural nail. Water soak for your feet, natural nail prep, cuticle care, callus treatment, exfoliating scrub, foot lotion massage.<br /><br /><span className="italic">Upgrade to Gel for $20 per service. Each guest saves $10 when booked as a party!</span></>,
      },
      {
        name: 'Two Lacquer Mani AND Pedi Spa Day',
        price: 'Starting at $280.00',
        description: <>Service includes Two Lacquer Mani and Lacquer Pedi Combos. Each service includes removal of any polish or gel polish. Natural nail prep, cuticle care, application of regular polish on your natural nails, hand and foot lotion massages. Pedicures also include water soak for your feet, callus treatment, and exfoliating scrub.<br /><br /><span className="italic">Upgrade to Gel for $20 per service. Or upgrade your nails to $45–$60. Inquire at booking. Each guest saves $10 for booking as a party!</span></>,
      },
    ],
  },
  {
    id: 'spa-day-three',
    title: 'Spa Day For Three',
    bg: 'bg-muted/40',
    cards: [
      {
        name: 'Three Lacquer Mani\'s',
        price: 'Starting at $165.00',
        description: <>Each Lacquer Mani includes removal of any polish or gel polish. Natural nail prep, cuticle care, hand lotion massage, and application of regular polish on your natural nail.<br /><br /><span className="italic">Upgrade to Gel for $20 per service. Upgrade nails to enhancement services for $45–$60. Inquire at booking.</span></>,
      },
      {
        name: 'Three Lacquer Pedi\'s',
        price: 'Starting at $255.00',
        description: <>Each Lacquer Pedi includes removal of any polish or gel polish. Water soak for your feet, natural nail prep, cuticle care, callus treatment, exfoliating scrub, foot lotion massage, and application of regular polish on your natural nail.<br /><br /><span className="italic">Upgrade to Gel for $20 per service.</span></>,
      },
      {
        name: 'Three Lacquer Mani AND Pedi Spa Days',
        price: 'Starting at $420.00',
        description: <>Service includes Three Lacquer Mani AND Lacquer Pedi Combos. Each service includes removal of any polish or gel polish. Natural nail prep, cuticle care, application of regular polish on your natural nails, hand and foot lotion massages. Pedicures also include water soak for your feet, callus treatment, and exfoliating scrub.<br /><br /><span className="italic">Upgrade to Gel for $20 per service. Or upgrade your nails to enhancements for $25–$35. Inquire at booking.</span></>,
      },
    ],
  },
  {
    id: 'spa-day-four',
    title: 'Spa Day For Four',
    bg: 'bg-background',
    cards: [
      {
        name: 'Four Lacquer Mani AND Pedi Spa Day',
        price: 'Starting at $560.00',
        description: <>Service includes Four Polish Mani's and Four Polish Pedi's. Each service includes removal of any polish or gel polish. Natural nail prep, cuticle care, application of regular polish on your natural nails, hand and foot lotion massages. Pedicures also include water soak for your feet, callus treatment, and exfoliating scrub.<br /><br /><span className="italic">Upgrade to Gel for $20 per service. Or upgrade your nails to enhancements for $45–$60. Inquire at booking.</span></>,
      },
    ],
  },
  {
    id: 'add-ons',
    title: 'Add-Ons',
    bg: 'bg-muted/40',
    cards: [
      {
        name: 'Nail Art',
        price: 'Starting at $5.00',
        description: '$5 minimum, goes up depending on complexity, timing, and how many fingers. Glitter, chromes, powders, crystals, foils, gems, hand painted designs and more! Add nail art to any manicure, enhancement, or pedicure!',
      },
      {
        name: 'Upgrade — Gel Polish',
        price: 'Starting at $20.00',
        description: 'Upgrading to gel polish to either mani or pedi. $20 per service.',
      },
      {
        name: 'Upgrade — Enhancement Fill / Overlay',
        price: '$40.00',
        description: 'Need to upgrade your Lacquer Mani for yourself or for your party with friends to include a Fill or an Overlay? $45+ per guest that wants that extra strength.',
      },
      {
        name: 'Upgrade — Enhancement Full Set',
        price: '$45.00',
        description: 'Need to upgrade your Lacquer Mani for yourself or a party with friends to include a Full Set? (added length and strength) $60 per guest that wants added length and strength to their nails. $70+ per service needed.',
      },
      {
        name: 'Additional Add-On',
        price: 'Starting at $20.00',
        description: 'Used for any kind of additional add-on that may not be traditional. (IE: Wanting to add just a quick massage to feet but didn\'t book for a pedicure, extra time spent on cuticles, clipping someone else\'s toes and nothing else, etc.) Can go up depending on the request and time taken to achieve.',
      },
      {
        name: 'Enhancement Removal with Manicure',
        price: 'Starting at $100.00',
        description: 'Removal of enhancements start at $100 and can go up depending on the service and time. Every enhancement removal includes a Polish Mani service as well. Some enhancements require different techniques to remove and others naturally take more time. Can upgrade to Gel or a different Enhancement for additional cost. Inquire at booking.',
      },
      {
        name: 'Nail Mends',
        price: '$5+ per nail',
        description: 'Have a broken, chipped nail, or missing toe nail? Don\'t worry! We\'ll have you walking away with an overall even look! Includes prep of natural nail, application of an enhancement to add length that matches the other nails or to create a look of a nail like new! Add a nail mend to any manicure, enhancement, or pedicure appointment.',
      },
    ],
  },
];

const ServicesPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/pink-polish.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">Services</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Premium mobile nail services tailored for everyday beauty, celebrations, and on-location events.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-11 border-2 border-[#ff2c56] bg-[#ff2c56] px-7 text-base font-semibold text-white hover:bg-[#ff2c56]/90">
            <Link to="/how-to-book">How to Book?</Link>
          </Button>
        </div>
      </div>
    </section>


    {sections.map((section) => (
      <section key={section.id} id={section.id} className={`${section.bg} border-t-4 border-[#ff2c56] py-14 md:py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{section.title}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.cards.map((card) => (
              <article key={card.name} className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{card.name}</h3>
                {card.price && (
                  <p className="mt-1 text-base font-semibold text-primary">{card.price}</p>
                )}
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                {card.link && (
                  <Button asChild className="mt-4 w-fit h-9 border-2 border-[#bbefe0] bg-[#bbefe0] px-5 text-sm font-semibold text-black hover:bg-[#bbefe0]/90">
                    <Link to={card.link.href}>{card.link.label}</Link>
                  </Button>
                )}
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild className="h-10 border-2 border-[#ff2c56] bg-[#ff2c56] px-6 text-sm font-semibold text-white hover:bg-[#ff2c56]/90">
              <a rel="noreferrer noopener" href="https://www.vagaro.com/sannastyles" target="_blank">Book on Vagaro</a>
            </Button>
          </div>
        </div>
      </section>
    ))}

    <section
      className="relative border-t-4 border-[#ff2c56] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/images/stock/floating-water.png')" }}
    >
      <div className="absolute inset-0 bg-white/35" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Book?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/80">Schedule your mobile nail appointment today.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild className="h-12 border-2 border-[#ff2c56] bg-[#ff2c56] px-8 text-base font-semibold text-white hover:bg-[#ff2c56]/90">
            <a rel="noreferrer noopener" href="https://www.vagaro.com/sannastyles" target="_blank">Book on Vagaro</a>
          </Button>
          <Button asChild className="h-12 border-2 border-black/20 bg-white px-8 text-base font-semibold text-black hover:bg-white/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
