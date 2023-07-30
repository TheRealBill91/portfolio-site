import { SocialLinks } from "./SocialLinks";
import portrait from "../assets/photos/portrait.jpeg";
import { memo } from "react";

export const About = memo(function About() {
  return (
    <section
      id="about"
      className="relative  rounded-md  rounded-b-none border-b-2 border-gray-300/40 p-4 pb-7"
    >
      <a href="#about">
        <h2 className="py-2 pt-2 text-center text-3xl font-bold">About me</h2>
      </a>

      <div className="relative  ">
        <img
          className=" rounded-3xl py-1 hover:scale-100  "
          src={portrait}
          alt="portrait of Billy"
        />
        <p className=" absolute  bottom-3 left-14 rounded-2xl border-2 border-gray-400/70 bg-slate-100/70 p-1  px-2 text-center text-2xl text-black backdrop-blur-3xl ">
          Billy Cummings
        </p>
      </div>

      <p className="mt-2 pb-2 pt-1 text-left text-lg leading-8">
        Hi there! I&apos;m a tech enthusiast with a passion for problem-solving
        and building projects. I&apos;ve been exploring web development and love
        discovering its many aspects. I&apos;m always eager to learn more and
        take on new challenges
      </p>
      <SocialLinks />
    </section>
  );
});
