import { VerticalDots } from "../global/svg/VerticalDots"
import React, { useState } from "react"
import { Website } from "../../interfaces"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import ProgressBar from "@ramonak/react-progress-bar"
import { CheckIcon, DownloadIcon } from "@heroicons/react/solid"
import Link from "next/link"
import Image from "next/image"
interface Props {
  websiteData: Website
  open: boolean
  setOpen: (open: boolean) => void
}

function Sidebar({ websiteData, open, setOpen }: Props) {
  const downloadFile = () => {
    window.open("http://localhost:3000/api/files/singh_jio_resume.pdf")
  }

  return (
    <div
      className={`fixed top-0 ${
        open ? "left-0 " : "left-[-290px] "
      } transition-all ease-in-out duration-700 h-[100vh] w-[290px] bg-grey  pt-4
    md:block z-50 shadow-lg shadow-blue-500/40 px-[10px] `}
    >
      <div
        className={`absolute  top-0 cursor-pointer ${
          open ? "right-[-20px] p-[30px]" : "right-[-70px] bg-grey2 p-[24px]"
        } duration-700 ease-in-out w-100 z-[60]`}
        onClick={() => setOpen(!open)}
      >
        <VerticalDots />
      </div>
      <div
        className=" bg-grey2 absolute top-2 left-0 w-full z-55 h-[235px]
      p-[30px] text-center group cursor-pointer "
      >
        <div className="w-[70px] h-[70px] m-auto rounded-full ">
          <Image
            src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
            alt="avatar"
          />
        </div>
        <div
          className=" text-white text-base tracking-widest group-hover:tracking-wide font-semibold my-2
        ease-in-out duration-200
        "
        >
          {websiteData.author}
        </div>
        <div
          className="text-textGray text-xs tracking-wide group-hover:tracking-widest font-medium
          ease-in-out duration-200
        "
        >
          {websiteData.position_1} <br />
          {websiteData.position_2}
        </div>
      </div>
      <div
        className=" no-scrollbar px-8  pt-[240px] pb-[50px] w-100 h-[calc(100vh-30px)]
      overflow-y-auto"
      >
        <div className="flex flex-col w-full py-[15px] border-b-[1px] border-textGray border-opacity-30 mb-[20px]">
          <ul className="text-white text-xs tracking-wider">
            <li className="flex justify-between pb-2">
              Residence: <span className="text-textGray">{websiteData.Address.Country}</span>
            </li>
            <li className="flex justify-between pb-2">
              City: <span className="text-textGray">{websiteData.Address.City}</span>
            </li>
            <li className="flex justify-between pb-2">
              Age: <span className="text-textGray">{websiteData.age}</span>
            </li>
          </ul>
        </div>
        {/* <div className="  mb-[15px]"></div> */}
        <div className="flex flex-col w-full pb-[55px] border-b-[1px] border-textGray border-opacity-30 ">
          <h5 className="text-white text-xs tracking-wide font-bold mt-[5px]">Languages</h5>
          <div className="grid grid-col-3  grid-flow-col gap-6 mt-[15px]">
            {websiteData.languages.map((language, index) => (
              <div key={index} className="" style={{ width: 50, height: 50 }}>
                <CircularProgressbar
                  value={language.level}
                  text={`${language.level}%`}
                  styles={buildStyles({
                    pathColor: `#ffc107`,
                    textColor: "#cacac3",
                    trailColor: "#0000",
                  })}
                />
                <h5 className="text-white text-xs font-normal tracking-wider text-center mt-[10px]">{language.name}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full pb-[45px] border-b-[1px] border-textGray border-opacity-30 mt-[10px] ">
          <h5 className="text-white text-xs tracking-wide font-bold mt-[15px]">Coding</h5>
          <div className="grid grid-rows-12 gap-1 mt-[15px]">
            {websiteData.coding.map((language, index) => (
              <div key={index} className="mt-[15px]">
                <h5 className="text-white tracking-wide text-xs font-normal text-left flex justify-between  mb-[5px]">
                  {language.name} <span className="text-textGray">{language.level} %</span>
                </h5>
                <ProgressBar
                  completed={language.level}
                  maxCompleted={100}
                  isLabelVisible={false}
                  bgColor="#ffc107"
                  height={"5px"}
                  baseBgColor="#000000"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full pb-[20px] border-b-[1px] border-textGray border-opacity-30 mt-[10px]">
          <h5 className="text-white text-xs font-bold mt-[15px]  tracking-wide mb-[10px]">Knowledge</h5>
          <ul>
            {websiteData.knowledge.map((language, index) => (
              <li key={index} className=" flex pb-2 ">
                <CheckIcon className="h-[15px] text-yellow font-bold mr-1 pt-[1px]" />
                <h5 className="text-textGray text-xs font-normal text-left flex justify-between tracking-wide mb-[2px]">
                  {language.name}
                </h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[15px] text-textGray cursor-pointer flex ">
          <button className="flex uppercase text-xs font-bold" onClick={downloadFile}>
            Download CV
            <DownloadIcon className="h-[15px] ml-[5px]   font-bold  text-textGray mr-1 pt-[1px]" />
          </button>
        </div>
      </div>
      <div className="h-[50px] flex bg-grey2 w-full justify-center items-center	gap-3 absolute bottom-0 left-0  z-999 ">
        <Link href={websiteData.social.github}>
          <a target="_blank">
            <svg fill="#8c8c8e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
              {" "}
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
        </Link>
        <Link href={websiteData.social.linkedIn}>
          <a target="_blank">
            <svg fill="#8c8c8e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
              {" "}
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
