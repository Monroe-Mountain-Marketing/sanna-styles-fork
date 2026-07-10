import React from 'react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: 'How Mobile Nail Services Work',
    date: 'June 2026',
    excerpt: 'Curious about what a mobile nail appointment actually looks like? Here\'s everything you need to know before booking.',
    href: '/contact',
  },
  {
    title: 'Top Nail Trends for Summer',
    date: 'June 2026',
    excerpt: 'From pastel glazes to bold negative space designs, here are the nail looks we\'re loving this season.',
    href: '/contact',
  },
  {
    title: 'Why We Started Sanna Styles',
    date: 'May 2026',
    excerpt: 'The story behind Utah\'s premier mobile nail salon concierge — from a downtown apprenticeship to a full mobile operation.',
    href: '/about',
  },
];

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
        <h2 className="text-3xl font-bold text-foreground">Latest Posts</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">{post.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{post.title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{post.excerpt}</p>
              <Button asChild variant="outline" className="mt-5 w-fit">
                <a rel="noreferrer noopener" href={post.href}>Read More</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default BlogPage;
