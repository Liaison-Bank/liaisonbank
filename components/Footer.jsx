"use client";

import Link from "next/link";
import { footerLinks, informationLinks } from '../static/menus.jsx'
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Footer() {
  return (
    <>
      <footer className="text-white px-2 py-2 font-sans text-md">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap justify-between gap-10">
          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">Office Address</h4>
            <p className="leading-relaxed">
              Plot No. 466, New Apollo CHS, 14th road, near Blue Tokai Coffee, Khar West, Mumbai- 400052
            </p>
          </div>

          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">Important Links</h4>
            <ul>
              {footerLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
              <li>
                <a href="/article" className="cursor-pointer hover:underline">Article</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">Information</h4>
            <ul>
              {informationLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              {/* {[
              { label: "Testimonials", href: "/testimonials" },
              { label: "Contact Us", href: "/contact-us-liaison-bank" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms and Conditions", href: "/terms-conditions" }
            ].map(({ label, href }) => (
              <li key={label} className="border-b border-gray-700 py-2">
                <a href={href} className="cursor-pointer hover:underline">{label}</a>
              </li>
            ))} */}
            </ul>
          </div>

          <div className="flex flex-col max-w-xs flex-1 min-w-[200px]">
            <h4 className="text-yellow-400 font-semibold mb-4 text-base">Quick Contacts</h4>
            <p className="mb-3">

            </p>
            <p className="mb-3">
              <strong className="block mb-1">Phone</strong>
              (+91) 91364 43852/(+91) 9321709258
            </p>
            <p className="mb-3">
              <strong className="block mb-1">Email</strong>
              contact@liaisonbank.com
            </p>
            <p>Mon - Sat : 8:00am to 5pm</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 py-4 text-center text-white-500 text-md">
          © 2026 by  Liaison Bank | All Rights Reserved
        </div>
        <ScrollToTopButton />
      </footer>
    </>
  );
}
