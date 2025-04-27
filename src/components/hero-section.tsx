"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@components/button";
import { ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// TA-DO:
// 1. Put links
// 2. Refactor
// 3. Check for perf/acc
// 4. localization
// 5. Put actual images
// 6. Positioning of background shapes

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    "/cat.jpg",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ];

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
      mousePosition.y * 100
    }%, 
              rgba(0, 175, 239, 0.06) 0%, 
              rgba(42, 54, 125, 0.04) 30%, 
              rgba(255, 255, 255, 0.05) 50%, 
              rgba(255, 255, 255, 0) 70%)`,
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden bg-white min-h-screen"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#2a367d"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={gradientStyle}
      ></div>

      <div
        className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#00aeef]/10 to-transparent blur-xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 30 - 15}px, ${
            mousePosition.y * 30 - 15
          }px)`,
          left: "5%",
          top: "15%",
        }}
      ></div>

      <div
        className="absolute h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#2a367d]/10 to-transparent blur-xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -25 + 12.5}px, ${
            mousePosition.y * -25 + 12.5
          }px)`,
          right: "10%",
          bottom: "10%",
        }}
      ></div>

      <div
        className="absolute h-4 w-4 rounded-full bg-[#00aeef]/30 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 50 - 25}px, ${
            mousePosition.y * 50 - 25
          }px)`,
          left: "25%",
          top: "30%",
        }}
      ></div>

      <div
        className="absolute h-3 w-3 rounded-full bg-[#2a367d]/30 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -40 + 20}px, ${
            mousePosition.y * -40 + 20
          }px)`,
          right: "30%",
          top: "40%",
        }}
      ></div>

      <div
        className="absolute h-5 w-5 rounded-full bg-[#ec2226]/20 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 35 - 17.5}px, ${
            mousePosition.y * 35 - 17.5
          }px)`,
          left: "60%",
          bottom: "25%",
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className={`flex flex-col justify-center space-y-8 transition-all duration-1000 ease-in-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 items-center rounded-full bg-[#2a367d]/10 px-3 text-sm font-medium text-[#2a367d]">
                  <MapPin className="mr-1 h-3.5 w-3.5" />
                  <span>Pakistan</span>
                </div>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-[#2a367d] sm:text-5xl md:text-6xl">
                <span className="block">Allied Schools</span>
                <span className="block text-[#00aeef] text-2xl sm:text-3xl md:text-4xl font-medium mt-2">
                  Shaping Minds, Building Futures
                </span>
              </h1>

              <p className="mt-6 max-w-[600px] text-lg text-gray-600 sm:text-xl">
                A nurturing environment where young minds discover their
                potential through innovative learning, critical thinking, and
                character development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="group bg-[#00aeef] hover:bg-[#00aeef]/90 text-white">
                Apply Now
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-[#2a367d]/30 text-[#2a367d] hover:bg-[#2a367d]/10"
              >
                Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="border-[#2a367d]/30 text-[#2a367d] hover:bg-[#2a367d]/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div
            className={`relative h-[400px] overflow-hidden rounded-xl shadow-xl transition-all duration-1000 ease-in-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {carouselImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Allied Schools - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a367d]/20 to-transparent"></div>
              </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-all hover:bg-white/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-all hover:bg-white/50"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div
          className={`mt-12 grid grid-cols-2 gap-4 rounded-xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-4 lg:mt-16 transition-all duration-1000 delay-300 ease-in-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.9), rgba(0,174,239,0.05), rgba(255,255,255,0.9))",
          }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2a367d]">25+</div>
            <div className="text-sm text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2a367d]">100%</div>
            <div className="text-sm text-gray-600">Qualified Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2a367d]">50+</div>
            <div className="text-sm text-gray-600">
              Extracurricular Activities
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2a367d]">1000+</div>
            <div className="text-sm text-gray-600">Successful Graduates</div>
          </div>
        </div>
      </div>
    </div>
  );
}
