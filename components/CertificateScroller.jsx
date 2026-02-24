"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import { certificateList } from "../static/certificateList";

// Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function CertificateScroller() {
  useEffect(() => {
    Fancybox.bind('.slick-slide:not(.slick-cloned) [data-fancybox="gallery"]', {
      Thumbs: false,
      Toolbar: {
        display: ["close"],
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const settings = {
    thumbs: false,
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {certificateList.map((item, index) => (
          <div
            className="col-lg-2 col-md-2 col-sm-6 col-6"
            key={index}
          >
            <figure>
              <a
                href={item.src}
                data-fancybox="gallery"
                data-caption={item.caption}
              >
                <Image
                  src={item.src}
                  width={400}
                  height={200}
                  alt={item.caption}
                  className="certificate"
                />
              </a>
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CertificateScroller;