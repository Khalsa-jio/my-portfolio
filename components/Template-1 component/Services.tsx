import React from "react"
import { Website } from "../../interfaces"

function Services({ services }: { services: Website["services"] }) {
  return (
    <div id="services" className="pt-[30px] ">
      <h5 className="mb-[15px] text-md text-white uppercase font-semibold">Services</h5>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 ">
        {services.map(({ title, content }, index) => (
          <div
            key={index}
            className="card-background p-[30px] overflow-hidden hover:-translate-y-4 hover:scale-x-105 cursor-pointer  duration-200 min-h-[250px]"
          >
            <h5 className="mb-[15px] text-md text-white font-semibold">{title}</h5>
            <p className="mb-[15px] text-textGray font-medium text-sm">{content} </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
