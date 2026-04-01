"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";
// import SearchRotator from "@/components/SearchRotator";
import ScrollUpList from "@/components/ScrollUpList";

// import rightsideBanner from "@/public/complaince.png"

export default function HeroSection() {
    const wordsRef = useRef([]);
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    const openPopup = () => setIsActive(true);
    const closePopup = () => setIsActive(false);

    const phrases = [
        "Search for \"AMC\"",
        "Search for Licensing",
        "Search for Liaisoning",
        "Search for Electrical (SITC)",
        "Search for PNG (SITC)",
        "Search for Fire (SITC)",
        "Search for License Renewal",
        "Search for PNG Audit",
        "Search for Equipment Solution Department ( ESD )"
    ];
    useEffect(() => {
        gsap.fromTo(
        wordsRef.current,
        { yPercent: 100, opacity: 0 },
        {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.25,
        }
        );
    }, [pathname]); // run animation on route change

    return (
        <section className="hero-section">
            <div className="hero-grid container">
                {/* LEFT CONTENT */}
                <div className="hero-content pt-4">
                    <h1 className="hero-title">
                        {["Efficient, ", "Reliable, ", "Hassle-Free Solutions"].map((word, i) => (
                            <span className="mask" key={i}>
                                <span
                                ref={(el) => (wordsRef.current[i] = el)}
                                className="reveal-text"
                                >
                                {word}
                                </span>
                            </span>
                        ))}
                    </h1>
                    <div className="global-serach-wrapper" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                        <div className="search-box" onClick={openPopup}>
                            <div className="search-icon"><Image src="/search-icon.png" width={30} height={30} alt="Office Time" /></div>
                            <div className="search-input-div">{/* Top Search Input */}
                                <div className="input-content">
                                    {/* <SearchRotator /> */}
                                     <ScrollUpList items={phrases} />
                                    {/* Search services for you business..
                                     <span class="rotator" aria-hidden="true"><span class="rotator__item"></span></span>
                                      */}
                                </div>
                                {/* <input
                                    type="text"
                                    id="site-search"
                                    name="q"
                                    onFocus={openPopup}
                                    placeholder="Search Services you need..."
                                    autoComplete="off"
                                /> */}
                            </div>
                            <div className="mic-action-div"><Image src="/mic.png" width={30} height={30} alt="Office Time" /></div>
                        </div>
                    </div>
                    <div className="hero-cards" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                    <ul className="hero-cards--items">
                                        <li className="hero-card">
                                            <div className="hero-cards--img"> ♻️ </div>
                                            <div className="hero-cards--label">
                                                <span>AMC</span>
                                            </div>
                                        </li>
                                        <li className="hero-card">
                                            <div className="hero-cards--img"> 🪪 </div>
                                            <div className="hero-cards--label">
                                                <span>Licensing</span>
                                            </div>
                                        </li>
                                        <li className="hero-card">
                                            <div className="hero-cards--img"> ⚖️ </div>
                                            <div className="hero-cards--label">
                                                <span>Liaisoning</span>
                                            </div>
                                        </li>
                                        <li className="hero-card">
                                            <div className="hero-cards--img"> ⚡ </div>
                                            <div className="hero-cards--label">
                                                <span>Electrical </span>
                                            </div>
                                        </li>
                                        <li className="hero-card">
                                            <div className="hero-cards--img"> ⛽ </div>
                                            <div className="hero-cards--label">
                                                <span>PNG (SITC)</span>
                                            </div>
                                        </li>
                                        <li className="hero-card">
                                            <div className="hero-cards--img"> 🔥 </div>
                                            <div className="hero-cards--label">
                                                <span>Fire (SITC)</span>
                                            </div>
                                        </li>
                                    </ul>
                    </div>
                    {/* <div className="hero-desc" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                        <h3> Streameline Your License Acquisitions</h3>
                    </div> */}

                </div>

                {/* RIGHT IMAGE */}
                <div className="hero-image" data-aos="fade-left">
                    {/* <Image
                        src={rightsideBanner}
                        width={600}
                        height={500}
                        alt="Business Services"
                        priority
                    /> */}
                </div>
            </div>
            <div className={`search-popup ${isActive ? 'active' : 'inActive'}`}>
                <button type="button" className="search-popup-close" onClick={closePopup}>✕</button>
                <form className="search-popup-form">
                    <input type="text" className="search-popup-form-input" placeholder="Type Words Then Enter" />
                    <button className="search-popup-btn">
                        <Image src="/search-icon.png" width={30} height={30} alt="Office Time" />
                    </button>
                </form>
            </div>
        </section>
    );
}