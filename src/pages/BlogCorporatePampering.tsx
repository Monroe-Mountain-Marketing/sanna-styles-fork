import React from 'react';
import { Button } from '@/components/ui/button';

const BlogCorporatePamperingPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-28"
      style={{ backgroundImage: "url('/images/blogs/pamper-employees.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/75" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Sanna Styles Blog</p>
        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-bold text-primary md:text-5xl">
          Looking for a Unique Way to Reward and Pamper Your Employees?
        </h1>
      </div>
    </section>

    <section className="border-t-4 border-[#ff2c56] bg-background py-14 md:py-16">
      <article className="container mx-auto max-w-4xl px-4 text-foreground">
        <div className="mb-6">
          <Button asChild variant="outline">
            <a href="/blog">&larr; Back to All Blogs</a>
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

        <h2 className="text-3xl font-bold text-foreground">Looking for a Unique Way to Reward and Pamper Your Employees?</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          If you&apos;re a company leader, HR professional, or office manager searching for a way to show appreciation to your hardworking team, you&apos;re in the right place! At Sanna Styles, we bring luxury nail services directly to your office, offering a convenient and unique way to treat employees to a refreshing break. Whether you want to reward team members for hitting company goals, celebrate a special milestone, or simply show them how much they&apos;re valued, our mobile nail salon services are here to help.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">Why Choose Sanna Styles for Corporate Appreciation Events?</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Sanna Styles is more than a mobile nail service, we create a memorable experience tailored for busy professionals. Our Large Private Event service transforms any office space into a mini spa, equipped with top-quality tools and professional technicians ready to pamper your team. Imagine the impact of giving your employees a chance to relax, unwind, and feel valued, right at the workplace! Here are a few reasons why companies in Utah are choosing Sanna Styles to pamper their employees and clients:
        </p>

        <h3 className="mt-8 text-2xl font-semibold text-foreground">Employee Appreciation with a Personal Touch</h3>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          Show your team that you care by offering them a spa day they&apos;ll never forget. Our services are designed to be luxurious yet convenient, perfect for team-building days, client appreciation events, or as a special reward.
        </p>

        <h3 className="mt-8 text-2xl font-semibold text-foreground">Celebrate Milestones and Company Achievements</h3>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          Reached a major goal or closed a big deal? Reward your employees with something more exciting than a typical office lunch. Our mobile nail technicians bring everything needed to create a salon experience, making it easy to give back and celebrate your team&apos;s hard work.
        </p>

        <h3 className="mt-8 text-2xl font-semibold text-foreground">Client Appreciation Events That Stand Out</h3>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          If you&apos;re a law firm, consulting agency, or any business that wants to show gratitude to clients, our on-site nail services provide a memorable experience that clients will talk about long after the event. Offering a pampering session as a thank you can set your business apart and strengthen client relationships.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">Our Services Are Designed for Corporate Convenience</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Sanna Styles is 100% mobile, meaning we handle setup, breakdown, and everything in between. From quick manicures to relaxing hand treatments, our services can be customized to fit your company&apos;s unique needs, ensuring every attendee leaves feeling relaxed and appreciated.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">Book a Corporate Pampering Experience Today!</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Ready to bring luxury and appreciation to your team? Contact us to book our Large Private Event service for your next employee appreciation day, client thank-you event, or team celebration. We&apos;ll take care of everything, so you can focus on enjoying the positive energy and smiles our service brings to your workplace.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild className="border-0 bg-[#e2cf5d] px-8 py-6 text-lg font-bold text-black shadow-md hover:bg-[#e2cf5d]/90">
            <a href="/book-a-large-party-today">
              Book Your Event Today
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/blog">&larr; Back to All Blogs</a>
          </Button>
        </div>
      </article>
    </section>
  </div>
);

export default BlogCorporatePamperingPage;
