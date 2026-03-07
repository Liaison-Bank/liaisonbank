"use client"

import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logoScrolled from "@/assets/images/logo_grey2.png"
import { navLinks } from '@/static/menus'

export default function Header() {

  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const openPopup = () => setIsActive(true);
  const closePopup = () => setIsActive(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY > 50;
      setIsSticky(scrollPos);
      setIsScrolled(scrollPos);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed w-full z-50 py-2 transition-all ${isSticky ? "" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <nav key={pathname} className="flex items-center justify-between h-16">

            {/* LOGO: Left to Right Animation */}
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-anchor="html">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src={logoScrolled}
                  width={150}
                  title="Liaisonbank"
                  alt="Liaisonbank"
                  priority
                />
              </Link>
            </div>

            <div className="hidden xl:flex">
              <ul className="flex space-x-8">
  {navLinks.map((link, index) => {
    const hasSubmenu = !!link.submenu?.length;

    return (
      <li
        key={link.name}
        className={hasSubmenu ? "has-submenu relative" : ""}
        data-aos="fade-down"
        data-aos-delay={index * 100}
        data-aos-duration="800"
      >
        {link.href ? (
          <Link href={link.href}>{link.name}</Link>
        ) : (
          <span className="cursor-pointer">{link.name}</span>
        )}

        {hasSubmenu && (
          <div className="mega-menu">
            <div className="mega-menu-inner">

              {/* 2 Column Layout */}
              <div className="grid grid-cols-2 gap-16">

                {/* LEFT SIDE SERVICES */}
                <div className="border-r border-white/30 pr-12">
                  {link.submenu.map((sub) => (
                    <div key={sub.name} className="mega-menu-item mb-3">
                      <Link href={sub.href || "#"}>
                        <h4 className="hover:text-yellow-200 transition">
                          {sub.name}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* RIGHT SIDE (submenu2 items like Pest Control) */}
                <div className="flex flex-col gap-4">

                  {link.submenu.map((sub) =>
                    sub.submenu2?.map(
                      (sub2) =>
                        sub2.name && (
                          <div
                            key={sub2.name}
                            className="bg-orange-500 px-6 py-3 rounded shadow-lg w-fit"
                          >
                            <Link href={sub2.href || "#"}>
                              <span className="font-semibold text-lg">
                                {sub2.name}
                              </span>
                            </Link>
                          </div>
                        )
                    )
                  )}

                </div>

              </div>

            </div>
          </div>
        )}
      </li>
    );
  })}
</ul>
            </div>

            <button
              className={`hamburger xl:hidden ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation remains standard transform for performance */}
        <div className={`fixed top-0 right-0 h-full w-100 shadow-lg transform transition-transform duration-300
                  ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div
            id="myNav"
            className="overlay"
            style={{ width: isOpen ? "100%" : "0%" }}
          >
            <div className="overlay-content">
              <ul className="submenu flex flex-col pt-4 px-4 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block font-medium"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === link.name ? null : link.name
                          )
                        }
                        className="flex justify-between w-full font-medium"
                      >
                        {link.name}
                        <span>
                          {openSubmenu === link.name ? "-" : "+"}
                        </span>
                      </button>
                    )}

                    {link.submenu && openSubmenu === link.name && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {link.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-gray-600"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className={`search-popup ${isActive ? 'active' : 'inActive'}`}>
        <button type="button" className="search-popup-close" onClick={closePopup}>✕</button>
        <form className="search-popup-form">
          <input type="text" className="search-popup-form-input" placeholder="Type Words Then Enter" />
          <button className="search-popup-btn"><i className="icon-search"></i></button>
        </form>
      </div>
    </>
  )
}