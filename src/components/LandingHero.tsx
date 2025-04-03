import { useRef } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { TextRotate } from "./ui/text-rotate";
import Floating, { FloatingElement } from "./ui/parallax-floating";

// Using better quality images from the Student Life section
const studentImages = [
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Student taking notes",
    author: "JESHOOTS.COM",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Students collaborating",
    author: "Brooke Cagle",
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Students studying together",
    author: "Brooke Cagle",
  },
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Student with laptop",
    author: "Marvin Meyer",
  },
  {
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "University campus",
    author: "Mikael Kristenson",
  },
];

function LandingHero() {
  return (
    <section className="w-full min-h-[90vh] py-16 flex flex-col items-center justify-start bg-white relative">
      {/* Content container - moved higher up on the page */}
      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4 font-bold"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Make your </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <motion.span
                layout
                className="flex whitespace-pre"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                future{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "brighter",
                  "global",
                  "successful",
                  "exciting",
                  "international",
                  "limitless",
                  "promising",
                  "meaningful",
                  "impactful",
                ]}
                mainClassName="overflow-hidden pr-3 text-[#064088] py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 text-gray-700"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Join thousands of students who have transformed their lives through INTERLINK's English language programs.
        </motion.p>

        <div className="flex flex-row justify-center space-x-4 items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-xs">
          <motion.button
            className="sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-white bg-[#064088] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            Learn More
          </motion.button>
          <motion.button
            className="sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-white bg-[#dc5d33] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            Apply Now
          </motion.button>
        </div>
      </div>

      {/* Floating images - positioned to not be cut off */}
      <Floating sensitivity={0.5} className="absolute inset-0 w-full h-full">
        <FloatingElement
          depth={0.5}
          className="top-[20%] left-[5%] md:top-[25%] md:left-[10%]"
        >
          <motion.img
            src={studentImages[0].url}
            alt={studentImages[0].title}
            className="w-20 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-40 lg:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[10%] left-[25%] md:top-[15%] md:left-[30%]"
        >
          <motion.img
            src={studentImages[1].url}
            alt={studentImages[1].title}
            className="w-32 h-24 sm:w-40 sm:h-32 md:w-48 md:h-36 lg:w-56 lg:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-6 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={0.8}
          className="bottom-[15%] left-[15%] md:bottom-[20%] md:left-[20%]"
        >
          <motion.img
            src={studentImages[2].url}
            alt={studentImages[2].title}
            className="w-36 h-28 sm:w-44 sm:h-36 md:w-52 md:h-40 lg:w-60 lg:h-48 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1.2}
          className="top-[15%] right-[10%] md:top-[20%] md:right-[15%]"
        >
          <motion.img
            src={studentImages[3].url}
            alt={studentImages[3].title}
            className="w-32 h-24 sm:w-40 sm:h-32 md:w-48 md:h-36 lg:w-56 lg:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-6 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={0.7}
          className="bottom-[20%] right-[15%] md:bottom-[25%] md:right-[20%]"
        >
          <motion.img
            src={studentImages[4].url}
            alt={studentImages[4].title}
            className="w-36 h-28 sm:w-44 sm:h-36 md:w-52 md:h-40 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[8deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>
    </section>
  );
}

export { LandingHero };
