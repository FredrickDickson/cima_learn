import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
}

const cimaImages: CarouselImage[] = [
  {
    src: "/attached_assets/DSC_3580-scaled_1757354302026.jpg",
    alt: "CIMA professionals at international conference"
  },
  {
    src: "/attached_assets/DSC_3992-scaled_1757354310122.jpg", 
    alt: "CIMA training session with international mediators"
  },
  {
    src: "/attached_assets/DSC_4014-1-scaled_1757354351105.jpg",
    alt: "CIMA professional development program"
  },
  {
    src: "/attached_assets/DSC_3988-scaled_1757354374474.jpg",
    alt: "Expert mediator and arbitrator at CIMA event"
  },
  {
    src: "/attached_assets/DSC_3577-scaled_1757354405003.jpg", 
    alt: "CIMA leadership team and international professionals"
  },
  {
    src: "/attached_assets/Untitled-design_1757354445370.png",
    alt: "CIMA certified professional arbitrator"
  }
];

export default function CIMACarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === cimaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? cimaImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === cimaImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl h-full">
        <img
          src={cimaImages[currentIndex].src}
          alt={cimaImages[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {cimaImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white shadow-lg'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}