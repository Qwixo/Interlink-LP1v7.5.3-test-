import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from './ui/timeline';

const CleanJourneyTimeline = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Your Journey Timeline
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From application to graduation, here's what to expect when you study with INTERLINK.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <Timeline>
          <TimelineItem title="Application & Acceptance" icon="📝">
            <p className="text-gray-700">
              Submit your application online, receive your acceptance letter and I-20 form, and schedule your placement test. 
            </p>
          </TimelineItem>

          <TimelineItem title="Visa Process (for in-person students)" icon="🛂">
            <p className="text-gray-700">
              We'll guide you through the visa process, including documents, interviews, and embassy prep.
            </p>
          </TimelineItem>

          <TimelineItem title="Plan Your Travel (in-person only)" icon="✈️">
            <p className="text-gray-700">
              Book your flight, prepare your essentials, and get ready for the journey of a lifetime.
            </p>
          </TimelineItem>

          <TimelineItem title="Arrival & Orientation" icon="🏫">
            <p className="text-gray-700">
              Arrive on campus, attend orientation, meet your teachers, and get settled in your new home.
            </p>
          </TimelineItem>

          <TimelineItem title="Study English with INTERLINK" icon="📚">
            <p className="text-gray-700">
              Join our immersive English program and gain the academic and communication skills to succeed.
            </p>
          </TimelineItem>

          <TimelineItem title="University Transition" icon="🎓">
            <p className="text-gray-700">
              Complete your English program and transition to your degree program at a U.S. university without taking English exams

            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
};

export default CleanJourneyTimeline;
