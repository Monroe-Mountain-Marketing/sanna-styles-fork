import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/single-flower.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          Tips, trends, and behind-the-scenes stories from Sanna Styles.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-sm font-semibold uppercase tracking-wide text-foreground/70">
          Topics We Cover
        </p>
        <ul className="mx-auto mt-3 flex max-w-3xl flex-wrap justify-center gap-2">
          {['Nail Care', 'Trends', 'Behind the Scenes', 'Mobile Salon Life', 'Events', 'Tips & Tricks'].map((tag) => (
            <li key={tag} className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-sm font-medium text-foreground">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-t-4 border-[#ff2c56] bg-background py-14 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <img src="/images/blogs/pamper-employees.jpg" alt="Employee appreciation nail service" className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-muted-foreground">July 2026</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                Looking for a Unique Way to Reward and Pamper Your Employees?
              </h3>
              <p className="mt-3 flex-1 text-muted-foreground">
                Discover how Sanna Styles brings luxury mobile nail services directly to your office for employee and client appreciation events.
              </p>
              <Button asChild variant="outline" className="mt-5 w-fit">
                <Link to="/blog/corporate-pampering">Read Article</Link>
              </Button>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <img src="/images/blogs/trade-show.jpg" alt="Trade show nail art booth" className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-muted-foreground">July 2026</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                Looking to Make a Lasting Impression at Your Next Convention or Trade Show?
              </h3>
              <p className="mt-3 flex-1 text-muted-foreground">
                Learn how on-site mini manicures and branded nail art can draw crowds and make your booth unforgettable.
              </p>
              <Button asChild variant="outline" className="mt-5 w-fit">
                <Link to="/blog/trade-show-activation">Read Article</Link>
              </Button>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <img src="/images/blogs/bridal-pampering.jpg" alt="Bridal party pampering" className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-muted-foreground">July 2026</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                The Perfect Bridal Party Pampering Experience with Sanna Styles
              </h3>
              <p className="mt-3 flex-1 text-muted-foreground">
                From premium pedicures to custom nail art, discover how Sanna Styles brings a full luxury salon experience to your wedding prep.
              </p>
              <Button asChild variant="outline" className="mt-5 w-fit">
                <Link to="/blog/bridal-pampering">Read Article</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>

  </div>
);

export default BlogPage;
