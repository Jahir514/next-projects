"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVuedotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
// about data
const aboutData = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem magnam, voluptatibus iusto temporibus delectus at atque alias.",
  info: [
    {
      fieldName: "Name",
      value: "MD. Jahir Hasan",
    },
    {
      fieldName: "Phone",
      value: "+88 01851171505",
    },
    {
      fieldName: "Email",
      value: "hasanjahir30@gmail.com",
    },
    {
      fieldName: "Experience",
      value: "3+ Years",
    },
    {
      fieldName: "Nationlaty",
      value: "Bangladeshi",
    },
    {
      fieldName: "Language",
      value: "English, Bengali",
    },
    {
      fieldName: "Freelance",
      value: "Available",
    },
  ],
};

// experience data
const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My Experiences",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem magnam, voluptatibus iusto temporibus delectus at atque alias.",
  items: [
    {
      company: "Amana Group LTD",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Amana Group LTD",
      position: "Junior Full Stack Developer",
      duration: "2021 - 2022",
    },
    {
      company: "-",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem magnam, voluptatibus iusto temporibus delectus at atque alias.",
  items: [
    {
      institution: "Comilla University",
      degree: "MSc",
      duration: "2020 - 2021",
    },
    {
      institution: "Coders Trust",
      degree: "Full Stack Web Development Course",
      duration: "2017",
    },
    {
      institution: "Comilla University",
      degree: "BSc",
      duration: "2013 - 2016",
    },
    {
      institution: "Dhaka City College",
      degree: "HSC",
      duration: "2011 - 2012",
    },
  ],
};
// skill data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem magnam, voluptatibus iusto temporibus delectus at atque alias.",
  skillLists: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiVuedotjs />,
      name: "Vue.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] py-12 xl:py-0 flex justify-center"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full">
              About me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
