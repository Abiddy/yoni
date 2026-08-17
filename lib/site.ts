export const site = {
  name: "Value 4 Casa",
  tagline: "Your trusted real estate, foreclosures & probate experts",
  phone: "(949) 325-5813",
  phoneHref: "tel:+19493255813",
  email: "hello@value4casa.com",
  address: {
    line1: "3524 Greenwood Ave",
    line2: "Commerce, CA 90040",
    full: "3524 Greenwood Ave, Commerce, CA 90040",
  },
  maps: {
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=3524+Greenwood+Ave,+Commerce,+CA+90040",
    search:
      "https://www.google.com/maps/search/?api=1&query=Value+4+Casa+3524+Greenwood+Ave+Commerce+CA",
    embed:
      "https://maps.google.com/maps?q=3524%20Greenwood%20Ave%2C%20Commerce%2C%20CA%2090040&z=14&output=embed",
  },
  google: {
    title: "Value 4 Casa your foreclosure specialist",
    rating: "4.9",
    reviews: 100,
    category: "Real estate agency in Commerce, California",
    description:
      "Smooth, hassle-free business that buys distressed properties, offering fair and reasonable offers.",
  },
  hours: [
    { days: "Monday – Friday", time: "6:00 AM – 8:00 PM" },
    { days: "Saturday", time: "8:00 AM – 5:00 PM" },
    { days: "Sunday", time: "Closed" },
  ] as const,
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
] as const;

export const services = [
  {
    title: "Sell house as is",
    body: "Looking to sell your home as is, with no commissions or cost to sell your home.",
  },
  {
    title: "Foreclosure",
    body: "Understanding your needs from loan modifications, repayment, or selling your home under urgent timeline.",
  },
  {
    title: "Probate",
    body: "Helping you with our trusted advisors, the legal court process and be able to claim your loved ones estate.",
  },
  {
    title: "Buying, Selling & Investing",
    body: "Buying your 1st or second home, selling or investing in real estate.",
  },
] as const;

export const about = {
  heading: "About",
  body: "Value 4 Casa is a family owned and operated real estate acquisition and investment firm with 25 + years of experience. Highly experienced in Probate, foreclosure, short sales, and investments. V4C is focused in building relationships and providing value to our community, helping thousands of homeowners navigate their current foreclosure situation with their banks. Also, explaining and guiding the family through probate. As we are an investment firm, we also purchase properties as is. Some of our team are also licensed agents.",
};

export const mission = {
  heading: "Mission Statement",
  body: "Value 4 Casa is committed to helping our exclusive clients by creating a game plan that suits the clients goals, from probate, foreclosure, selling, buying, short sale or expanding their portfolio. Our goal is to give the client as much value as possible before they make an important decision. Value 4 Casa takes pride in building relationships and providing value to the client by meeting them where they are.",
};

export const team = [
  {
    name: "David Morales",
    title: "Founder & Principal",
    bio: "Leads Value 4 Casa with 25+ years in acquisitions, helping families sell as-is and find a clear path forward.",
    handle: "@david.v4c",
    image: "/images/team-1.jpg",
  },
  {
    name: "Sofia Reyes",
    title: "Probate Advisor",
    bio: "Guides families through the court process with patience and clarity, so estates can be settled with dignity.",
    handle: "@sofia.v4c",
    image: "/images/team-2.jpg",
  },
  {
    name: "Amara Bennett",
    title: "Foreclosure Specialist",
    bio: "Works loan modifications, repayment plans, and urgent sales when the timeline is tight and the stakes are high.",
    handle: "@amara.v4c",
    image: "/images/team-3.jpg",
  },
  {
    name: "James Whitaker",
    title: "Acquisitions Director",
    bio: "Structures fair as-is offers and investment purchases, focused on speed, transparency, and real value.",
    handle: "@james.v4c",
    image: "/images/team-4.jpg",
  },
] as const;
