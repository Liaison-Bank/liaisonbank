"use client";
// import Image from "next/image";
import Link from 'next/link'
import Image from 'next/image'
import useBodyClass from '@/components/useBodyClass'; // Adjust path as needed
import Waves from "@/components/waves";
import ImageWave from '@/components/ImageWave';
import ExpertImg from '@/components/expertImg';
import smallLogo from "@/assets/images/shape-small-1-1.png"
import welcomeImg from "@/assets/images/group.jpg"
import ceoImg from "@/assets/images/deva-CEO.jpg"
import rightTick from "@/assets/images/rightTick.svg"
import ClientScroller from "@/components/ClientScroller"

const Home = () => {
  useBodyClass('home');

  return (
    <>
      <div className="page-header">
        <div className="inner-header">


        </div>
        <Waves />
      </div>

      <section className="welcome">
        <div className="container mx-auto p-5 bg-white">
          <div className="smallObject">
            <Image
              src={smallLogo}
              alt=""
              width={257}
              height={257}
              className="auto-rotate"
              priority
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 d-flex justify-content-end">
              <Image
                src={welcomeImg}
                width={500}
                height={550}
                alt=""
                priority
              />
            </div>
            <div className=" p-4">
              <div className='section-title'>
                <h6>Welcome to, Liaison Bank  </h6>
                <h3>Your Partner in
                  <span className='theme-color'>Licensing</span> and
                  <span className='theme-color'>Liaisoning</span>
                </h3>
              </div>
              <div className='home-abt'>
                {/* <h2 className="text-xl font-semibold mb-2">Column 2</h2> */}
                <p>We take care of the intricacies and uncertainties, allowing you to redirect your energy towards your core priorities and business objectives. This ensures a smoother and more efficient experience, providing you with the peace of mind to concentrate on what matters most to your success.</p>
                <p>Our commitment is to deliver a seamless and reliable experience that brings clarity, confidence, and peace of mind. With our expertise supporting your operations, you can move forward with assurance—concentrating on strategic growth and achieving your business objectives while we handle the rest.</p>
                <hr />
                <h5 className='ceo-slogan'>&quot;It&apos;s not about waiting for things to fall into place, it&apos;s about what you make of yourself.&quot;</h5>
              </div>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <div className='author-meta d-flex flex-wrap align-items-center'>
                  <div className='col-auto author-img'>
                    <Image
                      src={ceoImg}
                      width={60}
                      height={60}
                      className='rounded-circle'
                      alt=""
                      priority
                    />
                  </div>
                  <div className='col-auto'>
                    <h4 className="author-title">Deva Biradar</h4>
                    <span className="author-desc">Chief Executive Officer</span>
                  </div>
                </div>
                <Link href="/" className="themeht-btn primary-btn d-flex align-item-center mr-2">CEO&apos;s DESK &nbsp;
                  <svg xmlns="http://www.w3.org" width="22" height="22" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>&nbsp;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="ourexpertise">
        <div className="container mx-auto py-4">
          <div className="section-title">
            <h3>Our Expertise</h3>
            <h5>We bring our expertise to multiple sectors and create customised solutions for diverse set of business needs.</h5>
          </div>

        </div>
      </section>


      <section className="weprovide">
        <div className="container mx-auto  py-4 bg-white">
          <div className="section-title">
            <h3>What we Provide ?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="d-flex justify-content-end">
              <div className="shape-img-bg">
                <ExpertImg />
                <div className="img-bg-shape" aria-hidden="true">
                  <ImageWave />
                </div>
              </div>
            </div>
            <div className="provision p-4">
              <ul className='list-unstyled list-icon style-1'>
                <li>
                  <Image
                    src={rightTick}
                    alt=""
                    priority
                  /> Asset Management & Regularization</li>
                <li>
                  <Image
                    src={rightTick}
                    alt=""
                    priority
                  /> Compliance For SME&apos;s</li>
                <li>
                  <Image
                    src={rightTick}
                    alt=""
                    priority
                  /> Energy Savings</li>
                <li>
                  <Image
                    src={rightTick}
                    alt=""
                    priority
                  /> Licence Procurement</li>
                <li>
                  <Image
                    src={rightTick}
                    alt=""
                    priority
                  /> Tailor Made Permissions</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section className="ourclients">
        <div className="container mx-auto  py-4 bg-white">
          <div className="section-title">
            <h3>Our Latest Clients</h3>
          </div>
          <div>
            <ClientScroller />
          </div>
        </div>
      </section>

      <section className="awardscertification">
        <div className="container mx-auto  py-4 bg-white">
          <div className="section-title">
            <h3>Awards & Certifications</h3>
          </div>
          <div>

          </div>
        </div>
      </section>

      <section className="clientfeedback">
        <div className="container mx-auto  py-4 bg-white">
          <div className="section-title">
            <h3>Client Feedback</h3>
          </div>
          <div>

          </div>
        </div>
      </section>


      <section className="faqs">
        <div className="container mx-auto  py-4 bg-white">
          <div className="section-title">
            <h3>Frequently ask Questions</h3>
          </div>
          <div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
