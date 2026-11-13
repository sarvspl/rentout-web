/**
 * Privacy Policy and Terms & Conditions.
 *
 * Plain data so the copy can be reviewed (and later moved to the CMS) without
 * touching the page layout. Written to match what the platform actually does
 * today; have it reviewed by legal counsel before relying on it.
 */

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  updated: "13 November 2026",
  intro:
    "This Privacy Policy explains how RentOut collects, uses, shares and protects your information when you use the RentOut website and mobile app (together, the \"Platform\"). By using the Platform you agree to the practices described here.",
  sections: [
    {
      heading: "1. Information we collect",
      bullets: [
        "Account details: your name, mobile number, email address and profile information you choose to add.",
        "Listing and booking details: assets you list, photos you upload, enquiries, bookings and messages related to a rental.",
        "Business and verification details: where you register as an agency or business, information such as business name, address, GST, PAN and supporting documents you submit for verification.",
        "Payment details: when you pay through the Platform, our payment partner (Razorpay) processes your card, UPI, netbanking or wallet details. RentOut receives only payment references, amount and status, not your full card or bank credentials.",
        "Technical details: device type, browser, IP address, app version and basic usage logs needed to keep the Platform secure and working.",
      ],
    },
    {
      heading: "2. How we use your information",
      bullets: [
        "To create and manage your account and sign you in, including sending one-time passwords (OTP).",
        "To publish your listings and connect renters with owners and providers.",
        "To process subscriptions and other payments, and to keep records of them.",
        "To verify agencies and businesses and to help keep the marketplace safe.",
        "To send service messages such as booking updates, payment confirmations and subscription expiry reminders.",
        "To send newsletters and updates where you have subscribed. You can unsubscribe at any time.",
        "To prevent fraud and misuse, resolve disputes and comply with law.",
      ],
    },
    {
      heading: "3. How we share information",
      paragraphs: [
        "We do not sell your personal information. We share it only where needed to run the Platform:",
      ],
      bullets: [
        "With other users, to the extent needed for a rental, for example a listing's owner details shown to an interested renter.",
        "With service providers who help us operate, such as payment processing (Razorpay), hosting, SMS and email delivery. They may use the information only to provide their service to us.",
        "With authorities where required by law, court order or to protect the rights and safety of RentOut, our users or the public.",
      ],
    },
    {
      heading: "4. Data storage and security",
      paragraphs: [
        "We use reasonable technical and organisational safeguards, such as encrypted connections, access controls and restricted storage for verification documents. No online service can be completely secure, so please keep your sign-in details and OTPs private.",
      ],
    },
    {
      heading: "5. Data retention",
      paragraphs: [
        "We keep your information for as long as your account is active and afterwards only as long as needed for the purposes above, including legal, tax, accounting and dispute-resolution requirements.",
      ],
    },
    {
      heading: "6. Your choices and rights",
      bullets: [
        "Access and update your profile information from your account.",
        "Ask us to correct or delete your personal information, subject to records we must keep by law.",
        "Unsubscribe from newsletters using the link in any newsletter email.",
        "Withdraw consent where processing is based on consent; this does not affect processing already carried out.",
      ],
    },
    {
      heading: "7. Cookies",
      paragraphs: [
        "The website uses essential cookies and similar storage to keep you signed in and to keep the site secure. We do not use them to sell advertising.",
      ],
    },
    {
      heading: "8. Children",
      paragraphs: [
        "The Platform is intended for users aged 18 and above. We do not knowingly collect information from children.",
      ],
    },
    {
      heading: "9. Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The \"Last updated\" date above shows when it last changed. Continued use of the Platform after an update means you accept the revised policy.",
      ],
    },
    {
      heading: "10. Contact us",
      paragraphs: [
        "For questions or requests about your privacy, please reach us through the Contact page.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Terms & Conditions",
  updated: "13 November 2026",
  intro:
    "These Terms & Conditions (\"Terms\") govern your use of the RentOut website and mobile app (together, the \"Platform\"). By creating an account or using the Platform you agree to these Terms. If you do not agree, please do not use the Platform.",
  sections: [
    {
      heading: "1. About RentOut",
      paragraphs: [
        "RentOut is a technology-enabled rental marketplace that connects people and businesses who want to rent out assets or services (\"Owners\" or \"Providers\") with people who want to rent them (\"Renters\"). Unless stated otherwise for a specific listing, RentOut does not own the listed assets and is not a party to the rental agreement between an Owner and a Renter.",
      ],
    },
    {
      heading: "2. Eligibility and accounts",
      bullets: [
        "You must be at least 18 years old and able to enter into a binding contract.",
        "You must give accurate information and keep it up to date.",
        "You are responsible for all activity under your account. Keep your sign-in details and OTPs private.",
        "We may ask agencies and businesses to complete verification before some features are available.",
      ],
    },
    {
      heading: "3. Listings",
      bullets: [
        "Owners are responsible for the accuracy of their listings, including description, photos, price, availability, condition and any deposit or rental terms.",
        "You may list only assets you own or are authorised to rent out, and that are legal to rent.",
        "RentOut may review, edit, hide or remove listings that break these Terms or applicable law.",
      ],
    },
    {
      heading: "4. Rentals between users",
      bullets: [
        "Rental price, duration, deposit, delivery, pickup, return, cancellation and damage responsibility are agreed between the Owner and the Renter for each rental.",
        "Rental payments between an Owner and a Renter are settled as agreed between them unless the Platform clearly offers online payment for that booking.",
        "Renters should review the listing, inspect the asset and document its condition at handover and return.",
        "Owners must hand over the asset in the condition described; Renters must use it with care and return it on time.",
      ],
    },
    {
      heading: "5. Subscriptions and fees",
      bullets: [
        "Some features, such as adding products as an agency, require an active subscription plan. Plan names, prices and product limits are shown in the app before you pay.",
        "Subscription fees are paid through our payment partner, Razorpay. A plan is activated only after the payment is successfully verified.",
        "Each plan runs for the period shown at purchase (for example, 12 months from activation). Renewal is manual; we will remind you before expiry.",
        "When a subscription expires, subscription-only actions are restricted until you renew. If you exceed your plan's limit, you will need to upgrade before adding more products.",
        "Prices are inclusive or exclusive of applicable taxes as shown at checkout.",
        "Subscription fees are generally non-refundable once the plan is activated, except where required by law or where a payment was charged in error. If money is debited but the plan is not activated, contact us and we will resolve it.",
      ],
    },
    {
      heading: "6. Prohibited use",
      paragraphs: ["You agree not to:"],
      bullets: [
        "List or rent anything illegal, stolen, counterfeit, unsafe or that you have no right to rent out.",
        "Post false, misleading or offensive content, or impersonate anyone.",
        "Harass, defraud or harm other users.",
        "Interfere with the Platform's security, scrape it, or try to access accounts or data that are not yours.",
        "Use the Platform to avoid fees or to move transactions off the Platform in a way that breaks these Terms.",
      ],
    },
    {
      heading: "7. Content and intellectual property",
      paragraphs: [
        "The Platform, its design, logo and software belong to RentOut. You keep ownership of content you upload, and you give RentOut a non-exclusive licence to host, display and use it to operate and promote the Platform.",
      ],
    },
    {
      heading: "8. Disclaimers",
      paragraphs: [
        "The Platform is provided \"as is\". Availability of services, categories, payments, verification and other features may vary by location, category and applicable terms. RentOut does not guarantee the quality, safety or legality of listed assets, the accuracy of listings, or the conduct of users.",
      ],
    },
    {
      heading: "9. Limitation of liability",
      paragraphs: [
        "To the extent permitted by law, RentOut is not liable for indirect or consequential losses, or for loss or damage arising from a rental between users. Our total liability to you for any claim related to the Platform is limited to the fees you paid to RentOut in the 12 months before the claim.",
      ],
    },
    {
      heading: "10. Suspension and termination",
      paragraphs: [
        "You may stop using the Platform at any time. We may suspend or close accounts, or remove content, that break these Terms or the law, or that put other users at risk.",
      ],
    },
    {
      heading: "11. Disputes and governing law",
      paragraphs: [
        "Disputes between users should first be resolved between them; we may help where we can. These Terms are governed by the laws of India, and courts in India have jurisdiction over any dispute with RentOut.",
      ],
    },
    {
      heading: "12. Changes to these Terms",
      paragraphs: [
        "We may update these Terms from time to time. The \"Last updated\" date above shows when they last changed. Continued use of the Platform after an update means you accept the revised Terms.",
      ],
    },
    {
      heading: "13. Contact us",
      paragraphs: ["For questions about these Terms, please reach us through the Contact page."],
    },
  ],
};

/** Shown in the footer whenever the CMS has no legal links of its own. */
export const defaultLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
