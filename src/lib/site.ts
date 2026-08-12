export const SITE = {
  name: "Central Jersey Process Service",
  shortName: "CJPS",
  phone: "(908) 760-6257",
  phoneHref: "tel:9087606257",
  email: "info@centraljerseyps.com",
  emailHref: "mailto:info@centraljerseyps.com",
  address: "65 Morrell St, Suite 103, New Brunswick, NJ 08901-1485",
  addressShort: "65 Morrell St, Suite 103\nNew Brunswick, NJ 08901",
  hours: "Mon - Fri, 9am - 5:00pm",
  orderServiceUrl:
    "https://www.processservers.com/forms/central-jersey-process-service",
  tagline:
    "Central Jersey Process Service provides fast, accurate, and reliable process serving when it matters most.",
  copyright: "© 2024 All Right Reserved by Central Jersey Process Service LLC",
  stats: {
    counties: { value: "21", label: "NJ Counties Served" },
    servers: { value: "15", label: "Dedicated Servers" },
    callAway: { value: "1", label: "Call Away" },
  },
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
