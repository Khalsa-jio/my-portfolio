import Image from "next/image"
import React from "react"
import Typical from "react-typical"

export function Banner() {
  function scrollToSection(el: string) {
    const divElement = document.getElementById(el)
    divElement.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="md:pt-[30px] pt-[15px] ">
      <div
        className="bg-center bg-cover w-full h-[50vh] bg-no-repeat z-[999]"
        style={{
          backgroundImage: `url("/images/hills.jpg")`,
        }}
      >
        <div className="relative p-[60px] w-full banner-gradient-top min-h-full">
          <h1 className="mb-[15px] lg:w-4/5 w-full text-white text-3xl md:text-5xl font-extrabold">
            Freelancer | Full Stack Developer{" "}
          </h1>
          <div className="mb-[25px] text-base font-serif text-white">
            {"<"}
            <span className="text-yellow">code</span>
            {">"}
            I create
            <Typical steps={[" Web application", 1000]} loop={Infinity} wrapper="span" />
            <span className=" code-animation"></span>
            {"</"}
            <span className="text-yellow">code</span>
            {">"}
          </div>
          <div>
            <button onClick={() => scrollToSection("contact")}>
              <a className="h-[45px] text-xs px-[35px] py-[10px] bg-yellow ">Contact Me</a>
            </button>
          </div>
          <div className="absolute w-1/3 h-full lg:opacity-100 opacity-0 bottom-0 right-0">
            <div className="relative w-full h-full ">
              <Image src={"/images/myImagesmall.png"} alt="" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
