import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { SafeImage } from '../components/ui/SafeImage';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent. Our team will get back to you shortly.');
    }, 1500);
  };

  const contactMethods = [
    { icon: Mail, title: 'Email Us', info: 'hello@aura.store', label: 'Response within 24h' },
    { icon: Phone, title: 'Call Us', info: '+44 20 7946 0958', label: 'Mon-Fri, 9am - 6pm' },
    { icon: MapPin, title: 'Studio', info: '85 Shoreditch High St', label: 'London, E1 6JN' },
    { icon: MessageCircle, title: 'Live Chat', info: 'Available 24/7', label: 'Start conversation' },
  ];

  const faqs = [
    { q: 'How long does shipping take?', a: 'Standard shipping usually takes 3-5 business days. International shipping can take 7-14 days depending on the destination.' },
    { q: 'What is your return policy?', a: 'We offer a 30-day return policy for unworn items in their original packaging.' },
    { q: 'Are your materials sustainable?', a: 'Yes, our apparel collections prioritize organic, recycled, and lower-impact fibers.' },
    { q: 'Do you ship internationally?', a: 'Yes. We ship to more than 50 countries using premium priority carriers.' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tightest text-gray-900 leading-tight">
              How can we help?
            </h1>
            <p className="text-stone-500 text-lg font-medium max-w-md pt-2">
              Our concierge team can help with orders, product details, sizing, or styling advice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactMethods.map((item) => (
              <div key={item.title} className="p-7 bg-stone-50 rounded-xl border border-stone-100 group hover:bg-primary transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1 group-hover:text-stone-300">{item.title}</h4>
                <p className="text-lg font-bold text-gray-900 group-hover:text-white">{item.info}</p>
                <p className="text-[10px] font-bold text-stone-400 transition-colors pt-2">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300">Follow our journey</span>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-stone-400 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-stone-400 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-100 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1" htmlFor="contact-name">Full Name</label>
                  <input
                    required
                    type="text"
                    id="contact-name"
                    placeholder="Jane Doe"
                    className="w-full bg-stone-50 border border-stone-100 rounded-lg py-4 px-5 focus:outline-none focus:border-accent focus:bg-white transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1" htmlFor="contact-email">Email Address</label>
                  <input
                    required
                    type="email"
                    id="contact-email"
                    placeholder="jane@example.com"
                    className="w-full bg-stone-50 border border-stone-100 rounded-lg py-4 px-5 focus:outline-none focus:border-accent focus:bg-white transition-all text-sm font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1" htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  className="w-full bg-stone-50 border border-stone-100 rounded-lg py-4 px-5 focus:outline-none focus:border-accent focus:bg-white transition-all text-sm font-medium appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Careers</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1" htmlFor="contact-message">Your Message</label>
                <textarea
                  required
                  id="contact-message"
                  rows={6}
                  placeholder="Tell us what is on your mind..."
                  className="w-full bg-stone-50 border border-stone-100 rounded-lg py-4 px-5 focus:outline-none focus:border-accent focus:bg-white transition-all text-sm font-medium resize-none"
                />
              </div>
            </div>
            <button
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-5 rounded-lg font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <section className="mt-24 md:mt-32 border-t border-stone-100 pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tightest">Common Questions</h2>
            <p className="text-stone-500 font-medium">Quick answers to what customers ask most often.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-7 bg-white border border-stone-100 rounded-xl hover:shadow-lg hover:border-transparent transition-all group cursor-pointer">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">{faq.q}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-32 bg-stone-50 rounded-xl min-h-[420px] md:h-[460px] relative overflow-hidden flex items-center justify-center p-5 md:p-8 text-center">
        <div className="absolute inset-0 grayscale opacity-40">
          <SafeImage src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" alt="London map" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 space-y-4 bg-white/85 backdrop-blur-md p-6 md:p-10 rounded-xl border border-white shadow-2xl">
          <MapPin className="w-12 h-12 text-accent mx-auto" />
          <h3 className="text-2xl md:text-3xl font-black tracking-tightest uppercase">Our Flagship Store</h3>
          <p className="text-stone-500 font-medium">85 Shoreditch High St, London E1 6JN</p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all shadow-xl">
            Get Directions
          </button>
        </div>
      </section>
    </div>
  );
};
