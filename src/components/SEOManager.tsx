import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Sanna Styles Mobile Salon';
const SITE_BASE_URL = 'https://www.sannastyles.com';
const DEFAULT_IMAGE = '/images/stock/flower.jpeg';
const CITY_NAME = 'Salt Lake City';
const STATE_CODE = 'UT';
const COUNTRY_CODE = 'US';
const GEO_LATITUDE = 40.7608;
const GEO_LONGITUDE = -111.891;
const DEFAULT_DESCRIPTION =
  'Luxury mobile nail services, private events, and salon experiences in Salt Lake City and surrounding Utah areas.';

type RouteSeo = {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  noindex?: boolean;
  serviceType?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const routeSeoMap: Record<string, RouteSeo> = {
  '/': {
    title: 'Mobile Nail Services in Salt Lake City, Utah',
    description:
      'Book luxury mobile nail services with Sanna Styles for appointments, events, and private experiences throughout Salt Lake City and nearby areas.',
    image: '/images/stock/pink-glitter-nails.jpeg',
    keywords:
      'mobile nail salon, mobile nails utah, salt lake city nails, nail artist, luxury nail services, private nail appointments',
  },
  '/about': {
    title: 'About Sanna Styles',
    description:
      'Learn the story behind Sanna Styles and our passion for elevated mobile nail experiences, artistry, and client care.',
    image: '/images/stock/color-swatches.jpeg',
  },
  '/services': {
    title: 'Nail Services',
    description:
      'Explore manicure, pedicure, gel, acrylic, and custom nail art services offered by Sanna Styles.',
    image: '/images/stock/doing-nails.jpeg',
    serviceType: 'Nail Services',
  },
  '/contact': {
    title: 'Contact Sanna Styles',
    description:
      'Contact Sanna Styles for appointments, party bookings, collaborations, and service questions.',
    image: '/images/stock/flower.jpeg',
  },
  '/nail-gallery': {
    title: 'Nail Gallery',
    description:
      'Browse the Sanna Styles nail gallery featuring custom designs, event looks, and luxury nail artistry.',
    image: '/images/sanna/gallery/gallery-091.jpg',
  },
  '/book-a-large-party-today': {
    title: 'Book a Large Party',
    description:
      'Plan a large party or event with premium mobile nail services designed for memorable guest experiences.',
    image: '/images/sanna/events/events1.jpg',
    serviceType: 'Large Party Nail Services',
  },
  '/the-luxe-night-market-by-sanna-styles': {
    title: 'The Luxe Night Market',
    description:
      'Discover The Luxe Night Market by Sanna Styles featuring beauty, creativity, and elevated event experiences.',
    image: '/images/sanna/events/luxenight.jpg',
  },
  '/careers': {
    title: 'Careers at Sanna Styles',
    description:
      'Join Sanna Styles and grow your career in a modern, creative, client-first beauty environment.',
    image: '/images/sanna/careers/careers.jpg',
  },
  '/for-nail-technicians': {
    title: 'For Nail Technicians',
    description:
      'Training opportunities and professional resources for nail technicians with Sanna Styles.',
    image: '/images/sanna/careers/masterclass1.jpg',
  },
  '/mobile-salon-rent': {
    title: 'Mobile Salon Rent',
    description:
      'Rent a mobile salon setup for premium on-location beauty services and branded experiences.',
    image: '/images/sanna/events/events5.jpg',
    serviceType: 'Mobile Salon Rental',
  },
  '/blog': {
    title: 'Blog',
    description:
      'Read beauty tips, trends, event inspiration, and updates from Sanna Styles.',
    image: '/images/stock/single-flower.jpeg',
  },
  '/how-to-book': {
    title: 'How to Book',
    description:
      'Learn how to book your Sanna Styles appointment, event, or custom service in a few easy steps.',
    image: '/images/stock/iridescent.jpeg',
    serviceType: 'Beauty Appointment Booking',
  },
  '/service-areas': {
    title: 'Service Areas in Salt Lake City, Utah',
    description:
      'See the Utah cities and neighborhoods where Sanna Styles offers luxury mobile nail appointments and event services.',
    image: '/images/stock/natural-swatches.jpeg',
    serviceType: 'Mobile Nail Services Coverage Area',
    keywords:
      'service areas, mobile nails salt lake city, utah mobile nail technician, nail services near me, mobile salon utah',
  },
  '/policies': {
    title: 'Policies',
    description:
      'Review Sanna Styles booking, cancellation, and service policies before your appointment.',
    image: '/images/stock/passion-balloons.jpeg',
  },
  '/privacy': {
    title: 'Privacy Policy',
    description:
      'Read the Sanna Styles privacy policy and learn how your information is handled.',
    noindex: true,
  },
  '/terms': {
    title: 'Terms of Service',
    description:
      'Read the Sanna Styles terms of service and usage conditions.',
    noindex: true,
  },
};

const routeFaqMap: Record<string, FaqItem[]> = {
  '/mobile-salon-rent': [
    {
      question: 'What happens if rental items get damaged?',
      answer:
        'Sanna Styles covers rental items under warranty and replaces or refills items as needed except in cases of obvious purposeful damage.',
    },
    {
      question: 'How does payment work for Mobile Salon Rent?',
      answer:
        'The rental includes a one-time setup fee of $50 and a recurring monthly booth renter fee of $300 billed on the first day of each month.',
    },
    {
      question: 'How long is the Mobile Salon Rental agreement?',
      answer:
        'The agreement starts with a required 12-month term and then transitions to month-to-month billing after the initial term.',
    },
  ],
  '/how-to-book': [
    {
      question: 'How do I book with Sanna Styles?',
      answer:
        'You can submit a contact request through the site or book directly through Vagaro. Sanna Styles will confirm your service details and availability.',
    },
    {
      question: 'What areas does Sanna Styles serve?',
      answer: 'Sanna Styles serves Salt Lake City, Utah and surrounding areas by appointment.',
    },
  ],
  '/contact': [
    {
      question: 'How can I contact Sanna Styles?',
      answer:
        'You can call (801) 923-3148, email contact@sannastyles.com, or use the contact form on this page.',
    },
    {
      question: 'Where does Sanna Styles provide services?',
      answer: 'Sanna Styles provides mobile services in Salt Lake City, Utah and nearby surrounding areas.',
    },
  ],
  '/service-areas': [
    {
      question: 'What areas does Sanna Styles serve?',
      answer:
        'Sanna Styles serves Salt Lake City and surrounding communities including Millcreek, Murray, Holladay, Sandy, Draper, West Valley City, and nearby areas.',
    },
    {
      question: 'Can Sanna Styles travel outside the primary area?',
      answer:
        'Extended travel may be available for select bookings and larger events based on scheduling and location details.',
    },
  ],
};

const routeNameMap: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/contact': 'Contact',
  '/nail-gallery': 'Nail Gallery',
  '/book-a-large-party-today': 'Book a Large Party',
  '/the-luxe-night-market-by-sanna-styles': 'The Luxe Night Market',
  '/careers': 'Careers',
  '/for-nail-technicians': 'For Nail Technicians',
  '/mobile-salon-rent': 'Mobile Salon Rent',
  '/blog': 'Blog',
  '/how-to-book': 'How to Book',
  '/service-areas': 'Service Areas',
  '/policies': 'Policies',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
};

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  return `${SITE_BASE_URL}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
}

function setMetaByName(name: string, content: string) {
  let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let tag = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function setJsonLd(json: object) {
  const scriptId = 'seo-json-ld';
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(json);
}

function buildBreadcrumbs(pathname: string) {
  const items = [{ name: 'Home', path: '/' }];

  if (pathname === '/') {
    return items;
  }

  const parts = pathname.split('/').filter(Boolean);
  let currentPath = '';

  parts.forEach((part) => {
    currentPath += `/${part}`;
    items.push({
      name: routeNameMap[currentPath] || part.replace(/-/g, ' '),
      path: currentPath,
    });
  });

  return items;
}

export default function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = routeSeoMap[location.pathname] ?? {
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
    };

    const title = `${seo.title} | ${SITE_NAME}`;
    const description = seo.description || DEFAULT_DESCRIPTION;
    const image = absoluteUrl(seo.image || DEFAULT_IMAGE);
    const canonical = absoluteUrl(location.pathname);

    document.title = title;

    setCanonical(canonical);
    setMetaByName('description', description);
    setMetaByName('title', title);
    setMetaByName('robots', seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    setMetaByName(
      'keywords',
      seo.keywords ||
        'sanna styles, mobile salon, mobile nail services, nail artist utah, salt lake city beauty services, event nail services',
    );

    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:site_name', SITE_NAME);
    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', canonical);
    setMetaByProperty('og:image', image);
    setMetaByProperty('og:locale', 'en_US');

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', image);

    setMetaByName('twitter:site', '@sannastyles');
    setMetaByName('format-detection', 'telephone=yes');

    const breadcrumbs = buildBreadcrumbs(location.pathname);
    const faqItems = routeFaqMap[location.pathname] || [];

    const graph: object[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        '@id': `${SITE_BASE_URL}#business`,
        name: SITE_NAME,
        url: SITE_BASE_URL,
        image,
        telephone: '+1-801-923-3148',
        email: 'contact@sannastyles.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: CITY_NAME,
          addressRegion: STATE_CODE,
          addressCountry: COUNTRY_CODE,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO_LATITUDE,
          longitude: GEO_LONGITUDE,
        },
        hasMap: `https://www.google.com/maps?q=${GEO_LATITUDE},${GEO_LONGITUDE}`,
        areaServed: 'Salt Lake City, Utah and surrounding areas',
        sameAs: ['https://www.vagaro.com/sannastyles'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_BASE_URL}#website`,
        url: SITE_BASE_URL,
        name: SITE_NAME,
        inLanguage: 'en-US',
        publisher: {
          '@id': `${SITE_BASE_URL}#business`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: {
          '@id': `${SITE_BASE_URL}#website`,
        },
        about: {
          '@id': `${SITE_BASE_URL}#business`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: image,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      },
    ];

    if (seo.serviceType) {
      graph.push({
        '@type': 'Service',
        name: seo.serviceType,
        serviceType: seo.serviceType,
        provider: {
          '@id': `${SITE_BASE_URL}#business`,
        },
        areaServed: [
          {
            '@type': 'City',
            name: CITY_NAME,
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Utah',
          },
        ],
        url: canonical,
      });
    }

    if (faqItems.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      });
    }

    setJsonLd({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }, [location.pathname]);

  return null;
}