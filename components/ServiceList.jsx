import Image from 'next/image'
import { useState } from "react";
import rightTick from "@/assets/images/rightTick.svg"

const services = [
  {
    title: "Asset Management & Regularization",
    content:
      "We help manage and regularize assets by ensuring legal compliance, documentation accuracy, and long-term regulatory alignment."
  },
  {
    title: "Compliance For SME's",
    content:
      "We assist SMEs in navigating statutory compliances, audits, approvals, and ongoing regulatory requirements."
  },
  {
    title: "Energy Savings",
    content:
      "Our energy-saving solutions optimize consumption, reduce costs, and improve operational efficiency."
  },
  {
    title: "Licence Procurement",
    content:
      "We handle end-to-end licence procurement including application, follow-ups, and approvals."
  },
  {
    title: "Tailor Made Permissions",
    content:
      "We provide customized permission solutions based on project type, location, and authority requirements."
  }
];

export default function ServiceList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
     <div className="service-content">
        {services[activeIndex].content}
      </div>
      <ul className="service-list list-unstyled list-icon style-1">
        {services.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
             <Image
                src={rightTick}
                alt=""
                priority
                /> 
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}