"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Smooth scroll function
  const scrollTo = (id?: string, block: ScrollLogicalPosition = "start") => {
    // console.log("Current pathname:", pathname);

    if (pathname !== "/") {
      if (!id) {
        router.push("/");
      } else {
        router.push(`/#${id}`);
      }
      return;
    }

    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block });
    }
  };

  // Navigation links
  const navLinks = (
    <>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollTo("");
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollTo("about-me");
          }}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollTo("skills");
          }}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollTo("projects");
          }}
        >
          Projects
        </a>
      </li>
      {/* <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
        >
          Contact
        </a>
      </li> */}
      <li>
        <a href="/resume.pdf" target="_blank" rel="">
          Resume
        </a>
      </li>
    </>
  );

  return (
    <div className="bg-primaryColor/70 backdrop-blur-3xl fixed top-0 left-0 right-0 z-50">
      <div className="xl:max-w-screen-xl xl:mx-auto border-none">
        <div className="navbar text-white">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="text-primaryColor menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Nayeem</a>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
