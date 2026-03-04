'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import this
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = ({ children }) => {
  const pathname = usePathname(); // Get current URL path
  useEffect(() => {
    // 1. Force the browser to start at the top on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. Initialize AOS with a delay
    // This prevents AOS from "jumping" to elements before the page layout is set
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1200,
        once: true,       // Change to true to prevent re-triggering issues
        offset: 50,       // Start animation slightly later
        delay: 0,
      });
    }, [pathname]); // Dependency array: triggers on path change
    // }, 200); // 200ms delay is usually enough for Next.js hydration

    return () => clearTimeout(timer);
  },);

  return <>{children}</>;
};

export default AOSProvider; 