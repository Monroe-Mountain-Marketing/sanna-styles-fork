import React from 'react';
import { Button } from '@/components/ui/button';

const BlogBridalPamperingPage: React.FC = () => (
  <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-28"
      style={{ backgroundImage: "url('/images/blogs/bridal-pampering.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/75" aria-hidden="true" />
      <div className="relative container mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Sanna Styles Blog</p>
        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-bold text-primary md:text-5xl">
          The Perfect Bridal Party Pampering Experience with Sanna Styles
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
            href="/book-a-large-party-today"
            className="text-lg font-semibold text-primary underline underline-offset-4"
          >
            Book Your Event Today
          </a>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground">
          Hey, beautiful brides-to-be! Your wedding day is fast approaching, and we know you want everything to be absolutely perfect. From the venue to the dress, every detail matters. But let&apos;s not forget one crucial part of the big day: looking and feeling your best! That&apos;s where Sanna Styles comes in—a traveling mobile salon that brings luxurious beauty services right to your doorstep, no matter where you are. Get ready to pamper yourself and your bridal party like never before!
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">Premium Package: The Ultimate Bridal Party Treat</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Picture this: You and your bridal party relaxing in the comfort of your chosen location, sipping on mimosas, and getting pampered from head to toe. Sounds dreamy, right? With Sanna Styles&apos; Premium package, that dream becomes a reality. This top-tier service lasts 60–75 minutes per person and includes everything you need for flawless nails.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          First up, pedicures with a luxurious footbath that will melt away any pre-wedding stress. The Premium package ensures your nails are in perfect condition with cuticle care, nail shaping, and a thorough nail health inspection. Got some stubborn calluses? No worries! We&apos;ve got you covered with our callus treatment, leaving your feet soft and smooth.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          But that&apos;s not all. Enjoy a soothing lotion massage that not only feels amazing but also preps your skin for the final touch: the application of gel or polish in any color you desire. Whether you go for classic French tips, a bold red, or something uniquely you, our team ensures your nails look stunning.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">More Ways to Shine: Additional Service Options</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Want to add an extra sparkle to your nails? Check out our nail art upgrade. This option allows you to personalize your nails with designs ranging from simple elegance to intricate masterpieces. Each upgrade adds about 30 minutes to your service, giving us plenty of time to perfect your look. Imagine matching your nails to your wedding theme or adding a touch of glamour with some sparkle—totally worth the extra time!
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          If you&apos;re looking for a more straightforward service, our Standard package is perfect for you. Lasting 30–45 minutes per person, this package includes simple nail and cuticle care, a relaxing massage, and the application of gel or polish in any color. While it doesn&apos;t include a footbath for pedicures, it still offers a fabulous pampering experience that leaves your nails looking gorgeous.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">Why Choose Sanna Styles?</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Sanna Styles isn&apos;t just about nails; it&apos;s about convenience, luxury, and making your wedding prep as smooth and enjoyable as possible. We bring the salon experience to you, whether you&apos;re in a remote location, a cozy hotel, or the comfort of your own home. No need to stress about traveling or squeezing in appointments at a busy salon. Instead, relax and enjoy quality time with your bridal party while we take care of the rest.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Plus, supporting Sanna Styles means supporting a business that values empowerment and convenience. We understand the importance of feeling confident and beautiful on your special day, and we&apos;re here to make that happen.
        </p>

        <h2 className="mt-10 text-3xl font-bold text-foreground">Book Your Sanna Styles Experience Today!</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Your wedding day is one of the most important days of your life, and you deserve to feel absolutely amazing. Don&apos;t leave your beauty prep to chance. Book Sanna Styles today and treat yourself and your bridal party to an unforgettable pampering experience. Let&apos;s make your big day as beautiful and stress-free as possible!
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Here&apos;s to love, happiness, and gorgeous nails! 🥂💅👰
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

export default BlogBridalPamperingPage;
