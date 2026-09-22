/**
 * All page copy and data lives here.
 *
 * Components never hardcode content, so swapping this file for CMS calls later
 * is a drop-in change: keep the shapes, change the source.
 */

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "contact", href: "#contact" },
];

export const hero = {
  eyebrow: "All quality thing for a better you",
  titleLines: [
    [{ text: "ELEVATE", accent: false }],
    [
      { text: "YOUR ", accent: false },
      { text: "LIVING", accent: true },
    ],
  ],
  body: "Lorem ipsum is a scrambled, nonsensical passage of pseudo-Latin used universally as placeholder or dummy text in graphic design .It allows designers and developers to preview visual layouts",
  primaryCta: { label: "Explore Rental", href: "#categories" },
  secondaryCta: { label: "List Your Item", href: "#contact" },
  imageUrls: ["/img/hero-collage.png"],
  slides: 1,
};

export const stats = {
  headline: [
    { text: "We’re ", accent: false },
    { text: "transforming", accent: true },
    {
      text: " the way you rent with solutions, flexible plans, and quality products designed to make everyday ",
      accent: false,
    },
    { text: "living easier.", accent: true },
  ],
  figures: [
    { value: "120k+", label: "Customer satisfaction in 2024" },
    { value: "90%", label: "Customer satisfaction" },
  ],
};

export const services = [
  { icon: "cart", title: "Free Shipping", subtitle: "On all Order" },
  { icon: "shield", title: "Secure Payment", subtitle: "On all Order" },
  { icon: "megaphone", title: "Marketing Support", subtitle: "On all Order" },
  { icon: "headphones", title: "24/7 Hours help", subtitle: "On all Order" },
];

export const franchise = {
  eyebrow: "Franchise opportunities",
  title: "Choose the franchise model that scales with your ambition",
  body: "Four polished tiers designed to make each franchise level feel premiummodern, and easy to compare at a glance.",
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

export const categoryFilters = [
  "All",
  "Vehicles",
  "Kitchen",
  "Machines",
  "Devices",
  "Furniture",
  "Property",
];

const listingBody =
  "Lorem ipsum does not have a real, cheing in Latin; it is scrambled...";

export const listings = [
  { title: "Sofa set for living", image: "/img/cat-01.jpg", category: "Furniture", liked: true },
  { title: "Chair set for room", image: "/img/cat-02.jpg", category: "Furniture", liked: false },
  { title: "Car BMW for rent", image: "/img/cat-05.jpg", category: "Vehicles", liked: false },
  { title: "Super speed laptop", image: "/img/cat-03.jpg", category: "Devices", liked: false },
  { title: "Mobile for rent", image: "/img/cat-04.jpg", category: "Devices", liked: false },
  { title: "Concrete Mixer", image: "/img/cat-06.jpg", category: "Machines", liked: false },
  { title: "Family comfort villa", image: "/img/cat-07.jpg", category: "Property", liked: false },
  { title: "Computer for living", image: "/img/cat-08.jpg", category: "Devices", liked: false },
  { title: "Music system", image: "/img/cat-10.jpg", category: "Devices", liked: false },
  { title: "Mobile for rent", image: "/img/cat-09.jpg", category: "Devices", liked: true },
].map((item) => ({
  ...item,
  body: listingBody,
  price: "₹10k/month",
  location: "Kolkata Newtown",
}));

export const cities = {
  title: "Explore Cities",
  subtitle: "Aliquam lacinia diam quis lacus euismod",
  linkLabel: "All Types",
  rows: [
    [
      { name: "New York", count: "10 Properties", image: "/img/city-1.jpg", span: 570 },
      { name: "Los Angeles", count: "2 Properties", image: "/img/city-2.jpg", span: 351 },
      { name: "San Francisco", count: "1 Property", image: "/img/city-3.jpg", span: 270 },
      { name: "New Jersey", count: "0 Properties", image: "/img/city-4.jpg", span: 357 },
    ],
    [
      { name: "San Francisco", count: "1 Property", image: "/img/city-3.jpg", span: 270 },
      { name: "San Francisco", count: "1 Property", image: "/img/city-3.jpg", span: 270 },
      { name: "Los Angeles", count: "2 Properties", image: "/img/city-2.jpg", span: 497 },
      { name: "New York", count: "10 Properties", image: "/img/city-1.jpg", span: 570 },
    ],
  ],
};

export const about = {
  title: "About Us",
  body: [
    "At Besnik Consultancy, we take pride in our values",
    "– service, integrity, and excellence.",
  ],
  cta: "Learn more",
  steps: [
    {
      number: "1.",
      title: "Customer → Customer",
      body: "You get a 2-week free trial to kick the Smarty tries. We want you to.",
    },
    {
      number: "2.",
      title: "Business → Customer",
      body: "We give you a free course that guides you through the process.",
    },
    {
      number: "3.",
      title: "Business → Business",
      body: "Use our multimedia lecturers, videos, and coaching sessions.",
    },
    {
      number: "4.",
      title: "Professional Rental Management",
      body: "With access to online learning resources anyone can transfrm.",
    },
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
  title: "Frequently Ask Questions",
  answer:
    "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  columnOne: [
    { id: "q1", question: "How long until we deliver your first blog post?" },
    { id: "q2", question: "How long until we deliver your first blog post?" },
  ],
  columnTwo: [
    { id: "q3", question: "How long until we deliver your first blog post?" },
    { id: "q4", question: "How long until we deliver your first blog post?" },
    { id: "q5", question: "How long until we deliver your first blog post?" },
  ],
};

export const testimonials = {
  title: "Wall of Love",
  subtitle: "Aliquam lacinia diam quis lacus euismod",
  items: [
    {
      name: "Ali Tufan",
      role: "Marketing",
      avatar: "/img/avatar-1.jpg",
      quote:
        "“At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti ”",
    },
    {
      name: "Albert Flores",
      role: "Designer",
      avatar: "/img/avatar-2.jpg",
      quote:
        "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae”",
    },
    {
      name: "Robert Fox",
      role: "Developer",
      avatar: "/img/avatar-3.jpg",
      quote:
        "“Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit”",
    },
  ],
};

export const newsletter = {
  title: "Subscribe to our newsletter for the latest updates and insights.",
  placeholder: "Enter your email",
  cta: "Subscribe",
  note: "Stay ahead with the latest updates, insights, and events from Macat Megatrons.",
};

export const footer = {
  blurb:
    "Macat Megatrons is a thriving community where to share knowledge, collaborate, and grow.",
  socials: ["facebook", "instagram", "google", "x", "linkedin"],
  contact: { phone: "+123 456 7890", email: "support@mm.com" },
  copyright: "© 2025 Rentout. All rights reserved.",
  legal: ["Privacy Policy", "Terms of Use"],
};
