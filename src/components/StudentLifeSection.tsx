import React, { useState, useEffect } from 'react';
import { InView } from './ui/in-view';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const StudentLifeSection = () => {
  const images = [
    "https://i.imgur.com/KSHUrgP.jpeg",
    "https://i.imgur.com/YqRhjAx.jpeg",
    "https://i.imgur.com/og5Xkom.jpeg",
    "https://i.imgur.com/oPOyATA.jpeg",
    "https://i.imgur.com/eVo8eYl.jpeg",
    "https://i.imgur.com/Ebr66Jg.jpeg",
    "https://i.imgur.com/55rE0R8.jpeg",
    "https://i.imgur.com/yv24Bj1.jpeg",
    "https://i.imgur.com/BKu9LNH.jpeg",
    "https://i.imgur.com/eVzxCUf.jpeg",
    "https://i.imgur.com/fkr8T23.jpeg",
    "https://i.imgur.com/ok5Lc6u.jpeg",
    "https://i.imgur.com/H3Er8BA.jpeg",
    "https://i.imgur.com/YGURtyz.jpeg",
    "https://i.imgur.com/VcF77OM.jpeg",
    "https://i.imgur.com/W5ydknw.jpeg",
    "https://i.imgur.com/iZAow8f.jpeg",
    "https://i.imgur.com/26omH46.jpeg",
    "https://i.imgur.com/E4XWdCP.jpeg",
    "https://i.imgur.com/6bLitwj.jpeg",
    "https://i.imgur.com/VSlbBYO.jpeg",
    "https://i.imgur.com/SCU3wa9.jpeg",
    "https://i.imgur.com/R1pjYYj.jpeg",
    "https://i.imgur.com/RNEaHdZ.jpeg",
    "https://i.imgur.com/d7uYvp5.jpeg",
    "https://i.imgur.com/VsAFqXZ.jpeg",
    "https://i.imgur.com/HQ2aIEZ.png",
    "https://i.imgur.com/6plpYnW.jpeg",
    "https://i.imgur.com/k018UnK.jpeg",
  ];

  const [visibleImages, setVisibleImages] = useState(9);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setVisibleImages(isMobile ? 3 : 9);
  }, []);

  const loadMoreImages = () => {
    const isMobile = window.innerWidth < 768;
    setVisibleImages(prev => Math.min(prev + (isMobile ? 3 : 9), images.length));
    setKey(prev => prev + 1);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-2">
            What's It Like to Be a Student at INTERLINK?
          </h2>
          <p className="text-lg text-gray-700">
            Take a look at student life, inside and outside the classroom!
          </p>
        </div>
        <InView
          key={key}
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
          }}
        >
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-8">
            {images.slice(0, visibleImages).map((imgSrc, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                }}
                key={index}
                className="mb-4 break-inside-avoid"
              >
                <img
                  src={imgSrc}
                  alt={`Student life at INTERLINK ${index + 1}`}
                  className="w-full rounded-lg object-contain"
                  style={{ aspectRatio: "auto" }}
                />
              </motion.div>
            ))}
          </div>
        </InView>

        {visibleImages < images.length && (
          <div className="flex justify-center mt-8">
            <Button onClick={loadMoreImages} size="lg" className="px-8">
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentLifeSection;
