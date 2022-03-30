import { Menubar } from "../global/svg/Menubar"
import { Cross } from "../global/svg/Cross"
import Link from "next/link"
import React from "react"
import { Website } from "../../interfaces"

interface Props {
  navbarOpen: boolean
  setNavbarOpen: (navbarOpen: boolean) => void
  menu: Website["menu"]
}

function Navbar({ navbarOpen, setNavbarOpen, menu }: Props) {
  let time = 100
  return (
    <div className="absolute z-50 w-[0] md:right-[0] right-[-160px] top-[-70px] h-[calc(100vh-30px)]">
      <div
        className={`${
          navbarOpen ? " w-[230px] translate-x-[-380px] md:translate-x-[-230px]" : " w-[80px] translate-x-[-80px]"
        } transform transition-all ease-in-out duration-700 h-[100vh] fixed top-auto right-auto bg-grey`}
      >
        <div className="relative">
          <div
            className={`w-[100%] h-[70px] flex justify-start items-center absolute top-0 md:left-0 ${
              navbarOpen ? "left-0" : "left-[-150px]"
            } z-10 transition-all ease-in-out duration-700 shadow drop-shadow-xs bg-grey2 p-[30px] group `}
          >
            <div onClick={() => setNavbarOpen(!navbarOpen)}>{navbarOpen ? <Cross /> : <Menubar />}</div>
          </div>
        </div>
        <div
          className={`w-[200px] rotate-90  text-textGray absolute top-[200px] left-[-62px] uppercase text-xs font-semibold duration-300
        ${navbarOpen ? "hidden" : "block"}
        `}
        >
          <Link href="/">
            <a className="cursor-pointer p-4 text-sm">Home</a>
          </Link>
        </div>
        <nav className="h-[100%]  flex items-center justify-center relative">
          <ul className="min-w-[230px] w-[100%] m-b-[60px] ">
            {menu.map((item, index) => {
              time = time + 100
              return (
                <li
                  key={index}
                  className={`w-[100%] transition  text-textGray hover:text-white py-[7px] px-[30px] ${
                    navbarOpen ? "translate-x-[0] opacity-100" : "opacity-0 translate-x-[60px]"
                  } delay-[${time}ms] duration-700 ease-in-out`}
                >
                  <Link href={item.link}>
                    <a className="uppercase text-md font-semibold tracking-normal">{item.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
