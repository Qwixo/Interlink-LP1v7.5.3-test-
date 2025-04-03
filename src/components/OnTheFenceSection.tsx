import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MessageFromAnna = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#064088] mb-2">
              🤫 Pssst… If you're not sure, read this
            </h2>
            <h3 className="text-xl text-[#3a6ea5] font-medium">
              A Personal Message From Ana, Your Admissions Director
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <img
              src="https://i0.wp.com/interlink.edu/wp-content/uploads/2017/02/kg021717-valdivia_ana-4.jpg?resize=600%2C600&ssl=1"
              alt="Anna Valdivia"
              className="w-[150px] h-[150px] rounded-full object-cover border-4 border-[#064088]/20 flex-shrink-0 mx-auto md:mx-0"
            />

            <div className="bg-gray-50 p-6 rounded-xl shadow-md w-full">
<p className="text-lg text-gray-700 italic font-medium leading-relaxed">
  “I know this decision can feel overwhelming. I've spoken to so many students over the years who were unsure about their English, their future, or whether they could actually succeed in the U.S.
  <br /><br />
  Some of them didn’t believe studying in the US was possible for them. Others were confused about how to make it happen. But I’ve seen how things change when students get the right support. Confidence grows, progress happens. and dreams start to feel real.
  <br /><br />
  That’s what we’re here for at INTERLINK. We'll help you every step of the way -- from your application and visa interview, to arriving in the US and starting your English journey, all the way through to transitioning to university classes. You don’t have to figure this out alone — we’ll guide you step-by-step.
  <br /><br />
  If you're reading this, it means you're already considering taking a big step for your future. I’d love to help you make it happen.
  <br /><br />
  Feel free to email me at admissions@interlink.edu and I'll be more than happy to help - I speak English and Spanish too! :)”
</p>


<p className="text-right text-gray-700 italic font-medium mt-6">
  — Ana Valdivia, Admissions Director at INTERLINK
</p>

            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center mt-4">
{/* 🔗 CTA from Anna’s Message — opens application form in new tab with tracking */}
<a
  href="https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackApplicationClick("Message From Anna")}
>
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2"
  >
    <span>Apply Now & Let's Talk</span>
    <ArrowRight size={16} />
  </motion.button>
</a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageFromAnna;
