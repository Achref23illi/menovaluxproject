'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Card, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel'

const galleryImages = [
  '/images/20180726_114640.jpg',
  '/images/20180726_145248.jpg',
  '/images/20180727_102008.jpg',
  '/images/20180810_113641.jpg',
  '/images/20180810_113649.jpg',
  '/images/20180810_113652.jpg',
  '/images/20180810_113713.jpg',
  '/images/20190813_012624.jpg',
  '/images/20190813_050838.jpg',
  '/images/20190813_063140.jpg',
  '/images/20190813_063142.jpg',
  '/images/20190814_041246.jpg',
  '/images/20190816_215559.jpg',
  '/images/20190816_215608.jpg',
  '/images/20190818_202319.jpg',
  '/images/20190819_230324.jpg',
  '/images/20190821_210534.jpg',
  '/images/20190823_172656.jpg',
  '/images/20190823_204200.jpg',
  '/images/20190826_220427.jpg',
  '/images/20190826_220432.jpg',
  '/images/20190829_101302.jpg',
  '/images/20190829_101402.jpg',
  '/images/20190830_013023.jpg',
  '/images/20190830_013028.jpg',
  '/images/20190830_013035.jpg',
  '/images/20190830_013040.jpg',
  '/images/20190830_013044.jpg',
  '/images/20190830_013048.jpg',
  '/images/20190920_224235.jpg',
  '/images/20190926_000310.jpg',
  '/images/20190926_000347.jpg',
  '/images/20190926_015906.jpg',
  '/images/20200218_105137.jpg',
  '/images/20200218_105257.jpg',
  '/images/20200218_105304.jpg',
  '/images/20200720_232213.jpg',
  '/images/20200720_232218.jpg',
  '/images/20200721_134220.jpg',
  '/images/20200722_170309.jpg',
  '/images/20200722_180739.jpg',
  '/images/20200722_180752.jpg',
  '/images/20200722_180832.jpg',
  '/images/20200722_180958.jpg',
  '/images/20200722_181035.jpg',
  '/images/IMG-20180719-WA0015.jpeg',
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [api, setApi] = useState<CarouselApi>()

  const startAutoplay = useCallback(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 3000) // 3 seconds delay

    return interval
  }, [api])

  useEffect(() => {
    if (!api) return

    // Start autoplay
    const autoplayInterval = startAutoplay()

    // Stop autoplay on user interaction
    const stopAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
    }

    // Resume autoplay after user interaction
    const resumeAutoplay = () => {
      setTimeout(() => {
        if (api) {
          startAutoplay()
        }
      }, 2000) // Resume after 2 seconds
    }

    // Add event listeners
    api.on('pointerDown', stopAutoplay)
    api.on('pointerUp', resumeAutoplay)

    // Cleanup
    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
      api.off('pointerDown', stopAutoplay)
      api.off('pointerUp', resumeAutoplay)
    }
  }, [api, startAutoplay])

      return (
      <section id="gallery" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Galerie de Nos Travaux
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Parcourez notre portfolio de projets terminés et découvrez la qualité de notre savoir-faire dans chaque réalisation.
              </p>
            </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            slidesToScroll: 1,
          }}
          setApi={setApi}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden bg-gray-700 border-gray-600 hover:border-[#C9A961] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                                                <Image
                        src={image}
                        alt={`Image de réalisation ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#C9A961] rounded-full p-3">
                          <svg
                            className="w-6 h-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 bg-gray-800 border-gray-600">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={image}
                        alt={`Image de réalisation ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:-left-12 border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black" />
          <CarouselNext className="right-2 lg:-right-12 border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black" />
        </Carousel>

        <div className="text-center mt-16">
          <div className="bg-gray-700 rounded-lg p-6 max-w-2xl mx-auto border border-gray-600">
            <p className="text-gray-300 text-lg mb-4">
              Vous souhaitez voir plus de nos réalisations ?
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-[#C9A961] hover:bg-[#B8975A] text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contactez-nous pour votre projet
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
} 