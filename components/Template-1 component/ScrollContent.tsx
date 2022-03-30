import { Banner } from "./Banner"
import { Experience } from "./Experience"
import React from "react"
import { Website } from "../../interfaces"
import Services from "./Services"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import ContactMe from "./ContactMe"

function ScrollContent({ websiteData }: { websiteData: Website }) {
  return (
    <>
      <div className="md:px-[30px] pb-[30px] px-[15px] ">
        <Banner />
        <Experience history={websiteData.history} />
        <AboutMe aboutMe={websiteData.about} />
        <Services services={websiteData.services} />
        <Projects projects={websiteData.projects} />
        <ContactMe />
      </div>
    </>
  )
}

export default ScrollContent
