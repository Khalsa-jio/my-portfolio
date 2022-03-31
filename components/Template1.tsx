import { url } from "inspector"
import Head from "next/head"
import React from "react"
import { Website } from "../interfaces"
import { VerticalDots } from "./global/svg/VerticalDots"
import Navbar from "./Template-1 component/Navbar"
import ScrollContent from "./Template-1 component/ScrollContent"
import Sidebar from "./Template-1 component/Sidebar"

function Template1({ websiteData }: { websiteData: Website }) {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(true)

  React.useEffect(() => {
    window.scroll({ behavior: "smooth" })
  }, [])

  return (
    <>
      <Head>
        <title>{websiteData.author}</title>
        <link rel="icon" href="https://img.icons8.com/color/50/000000/developer--v2.png" />
      </Head>
      <div className="relative bg-grey">
        <div className="fixed top-0 z-10 flex items-center justify-center  h-[70px] w-[100vw]  bg-grey">
          {!sidebarOpen && <h3 className="text-textGray text-2xl font-bold uppercase">{websiteData.author}</h3>}
        </div>
        <div className="relative">
          <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} menu={websiteData.menu} />
        </div>
        <div>
          <div
            className="  h-[400px] w-full fixed top-0  bg-center bg-cover"
            style={{
              backgroundImage: `url(${"/images/hills.jpg"})`,
            }}
          >
            <div className="h-full w-full banner-gradient"></div>
          </div>
          <div
            className={`
          ${navbarOpen && " lg:pr-[230px]"} ${sidebarOpen ? "lg:pl-[290px] lg:w-[100vw-290px]" : "w-[100vw-80px]"} 
          transition-all ease-in-out md:pr-[80px] overflow-hidden  duration-700 relative mt-[70px]`}
          >
            <ScrollContent websiteData={websiteData} />
          </div>
        </div>
        <div className="relative ">
          <Sidebar websiteData={websiteData} open={sidebarOpen} setOpen={setSidebarOpen} />
        </div>
      </div>
    </>
  )
}

export default Template1
