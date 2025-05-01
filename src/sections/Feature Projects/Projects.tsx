import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CampusLink from "@/assets/images/campus-link.png";
import Todo from "@/assets/images/Todo.png";
import Card from "@/components/Card/Card";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Project",
    year: "2023",
    title: "Campus Link",
    results: [
      { title: "Implemented OTP-based time-limited attendance tracking" },
      { title: "Streamlined library reservations and digital catalog access" },
      {
        title:
          "Improved security and user monitoring through real-time features",
      },
    ],
    link: "https://github.com/Akshaythakur766/CampusLink",
    image: CampusLink,
    viewText: "View Site",
  },
  {
    company: "Project",
    year: "2024",
    title: "TODO",
    results: [
      { title: "Built secure user login with Firebase Authentication" },
      { title: "Enabled full CRUD for tasks with persistent local storage" },
      { title: "Deployed scalable web app via Firebase Hosting" },
    ],
    link: "https://todo-list-bade9.web.app/",
    image: Todo,
    viewText: "View Site",
  },
  {
    company: "Npm Package",
    year: "2025",
    title: "Create-App-Setup",
    results: [
      { title: "Automated setup for React, Next.js, and Node.js projects" },
      { title: "Generated structured boilerplate with ready-to-use configs" },
      { title: "Accelerated development start time by over 50%" },
    ],
    link: "https://www.npmjs.com/package/create-app-setup",
    image: aiStartupLandingPage,
    viewText: "View Package",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24 ">
      <div className="container">
        <SectionHeader
          eyebrow="  Real-world Results"
          title=" Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0  md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 35}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl  md:mt-5 ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col  gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50 "
                      >
                        <CheckCircleIcon className="size-5 md:size-6 " />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6 ">
                      <span>{project.viewText}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative  ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 rounded-[18px] border-2 border-gray-700   md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none  "
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
