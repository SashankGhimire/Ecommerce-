import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Leaf, Users, Star } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-50 space-y-0">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" alt="About" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 space-y-8 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-purple-400"
          >
            Since 2020
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight"
          >
            THE FUTURE OF <br /> <span className="italic font-light">LIFESTYLE</span> IS HERE.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-px h-24 bg-gradient-to-b from-purple-500 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900 leading-[1.1]">
              Born in London, <br /> Built for the World.
            </h2>
            <div className="space-y-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              <p>
                MODRN. was established on a simple premise: that high-end fashion and lifestyle essentials could be both exceptionally crafted and ethically sourced.
              </p>
              <p>
                What started as a small capsule collection in a Shoreditch studio has evolved into a global movement of minimalist, high-performance design that respects the planet and the people on it.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
               <div>
                  <p className="text-4xl font-bold text-gray-900 mb-1">250K+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Happy Customers</p>
               </div>
               <div>
                  <p className="text-4xl font-bold text-gray-900 mb-1">50+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Stores</p>
               </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square bg-gray-50 rounded-[60px] overflow-hidden rotate-3 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000" alt="Studio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden -rotate-6 shadow-2xl hidden md:block">
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000" alt="Process" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">Our Core Values</p>
             <h2 className="text-5xl font-bold tracking-tighter">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Planet First', desc: 'Every material is selected with environmental impact in mind. We use 100% recycled packaging and organic textiles.' },
              { icon: Globe, title: 'Ethical Sourcing', desc: 'We only partner with factories that pay fair living wages and maintain the highest safety and labor standards.' },
              { icon: Users, title: 'Community Driven', desc: 'MODRN. isn’t just a store—it’s a community. We reinvest 5% of all profits into youth arts and design programs.' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all space-y-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-8">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <h2 className="text-6xl font-bold tracking-tighter max-w-sm leading-[0.9]">Meet the architects of style.</h2>
              <p className="text-gray-500 max-w-md font-medium">A diverse group of designers, engineers, and creatives working together from London, New York and Tokyo.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Sarah J. Wilson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
                { name: 'Marcus Chen', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
                { name: 'Elena Rodriguez', role: 'Sustainability Lead', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
                { name: 'David Park', role: 'Head of Growth', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' },
              ].map((member, i) => (
                <div key={i} className="group relative aspect-[3/4] rounded-[32px] overflow-hidden">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-lg font-bold">{member.name}</p>
                      <p className="text-purple-400 text-xs font-bold uppercase tracking-widest">{member.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 bg-black text-white text-center px-6">
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex justify-center gap-1">
               {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-purple-500 text-purple-500" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic leading-snug">
               "MODRN. isn't just about the clothes. It's about a lifestyle of intentional simplicity. 
               The quality is unmatched in the industry today."
            </h2>
            <div className="space-y-1">
               <p className="font-bold uppercase tracking-widest">Jasper Thorne</p>
               <p className="text-xs text-gray-500 uppercase tracking-tighter">Fashion Critic, VOGUE</p>
            </div>
         </div>
      </section>
    </div>
  );
};
