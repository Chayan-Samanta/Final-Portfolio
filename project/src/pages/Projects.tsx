import { FC } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects: FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory and AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "MongoDB", "AI/ML"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.demo.com",
      featured: true
    },
    {
      title: "Smart City Dashboard",
      description: "IoT-based dashboard for monitoring and managing urban infrastructure",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
      tags: ["IoT", "React", "Python", "Data Visualization"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.demo.com"
    },
    {
      title: "AI Content Generator",
      description: "Advanced content generation platform using GPT-4 and custom fine-tuned models",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tags: ["AI/ML", "NLP", "React", "FastAPI"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3.demo.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <h1 className="font-syne text-4xl md:text-6xl font-bold mb-8 gradient-text">
          Projects
        </h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className={`
                relative group overflow-hidden rounded-xl
                border border-neutral-800 bg-neutral-900/50
                transition-all duration-300 hover:border-violet-500/50
                ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links */}
                <div className="absolute bottom-4 right-4 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-900/90 hover:bg-violet-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-900/90 hover:bg-violet-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-syne text-xl font-bold mb-2 group-hover:gradient-text transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-sm bg-neutral-800/50 text-neutral-300 border border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 p-8 rounded-xl card-gradient border border-neutral-800"
        >
          <div className="flex items-center gap-4 mb-6">
            <Code2 className="w-8 h-8 gradient-text" />
            <h2 className="font-syne text-2xl font-bold">GitHub Activity</h2>
          </div>
          <div className="aspect-[4/1] bg-neutral-900/50 rounded-lg overflow-hidden">
            <img
              src={`https://ghchart.rshah.org/8b5cf6/chayansamanta`}
              alt="GitHub Contribution Graph"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;