"use client";
import Image from "next/image";
import Link from "next/link";
import useBodyClass from '@/components/useBodyClass'; // Adjust path as needed
import license from "@/assets/images/liaisoning-in-real-estate.jpg"
import licenseService from "@/assets/images/licensing-services.png"
import TeamGrid from "@/components/TeamGrid";
import { teamData } from "@/lib/data/teamData";
// import PageTitleWave from '@/components/PageTitleWave';
// import PageTitleWaveLeft from '@/components/PageTitleWaveLeft';

export default function AboutUsLiaisonPage() {
  useBodyClass('about-us');
  return (
    <>
      <div className="page-header">
        <div className="inner-header">
          {/* <PageTitleWave /> */}
          <div className="page-title">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <div className="theme-breadcrumb-box">
                    <h1 data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">About Us</h1>

                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <ol className="breadcrumb justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <i className="bi bi-house-door me-1" aria-hidden="true"></i>
                            Home
                          </Link>
                        </li>

                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          About Us
                        </li>
                      </ol>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* <PageTitleWaveLeft /> */}
        </div>
      </div>
      <section className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="section-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <h3>We help you navigate the complexities of licence acquisitions and <br/>take away the burden of uncertainty and time constraints. </h3>
          </div>
         <div className="content-text">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-sm-12">
              <h4 data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">This enables you to direct your attention solely to your business endeavours.</h4>  
              <p  data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">Liaison Bank was founded in 2007 as Mr. Mahadev Biradar Consulting. Cut to 2024, we have evolved into a versatile and experienced entity as Liaison Bank. In the realm of licensing and liaison services, we stand out as a leading organization, boasting an extensive workforce of highly quality.</p>
            </div>
            <div className="col-lg-6 col-sm-12 license-doc">
              <Image
                src={license}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
                data-aos="fade-left" data-aos-duration="600" data-aos-delay="600"
              />
            </div>
          </div>
           <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-sm-12 licensing-doc">
              <Image
                src={licenseService}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
                data-aos="fade-right" data-aos-duration="600" data-aos-delay="600"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="our-story-text" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
              <h3>Our Story</h3>  
              <p >
                In 2017, the company was incorporated as DBRE INDIA, and in 2019, it was officially registered as Liaison Bank. Our head office is located at plot 466, New Apollo CHSL, beside Blue Tokai Cafe 14th Road Khar West Mumbai 52.</p>
              <p >
                Liaison Bank consists of a dedicated team of professionals, featuring in-house architects, interior designers, project managers, and safety supervisors. The team operates round the clock with proper approvals from local authorities to meet project timelines efficiently.</p>
                </div>
              <div className="our-commitment-text"  data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
              <h3>Our Commitment</h3>  
              <p >
                With over 16 years of experience, we have managed numerous projects, encompassing educational facilities, medical institutions, food and beverage establishments, and residential complexes.</p>
              <p >
                These projects are primarily concentrated in Mumbai, including ongoing work at renowned establishments such as Jaslok Hospital, Saifee Hospital, Podar Education Institute, and well-known brands like Domino’s Pizza, Pizza Hut, Social’s, Smoke House Deli, Wine Villa Cafe, Persian Darbar, 5 Spice, Piramal Realty, Godrej Trees, Godrej Two, Supreme Art Veda, Ananad Apartment, Pooja Casa, and Orchid Enclave.</p>
            </div>
            </div>           
          </div>

        </div>
        <div className="team-content">
          <div className="section-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <h3>Our Team </h3>
          </div>
            <TeamGrid teamData={teamData} />
          <div>
            
          </div>
        </div>      
        </div>
      </section>
    </>
  );
}
