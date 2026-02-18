// static/menus.jsx

// Header navigation links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us-liaison" },
  { name: "Our Clients", href: "/client-liaison" },
  { 
    name: "Our Expertise", 
    href: "#", 
    submenu: [
      { name: "Residential", href: "/residential" },
      { name: "For Garment Manufacturing Units", href: "/forgarment-manufacturing-units" },
      { name: "Hospitals & Nursing Homes", href: "/hospitalNursinghome" },
      { name: "Hospitality", href: "/hospitality" },
    ]
  },
  { name: "Process", href: "/process-liaison-bank" },
  { name: "Contact Us", href: "/contact-us-liaison-bank" },
]

// Footer links
const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us-liaison" },
  { name: "CEO's Desk", href: "/ceo-desk" },
  { name: "Careers", href: "/careers-liaison-bank/" },
  { name: "Client", href: "/client-liaison/" },
  { name: "Process", href: "/process-liaison-bank" },
  // { name: "Privacy Policy", href: "/privacy-policy" },
  // { name: "Terms of Service", href: "/terms-of-service" },
]

const informationLinks = [
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact-us-liaison-bank" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms and Conditions", href: "/terms-conditions" }
]


// Named exports
export { navLinks, footerLinks, informationLinks }
