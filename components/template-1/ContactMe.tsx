import { AtSymbolIcon, MailIcon, UserIcon } from "@heroicons/react/solid"
import React from "react"
import emailjs from "@emailjs/browser"

function ContactMe() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // const form = e.currentTarget
    // const formData = new FormData(form)
    // const data = Object.fromEntries(formData)
    // console.log(data)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div id="contact" className="pt-[15px]">
        <h5 className="mb-[15px] text-md text-white uppercase font-semibold">Get In Touch</h5>
        <div className="p-[30px] bg-grey2">
          <form action="POST" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-8">
              <div className="mb-[15px] relative group">
                <label className="absolute top-0 left-0 group-focus-within:bg-yellow duration-300  h-full bg-grey flex p-2 items-center">
                  <UserIcon className="text-textGray group-focus-within:text-grey duration-300 w-4 h-4" />
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  className="w-full text-textGray border card-background border-none pl-[65px] h-[50px] pr-[15px]  focus:outline-none"
                />
              </div>
              <div className="mb-[15px] relative group">
                <label className="absolute top-0 left-0 group-focus-within:bg-yellow duration-300  h-full bg-grey flex p-2 items-center">
                  <AtSymbolIcon className="text-textGray group-focus-within:text-grey duration-300 w-4 h-4" />
                </label>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  className="w-full text-textGray border card-background border-none pl-[65px] h-[50px] pr-[15px]  focus:outline-none"
                />
              </div>
              <div className="mb-[15px] relative group">
                <label className="absolute top-0 left-0 group-focus-within:bg-yellow duration-300  h-full bg-grey flex p-2 items-center">
                  <MailIcon className="text-textGray focus:bg-white group-focus-within:text-grey duration-300 w-4 h-4" />
                </label>
                <textarea
                  placeholder="Message"
                  name="message"
                  className="w-full text-textGray border card-background border-none pl-[65px] pt-[15px] pr-[15px]  focus:outline-none"
                  rows={5}
                />
              </div>

              <div className="mb-[15px]">
                <button className=" bg-yellow h-[45px] px-[35px] text-grayDark text-sm font-normal uppercase  focus:outline-none ">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactMe
