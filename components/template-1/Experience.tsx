import React from "react"
import { Website } from "../../interfaces"
export function Experience({ history }: { history: Website["history"] }) {
  return (
    <div className="pt-[30px] grid md:grid-cols-4 grid-cols-2 gap-4">
      {history.map(({ title, data, extra }, index) => {
        return (
          <div key={index} className="flex justify-center items-center mb-7">
            <div className=" flex justify-start items-center">
              <span className="min-w-[30px] text-yellow font-semibold text-xl">
                {data} {extra === true && "+"}{" "}
              </span>
              <h5 className="pl-2 text-white text-sm font-medium">{title}</h5>
            </div>
          </div>
        )
      })}
    </div>
  )
}
