
You are configuring the global theme and design tokens for a Next.js (App Router), React, and TypeScript application based on the "Central Jersey Process Service" branding. 

Implement a unified, highly consistent design system by executing the following setups exactly as specified:

### 1. Tailwind Configuration (`tailwind.config.ts`)
Extend the default theme configuration to integrate the exact brand colors, ensuring they map cleanly to standard utility classes:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#1A1A1A",       // Deep charcoal background
          primary: "#F4D03F",  // Vibrant Canary Yellow accent
          text: {
            main: "#FFFFFF",   // Primary white text
            muted: "#A6A6A6",  // Secondary muted gray text
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;


@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-brand-bg text-brand-text-main antialiased selection:bg-brand-primary selection:text-brand-bg;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold tracking-tight text-brand-text-main;
  }

  p {
    @apply text-brand-text-muted leading-relaxed;
  }
}







# Homepage Layout: Central Jersey Process Service

├── [Header]
│   ├── Logo (CJPS)
│   ├── Navigation Menu
│   │   ├── Services
│   │   └── Contact
│   └── Call-to-Action (CTA) Button: "ORDER SERVICE"
│
├── [Hero Section]
│   ├── Tagline: "FAST AND RELIABLE"
│   ├── Main Heading (H1): "Your Trusted Process Servers in Central Jersey"
│   ├── Subheading/Description paragraph
│   └── CTA Elements
│       ├── Phone Number Button: (908) 760-6257 ("AVAILABLE NOW")
│       └── Text Link: "Check All Services →"
│
├── [Services Section]
│   ├── Tagline: "SERVICES"
│   ├── Section Heading (H1): "Nationwide Service"
│   ├── Brief descriptive text
│   └── Service Feature Grid (H2 Links)
│       ├── Service of Process
│       ├── Subpoena Domestication
│       └── Skip Tracing
│
├── [About Us Section]
│   ├── Tagline: "ABOUT US"
│   ├── Section Heading (H1): "We've handled every situation imaginable"
│   ├── Description paragraph
│   ├── Core Value / Capability Bullet Points
│   │   ├── "Servers that can find anyone, anywhere"
│   │   ├── "Assisted by restricted-access investigative technology"
│   │   └── "Reliability, every single time"
│   └── CTA Button: "LEARN MORE"
│
├── [Why Choose Us Section]
│   ├── Tagline: "WHY CHOOSE US"
│   ├── Section Heading (H1): "Upholding ethical standards and reliability"
│   ├── Description paragraph & "LEARN MORE" link
│   └── Features Matrix (H2 blocks with sub-bullets)
│       ├── Ethical Practices (Integrity, Compliance, Confidentiality)
│       ├── Reliable Compliance (Experience, Accuracy, Adherence)
│       └── Trusted Standards (Ethics, Client-focused, Due process)
│
├── [Customer Reviews Section]
│   ├── Tagline: "CUSTOMER REVIEWS"
│   ├── Section Heading (H1): "See what our clients have to say:"
│   └── Review Cards
│       ├── Review 1: Jill Simonetta (Paralegal from Florida) + Testimonial text
│       └── Review 2: Vennis Williams (Pro se plaintiff from NJ) + Testimonial text
│
├── [Contact & Info Grid]
│   ├── Column 1: Our Address (65 Morrell St, New Brunswick, NJ)
│   ├── Column 2: Contact us (Email link, Phone number)
│   └── Column 3: Opening Hours (Mon - Fri, 9am - 5:00pm)
│
├── [Stats / Final Banner]
│   ├── Image Placeholder: [NYSPPSA Convention 2024]
│   ├── Stats Counters (10 NJ Counties, 5 Dedicated Servers)
│   ├── Heading (H1): "Our service makes the difference."
│   └── Final CTA Banner
│       ├── Phone Number Button: (908) 760-6257
│       └── Closing description text
│
└── [Footer]
    ├── Links Column: Services, Blog, Contact
    ├── Info Column: Address, Phone, Email
    └── Bottom Bar
        ├── Copyright Notice (© 2024 Central Jersey Process Service LLC)
        └── Legal Links: Privacy Policy | Terms of Use


# Page Layout: /services (Central Jersey Process Service)

