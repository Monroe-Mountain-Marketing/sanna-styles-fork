import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ContactPage: React.FC = () => {
  useEffect(() => {
    const scriptId = 'gohighlevel-form-embed';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{ backgroundImage: "url('/images/stock/iridescent.jpeg')" }}
      >
        <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
        <img src="/images/page/wavy-2.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover z-[1] pointer-events-none" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
            Questions, event requests, or custom bookings. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="border-t-4 border-[#f49ca3] bg-background py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left column — contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Reach out any time. We'd love to help you plan your next appointment or event.
                </p>
              </div>

              <div className="space-y-5">
                <div className="rounded-none border-l-2 border-border/60 bg-transparent p-0 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">Phone</p>
                  <a href="tel:+18019233148" className="mt-1 inline-block text-lg text-foreground hover:underline">
                    (801) 923-3148
                  </a>
                </div>

                <div className="rounded-none border-l-2 border-border/60 bg-transparent p-0 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">Email</p>
                  <a href="mailto:contact@sannastyles.com" className="mt-1 inline-block text-lg text-foreground hover:underline">
                    contact@sannastyles.com
                  </a>
                </div>

                <div className="rounded-none border-l-2 border-border/60 bg-transparent p-0 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">Service Area</p>
                  <p className="mt-1 text-lg text-foreground">Salt Lake City, Utah &amp; surrounding areas</p>
                </div>

                <div className="rounded-none border-l-2 border-border/60 bg-transparent p-0 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">Hours</p>
                  <p className="mt-1 text-lg text-foreground">By appointment — flexible scheduling available</p>
                </div>

                <div className="rounded-none border-l-2 border-border/60 bg-transparent p-0 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">Book Online</p>
                  <Button asChild className="mt-2 h-10 px-6">
                    <a rel="noreferrer noopener" href="https://www.vagaro.com/sannastyles" target="_blank">
                      Book on Vagaro
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right column — embedded contact form */}
            <div className="rounded-none border-l-2 border-border/60 bg-transparent p-0 pl-5">
              <h2 className="mb-0 text-2xl font-bold text-foreground">Send Us a Message</h2>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/fsQn3UoGQeT90v9pwKef"
                style={{ width: '100%', height: '559px', border: 'none', borderRadius: '3px' }}
                id="inline-fsQn3UoGQeT90v9pwKef"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us"
                data-height="559"
                data-layout-iframe-id="inline-fsQn3UoGQeT90v9pwKef"
                data-form-id="fsQn3UoGQeT90v9pwKef"
                title="Contact Us"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
