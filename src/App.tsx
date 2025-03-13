import React from 'react';
import { GraduationCap, BookOpen, Calendar, Users, FileText, Phone, ArrowRight, TreePine } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-[#1E3A5F] text-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TreePine className="h-8 w-8 text-[#2E8B57]" />
            <span className="text-2xl font-bold text-[#2E8B57]">Kalpataru</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-[#FFD700]">Home</a>
            <a href="#about" className="hover:text-[#FFD700]">About Us</a>
            <a href="#programs" className="hover:text-[#FFD700]">Programs</a>
            <a href="#resources" className="hover:text-[#FFD700]">Resources</a>
            <a href="#contact" className="hover:text-[#FFD700]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-32 bg-[#2E8B57] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Empowering Ideas, Enabling Growth</h1>
            <p className="text-xl mb-8">Connecting Students, Faculty & Entrepreneurs with MSME Opportunities</p>
            <button className="bg-[#FFD700] text-[#1E3A5F] px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E3A5F]">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kalpataru is dedicated to nurturing the entrepreneurial spirit among students. 
                We provide comprehensive support, mentorship, and resources to transform innovative 
                ideas into successful ventures. Our platform bridges the gap between academic 
                knowledge and practical business implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E3A5F]">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-12 w-12 text-[#2E8B57]" />,
                title: "Mentorship Programs",
                description: "Connect with industry experts and experienced entrepreneurs"
              },
              {
                icon: <Users className="h-12 w-12 text-[#2E8B57]" />,
                title: "Startup Incubation",
                description: "Get comprehensive support to launch your startup"
              },
              {
                icon: <Calendar className="h-12 w-12 text-[#2E8B57]" />,
                title: "Skill Development",
                description: "Practical workshops and training sessions"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <button className="mt-4 text-[#2E8B57] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-[#FFD700] text-lg mb-4">
                  "Kalpataru helped me transform my idea into a successful startup. The mentorship 
                  and resources were invaluable."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1472099645785-5658abf4ff4e' : '1438761681033-6461ffad8d80'}?auto=format&fit=crop&w=100`}
                    alt="Student entrepreneur"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Student Entrepreneur</h4>
                    <p className="text-sm text-gray-300">Class of 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E3A5F]">Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen />, title: "Learning Materials" },
              { icon: <FileText />, title: "Business Templates" },
              { icon: <Calendar />, title: "Workshop Calendar" }
            ].map((resource, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:border-[#2E8B57] transition duration-300">
                <div className="text-[#2E8B57] mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600">Access comprehensive resources to support your entrepreneurial journey.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E3A5F]">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2E8B57]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2E8B57]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2E8B57]"
                ></textarea>
              </div>
              <button className="w-full bg-[#2E8B57] text-white py-3 rounded-lg hover:bg-[#236B43] transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-6 w-6 text-[#2E8B57]" />
                <span className="text-xl font-bold text-[#2E8B57]">Kalpataru</span>
              </div>
              <p className="text-gray-400">Empowering the next generation of entrepreneurs</p>
            </div>
            <div>
              <h3 className="text-[#FFD700] font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-[#FFD700]">Home</a></li>
                <li><a href="#about" className="hover:text-[#FFD700]">About Us</a></li>
                <li><a href="#programs" className="hover:text-[#FFD700]">Programs</a></li>
                <li><a href="#contact" className="hover:text-[#FFD700]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#FFD700] font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@kalpataru.com</p>
                <p>Phone: +1 234 567 890</p>
                <div className="flex gap-4 mt-4">
                  {/* Social Media Icons */}
                  <a href="#" className="hover:text-[#FFD700]"><Phone className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kalpataru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;