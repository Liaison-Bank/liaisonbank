"use client";
// import Image from "next/image";
import Link from "next/link";
import useBodyClass from '@/components/useBodyClass'; // Adjust path as needed
import PageTitleWave from '@/components/PageTitleWave';
import OngoingList from "@/components/OngoingList/page";

export default function OngoingLiaisonbankPage() {
  useBodyClass('ongoing');
  return (
    <>
      <div className="page-header">
        <div className="inner-header">
          <PageTitleWave />
          <div className="page-title">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <div className="theme-breadcrumb-box">
                    <h1>On Going Process</h1>

                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <i className="bi bi-house-door me-1" aria-hidden="true"></i>
                            Home
                          </Link>
                        </li>

                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >On Going Process
                        </li>
                      </ol>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12">
              <OngoingList />
            <ul className="d-none">
              <li><div className="client-name">Anubhav Restaurants</div> <span className="location-tag">Fort</span></li>
              <li><div className="client-name">South Indian Restaurants</div> <span className="location-tag">Fort</span></li>
              <li><div className="client-name">National Hindu Hotel</div> <span className="location-tag">Fort</span></li>
              <li><div className="client-name">Durga Bar and Restaurant</div> <span className="location-tag">Andheri (E)</span></li>
              <li><div className="client-name">Saifee Hospital</div> <span className="location-tag">Charni Road</span></li>
              <li><div className="client-name">Amar Fruit Juice Centre</div> <span className="location-tag">Vile Parle(W)</span></li>
              <li><div className="client-name">Amber Restaurant</div> <span className="location-tag">Bandra(W)</span></li>
              <li><div className="client-name">Urban Tadka</div> <span className="location-tag">Malad (W)</span></li>
              <li><div className="client-name">Hotel Silver Inn</div> <span className="location-tag">Andheri (E)</span></li>
              <li><div className="client-name">Shree Ambe</div> <span className="location-tag">Andheri (E)</span></li>
              <li><div className="client-name">Omkar Altamount</div> <span className="location-tag">Malad</span></li>
              <li><div className="client-name">Sunbeam Gurukurpa Developer</div> <span className="location-tag">Vile Parle(E)</span></li>
              <li><div className="client-name">Raheja Legend Condominium</div> <span className="location-tag">Worli</span></li>
              <li><div className="client-name">Lodha Crown</div> <span className="location-tag">Thane</span></li>
              <li><div className="client-name">Sugan Heights</div> <span className="location-tag">Grand Road</span></li>
              <li><div className="client-name">Palai Tower</div> <span className="location-tag">Goregaon</span></li>
              <li><div className="client-name">Grand Pallazo</div> <span className="location-tag">Dadar</span></li>
              <li><div className="client-name">VCA Square</div> <span className="location-tag">Dadar</span></li>
              <li><div className="client-name">Kalpataru Magnus</div> <span className="location-tag">Bandra East</span></li>
              <li><div className="client-name">Lodha Bellavue</div> <span className="location-tag">Byculla</span></li>
              <li><div className="client-name">Saat Rasta properties pvt ltd</div> <span className="location-tag">Byculla</span></li>
              <li><div className="client-name">Gundavali Co-operative Housing society LTD.</div> <span className="location-tag">Andheri</span></li>
              <li><div className="client-name">Our select state bank of India supervising co-op HSG society</div> <span className="location-tag">Bandra</span></li>
              <li><div className="client-name">Sea Kunal Corporation Pvt Ltd</div> <span className="location-tag">Colaba</span></li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
}

