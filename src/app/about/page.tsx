import Image from "next/image";

import { AnimatedTitle } from "@/shared/components/AnimatedTitle";
import { Layout } from "@/shared/components/Layout";
import profilePicture from "../../../public/images/profile/developer-pic-2.jpeg";

import { Stat } from "./(components)/Stat";
import { Skills } from "./(components)/Skills";
import { Experience } from "./(components)/Experience";
import { Education } from "./(components)/Education";

export const metadata = {
  title: "AlexisGlez | About Page",
  description: "About AlexisGlez",
};

export default function About() {
  return (
    <main className="flex items-center justify-center flex-col w-full dark:text-light">
      <Layout className="pt-16">
        <AnimatedTitle
          text="Passion Fuels Purpose!"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm AlexisGlez, a senior software engineer with a passion for
              creating beautiful, functional, and user-centered digital
              experiences. With 9+ years of experience in the field, I am always
              looking for new and innovative ways to bring visions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src={profilePicture}
              alt="AlexisGlez"
              className="w-full h-auto rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <Stat value={5} title="satisfied clients" />
            <Stat value={10} title="projects completed" />
            <Stat value={9} title="years of experience" />
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  );
}
