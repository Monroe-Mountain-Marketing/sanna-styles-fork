import React, { useMemo, useState } from 'react';

type GalleryItem = {
  src: string;
  alt: string;
  tags: string[];
};

const GALLERY_IMAGE_COUNT = 183;
const EXCLUDED_GALLERY_NUMBERS = new Set([57, 167]);

const galleryItems: GalleryItem[] = Array.from({ length: GALLERY_IMAGE_COUNT }, (_, index) => index + 1)
  .filter((number) => !EXCLUDED_GALLERY_NUMBERS.has(number))
  .map((number) => {
    const imageId = String(number).padStart(3, '0');

    return {
      src: `/images/sanna/gallery/gallery-${imageId}.jpg`,
      alt: `Sanna Styles gallery image ${number}`,
      tags: ['nails', 'nail art', 'gallery', 'mobile', `set ${number}`],
    };
  });
const IMAGES_PER_PAGE = 16;

const NailGalleryPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => galleryItems, []);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / IMAGES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedItems = useMemo(() => {
    const start = (safePage - 1) * IMAGES_PER_PAGE;
    return filteredItems.slice(start, start + IMAGES_PER_PAGE);
  }, [filteredItems, safePage]);

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
        style={{ backgroundImage: "url('/images/stock/pink-glitter-nails.jpeg')" }}
      >
        <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Nail Gallery</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
            Explore custom sets, event looks, and signature styles created by Sanna Styles.
          </p>
        </div>
      </section>

      <section className="border-t-4 border-[#ff2c56] bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {paginatedItems.map((item) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveImage(item)}
                className="group aspect-square overflow-hidden rounded-2xl border border-border text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="mt-8 text-center text-muted-foreground">No images match your search yet. Try another keyword.</p>
          )}

          {filteredItems.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className="rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-muted-foreground">Page {safePage} of {totalPages}</span>
              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                className="rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 rounded-md bg-white/90 px-3 py-1 text-sm font-semibold text-black"
          >
            Close
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[90vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default NailGalleryPage;
