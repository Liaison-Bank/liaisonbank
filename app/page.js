"use client";
// import Image from "next/image";
import Image from 'next/image'
import useBodyClass from '@/components/useBodyClass'; // Adjust path as needed
import Waves from "@/components/waves";
import smallLogo from "@/assets/images/shape-small-1-1.png"

const Home = () => {
  useBodyClass('home');

  return (
    <>
      <div className="page-header">
        <div className="inner-header">


        </div>
        <Waves />
      </div>
      <section className="position-relative">
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
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-blue-200 p-4 rounded">
              <h2 className="text-xl font-semibold mb-2">Column 1</h2>
              <p>This column will take up the full width on small screens and 50% on medium screens and above.</p>
            </div>

            <div className="bg-green-200 p-4 rounded">
              <h2 className="text-xl font-semibold mb-2">Column 2</h2>
              <p>This column behaves the same way, creating a perfect two-column fluid layout.</p>
            </div>
          </div>
        </div>
      </section >

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            To get started, edit the page.js file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </div>
      
    </>
  );
};

export default Home;
