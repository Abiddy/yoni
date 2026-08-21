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
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
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

export const reviews = [
  {
    name: "Maria G.",
    location: "Whittier, CA",
    service: "Foreclosure",
    rating: 5,
    quote:
      "I was weeks from losing the house and did not know who to trust. They explained every option, called me the same afternoon, and helped me walk out with a plan I could live with.",
  },
  {
    name: "James T.",
    location: "Commerce, CA",
    service: "Probate",
    rating: 5,
    quote:
      "After my father passed, the court process felt impossible. Value 4 Casa guided our family with patience and never made us feel rushed through something that was already heavy.",
  },
  {
    name: "Elena R.",
    location: "Pico Rivera, CA",
    service: "Sell as-is",
    rating: 5,
    quote:
      "The house needed more work than we could take on. They bought it as-is, no commissions, and the offer was fair. We closed without the usual circus of showings and repairs.",
  },
  {
    name: "Daniel M.",
    location: "Montebello, CA",
    service: "Short sale",
    rating: 5,
    quote:
      "Banks, paperwork, timelines — it was a lot. They stayed in our corner until it was done. I would send anyone in a hard spot to this team first.",
  },
  {
    name: "Sofia L.",
    location: "Downey, CA",
    service: "Foreclosure",
    rating: 5,
    quote:
      "They called in under an hour, just like they said. No pressure, no confusing pitch. Just a clear path and people who actually picked up the phone.",
  },
  {
    name: "Robert H.",
    location: "East Los Angeles, CA",
    service: "Buying & investing",
    rating: 5,
    quote:
      "We came for help selling and ended up trusting them with our next purchase too. Straightforward, experienced, and they treat you like family — because they are one.",
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
    name: "Alexandra Rios",
    title: "Certified probate, trust & foreclosure specialist",
    bio: "Coming from a background with a master's degree in Speech Pathology, I am passionate about helping you find the best option to resolve your current situation and attain your ideal outcome. I have helped many homeowners and would love for you to be next. I love spending time with my family, growing my mindset, and recently started planting my own garden.",
    handle: "@alexarealty_",
    image: "/images/team-1.jpg",
  },
  {
    name: "Diane Avina",
    title: "Real estate professional certified in foreclosure, short sales and probates",
    bio: "Additionally, I have over 17 years of mortgage lending experience. My specialty is helping families navigate difficult situations by exploring all options to find a solution that works for them.",
    handle: "@_diane_avina_",
    image: "/images/team-2.jpg",
  },
  {
    name: "Yoni Rios",
    title: "Operator · Certified probate specialist",
    bio: "Specializes in probate, foreclosure and short sales. Passionate about leadership and soccer. Loves spending time with his family of 4.",
    handle: "@yonirios07",
    image: "/images/team-3.jpg",
  },
  {
    name: "Carlos Limon",
    title: "Project manager and cash offer consultant",
    bio: "I'm passionate about construction, remodeling, and turning houses into homes people are proud of. Outside of work, family comes first, with plenty of traveling and golf in between. Always building, always learning, and always looking for the next project.",
    handle: "@hellocharlie_",
    image: "/images/team-4.jpg",
  },
  {
    name: "Daniel Zamora",
    title: "Lead Intelligence Coordinator",
    bio: "Specializing in foreclosures, probate, and short sales. Passionate about serving my community through both my church and real estate. Outside of work, I enjoy spending time with my family and watching my kids play sports.",
    handle: "@danielzamora._",
    image: "/images/team-5.jpg",
  },
  {
    name: "Sonny McEwen",
    title: "Foreclosure & short sale referral",
    bio: "Skilled in team & system development. Family focused. Gym aficionado.",
    handle: "@sonnymcewenla",
    image: "/images/team-6.jpg",
  },
  {
    name: "Monique Vargas",
    title: "Foreclosure, probate and short sale specialist",
    bio: "I love the outdoors and spending time with family. I specialize in pre-foreclosure and probate, helping homeowners find the best solution for their situation.",
    handle: "@Moniquevargas__",
    image: "/images/team-7.jpg",
  },
  {
    name: "Anaiza Tellez",
    title: "Foreclosure and probate specialist",
    bio: "Specializing in first-time buyers, sellers, foreclosures & probates. When I'm not helping families with real estate, I'm spending time with my family.",
    handle: "@yourrealtoranaiza",
    image: "/images/team-8.jpg",
  },
  {
    name: "Armando Olmeda",
    title: "Foreclosure, short sale, and probate specialist",
    bio: "Saving lives by night and homes by the day.",
    handle: "@armandoolmedaa",
    image: "/images/team-9.jpg",
  },
  {
    name: "Ruth Zaragoza",
    title: "Probate / foreclosure specialist",
    bio: "Faith. Family. Work. Helping one family at a time.",
    handle: "@ruthrealtor17",
    image: "/images/team-10.jpg",
  },
  {
    name: "Armando Pino",
    title: "Certified pre-foreclosure specialist",
    bio: "Passionate about helping families accomplish their goals of becoming homeowners. Loves to play basketball and spend quality time with the family.",
    handle: "@Armando_sellssocal",
    image: "/images/team-11.jpg",
  },
  {
    name: "Luis Vargas",
    title: "Real estate professional specializing in foreclosures, probate, and distressed properties",
    bio: "Bringing a CPA background and entrepreneurial mindset, I'm passionate about helping homeowners find solutions and build lasting relationships. Outside of business, I enjoy staying active, traveling, and spending time with family and friends.",
    handle: "@theluisjvargas",
    image: "/images/team-12.jpg",
  },
] as const;
