import Link from "next/link"
import React from "react"
import { Website } from "../../interfaces"
import Image from "next/image"

function Projects({ projects }: { projects: Website["projects"] }) {
  return (
    <div id="projects " className="pt-[30px]">
      <h5 className="mb-[15px] text-md text-white uppercase font-semibold">Projects </h5>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {projects.map(({ title, content, image, link }, index) => {
          return (
            <Link href={link} key={index}>
              <a
                target="_blank"
                className="h-[400px] group overflow-hidden relative flex justify-center items-center cursor-pointer bg-yellow"
              >
                <Image src={image} width={200} alt={title} />
                <div className="bg-grey2 p-[30px] absolute group-hover:bottom-0 bottom-[-500px] duration-500 h-[200px] w-full">
                  <h5 className="text-white text-md font-bold mb-[15px]">{title}</h5>
                  <p className="text-textGray text-sm font-normal">{content}</p>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
