import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { Testimonials } from './ui/testimonials';


const TestimonialsSection = () => {
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      quote: "I have classmates from different countries and they don't speak Spanish… for me that's very helpful because I need to practice everyday. Now I'm graduating. Studying at INTERLINK pushed me to speak every day — and it worked!",
      name: "Lina Rois",
      designation: "Colombia",
      src: "https://i.imgur.com/KXVOcwe.jpeg"
    },
    {
      quote: "I decided to go out of my comfort zone and invest in my personal development. I think that exploring a new culture is the best way to expand my horizons. So, I found the INTERLINK program the perfect opportunity for my family and me.",
      name: "Jimena",
      designation: "Ecuador",
      src: "https://i.imgur.com/J1w7fcm.jpeg"
    },
    {
      quote: "Debate was my favorite thing! I loved learning how to build arguments and express my ideas clearly — it helped me grow in confidence and communication. I'm proud of how much I've grown!",
      name: "Estephania",
      designation: "Colombia",
      src: "https://i.imgur.com/oYY7Zxb.png"
    },
    {
      quote: "Thanks to INTERLINK, I understand not just the English language, but also the culture and people in the U.S. I've made friends from many countries and experienced so many new things — from school history tours to international festivals.",
      name: "Mikey",
      designation: "Vietnam",
      src: "https://i.imgur.com/i4SnHq0.png"
    },
    {
      quote: "My English wasn't good before INTERLINK. I had to stop and think before speaking, and I didn't know how to make others understand me. Now I feel confident — I can talk, write essays, and people understand what I say!",
      name: "Chau",
      designation: "Vietnam",
      src: "https://i.imgur.com/bQLjGzi.png"
    },
    {
      quote: "In my country, classes just focused on testing. INTERLINK focuses more on applying English to the real world.",
      name: "Huizi",
      designation: "China",
      src: "https://i.imgur.com/UN85w6p.jpeg"
    },
    {
      quote: "I learned a lot and appreciate all the teachers' effort to help us in this experience. I have very good memories, and still carry with me all the life lessons. It was an opportunity to learn different things and grow as a human being.",
      name: "Thais",
      designation: "Brazil",
      src: "https://i.imgur.com/9VTBhXQ.jpeg"
    },
    {
      quote: "At INTERLINK, the classes were interactive, encouraging me to express my opinions and think independently. Initially, I was nervous and hesitant to participate, but the supportive teachers provided valuable feedback that boosted my confidence. This experience not only enhanced my English skills but also improved my critical thinking. Collaborating with classmates from various countries taught me about cultural differences and effective communication, which I believe will be beneficial in my future studies at UNCG.",
      name: "Yuna Minami",
      designation: "Japan",
      src: "https://i.imgur.com/ul46HnE.jpeg"
    },
    {
      quote: "Balancing my studies at INTERLINK with being a full-time mother and pursuing my passion for photography was challenging, but incredibly rewarding. The supportive environment and flexible classes allowed me to grow both personally and academically.",
      name: "Telma Borges",
      designation: "Brazil",
      src: "https://i.imgur.com/Y5lGMLM.jpeg"
    }
  ];

  const shadcnTestimonials = [
    {
      image: 'https://i.imgur.com/KXVOcwe.jpeg',
      text: 'I have classmates from different countries and they don\'t speak Spanish… for me that\'s very helpful because I need to practice everyday. Now I\'m graduating. Studying at INTERLINK pushed me to speak every day — and it worked!',
      name: 'Lina Rois',
      username: 'Colombia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/J1w7fcm.jpeg',
      text: 'I decided to go out of my comfort zone and invest in my personal development. I think that exploring a new culture is the best way to expand my horizons. So, I found the INTERLINK program the perfect opportunity for my family and me.',
      name: 'Jimena',
      username: 'Ecuador',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/oYY7Zxb.png',
      text: 'Debate was my favorite thing! I loved learning how to build arguments and express my ideas clearly — it helped me grow in confidence and communication. I\'m proud of how much I\'ve grown!',
      name: 'Estephania',
      username: 'Colombia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/i4SnHq0.png',
      text: 'Thanks to INTERLINK, I understand not just the English language, but also the culture and people in the U.S. I\'ve made friends from many countries and experienced so many new things — from school history tours to international festivals.',
      name: 'Mikey',
      username: 'Vietnam',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/bQLjGzi.png',
      text: 'My English wasn\'t good before INTERLINK. I had to stop and think before speaking, and I didn\'t know how to make others understand me. Now I feel confident — I can talk, write essays, and people understand what I say!',
      name: 'Chau',
      username: 'Vietnam',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/UN85w6p.jpeg',
      text: 'In my country, classes just focused on testing. INTERLINK focuses more on applying English to the real world.',
      name: 'Huizi',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/9VTBhXQ.jpeg',
      text: 'I learned a lot and appreciate all the teachers\' effort to help us in this experience. I have very good memories, and still carry with me all the life lessons. It was an opportunity to learn different things and grow as a human being.',
      name: 'Thais',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/ul46HnE.jpeg',
      text: 'At INTERLINK, the classes were interactive, encouraging me to express my opinions and think independently. Initially, I was nervous and hesitant to participate, but the supportive teachers provided valuable feedback that boosted my confidence. This experience not only enhanced my English skills but also improved my critical thinking. Collaborating with classmates from various countries taught me about cultural differences and effective communication, which I believe will be beneficial in my future studies at UNCG.',
      name: 'Yuna Minami',
      username: 'Japan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/Y5lGMLM.jpeg',
      text: 'Balancing my studies at INTERLINK with being a full-time mother and pursuing my passion for photography was challenging, but incredibly rewarding. The supportive environment and flexible classes allowed me to grow both personally and academically.',
      name: 'Telma Borges',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: 'I spent half a year at INTERLINK, and my English improved a lot, which makes me feel that I am ready to enter my MBA program in the future.',
  name: 'Tingting Wang',
  username: 'China',
  social: 'https://twitter.com'
},
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: 'They stimulate your learning by offering you a friendly environment in which you can develop your own ideas and interact with people from different cultures.',
  name: 'Berta',
  username: 'Brazil',
  social: 'https://twitter.com'
},
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: 'When I arrived here I wasn’t able to write one paragraph in English, but now I can write an essay in three or four pages and that’s fantastic.',
  name: 'Bader',
  username: 'United Arab Emirates',
  social: 'https://twitter.com'
},
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: 'This program is like a gate for international students. It helped me accomplish my goals when I was at the university... I made good friends, the social environment was motivating, and there were extra activities.',
  name: 'Luis Sandoval',
  username: 'El Salvador',
  social: 'https://twitter.com'
},
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: 'The teachers at INTERLINK are truly amazing, professional, enthusiastic, and dedicated. They concentrate on your individual needs and help you improve your speaking, listening, reading, and writing.',
  name: 'Concha Muñoz',
  username: 'Spain',
  social: 'https://twitter.com'
},
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: 'INTERLINK’s teachers cared about my success, and they made sure I was prepared for life in university.',
  name: 'Theophilus Twum-Barima',
  username: 'Ghana',
  social: 'https://twitter.com'
},
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: "When I joined INTERLINK, I improved my writing and speaking skills. Now, I am finishing my master's program in industrial engineering with a very high GPA. Recently, I got accepted into a Ph.D. program at the same university. These programs would not have been possible for me without the high level of English INTERLINK helped me obtain.",
  name: 'Ayman',
  username: 'Saudi Arabia',
  social: 'https://twitter.com'
},
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: 'Thanks to INTERLINK, I can comfortably communicate with Americans as well as with foreign people.',
  name: 'Mariana',
  username: 'Ecuador',
  social: 'https://twitter.com'
},
{
  image: 'https://images.unsplash.com/photo-1500648767791-',
  text: 'The intensive program at Interlink gave me the opportunity to be better than a lot of international students at the university, because at Interlink the faculties helped me to be prepared for the intensive work that I might face at the university.',
  name: 'Wesmi Alwesmi',
  username: 'Saudi Arabia',
  social: 'https://twitter.com'
}



		
  ];

  // This function determines which component to render based on the current page
  const isGuidePage = window.location.pathname.includes('guide');

  if (isGuidePage) {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-6">
            What Our Students Say
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Hear from international students who transformed their English skills and achieved their academic dreams with INTERLINK.
          </p>

          {/* Video Testimonials Grid - UPDATED: Real YouTube videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Video 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/WzvHP99gpBc"
                  title="Student Testimonial - Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://i.imgur.com/pg4XxDm.png" 
                    alt="Student 1" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#064088]">Mohamed</h3>
                    <p className="text-sm text-gray-600">Saudi Arabia</p>
                  </div>
                </div>
                <p className="text-gray-700">"At that time when I started I had a really strong accent and comparing to myself now and back then, it's just unbelievable."</p>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MBqWwl6C7Us"
                  title="Student Testimonial - Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://i.imgur.com/bQLjGzi.png" 
                    alt="Student 2" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#064088]">Chau</h3>
                    <p className="text-sm text-gray-600">Vietnam</p>
                  </div>
                </div>
                <p className="text-gray-700">"After taking the course at INTERLINK I feel more confident and I can communicate with others and others can understand what I say."</p>
              </div>
            </div>
          </div>

          {/* More Students Subsection - Keeping all 3 written testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#064088] mb-10">
              More Students
            </h3>
            <Testimonials 
              testimonials={shadcnTestimonials} 
              title=""
              description="Read testimonials from students who have transformed their language skills with INTERLINK"
            />
          </div>


        </div>
      </section>
    );
} else {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12">
          What Our Students Say
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}

};

export default TestimonialsSection;
