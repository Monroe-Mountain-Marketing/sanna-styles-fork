import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogTradeShowActivationPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-28"
      style={{ backgroundImage: "url('/images/blogs/trade-show.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/75" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Sanna Styles Blog</p>
        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-bold text-primary md:text-5xl">
          Looking to Make a Lasting Impression at Your Next Convention or Trade Show?
        </h1>
      </div>
    </section>

    <section className="border-t-4 border-[#ff2c56] bg-background py-14 md:py-16">
      <article className="container mx-auto max-w-4xl px-4 text-foreground">
        <div className="mb-6">
          <Button asChild variant="outline">
            <Link to="/blog">&larr; Back to All Blogs</Link>
          </Button>
        </div>

        <div className="mb-8 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <a
            href="https://sannastyles.com/book-a-large-party-today/#form"
            className="text-lg font-semibold text-primary underline underline-offset-4"
          >
            Book Your Event Today
          </a>
        </div>

        <h2 className="text-3xl font-bold text-foreground">Looking to Make a Lasting Impression at Your Next Convention or Trade Show?</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Let&apos;s face it, standing out at a large convention or trade show is no easy feat. With rows of booths and a sea of vendors, how can you catch the attention of attendees and make your booth memorable? That&apos;s where Sanna Styles comes in! Our 100% mobile nail service offers a unique, interactive experience that attendees will love, whether it&apos;s quick manicures, pedicures, or custom nail art. Nothing attracts a crowd quite like a little on-the-spot pampering.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">Why Nail Art and Mini Manicures Are the Perfect Trade Show Attraction</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Offering complimentary nail services might sound unexpected at a convention, but that&apos;s exactly why it works! Trade show attendees are often on their feet all day, which makes a quick pampering session a welcome reprieve. Here&apos;s how Sanna Styles can help draw in attendees and give them a reason to remember your brand:
        </p>

        <ul className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">A Fun, Shareable Experience:</strong> With our mobile setup, Sanna Styles turns your booth into a mini nail salon, where attendees can enjoy nail art or a quick manicure while they hear about your product or service. A personalized or company-branded nail design becomes a talking point that they&apos;ll share with others, both at the event and on social media.
          </li>
          <li>
            <strong className="text-foreground">Custom Nail Art Featuring Your Logo:</strong> Want to really get your brand out there? We offer hand-drawn nail art, including logos and brand colors. Imagine attendees leaving with your logo on their nails, it&apos;s a subtle, fun form of marketing that keeps your brand visible well beyond the convention hall.
          </li>
          <li>
            <strong className="text-foreground">Instant Crowd-Builder:</strong> Trade shows can be busy, but many attendees look for interactive booths to break up the day. A quick, luxurious service like a mini-manicure or logo-inspired nail art gives attendees a reason to stop by, giving your team more time to engage with them.
          </li>
        </ul>

        <h2 className="mt-10 text-3xl font-bold text-foreground">We Bring Everything You Need for a Professional Nail Experience</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Our highly trained nail technicians bring top-tier, professional products and all the equipment needed to transform your booth into a chic nail bar. From manicure tables to high-quality polishes, we make it effortless for you to provide a professional and seamless experience that matches your brand&apos;s style and standards.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">From Pampering to Personalization: Making Your Brand Memorable</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Whether you want attendees to remember your logo or simply want to be known as the booth with the best crowd-drawing appeal, Sanna Styles provides a memorable experience that feels fresh and relevant. Plus, with branded nail art, attendees leave as walking ambassadors of your brand. It&apos;s an ideal way to increase booth traffic and ensure your company&apos;s message gets the attention it deserves.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">Book Sanna Styles for Your Next Event and Watch Your Booth Buzz with Excitement!</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Ready to bring something truly unique to your next trade show or convention? Book Sanna Styles to turn your booth into a must-visit destination. With our mobile nail service, we&apos;ll bring professional, polished fun directly to your booth. Reach out today, and let&apos;s make your next event unforgettable with Sanna Styles!
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild className="border-0 bg-[#e2cf5d] px-8 py-6 text-lg font-bold text-black shadow-md hover:bg-[#e2cf5d]/90">
            <Link to="/book-a-large-party-today">
              Book Your Event Today
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/blog">&larr; Back to All Blogs</Link>
          </Button>
        </div>
      </article>
    </section>
  </div>
);

export default BlogTradeShowActivationPage;
