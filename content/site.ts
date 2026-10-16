/**
 * All page copy and data lives here.
 *
 * Components never hardcode content, so swapping this file for CMS calls later
 * is a drop-in change: keep the shapes, change the source.
 *
 * Copy follows RentOut_Website_Content_Master.pdf. Keep it in step with the
 * backend CMS seed (rentout-backend/prisma/seed/cms.seed.js): this file is only
 * what the site shows when the backend cannot be reached.
 */

export const nav = [
  { label: "Home", href: "/" },
  { label: "Explore Rentals", href: "/explore-rentals" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** The navbar button. The apps are not out yet, hence the notice. */
export const appCta = {
  label: "Get the App",
  notice: "Coming soon on Android",
};

export const hero = {
  eyebrow: "India’s All-in-One Rental Marketplace",
  titleLines: [
    [{ text: "WHY BUY WHEN", accent: false }],
    [
      { text: "YOU CAN ", accent: false },
      { text: "RENT?", accent: true },
    ],
  ],
  body: "Rent what you need. List what you own. Earn from what you have. From homes and vehicles to laptops, cameras, furniture, machinery, event equipment and more — RentOut connects people and businesses looking to rent with owners ready to rent out.",
  primaryCta: { label: "Explore Rentals", href: "/explore-rentals" },
  secondaryCta: { label: "List Your Asset", href: "/contact" },
  imageUrls: ["/img/hero-collage.png"],
  slides: 1,
};

export const stats = {
  headline: [
    { text: "One Platform.", accent: true },
    { text: " ", accent: false },
    { text: "Endless Rental Possibilities.", accent: true },
    {
      text: " Why buy something you may only need for a day, a week or a few months? RentOut helps you access the things you need without the cost and commitment of buying.",
      accent: false,
    },
  ],
  // No numerical claims until real data backs them.
  figures: [
    { value: "Rent More.", label: "Access what you need, when you need it." },
    { value: "Own Less.", label: "Unlock value from underused assets." },
  ],
};

export const services = [
  { icon: "cart", title: "One Marketplace", subtitle: "Multiple rental categories, one platform." },
  { icon: "shield", title: "Transparent Listings", subtitle: "Pricing and rental conditions up front." },
  { icon: "megaphone", title: "Local Discovery", subtitle: "Find rentals based on your location." },
  { icon: "headphones", title: "Flexible Rental Options", subtitle: "Rent for as long as you need." },
];

export const franchise = {
  eyebrow: "RentOut Business",
  title: "Build Your Business With RentOut",
  body: "Become part of the rental economy. RentOut is designed to create opportunities for individuals, rental professionals, businesses and local entrepreneurs.",
  plans: [
    {
      tier: "Entry Tier",
      image: "/img/franchise-1.jpg",
      name: "Franchisee Outlet",
      scope: "(City / Local Area)",
      price: "₹ 36,500/-",
      priceNote: "One-time franchise fee",
      commission: "20%",
      features: [
        "Own Rental Outlet",
        "Customer Registration Support",
        "Earn High Commission",
        "Marketing Materials",
        "Training & Operational Support",
      ],
    },
    {
      tier: "Growth Tier",
      image: "/img/franchise-2.jpg",
      name: "District Franchisee",
      scope: "(District Level)",
      price: "₹ 3,65,000/-",
      priceNote: "One-time franchise fee",
      commission: "10%",
      features: [
        "District Rights",
        "Multiple Outlets",
        "Team Building Support",
        "Local Marketing Campaigns",
        "Dedicated Account Manager",
      ],
    },
    {
      tier: "Scale Tier",
      image: "/img/franchise-3.jpg",
      name: "State Franchisee",
      scope: "(State Level)",
      price: "₹ 36,50,000/-",
      priceNote: "One-time franchise fee",
      commission: "5%",
      features: [
        "State Level Rights",
        "Multi-District Network",
        "Brand Promotion Support",
        "Business Development Team",
        "Events & Partner Onboarding",
        "Priority Support",
      ],
    },
    {
      tier: "Flagship Tier",
      image: "/img/franchise-4.jpg",
      name: "Country Franchisee",
      scope: "(Pan India / International)",
      price: "₹ 3.6 CR",
      priceNote: "(₹ 3,60,00,000/-)",
      commission: "2%",
      features: [
        "Country Level Rights",
        "State & District Network",
        "National Brand Campaigns",
        "Strategic Partnerships",
        "Technology & Product Support",
        "Highest Priority Support",
      ],
    },
  ],
};

/** The tile strip: "RentOut for Every Need". */
export const cities = {
  title: "RentOut for Every Need",
  subtitle: "Stop buying for every short-term need. Explore RentOut.",
  linkLabel: "Explore Rentals",
  rows: [
    [
      { name: "Students", count: "Laptops, cameras, furniture, appliances and more.", image: "/img/cat-03.jpg", span: 420 },
      { name: "Professionals", count: "Equipment, technology, workspace and business resources.", image: "/img/cat-08.jpg", span: 420 },
      { name: "Families", count: "Homes, vehicles, appliances and furniture.", image: "/img/cat-07.jpg", span: 420 },
    ],
    [
      { name: "Events", count: "Venues, equipment, furniture, photography and more.", image: "/img/cat-10.jpg", span: 570 },
      { name: "Businesses", count: "Machinery, commercial spaces, vehicles, equipment and professional resources.", image: "/img/cat-06.jpg", span: 690 },
    ],
  ],
};

export const about = {
  title: "About RentOut",
  body: [
    "Reimagining the way India rents. RentOut was created with a simple idea: people don’t always need to own everything they use.",
    "RentOut is designed to support everyone — from an individual renting out one item to professional rental companies managing hundreds of assets.",
  ],
  cta: "List Your Asset",
  steps: [
    { number: "1.", title: "Individuals", body: "Rent out personal assets — a laptop, a camera, an extra room or a vehicle." },
    { number: "2.", title: "Professionals", body: "Build a rental business, starting with one asset and growing from there." },
    { number: "3.", title: "Rental Companies", body: "Manage and grow your inventory with digital listings and availability management." },
    { number: "4.", title: "Businesses", body: "Find resources without unnecessary ownership costs." },
  ],
  /** Staggered collage: each image keeps its own proportions, as in the design. */
  gallery: {
    // Left and right columns are mirrored: same tile heights, same top edge.
    // Only the middle column is offset down, with a short wide tile on top.
    columnOne: [
      { src: "/img/about-2.jpg", ratio: "146/160" },
      { src: "/img/about-5.jpg", ratio: "146/155" },
    ],
    columnTwo: [
      { src: "/img/about-3.jpg", ratio: "146/88" },
      { src: "/img/about-4.jpg", ratio: "146/158" },
    ],
    columnThree: [
      { src: "/img/about-1.jpg", ratio: "146/160" },
      { src: "/img/about-6.jpg", ratio: "146/155" },
    ],
  },
};

export const faq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "What is RentOut?",
      answer: "RentOut is a digital rental marketplace designed to connect people and businesses looking to rent with owners and providers offering eligible assets, spaces, equipment and services for rent.",
    },
    {
      question: "What can I rent on RentOut?",
      answer: "Depending on availability and category policies, RentOut can support rentals across property, vehicles, electronics, furniture, appliances, tools, equipment, event resources, services and other eligible categories.",
    },
    {
      question: "Can I list my own items?",
      answer: "Yes. Owners can create rental listings for eligible assets according to RentOut’s listing policies and applicable laws.",
    },
    {
      question: "Can businesses use RentOut?",
      answer: "Yes. RentOut is designed for individuals and businesses, including professional rental companies and businesses looking for temporary access to assets.",
    },
    {
      question: "Can I rent something for only one day?",
      answer: "Rental duration depends on the asset, owner and applicable rental terms. Some assets may be available for daily rentals, while others may have weekly, monthly or longer-term options.",
    },
    {
      question: "Does RentOut own the listed assets?",
      answer: "Generally, RentOut operates as a technology marketplace connecting owners/providers with renters. Ownership and rental arrangements depend on the individual listing and applicable terms.",
    },
    {
      question: "Are all listings verified?",
      answer: "Verification requirements may vary by category and platform policy. Users should review listing details and applicable verification information before completing a rental.",
    },
    {
      question: "Is online payment available?",
      answer: "Where enabled for a particular category or transaction, RentOut may provide digital payment functionality through supported payment infrastructure.",
    },
    {
      question: "Is a security deposit required?",
      answer: "A security deposit may be required depending on the asset, owner, category and rental terms.",
    },
    {
      question: "Can I cancel a rental?",
      answer: "Cancellation rules depend on the listing, owner/provider and applicable booking terms.",
    },
    {
      question: "How do I report a suspicious listing?",
      answer: "Use the available reporting/support options on the platform or contact RentOut support.",
    },
    {
      question: "Can I list multiple assets?",
      answer: "Yes, subject to account, category and platform policies.",
    },
    {
      question: "Is RentOut available across India?",
      answer: "RentOut’s vision is to build an India-wide rental marketplace. Availability of specific categories and listings may vary by city and location.",
    },
    {
      question: "What happens if an asset is damaged?",
      answer: "Damage responsibility should be clearly defined in the applicable rental agreement or terms before the rental is completed. Users should inspect and document asset condition wherever appropriate.",
    },
    {
      question: "Does RentOut guarantee every transaction?",
      answer: "RentOut provides marketplace technology and applicable platform services. Users should review listing information, rental terms and applicable agreements before entering into a rental transaction.",
    },
  ],
};