├── [Header]
│   ├── Logo / Home Link (CJPS) -> /
│   ├── Navigation Menu
│   │   ├── Services -> /services
│   │   └── Contact -> /contact
│   └── Call-to-Action (CTA) Button: "ORDER SERVICE" -> /order-service
│
├── [Page Intro / Services Section]
│   ├── Tagline: "SERVICES"
│   └── Grid of Service Cards
│       ├── Service of Process Card
│       │   ├── Heading (H2): "Service of Process"
│       │   ├── Description: "We provide service on a routine, rush..."
│       │   └── Link: "READ MORE →" -> /services/service-of-process
│       ├── Subpoena Domestication Card
│       │   ├── Heading (H2): "Subpoena Domestication"
│       │   ├── Description: "Our well-versed staff assists with submission..."
│       │   └── Link: "READ MORE →" -> /services/subpoena-domestication
│       ├── Skip Tracing Card
│       │   ├── Heading (H2): "Skip Tracing"
│       │   ├── Description: "Evading service just became a lot harder..."
│       │   └── Link: "READ MORE →" -> /services/skip-tracing
│       ├── Mobile Notary Card
│       │   ├── Heading (H2): "Mobile Notary"
│       │   ├── Description: "Our team of notaries can notarize any document..."
│       │   └── Link: "READ MORE →" -> /services/mobile-notary
│       ├── Stakeout Services Card
│       │   ├── Heading (H2): "Stakeout Services"
│       │   ├── Description: "For subjects who play hard-to-get..."
│       │   └── Link: "READ MORE →" -> /services/stakeout-services
│       └── Court Filing and Record Retrieval Card
│           ├── Heading (H2): "Court Filing and Record Retrieval"
│           ├── Description: "Affordable filing for jobs of all sizes..."
│           └── Link: "READ MORE →" -> /services/court-filing
│
├── [Why Choose Us Section]
│   ├── Tagline: "WHY CHOOSE US"
│   ├── Section Heading (H1): "We've handled every situation imaginable"
│   └── Value Proposition Blocks
│       ├── Comprehensive Digital Tools (H2)
│       └── Real World Experience (H2)
│
├── [Call To Action Banner]
│   ├── Text: "Our service makes the difference."
│   ├── Phone Number Button: "(908) 760-6257" / "AVAILABLE NOW" -> /contact
│   └── Description: "Ready to experience reliable and efficient process service?..."
│
└── [Footer]
    ├── Links Column
    │   ├── Services -> /services
    │   ├── Blog -> /blog
    │   └── Contact -> /contact
    ├── Info Column
    │   └── Address & Contact details
    └── Bottom Bar
        ├── Copyright Notice
        ├── Privacy Policy Link -> /privacy-policy
        └── Terms of Use Link -> /terms-of-use


# Page Layout: /contact (Central Jersey Process Service)

├── [Header]
│   ├── Logo / Home Link (CJPS) -> /
│   ├── Navigation Menu
│   │   ├── Services -> /services
│   │   └── Contact -> /contact
│   └── Call-to-Action (CTA) Button: "ORDER SERVICE" -> /order-service
│
├── [Contact Information Grid]
│   ├── Mailing Address Card
│   │   ├── Icon: Location Pin
│   │   ├── Heading (H2): "Mailing address"
│   │   └── Text: "65 Morrell St, Suite 103, New Brunswick, NJ 08901-1485"
│   │
│   ├── Phone Card
│   │   ├── Icon: Telephone
│   │   ├── Heading (H2): "Call us"
│   │   └── Text/Link: "(908) 760-6257" -> tel:9087606257
│   │
│   └── Email Card
│       ├── Icon: Envelope
│       ├── Heading (H2): "Email us"
│       └── Text/Link: "info@centraljerseyps.com" -> mailto:info@centraljerseyps.com
│
├── [Interactive Map & Quick Action Section]
│   ├── Left Column: Embedded Google Map Component (Centering New Brunswick Office)
│   └── Right Column: Secondary Call-to-Action Button: "ORDER SERVICE" -> /order-service
│
├── [Call-To-Action Banner]
│   ├── Section Heading (H1): "Our service makes the difference."
│   ├── Phone Number Badge Button: "(908) 760-6257" ("AVAILABLE NOW") -> tel:9087606257
│   └── Description: "Ready to experience reliable and efficient process service?..."
│
└── [Footer]
    ├── Links Column
    │   ├── Services -> /services
    │   ├── Blog -> /blog
    │   └── Contact -> /contact
    ├── Info Column
    │   └── Address & Contact details
    └── Bottom Bar
        ├── Copyright Notice (© 2024 Central Jersey Process Service LLC)
        ├── Privacy Policy Link -> /privacy-policy
        └── Terms of Use Link -> /terms-of-use


i want you to build our serve management company's website; ensure you are diligent and consistent when developing this site, use nextjs and react typescript; do not over complicate this because i provided the exact things to 