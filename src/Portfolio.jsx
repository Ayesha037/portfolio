import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, MapPin, Github, Linkedin, ExternalLink, Code, Database, Palette, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    languages: ['Python', 'MySQL', 'HTML', 'CSS'],
    frameworks: ['Flask', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'PyTorch'],
    tools: ['PyCharm', 'Jupyter', 'VS Code', 'Git', 'Figma', 'Excel'],
    core: ['Machine Learning', 'Data Science', 'UI/UX Design', 'Data Visualization', 'API Development']
  };

  const projects = [
    {
      title: 'AI-Powered Mental Health Chatbot',
      description: 'Python-based chatbot using NLP and Flask backend to detect emotions and provide empathetic responses.',
      tech: ['Python', 'NLP', 'Flask', 'Machine Learning'],
      color: 'from-purple-400 to-pink-400',
      link: null
    },
    {
      title: 'Customer Purchase Prediction',
      description: 'Complete ML pipeline with data cleaning, model training, and comprehensive visualization.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      color: 'from-blue-400 to-cyan-400',
      link: 'https://github.com/Ayesha037/DS-Internship/tree/main/Task_3'
    },
    {
      title: 'Unemployment Rate Analysis',
      description: 'Economic data modeling with trend prediction and interactive visualizations.',
      tech: ['Python', 'Data Analysis', 'Visualization'],
      color: 'from-green-400 to-teal-400',
      link: 'https://github.com/Ayesha037/DS-Internship/tree/main/Task_2'
    },
    {
      title: 'Iris Flower Classification',
      description: 'Supervised machine learning model for biological classification with high accuracy.',
      tech: ['Python', 'Scikit-learn', 'ML'],
      color: 'from-yellow-400 to-orange-400',
      link: 'https://github.com/Ayesha037/DS-Internship/tree/main/Tast_1'
    },
    {
      title: 'Plasma Thruster Research',
      description: 'Research prototype for drone propulsion and sterilization system development.',
      tech: ['Research', 'Engineering', 'IoT'],
      color: 'from-indigo-400 to-purple-400',
      link: null
    }
  ];

  const certifications = [
    { name: 'Python for Data Science', org: 'NPTEL', icon: '🐍' },
    { name: 'Python for Machine Learning', org: 'FITA Academy', icon: '🤖' },
    { name: 'Deep Dive into Java', org: 'Oracle Academy', icon: '☕' },
    { name: 'Networking & Cybersecurity', org: 'Cisco', icon: '🔒' },
    { name: 'Azure & Cloud Computing', org: 'Microsoft', icon: '☁️' }
  ];

  const experience = [
    {
      role: 'UI/UX and App Development Intern',
      company: 'Geosensing and Imaging Consultancy',
      period: 'Feb 2025 - May 2025',
      description: 'Designed a healthcare app landing page applying user-centered design principles.'
    },
    {
      role: 'Data Science Intern',
      company: 'Oasis Infobyte',
      period: 'Feb 2025 - Mar 2025',
      description: 'Built predictive models and visual dashboards using Python and Matplotlib.'
    }
  ];

  const bgClass = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const accentColor = darkMode ? 'text-purple-400' : 'text-purple-600';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-bold ${accentColor}`}>Ayesha</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${activeSection === item.toLowerCase() ? accentColor : ''} hover:text-purple-600 transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 hover:bg-purple-100 dark:hover:bg-gray-700 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className={`${accentColor} font-semibold text-sm tracking-wide uppercase`}>
                  Computer Science Student
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mohammad Ayesha Summaiyya</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Turning data and design into intelligent solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm a passionate Computer Science student who loves turning ideas into real solutions. 
                I'm especially interested in AI, Data Science, and designing user-friendly software.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-3 border-2 border-purple-600 ${accentColor} rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all`}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl opacity-20 absolute -z-10 blur-3xl"></div>
              <div className={`${cardBg} p-4 rounded-3xl shadow-2xl overflow-hidden`}>
                <img src="/profile.svg" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${cardBg} p-8 rounded-2xl shadow-xl order-2 md:order-1`}>
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className={`${accentColor} w-8 h-8`} />
                <div>
                  <h3 className="text-2xl font-bold">Education</h3>
                  <p className={`${accentColor}`}>B.Tech in Computer Science</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Dr. M.G.R. Educational and Research Institute</p>
                <p className="text-gray-600 dark:text-gray-400">2022 - Present</p>
                <p className={`text-lg font-bold ${accentColor}`}>CGPA: 8.00</p>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/profile.svg" alt="Ayesha portrait" className="w-full h-80 object-cover" />
              </div>
              <p className="text-lg leading-relaxed">
                I'm driven by curiosity and a desire to create systems that make people's lives easier. 
                My goal is to merge data-driven insights with innovative design to craft impactful digital experiences.
              </p>
              <div className={`${cardBg} p-6 rounded-xl shadow-lg`}>
                <h4 className="font-bold mb-4 text-lg">Leadership & Activities</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className={`${accentColor}`} />
                    <span>President, Innofy Club (2022-2024)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className={`${accentColor}`} />
                    <span>Member, The Institution of Engineers India (2022-Present)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Languages', items: skills.languages, icon: Code, color: 'from-purple-500 to-pink-500' },
              { title: 'Frameworks', items: skills.frameworks, icon: Database, color: 'from-blue-500 to-cyan-500' },
              { title: 'Tools', items: skills.tools, icon: Palette, color: 'from-green-500 to-teal-500' },
              { title: 'Core Areas', items: skills.core, icon: Award, color: 'from-yellow-500 to-orange-500' }
            ].map((category, idx) => (
              <div key={idx} className={`${cardBg} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className={`px-3 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className={`${cardBg} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all relative`}>
                  <div className="absolute -left-1.5 top-6 w-3 h-3 bg-purple-600 rounded-full border-2 border-white dark:border-gray-800" />
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Briefcase className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <p className={`${accentColor} font-semibold`}>{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exp.period}</p>
                      <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`${cardBg} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group`}>
                <div className={`relative h-40 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center`}>
                  <Code className="w-16 h-16 text-white opacity-80" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-sm px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur">
                      {project.tech.join(' • ')}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex items-center gap-4">
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 ${accentColor} hover:underline`}
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm italic">Coming soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`${cardBg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}>
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                <p className={`${accentColor} text-sm`}>{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <img src="/city-silhouette.svg" alt="City" className="pointer-events-none select-none absolute inset-x-0 bottom-0 w-full h-48 object-cover opacity-70" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's collaborate on something amazing!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${cardBg} p-8 rounded-2xl shadow-xl`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a href="mailto:mayeshasummaiyya@gmail.com" className={`${accentColor} hover:underline`}>
                      mayeshasummaiyya@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-semibold">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://linkedin.com/in/mohammad-ayesha-summaiyya-b94351333" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:shadow-lg transition-all">
                  <Linkedin className="text-white" />
                </a>
                <a href="https://github.com/Ayesha037" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-800 to-gray-900'} rounded-xl flex items-center justify-center hover:shadow-lg transition-all`}>
                  <Github className="text-white" />
                </a>
              </div>
            </div>
            <div className={`${cardBg} p-8 rounded-2xl shadow-xl`}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = form.name.value;
                const email = form.email.value;
                const message = form.message.value;
                const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
                window.location.href = `mailto:mayeshasummaiyya@gmail.com?subject=${subject}&body=${body}`;
              }} className="space-y-5">
                <div className="relative">
                  <input name="name" type="text" required className="fl-input w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder=" " />
                  <span className="fl-label">Your Name</span>
                </div>
                <div className="relative">
                  <input name="email" type="email" required className="fl-input w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder=" " />
                  <span className="fl-label">Email Address</span>
                </div>
                <div className="relative">
                  <textarea name="message" rows="4" required className="fl-input w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder=" "></textarea>
                  <span className="fl-label">Your Message</span>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-8 px-4`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Mohammad Ayesha Summaiyya. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Designed with passion and creativity
          </p>
        </div>
      </footer>
    </div>
  );
}


