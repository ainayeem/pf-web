import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="bg-white py-20 px-5 xl:p-20 border-b">
        <div>
          <h1 className="text-4xl font-semibold text-center text-primaryColor">About Me</h1>
          <span className="w-20 h-1 mx-auto bg-primaryColor rounded block"></span>
        </div>

        <p className="text-center text-lg xl:text-xl mt-10">
          I am <span className="text-3xl font-medium">Ashikul Islam Nayeem</span>. A person with a great interest in development.
        </p>

        <p className="mt-3 xl:mt-5 text-center text-lg xl:text-xl">Through my journey as a developer, I have gained various skills.</p>

        <p className="mt-3 xl:mt-5 text-center text-lg xl:text-xl">
          I have graduated from <span className="font-semibold">Daffodil International University</span> on 2023 obtaining{" "}
          <span className="font-semibold">B.Sc in CSE</span> degree.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
