"use client";

import { twMerge } from "tailwind-merge";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function WithFramerMotion() {
  return (
    <main className="bg-[#06141D] p-8 text-zinc-50">
      <div className="w-full">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="max-w-4xl mx-auto grid grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialBlock />
          <AboutBlock />
          <LocationBlock />
          <EmailListBlock />
        </motion.div>

        <div className="text-center mt-20 hover:underline group transition-all">
          <a href="/" className="flex justify-center items-center gap-1.5">
            Without appling <span className="text-red-300">Framer_Motion</span>
            <FaRegArrowAltCircleRight
              className="group-hover:transform group-hover:translate-x-1 group-hover:transition-all group-hover:text-blue-500"
              size={13}
            />
          </a>
        </div>
      </div>
    </main>
  );
}

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 200,
        dumping: 0.5,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?t=st=1718197010~exp=1718200610~hmac=8bad414c516f703a651e065c1f42b5014f402dba94a65841d04ab713d4ec0fe0&w=740"
        alt="avatar"
        className="mb-4 size-12 rounded-full"
      />
      <h1 className="mb-10 text-4xl font-medium leading-tight">
        Hello, I'm Farijul.{" "}
        <span className="text-zinc-400">
          I build cool websites like this one
        </span>
      </h1>
      <a href="#" className="flex items-center gap-1.5 text-[#fa9a21] group">
        Contact Me{" "}
        <FaRegArrowAltCircleRight
          className="group-hover:transform group-hover:translate-x-1 group-hover:transition-all "
          size={13}
        />
      </a>
    </Block>
  );
};

const SocialBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: "1.1",
        }}
        className="col-span-6 bg-blue-400 md:col-span-3 "
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FaLinkedin />
        </a>
      </Block>

      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: "1.1",
        }}
        className="col-span-6 bg-green-500 md:col-span-3 "
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <IoLogoWhatsapp />
        </a>
      </Block>

      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: "1.1",
        }}
        className="col-span-6 bg-white  md:col-span-3 "
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <IoLogoGithub className="text-black" />
        </a>
      </Block>

      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: "1.1",
        }}
        className="col-span-6 bg-blue-600 md:col-span-3 "
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FaFacebook />
        </a>
      </Block>
    </>
  );
};

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-3xl leading-snug">
      <p>
        My passion is building cool stuff.
        <span className="text-zinc-400">
          {" "}
          I build primarily with React.js/Next.js, Tailwind CSS, and Framer
          Motion. I have done so many projects using this stack.
        </span>
      </p>
    </Block>
  );
};

const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
      <FiMapPin className="text-3xl" />
      <p className="text-center text-lg text-zinc-400">Cyberspace</p>
    </Block>
  );
};

const EmailListBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Join my mailing list</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
        >
          <FiMail /> Join the list
        </button>
      </form>
    </Block>
  );
};
