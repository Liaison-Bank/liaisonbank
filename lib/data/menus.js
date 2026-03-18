// static/menus.jsx

// Header navigation links
const navLinks = [
  { name: "Home", href: "/", title: "" },
  { name: "About Us", href: "/about-us-liaison", title: "About Liaisonbank", alt: "" },
  { name: "Our Clients", href: "/client-liaison", title: "Our Clients Liaisonbank", alt: ""  },
  { name: "Completed", href: "/completed-liaison-bank", title: "Completed Liaisonbank", alt: ""  },
  { name: "On Going", href: "/ongoing-liaison-bank", title: "On Going Liaisonbank", alt: ""  },
  { 
    name: "Our Services", 
    title: "Liaisonbank Services",
    alt: "",
    submenu: [
      {
        name: "AMC", href: "/amc", title: "AMC", alt: "AMC Liaisonbank",
        items: [
          { name:"Licenses Renewal", href:"", title: "", alt: "", pdf: "/pdf/licenses-renewal.pdf"  },  
          { name:"PNG Audit and Certification", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
          { name:"Fire Audit and Certification", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
          { name:"Electric Audit and Certification", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
          { name:"Pest Control Service and Certification", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
          { name:"Water Tank Cleaning and Certification (Ongoing)", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
        ]
      },
      {
        name: "Licensing", href: "/licensing", title: "Licensing", alt: "Licensing",
        items: [
          { name:"F&B", href:"", title: "", alt: "",
            children:[
               {
                name:"Resort, Banquet, Hotel", href:"", title: "", alt: "", pdf: "/pdf/licenses-renewal.pdf",
                children:[
                  { name:"Lougging and borading", href:"", title: "", alt: "",  pdf: ""},
                  { name:"Traffic olice permission", href:"", title: "", alt: "",  pdf: ""},
                  { name:"Law and order approval", href:"", title: "", alt: "",  pdf: ""},
                ]
              }, 
              { name:"Restaurant, Dhaba, Sweet mart, Dry Fruit", href:"", title: "", alt: "", pdf: "/pdf/licenses-renewal.pdf",
                children: [
                  { name:"Shop & Establishment", href:"", title: "", alt: "",  pdf: ""},
                  { name:"FSSAI", href:"", title: "", alt: "",  pdf: ""},
                  { name:"Building & Factory NOC", href:"", title: "", alt: "",  pdf: ""},
                  { name:"Fire Compliance certificat6e", href:"", title: "", alt: "",  pdf: ""},
                  { name:"MOH License(Eating House)", href:"", title: "", alt: "",  pdf: ""},
                  { name:"Sign Board License (Permit)", href:"", title: "", alt: "",  pdf: ""},
                  { name:"Open space (Serving License)", href:"", title: "", alt: "",  pdf: ""},
                  { name:"FL III License", href:"", title: "", alt: "",  pdf: ""},
                  { name:"Premises License", href:"", title: "", alt: "",  pdf: ""},
                  { name:"PPL License", href:"", title: "", alt: "",  pdf: ""},
                  { name:"Novex License", href:"", title: "", alt: "",  pdf: ""},
                ]
              }, 
            ]
          },
          {
            name:"Healthcare", href:"", title: "", alt: "",
            children: [
              {name:"Hospital, Clinic, Nursing Home", href:"", title:"", alt:"", pdf:"",
                children: [
                  { name: "SMS - Bio medical waste", href: "", title: "", alt: "", pdf: "" },
                  { name: "Clinic MPCB/BMW", href: "", title: "", alt: "", pdf: "" },
                  { name: "MPCB - Registration 1 - 25 beds", href: "", title: "", alt: "", pdf: "" },
                  { name: "MPCB - Registration 26 - 50 beds", href: "", title: "", alt: "", pdf: "" },
                  { name: "MPCB Autho/consent above 50 beds", href: "", title: "", alt: "", pdf: "" },
                  { name: "Fire NOC new with compliance", href: "", title: "", alt: "", pdf: "" },
                  { name: "FIRE - A form (alarm system) AMC with audit charges for every 6 months", href: "", title: "", alt: "", pdf: "" },
                  { name: "FIRE : Wiring for alarm etc", href: "", title: "", alt: "", pdf: "" },
                  { name: "Architect fees for compliance", href: "", title: "", alt: "", pdf: "" },
                  { name: "FIRE - B form", href: "", title: "", alt: "", pdf: "" },
                  { name: "PCPNDT", href: "", title: "", alt: "", pdf: "" },
                  { name: "MTP registration", href: "", title: "", alt: "", pdf: "" },
                  { name: "Electrical audit certificate yearly", href: "", title: "", alt: "", pdf: "" },
                  { name: "Structural audit", href: "", title: "", alt: "", pdf: "" },
                  { name: "Board sign", href: "", title: "", alt: "", pdf: "" },
                  { name: "Weather shed permission", href: "", title: "", alt: "", pdf: "" },
                  { name: "Change of user for clinics", href: "", title: "", alt: "", pdf: "" },
                  { name: "Change of user for nursing home", href: "", title: "", alt: "", pdf: "" },
                  { name: "NABH 0 - 25 beds", href: "", title: "", alt: "", pdf: "" }
                ]
              }
            ]
          },
          {
            name:"Industrial and Manufacturer", href:"", title: "", alt: "",
            children: [
              {name:"Textile, Colour Coating, Laundry, Factory", href:"", title:"", alt:"", pdf:"",
                children: [
                  { name: "Factory license", href: "", title: "", alt: "", pdf: "" },
                  { name: "Shop & establishment", href: "", title: "", alt: "", pdf: "" },
                  { name: "Building & factory NOC", href: "", title: "", alt: "", pdf: "" },
                  { name: "Fire compliance certificate", href: "", title: "", alt: "", pdf: "" },
                  { name: "MOH license (eating house)", href: "", title: "", alt: "", pdf: "" },
                  { name: "Sign board license (permit)", href: "", title: "", alt: "", pdf: "" }
                ]
              }
            ]
          },
          {
            name:"Real Estate", href:"", title: "", alt: "",
            children: [
              {name:"Building and construction ", href:"", title:"", alt:"", pdf:"",
                children: [
                  { name: "Labour permit", href: "", title: "", alt: "", pdf: "" },
                  { name: "Contractor license", href: "", title: "", alt: "", pdf: "" },
                  { name: "Mathadi registration", href: "", title: "", alt: "", pdf: "" }
                ]
              }
            ]
          },
          {
            name:"Entertainment", href:"", title: "", alt: "",
            children: [
              {name:"Gym, Club House,Events", href:"", title:"", alt:"", pdf:"",
                children: [
                  { name: "Shop & establishment", href: "", title: "", alt: "", pdf: "" },
                  { name: "Building & factory NOC", href: "", title: "", alt: "", pdf: "" },
                  { name: "MOH license (eating house) / Trade license", href: "", title: "", alt: "", pdf: "" },
                  { name: "Police NOC", href: "", title: "", alt: "", pdf: "" },
                  { name: "Staff fitness certificate", href: "", title: "", alt: "", pdf: "" }
                ]
              }
            ]
          },
        ]
      },
      {
        name: "Liaisoning", href: "/liaisoning", title: "Liaisoning", alt: "Liaisoning",
        items: [
                {
                  name: "Brihanmumbai Municipal Corporation",
                  href: "/services/bmc-approvals",
                  title: "Brihanmumbai municipal corporation approvals and licensing services",
                  alt: "brihanmumbai municipal corporation approvals and licensing services",
                  children:[
                      { name:"Building Proposal (337 342) Miscellaneous", href:"", title: "", alt: "", pdf: "/pdf/",} 
                  ]
                },
                {
                  name: "Maharashtra Housing and Area Development Authority",
                  href: "/services/mhada-approvals",
                  title: "Maharashtra housing and area development authority approvals and housing compliance",
                  alt: "maharashtra housing and area development authority approvals and housing compliance"
                },
                {
                  name: "Slum Rehabilitation Authority",
                  href: "/services/sra-approvals",
                  title: "Slum rehabilitation authority approvals and redevelopment compliance services",
                  alt: "slum rehabilitation authority approvals and redevelopment compliance services"
                },
                {
                  name: "Mumbai Metropolitan Region Development Authority",
                  href: "/services/mmrda-approvals",
                  title: "Mumbai metropolitan region development authority approvals and infrastructure compliance",
                  alt: "mumbai metropolitan region development authority approvals and infrastructure compliance"
                },
                {
                  name: "Maharashtra Industrial Development Corporation",
                  href: "/services/midc-approvals",
                  title: "Maharashtra industrial development corporation approvals and industrial compliance services",
                  alt: "maharashtra industrial development corporation approvals and industrial compliance services"
                },
                {
                  name: "Maharashtra Pollution Control Board",
                  href: "/services/mpcb-approvals",
                  title: "Maharashtra pollution control board approvals and environmental compliance services",
                  alt: "maharashtra pollution control board approvals and environmental compliance services"
                },
                {
                  name: "Mumbai Port Trust",
                  href: "/services/mbpt-approvals",
                  title: "Mumbai port trust approvals and port compliance services",
                  alt: "mumbai port trust approvals and port compliance services"
                },
                {
                  name: "Navi Mumbai Municipal Corporation",
                  href: "/services/nmmc-approvals",
                  title: "Navi mumbai municipal corporation approvals and licensing services",
                  alt: "navi mumbai municipal corporation approvals and licensing services"
                },
                {
                  name: "Pune",
                  href: "/services/pune-collector",
                  title: "Pune collector office approvals and administrative services",
                  alt: "pune collector office approvals and administrative services"
                },
                {
                  name: "Collector",
                  href: "/services/pune-collector",
                  title: "Pune collector office approvals and administrative services",
                  alt: "pune collector office approvals and administrative services"
                },
                {
                  name: "S.L.R",
                  href: "/services/slr-approvals",
                  title: "Slr approvals and land record services",
                  alt: "slr approvals and land record services"
                },
                {
                  name: "D.D.L.R",
                  href: "/services/ddlr-approvals",
                  title: "Ddlr approvals and district land record services",
                  alt: "ddlr approvals and district land record services"
                },
                {
                  name: "Thane Municipal Corporation",
                  href: "/services/tmc-approvals",
                  title: "Thane municipal corporation approvals and licensing services",
                  alt: "thane municipal corporation approvals and licensing services"
                },
                {
                  name: "Mumbai Fire Department",
                  href: "/services/mumbai-fire-department",
                  title: "Mumbai fire department noc and fire compliance services",
                  alt: "mumbai fire department noc and fire compliance services"
                },
                {
                  name: "Vasai Virar Municipal Corporation",
                  href: "/services/vvmc-approvals",
                  title: "Vasai virar municipal corporation approvals and licensing services",
                  alt: "vasai virar municipal corporation approvals and licensing services"
                },
                {
                  name: "Kalyan Dombivli Municipal Corporation",
                  href: "/services/kdmc-approvals",
                  title: "Kalyan dombivli municipal corporation approvals and licensing services",
                  alt: "kalyan dombivli municipal corporation approvals and licensing services"
                },
                {
                  name: "Coastal Regulation Zone",
                  href: "/services/crz-clearance",
                  title: "Coastal regulation zone clearance and environmental compliance services",
                  alt: "coastal regulation zone clearance and environmental compliance services"
                },
                {
                  name: "Airports Authority of India",
                  href: "/services/aai-approvals",
                  title: "Airports authority of india approvals and aviation compliance services",
                  alt: "airports authority of india approvals and aviation compliance services"
                },
                {
                  name: "R.F.M Department",
                  href: "/services/rfm-approvals",
                  title: "Rfm department approvals and regulatory services",
                  alt: "rfm department approvals and regulatory services"
                },
                {
                  name: "C.O.M Department",
                  href: "/services/com-approvals",
                  title: "Com department approvals and compliance services",
                  alt: "com department approvals and compliance services"
                },
                {
                  name: "N.V.M Department",
                  href: "/services/nvm-approvals",
                  title: "Nvm department approvals and regulatory services",
                  alt: "nvm department approvals and regulatory services"
                },
                {
                  name: "A.P.M Department",
                  href: "/services/apm-approvals",
                  title: "Apm department approvals and compliance services",
                  alt: "apm department approvals and compliance services"
                },
                {
                  name: "M.I.D.C.M",
                  href: "/services/midcm-approvals",
                  title: "Midcm approvals and industrial compliance services",
                  alt: "midcm approvals and industrial compliance services"
                },
                {
                  name: "Industrial Development Corporation",
                  href: "/services/idc-approvals",
                  title: "Industrial development corporation approvals and compliance services",
                  alt: "industrial development corporation approvals and compliance services"
                },
                {
                  name: "Public Works Department",
                  href: "/services/pwd-approvals",
                  title: "Public works department approvals and infrastructure compliance services",
                  alt: "public works department approvals and infrastructure compliance services"
                },
                {
                  name: "District Magistrate Office",
                  href: "/services/dm-approvals",
                  title: "District magistrate office approvals and administrative services",
                  alt: "district magistrate office approvals and administrative services"
                },
                {
                  name: "Adani Power",
                  href: "/services/adani-power-approvals",
                  title: "Adani power approvals and electrical compliance services",
                  alt: "adani power approvals and electrical compliance services"
                },
                {
                  name: "Tata Power",
                  href: "/services/tata-power-approvals",
                  title: "Tata power approvals and electrical compliance services",
                  alt: "tata power approvals and electrical compliance services"
                },
                {
                  name: "Maharashtra State Electricity Distribution Company Limited",
                  href: "/services/msedcl-approvals",
                  title: "Maharashtra state electricity distribution company limited approvals and electrical compliance services",
                  alt: "maharashtra state electricity distribution company limited approvals and electrical compliance services"
                }
              ]
      },
      { name: "Electrical ( SITC )", href: "", title: "Electrical Execution, Compliance & Maintenance Services", alt: "Electrical ( SITC )", pdf: "/pdf/electrical-sitc.pdf" },
      { name: "Fire ( SITC )", href: "", title: "Fire & Safety Systems and Compliance Solutions", alt: "Fire ( SITC )", pdf: "/pdf/electrical-sitc.pdf" },
      { name: "PNG ( SITC )", href: "", title: "Piped Natural Gas (Png) Services & Regulatory Compliance", alt: "PNG ( SITC )", pdf: "/pdf/electrical-sitc.pdf" },
      { name: "Equipment Solution Department ( ESD )", href: "", title: "Equipment Solution Department", alt: "( ESD )", pdf: "/pdf/electrical-sitc.pdf" },
      { name: "Group Profile", href: "", title: "Group Profile", alt: "( ESD )", pdf: "/pdf/electrical-sitc.pdf" },
      // { name: "Integrated Licensing & Compliance Solutions ( ILCS )", href: "", title: "Integrated Licensing & Compliance Solutions", alt: "( ILCS )" },
      // { name: "Integrated Liaisoning, Approvals & Compliance Solutions ( ILACS )", href: "", title: "Integrated Liaisoning, Approvals & Compliance Solutions", alt: "( ILACS )" },
    ]
  },  
  { name: "Press Release", href: "/press-release-liaison-bank", title: "Press Release Liaisonbank", alt: "Press Release Liaisonbank"  },
  // { name: "Process", href: "/process-liaison-bank", title: "Process Liaisonbank", alt: "Process Liaisonbank"  },
  { name: "Contact Us", href: "/contact-us-liaison-bank", title: "Contact Liaisonbank", alt: "Contact Liaisonbank"  },
  // { name: "Login", href: "/Login" },
]

// Footer links
const importantLinks = [
  // { name: "Article", href: "/article-liaison-bank", title: "Article Liaisonbank", alt: "Article Liaisonbank" },
  { name: "CEO's Desk", href: "/ceos-desk", title: "CEO's Desk Liaisonbank", alt: "CEO's Desk Liaisonbank" },
  { name: "Careers", href: "/careers-liaison-bank/", title: "Careers Liaisonbank", alt: "Careers Liaisonbank" },
  { name: "Testimonials", href: "/testimonials-liaison-bank", title: "Testimonials Liaisonbank", alt: "Testimonials Liaisonbank" },
  { name: "Privacy Policy", href: "/privacy-policy", title: "Privacy Policy Liaisonbank", alt: "Privacy Policy Liaisonbank" },
  { name: "Terms of Service", href: "/terms-and-conditions", title: "Terms of Services Liaisonbank", alt: "Terms of Services Liaisonbank" },
  { name: "Sitemap", href: "/sitemap", title: "Sitemap Liaisonbank", alt: "Sitemap Liaisonbank" }
]

// Named exports
export { navLinks, importantLinks }