/** Empty until real customers give testimonials; the band hides itself. */
export const testimonials = {
  title: "What Our Users Say",
  subtitle: "",
  items: [] as { name: string; role: string; avatar: string; quote: string }[],
};

export const newsletter = {
  title: "Your rental marketplace, wherever you go. The RentOut app is coming soon on Android.",
  placeholder: "Enter your email",
  cta: "Join Waitlist",
  note: "Join the waitlist to hear when you can search, discover and manage rentals from your smartphone.",
};

export const footer = {
  blurb:
    "One Platform. Every Rental Possibility. Rent what you need. List what you own. Earn from what you have.",
  // Real handles, phone and inbox not confirmed yet; empty values stay hidden.
  socials: [] as string[],
  contact: { phone: "", email: "" },
  copyright: "© 2026 RentOut. All Rights Reserved.",
  legal: [] as string[],
};

/** The Contact page intro (content master, section 15). Not CMS-managed yet. */
export const contactPage = {
  title: "Contact RentOut",
  subtitle: "We're Here to Help.",
  body: "Have a question about renting, listing an asset, becoming a business partner or using the RentOut platform? Our team is here to help.",
  topics: [
    { title: "Customer Support", body: "Rental questions, account assistance and platform support." },
    { title: "Owner Support", body: "Listing, availability, pricing and rental-business assistance." },
    {
      title: "Business Partnerships",
      body: "Rental companies, equipment providers, property owners, service providers and strategic partners.",
    },
    { title: "Technical Support", body: "Website, app, account and technical issues." },
  ],
};
