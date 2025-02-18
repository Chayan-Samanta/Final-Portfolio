import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

const Blog: FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications.",
      content: `Artificial Intelligence is transforming web development in unprecedented ways. From automated testing to intelligent code completion, AI is making developers more productive than ever.

      Key Areas of Impact:
      1. Automated Code Generation
      2. Intelligent Testing
      3. Performance Optimization
      4. User Experience Personalization
      
      The future holds even more promise with emerging technologies like GPT-4 and advanced machine learning models being integrated into development workflows.`,
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      category: "AI & Development"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable React applications that scale.",
      content: `Creating scalable React applications requires careful planning and implementation of best practices. This article explores key concepts and patterns.

      Topics Covered:
      1. Component Architecture
      2. State Management
      3. Performance Optimization
      4. Code Organization
      5. Testing Strategies
      
      By following these principles, you can build React applications that are both maintainable and scalable.`,
      date: "March 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      category: "React"
    },
    {
      title: "The Rise of Edge Computing",
      excerpt: "Understanding the impact of edge computing on modern web architecture.",
      content: `Edge computing is revolutionizing how we build and deploy web applications. By moving computation closer to the data source, we can achieve better performance and reliability.

      Benefits of Edge Computing:
      1. Reduced Latency
      2. Improved Performance
      3. Better Security
      4. Cost Efficiency
      
      This article explores how edge computing is shaping the future of web development and its practical applications.`,
      date: "March 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      category: "Technology"
    }
  ];

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <h1 className="font-syne text-4xl md:text-6xl font-bold mb-8 gradient-text">
          Blog
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-gradient border border-neutral-800 rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-neutral-900/80 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="font-syne text-xl font-bold mb-3 group-hover:gradient-text transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-neutral-400 mb-4">
                  {post.excerpt}
                </p>
                
                <button 
                  onClick={() => setSelectedPost(index)}
                  className="flex items-center gap-2 text-sm font-medium hover:gradient-text transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal for full post content */}
        <AnimatePresence>
          {selectedPost !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-neutral-900 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="font-syne text-2xl font-bold mb-2 gradient-text">
                        {posts[selectedPost].title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-neutral-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {posts[selectedPost].date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {posts[selectedPost].readTime}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    {posts[selectedPost].content.split('\n').map((paragraph, i) => (
                      <p key={i} className="text-neutral-300 mb-4 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Blog;