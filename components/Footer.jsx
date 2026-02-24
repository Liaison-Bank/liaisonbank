"use client";

import Image from "next/image";
import Link from "next/link";
import { importantLinks } from '../static/menus.jsx'
import NewLauncb from "@/components/NewLaunch";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Footer() {
  return (
    <>
      <footer className="text-white px-2 py-2 font-sans text-md">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap justify-between gap-10">
          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">Information</h4>
            <p className="leading-relaxed">
              
            </p>
          </div>

          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">Important Links</h4>
            <ul>
              {importantLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">Quick Contacts</h4>
            <p className="mb-3">
              Plot No. 466, New Apollo CHS, 14th road, near Blue Tokai Coffee, Khar West, Mumbai- 400052
            </p>
            <div className="mb-3 d-flex align-items-center phone">
              <Image src="/phone.png" width={25} height={25} quality={75} alt="Call Us" loading="lazy"/>&nbsp; +91 91364 43852 / 932170 9258
              </div>
            <div className="mb-3 d-flex align-items-center mail">
              <Image src="/mail.png" width={25} height={25} quality={75} alt="Eamil Us" loading="lazy"/>&nbsp; contact@liaisonbank.com
              </div>
            <div className="mb-3 d-flex align-items-center time">
              <Image src="/timer.png" width={35} height={35} quality={75} alt="Office Time" loading="lazy"/>&nbsp; Mon - Sat : 8:00am to 5pm
              </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 py-4 text-center text-white-500 text-md">
          © 2026 by  Liaison Bank | All Rights Reserved
        </div>
        <ScrollToTopButton />
      </footer>
      <div className="marquee-branch d-flex align-items-center bg-white justify-content-between">
        <div className="comingsoontitle pl-4 w-50"><p>Our new branch is opening soon</p> <div className="arrow arrow-right"></div></div>
        <div className="location"><NewLauncb /></div>
      </div>
    </>
  );
}
