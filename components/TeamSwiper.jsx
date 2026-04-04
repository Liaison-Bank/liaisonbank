"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";

const TEAM = [
  { name: "Lydia Schaeffer", role: "Directrice", image: "https://picsum.photos/id/237/600/600" },
  { name: "Noa Andrieux", role: "Directeur financier", image: "https://picsum.photos/id/238/600/600" },
  { name: "Théo Faure", role: "Chef de projet", image: "https://picsum.photos/id/239/600/600" },
];

function TeamCard({ member }) {
  return (
    <article className="group relative flex items-center bg-white">
    {/* Content */}
    <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
        {member.name}
        </h3>
        <p className="text-xs text-gray-500">{member.role}</p>
    </div>

    {/* Accent line - placed BEFORE image to be on image’s left side */}
    <span className="h-[200px] w-[3px] rounded bg-blue-500 skew-x-[-20deg]" />

    {/* Image with slanted mask */}
    <div className="relative h-[200px] w-[175px] shrink-0 overflow-hidden">
        <div
        className="absolute inset-0 overflow-hidden"
        style={{
            clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0% 100%)",
        }}
        >
        <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="175px"
            className="object-cover"
            priority={false}
        />
        </div>
    </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Swiper
          modules={[A11y]}
          spaceBetween={16}
          slidesPerView={1.2}
          aria-label="Team members"
        >
          {TEAM.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}