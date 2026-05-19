import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent! Our team will get back to you shortly.');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.2em] underline underline-offset-8 mb-4 inline-block">Get in Touch</p>
            <h1 className="text-6xl font-black tracking-tighter text-gray-900 leading-[0.9]">HOW CAN WE <br /> <span className="text-purple-600">HELP?</span></h1>
            <p className="text-gray-500 text-lg font-medium max-w-md pt-4">
              Our concierge team is available around the clock to assist you with order inquiries, product details, or style advice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Mail, title: 'Email Us', info: 'hello@modrn.store', label: 'Response within 24h' },
              { icon: Phone, title: 'Call Us', info: '+44 20 7946 0958', label: 'Mon-Fri, 9am - 6pm' },
              { icon: MapPin, title: 'Studio', info: '85 Shoreditch High St', label: 'London, E1 6JN' },
              { icon: MessageCircle, title: 'Live Chat', info: 'Available 24/7', label: 'Start conversation' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 group hover:bg-black transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-purple-400">{item.title}</h4>
                <p className="text-lg font-bold text-gray-900 group-hover:text-white">{item.info}</p>
                <p className="text-[10px] font-bold text-gray-400 group-hover:text-gray-500 transition-colors pt-2">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-gray-100 flex items-center gap-8">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Follow our journey</span>
             <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer transition-colors" />
                <div className="w-5 h-5 bg-gray-400 hover:bg-purple-600 rounded cursor-pointer transition-colors" />
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 sm:p-16 rounded-[60px] border border-gray-100 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-1000" />
           <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="contact-name">Full Name</label>
                    <input 
                      required
                      type="text" 
                      id="contact-name"
                      placeholder="Jane Doe"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="contact-email">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="contact-email"
                      placeholder="jane@example.com"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="contact-subject">Subject</label>
                  <select 
                    id="contact-subject"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-sm font-medium appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Careers</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="contact-message">Your Message</label>
                  <textarea 
                    required
                    id="contact-message"
                    rows={6}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-sm font-medium resize-none"
                  />
                </div>
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full bg-black text-white py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-purple-600 transition-all shadow-xl shadow-purple-200/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
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

      {/* FAQ Section */}
      <section className="mt-40 border-t border-gray-100 pt-32">
         <div className="max-w-3xl mx-auto space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-5xl font-black tracking-tighter">COMMON <br /> <span className="text-purple-600 italic">QUESTIONS.</span></h2>
               <p className="text-gray-500 font-medium">Quick answers to what everyone's asking.</p>
            </div>
            
            <div className="space-y-4">
              {[
                { q: 'How long does shipping take?', a: 'Standard shipping usually takes 3-5 business days. International shipping can take 7-14 days depending on the destination.' },
                { q: 'What is your return policy?', a: 'We offer a 30-day hassle-free return policy for all unworn items in their original packaging.' },
                { q: 'Are your materials sustainable?', a: 'Yes, 100% of our apparel collections are made from organic or recycled fibers.' },
                { q: 'Do you ship internationally?', a: 'Absolutely. We ship to over 50 countries worldwide using premium priority carriers.' },
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 rounded-[32px] hover:shadow-lg hover:border-transparent transition-all group cursor-pointer">
                   <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">{faq.q}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Map Placeholder */}
      <section className="mt-40 bg-gray-50 rounded-[60px] h-[500px] relative overflow-hidden flex items-center justify-center p-20 text-center">
         <div className="absolute inset-0 grayscale opacity-40">
           <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" alt="Map" className="w-full h-full object-cover" />
         </div>
         <div className="relative z-10 space-y-4 bg-white/80 backdrop-blur-md p-12 rounded-[40px] border border-white shadow-2xl">
            <MapPin className="w-12 h-12 text-purple-600 mx-auto transition-bounce" />
            <h3 className="text-3xl font-black tracking-tighter uppercase">Our Flagship Store</h3>
            <p className="text-gray-500 font-medium">85 Shoreditch High St, London E1 6JN</p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-purple-600 transition-all shadow-xl">
               Get Directions
            </button>
         </div>
      </section>
    </div>
  );
};
