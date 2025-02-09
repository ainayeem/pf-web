"use client";
import { scrollTo } from "@/app/utility/scroollUtils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// #1a2f4a
const Hero = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="bg-primaryColor">
      <div className="xl:max-w-screen-xl xl:mx-auto">
        <div className="2xl:flex justify-center items-center 2xl:pt-10 pt-28 px-6">
          <div className="text-white py-16 ">
            <h2 className="text-xl xl:text-4xl mb-3 font-medium">Hi There, I&apos;m</h2>
            <h1 className="text-5xl xl:text-8xl -ml-1 xl:-ml-2 mb-3 font-semibold">Ashikul Islam</h1>
            <h1 className="text-5xl xl:text-8xl -ml-1 xl:-ml-2 mb-3 font-semibold">Nayeem</h1>
            <h2 className="text-xl xl:text-4xl mb-3 font-medium">Full Stack Developer</h2>

            <div className="mt-8 flex items-center justify-center xl:justify-start gap-5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(router, pathname, "contact");
                }}
                type="button"
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-primaryColorButton border border-transparent rounded-md focus:outline-none hover:bg-primaryColorHovar"
              >
                Contact Me
              </button>
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1TsZa9HN_U53iWC7RmgdK2AbHcW4bfQ6A/view?usp=sharing", "_blank")}
                type="button"
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-primaryColorButton border border-transparent rounded-md focus:outline-none hover:bg-primaryColorHovar"
              >
                View Resume
              </button>
            </div>
          </div>
          <div className="">
            <Image src="/assets/images/hero_img.png" alt="portfolio img" className="" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
