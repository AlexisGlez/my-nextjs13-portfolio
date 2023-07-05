"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { CircleIcon } from "../CircleIcon";

const Details: React.FunctionComponent<{
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}> = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <CircleIcon containerRef={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export const Experience: React.FunctionComponent<{}> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-32 sm:my-16">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Senior Software Engineer"
            company="Microsoft"
            companyLink="www.microsoft.com"
            time="2022-Present"
            address="Redmond, WA"
            work="Worked on a team responsible for developing new features for Microsoft Education."
          />
          <Details
            position="Software Engineer"
            company="Microsoft"
            companyLink="www.microsoft.com"
            time="2020-2022"
            address="Redmond, WA"
            work="I designed, developed, & integrated features, services, & APIs for Microsoft's Identity & EDU organizations."
          />
          <Details
            position="Software Engineer"
            company="Scalable Press"
            companyLink="www.scalablepress.com"
            time="2019"
            address="Guadalajara, Mexico"
            work="Contributed with the implementation of good software engineering practices within the team."
          />
          <Details
            position="Software Engineer"
            company="Wizeline"
            companyLink="www.wizeline.com"
            time="2016-2019"
            address="Guadalajara, Mexico"
            work="Participated in the development of various projects for different customers."
          />
          <Details
            position="Android Developer"
            company="Alpha Wave Systems"
            companyLink="www.alphawave.systems"
            time="2014-2016"
            address="Guadalajara, Mexico"
            work="Participated in the development of BELMovil & PagoMovil apps for Android."
          />
        </ul>
      </div>
    </div>
  );
};
