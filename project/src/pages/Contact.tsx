import { FC, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('http://localhost:3004/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message Sent Successfully!'
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to Send Message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200";
  
  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1
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
          Get in Touch
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formAnimation}
            custom={0}
          >
            <p className="text-lg text-neutral-400 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of the following channels.
            </p>

            <div className="space-y-6">
              <motion.div 
                variants={formAnimation}
                custom={1}
                className="flex items-center p-4 rounded-lg card-gradient border border-neutral-800 group hover:border-violet-500 transition-all duration-300"
              >
                <Mail className="w-6 h-6 mr-4 gradient-text" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:chayansamanta06@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                    chayansamanta06@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={formAnimation}
                custom={2}
                className="flex items-center p-4 rounded-lg card-gradient border border-neutral-800 group hover:border-violet-500 transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-4 gradient-text" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+919330610***" className="text-neutral-400 hover:text-white transition-colors">
                    +91 93306 10***
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={formAnimation}
                custom={3}
                className="flex items-center p-4 rounded-lg card-gradient border border-neutral-800 group hover:border-violet-500 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 mr-4 gradient-text" />
                <div>
                  <div className="font-medium">Location</div>
                  <span className="text-neutral-400">
                    Kolkata, West Bengal
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formAnimation}
            custom={4}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formAnimation} custom={5}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={inputClasses}
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={formAnimation} custom={6}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={inputClasses}
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={formAnimation} custom={7}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className={inputClasses}
                  placeholder="Your message Here..."
                ></textarea>
              </motion.div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-900/50 text-green-200 border border-green-800'
                      : 'bg-red-900/50 text-red-200 border border-red-800'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                variants={formAnimation}
                custom={8}
                type="submit"
                disabled={isSubmitting}
                whileHover="hover"
                whileTap="tap"
                className={`
                  w-full py-4 px-6 rounded-lg 
                  bg-gradient-to-r from-violet-600 to-fuchsia-600
                  hover:from-violet-500 hover:to-fuchsia-500
                  focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-900
                  flex items-center justify-center gap-3
                  font-medium text-white shadow-lg shadow-violet-500/20
                  transform transition-all duration-200
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-violet-500/30'}
                `}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;