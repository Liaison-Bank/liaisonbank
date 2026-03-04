"use client";
// import Image from "next/image";
import Link from "next/link";
import useBodyClass from '@/components/useBodyClass'; // Adjust path as needed
import PageTitleWave from '@/components/PageTitleWave';
import PageTitleWaveLeft from '@/components/PageTitleWaveLeft';
import AnimatedCounter from '@/components/AnimateCounter';
import {onGoingList} from '@/static/onGoingList';
// import OngoingList from "@/components/OngoingList/page";

export default function OngoingLiaisonbankPage() {
  useBodyClass('ongoing');
  // Helper function to split the array into chunks of 4
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };
  const chunks = chunkArray(onGoingList, 3);
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
                    <h1 data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">On Going</h1>

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
                        >On Going
                        </li>
                      </ol>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageTitleWaveLeft />
        </div>
      </div>
      <section className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <p className="text-end">Total Ongoing <AnimatedCounter endValue={23} />+ Projects </p>
            <div className="table-container d-none">
              <table className="project-table border table-bordered w-75 mx-auto ongoing">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Client Name</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Amar Fruit Juice Centre</td><td>Vile Parle(W)</td></tr>
                  <tr><td>2</td><td>Amber Restaurant</td><td>Bandra(W)</td></tr>
                  <tr><td>3</td><td>Anubhav Restaurants</td><td>Fort</td></tr>
                  <tr><td>4</td><td>Durga Bar and Restaurant</td><td>Andheri (E)</td></tr>
                  <tr><td>5</td><td>Grand Pallazo</td><td>Dadar</td></tr>
                  <tr><td>6</td><td>Hotel Silver Inn</td><td>Andheri (E)</td></tr>
                  <tr><td>7</td><td>National Hindu Hotel</td><td>Fort</td></tr>
                  <tr><td>8</td><td>Sea Kunal Corporation Pvt Ltd</td><td>Colaba</td></tr>
                  <tr><td>9</td><td>Shree Ambe</td><td>Andheri (E)</td></tr>
                  <tr><td>10</td><td>South Indian Restaurants</td><td>Fort</td></tr>
                  <tr><td>11</td><td>Urban Tadka</td><td>Malad (W)</td></tr>
                  <tr><td>12</td><td>Kalpataru Magnus</td><td>Bandra East</td></tr>
                  <tr><td>13</td><td>Lodha Bellavue</td><td>Byculla</td></tr>
                  <tr><td>14</td><td>Lodha Crown</td><td>Thane</td></tr>
                  <tr><td>15</td><td>Raheja Legend Condominium</td><td>Worli</td></tr>
                  <tr><td>16</td><td>Saifee Hospital</td><td>Charni Road</td></tr>
                  <tr><td>17</td><td>Omkar Altamount</td><td>Malad</td></tr>
                  <tr><td>18</td><td>Saat Rasta properties pvt ltd</td><td>Byculla</td></tr>
                  <tr><td>19</td><td>Gundavali Co-operative Housing society LTD.</td><td>Andheri</td></tr>
                  <tr><td>20</td><td>Our select state bank of India supervising co-op HSG society</td><td>Bandra</td></tr>
                  <tr><td>21</td><td>Palai Tower</td><td>Goregaon</td></tr>
                  <tr><td>21</td><td>Sugan Heights</td><td>Grand Road</td></tr>
                  <tr><td>22</td><td>Sunbeam Gurukurpa Developer</td><td>Vile Parle(E)</td></tr>
                  <tr><td>23</td><td>VCA Square</td><td>Dadar</td></tr>
                </tbody>
              </table>
            </div>
            {/* <OngoingList /> */}
            <div className="projectlist d-none">
              <ul className="ongoing">
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
        </div>
        <div className="project-grid">
          {chunks.map((chunk, index) => (
            <div className="grid-item" key={index}>
              <ul>
                {chunk.map((item, i) => (
                  <li key={i}>
                    <span className="item-name">{item.clientName}</span>
                    <span className="item-price">{item.location}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="grid-item d-none">
            <ul>
              <li>
                <span className="item-name">Website Design</span>
                <span className="item-price">$500</span>
              </li>
              <li>
                <span className="item-name">SEO Optimization</span>
                <span className="item-price">$300</span>
              </li>
              <li>
                <span className="item-name">Hosting</span>
                <span className="item-price">$100</span>
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </>
  );
}

