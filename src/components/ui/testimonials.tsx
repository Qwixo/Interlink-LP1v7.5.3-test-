import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Card } from "./card";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  image?: string;
  name: string;
  username: string;
  text: string;
  social: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
  incrementAmount?: number;
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Dummy feedback from virtual customers using our component library.",
  maxDisplayed = 6,
  incrementAmount = 6,
}: TestimonialsProps) {
  const [displayCount, setDisplayCount] = useState(maxDisplayed);
  
  const loadMoreTestimonials = () => {
    // Increase by incrementAmount, but don't exceed total testimonials length
    setDisplayCount(prev => Math.min(prev + incrementAmount, testimonials.length));
  };

  const hasMoreToLoad = displayCount < testimonials.length;

  // Helper function to check if an image should be displayed
  const shouldDisplayImage = (imageUrl?: string) => {
    return imageUrl && !imageUrl.includes("https://images.unsplash.com/photo-1500648767791-");
  };

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-8">
          {title && (
            <h2 className="text-center text-4xl font-medium text-[#064088]">{title}</h2>
          )}
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <AnimatePresence>
            {testimonials.slice(0, displayCount).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index >= displayCount - incrementAmount ? 0.1 * (index % incrementAmount) : 0 
                }}
              >
                <Card
                  className="w-80 h-auto p-5 relative bg-white border-gray-200"
                >
                  <div className="flex items-center">
                    {shouldDisplayImage(testimonial.image) ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : null}
                    <div className={`flex flex-col ${shouldDisplayImage(testimonial.image) ? 'pl-4' : 'pl-0'}`}>
                      <span className="font-semibold text-base">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {testimonial.username}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 mb-5">
                    <p className="text-gray-700 font-medium">
                      {testimonial.text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMoreToLoad && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button variant="secondary" onClick={loadMoreTestimonials}>
                Load More
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
