import React from 'react';
import { motion } from 'motion/react';
import { Globe, Leaf, Users, Star } from 'lucide-react';
import { SafeImage } from '../components/ui/SafeImage';

export const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Planet First',
      desc: 'Every material is selected with environmental impact in mind. We use recycled packaging and lower-impact textiles wherever possible.',
    },
    {
      icon: Globe,
      title: 'Ethical Sourcing',
      desc: 'We partner with suppliers who share our standards for fair wages, safe working conditions, and careful production.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      desc: 'AURA. is built around people, not just products. We reinvest 5% of profits into youth arts and design programs.',
    },
  ];

  const team = [
    { name: 'Sarah J. Wilson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
    { name: 'Marcus Chen', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
    { name: 'Elena Rodriguez', role: 'Sustainability Lead', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
    { name: 'David Park', role: 'Head of Growth', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[560px] h-[78svh] md:h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-55">
          <SafeImage src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" alt="Aura editorial collection" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 space-y-8 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-stone-300"
          >
            Since 2020
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tightest leading-tight"
          >
            Designed with purpose. <br /> Made for everyday life.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-px h-20 bg-gradient-to-b from-white to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tightest text-gray-900 leading-[1.1]">
              Born in London, <br /> Built for the World.
            </h2>
            <div className="space-y-6 text-lg text-stone-500 leading-relaxed max-w-lg">
              <p>
                AURA. was established on a simple premise: high-end fashion and lifestyle essentials should be exceptionally crafted, responsibly sourced, and easy to wear.
              </p>
              <p>
                What started as a small capsule collection in a Shoreditch studio has evolved into a global edit of minimalist, performance-minded design.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-stone-100">
              <div>
                <p className="text-4xl font-bold text-gray-900 mb-1">250K+</p>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900 mb-1">50+</p>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Global Stores</p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square bg-stone-50 rounded-xl overflow-hidden shadow-2xl">
              <SafeImage src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000" alt="Design studio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden shadow-2xl hidden md:block">
              <SafeImage src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000" alt="Product process" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-xs font-bold text-accent uppercase tracking-widest">Our Core Values</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tightest">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-10 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl transition-all space-y-6">
                <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center text-accent mb-8">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{value.title}</h3>
                <p className="text-stone-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tightest max-w-md leading-tight">Meet the people shaping the edit.</h2>
            <p className="text-stone-500 max-w-md font-medium">A focused group of designers, operators, and retail specialists working across London, New York, and Tokyo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group relative aspect-[3/4] rounded-xl overflow-hidden">
                <SafeImage src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-lg font-bold">{member.name}</p>
                  <p className="text-stone-300 text-xs font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-[#f7f3ed]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold text-accent uppercase tracking-widest">Customer Notes</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tightest leading-tight">
              Trusted for quiet, everyday luxury.
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Our customers choose AURA for pieces that look refined, feel comfortable, and stay useful beyond one season.
            </p>
          </div>

          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                <span className="text-3xl font-serif leading-none">“</span>
              </div>
              <div className="space-y-8">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <blockquote className="text-2xl md:text-3xl font-semibold tracking-tight text-primary leading-snug">
                  AURA brings a rare balance of polish and ease. The pieces feel considered, beautifully finished, and simple to wear every day.
                </blockquote>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-stone-100 pt-6">
                  <div>
                    <p className="font-bold uppercase tracking-widest">Jasper Thorne</p>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Fashion Critic, Vogue</p>
                  </div>
                  <p className="text-sm font-medium text-stone-500">Rated 4.9/5 by verified customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
