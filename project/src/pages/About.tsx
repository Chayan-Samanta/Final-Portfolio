import { FC } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase } from 'lucide-react';

const About: FC = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      learningSince: "LearningSince - 2024-25",
      description: "Developing modern web applications using React, Node.js, and various cloud technologies."
    },
    {
      role: "Web Developer",
      learningSince: "LearningSince - 2023-24",
      description: "Created responsive websites and web applications for clients using modern frameworks and tools."
    },
    {
      role: "UI/UX Designer",
      learningSince: "LearningSince - 2023-24",
      description: "Designing intuitive user interfaces using Figma and Adobe XD, focusing on user-centered design principles."
    },
    {
      role: "Multimedia Creator",
      learningSince: "LearningSince - 2022-23",
      description: "Creating engaging multimedia content, including Adobe Illustrator, video editing, and interactive UI animations."
    }
  ];


  const education = [
    {
      year: "2022 - 2025",
      degree: "Bachelor of Vocational (SOFTWARE DEVELOPMENT)",
      school: "Asutosh College (CU)",
      focus: "Software Development"
    },
    {
      year: "2021 - 2022",
      degree: "Higher Secondary Education",
      school: "Sarengabad High School",
      focus: "Vocational Education"
    },
    {
      year: "2014 - 2020",
      degree: "Madhyamik Examination",
      school: "Budge Budge Abbey High School",
      focus: "Secondary Education"
    },
    {
      year: "2010 - 2013",
      degree: "Primary Education",
      school: "Abaitanik Primary School",
      focus: "Primary Education"
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
        {/* About Me */}
        <div className="mb-20">
          <h1 className="font-syne text-4xl md:text-6xl font-bold mb-8 gradient-text">
            About Me
          </h1>
          <p className="text-lg text-neutral-400 mb-6">
            I'm a Passionate Web Developer And Desinger based in Kolkata, India, with a strong focus on creating 
            modern web applications and Design. Currently pursuing my B.Voc In Software Development, I combine my academic 
            knowledge with practical experience in building real-world applications.
          </p>
          <p className="text-lg text-neutral-400">
            I specialize in React, TypeScript, JavaScript, Python, MultiMedia, PHP, SQL, DataBase,  and Node.js, and I'm constantly exploring new technologies 
            to stay at the forefront of web development. When I'm not coding, I enjoy contributing to 
            open-source projects and sharing my knowledge with the developer community.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 mr-4 gradient-text" />
            <h2 className="font-syne text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient border border-neutral-800 rounded-xl p-6"
              >
                {/* <div className="text-sm text-neutral-400 mb-2">{exp.year}</div> */}
                <h3 className="font-syne text-xl font-bold mb-1">{exp.role}</h3>
                {/* <div className="text-neutral-300 mb-2">{exp.company}</div> */}
                <div className="text-neutral-300 mb-2">{exp.learningSince}</div>
                <p className="text-neutral-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 mr-4 gradient-text" />
            <h2 className="font-syne text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient border border-neutral-800 rounded-xl p-6"
              >
                <div className="text-sm text-neutral-400 mb-2">{edu.year}</div>
                <h3 className="font-syne text-xl font-bold mb-1">{edu.degree}</h3>
                <div className="text-neutral-300 mb-2">{edu.school}</div>
                <p className="text-neutral-400">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 mr-4 gradient-text" />
            <h2 className="font-syne text-3xl font-bold">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Microsoft Azure Fundamentals - Simplilearn",
              "Google Cloud Platform Architect - Simplilearn", // done 
              "Linux Training - Simplilearn",
              "Python Programming - CodeWithHarry",
              "CompTIA Linux + Course - Simplilearn",
              "AWS - Simplilearn"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient border border-neutral-800 rounded-xl p-6"
              >
                <h3 className="font-syne text-lg font-bold">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;