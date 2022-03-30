import React from "react"
import Link from "next/link"
import Typical from "react-typical"

export function Banner() {
  return (
    <div className="md:pt-[30px] pt-[15px] ">
      <div
        className="bg-center bg-cover w-[100%] h-[50vh] bg-no-repeat z-[999]"
        style={{
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"})`,
        }}
      >
        <div className="relative p-[60px] w-[100%] banner-gradient-top min-h-full">
          <h1 className="mb-[15px] text-white text-3xl md:text-5xl font-extrabold">
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
            <Link href="/">
              <a className="h-[45px] text-xs px-[35px] py-[10px] bg-yellow ">Contact Me</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
