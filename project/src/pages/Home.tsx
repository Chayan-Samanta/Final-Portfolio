import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubIcon, LinkedinIcon, Mail, ExternalLink, Code2, Palette, Globe } from 'lucide-react';

// Add custom X icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Home: FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory and AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "MongoDB", "AI/ML"]
    },
    {
      title: "Smart City Dashboard",
      description: "IoT-based dashboard for monitoring and managing urban infrastructure",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
      tags: ["IoT", "React", "Python", "Data Visualization"]
    },
    {
      title: "AI Content Generator",
      description: "Advanced content generation platform using GPT-4 and custom fine-tuned models",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tags: ["AI/ML", "NLP", "React", "FastAPI"]
    }
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS",
    "MongoDB", "Next.js", "TailwindCSS"
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      url: "https://github.com/chayansamanta",
      label: "GitHub",
      className: "hover:text-[#333] hover:bg-white"
    },
    {
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/chayan-samanta-b16800252/",
      label: "LinkedIn",
      className: "hover:text-white hover:bg-[#0A66C2]"
    },
    {
      icon: XIcon,
      url: "https://twitter.com/chayansamanta06",
      label: "X (Twitter)",
      className: "hover:text-white hover:bg-black"
    },
    {
      icon: Mail,
      url: "mailto:chayansamanta06@gmail.com",
      label: "Email",
      className: "hover:text-white hover:bg-[#EA4335]"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-syne font-bold text-4xl md:text-7xl mb-6 gradient-text">
            Chayan Samanta
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-400 max-w-2xl mx-auto text-balance">
            Full-Stack Developer & AI Enthusiast crafting digital experiences for the future
          </p>
          <div className="flex gap-6 justify-center mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target={link.icon !== Mail ? "_blank" : undefined}
                rel={link.icon !== Mail ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-3 rounded-full 
                  border border-neutral-800
                  transition-all duration-300
                  ${link.className}
                  hover:border-transparent
                  hover:shadow-lg
                  backdrop-blur-sm
                `}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="font-syne text-3xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
        </div>
        <div className="skills-container">
          <div className="flex gap-4 skills-scroll">
            {skills.concat(skills, skills).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 py-2 px-4 rounded-full card-gradient border border-neutral-800"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-syne text-3xl md:text-5xl font-bold mb-12 gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-gradient border border-neutral-800 rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-syne text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm py-1 px-3 rounded-full bg-neutral-900 text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-syne text-3xl md:text-5xl font-bold mb-12 gradient-text">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Web Development",
                description: "Building scalable web applications with modern technologies and best practices"
              },
              {
                icon: Globe,
                title: "AI Integration",
                description: "Implementing AI solutions to enhance digital products and user experiences"
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Creating intuitive and beautiful interfaces that users love to interact with"
              }
            ].map((service, index) => (
              <div key={index} className="card-gradient border border-neutral-800 rounded-xl p-6">
                <service.icon className="w-12 h-12 mb-4 gradient-text" />
                <h3 className="font-syne text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;