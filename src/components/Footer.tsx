import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

const settings = {name: "Alexandre Gravereaux", github_link: "", twitter_link:"", linkedin_link:""}

export default async function Footer() {

  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-10 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            {settings.name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} {settings.name}
          </p>
        </div>
        <div className="socials inline-flex justify-center sm:justify-end">
            <Link
              href={settings.github_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.name + " on GitHub"}
            >
              <FaGithub />
            </Link>
            <Link
              href={settings.twitter_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.name + " on Twitter"}
            >
              <FaTwitter />
            </Link>
            <Link
              href={settings.linkedin_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.name + " on LinkedIn"}
            >
              <FaLinkedin />
            </Link>
        </div>
      </div>
    </Bounded>
  );
}