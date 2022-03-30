import React, { useEffect } from "react"
import { Website } from "../../interfaces"

function AboutMe({ aboutMe }: { aboutMe: Website["about"] }) {
  return (
    <div id="about">
      <h5 className="mb-[15px] text-md text-white uppercase font-semibold">about me </h5>
      <div className=" md:p-[60px] p-[30px] card-background ">
        <div className=" text-textGray text-sm font-medium">{aboutMe}</div>
      </div>
    </div>
  )
}

export default AboutMe
