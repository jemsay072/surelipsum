import { Article, Location, ContactData, FooterData } from "../types";

export const mockArticlesDatabase: Article[] = [
  {
    id: 5,
    title: "How to Defog Windshield & Windows in Chicago",
    date: "July 5, 2026",
    category: "Driving Local: Chicago Guide",
    excerpt: "Driving in Chicago can be challenging, especially when the weather gets foggy. Foggy windows and windshields reduce visibility, making it harder to drive safely.",
    slug: "how-to-defog-windshield-chicago",
    content: [
      "1. Use the Air Conditioner to Defog Your Windows: One of the most effective ways to defog your windows in Chicago is by using your car's A/C system. Even if it's freezing cold outside, turning on the A/C helps remove moisture from the air inside the vehicle, speeding up the defogging process.",
      "2. Use the Defrost Setting for Maximum Efficiency: Most modern cars come with a specific defrost button designed to clear windows quickly. Turning this on channels dry, warm air directly to your windshield, helping to clear visibility in a matter of seconds.",
      "3. Crack the Windows to Balance Temperature: Sometimes, the fastest way to clear a fogged window is to lower the humidity inside the car by cracking the windows slightly. This allows the cold, dry air from outside to circulate and balance out the temperature parameters inside the cabin.",
      "4. Use Anti-Fog Products for Long Term Protection: If your car windows fog up frequently, consider applying a commercial anti-fog product to the glass surfaces. These treatments create a layer that prevents water droplets from gathering, keeping your glass clear.",
      "5. Keep Your Car's Interior Clean and Dry: Wet shoes, snow-covered floor mats, or damp umbrellas left inside the vehicle dramatically increase interior humidity levels. Wipe down your mats and keep your glass clean to prevent condensation build-up."
    ],
    faqs: [
      {
        question: "Why do my windows fog up in the winter in Chicago?",
        answer: "Windows fog up due to temperature differentials and moisture. The warm air from your breath and body meets the freezing glass from the outside cold, causing instant condensation."
      },
      {
        question: "How can I prevent fogging in my car overnight?",
        answer: "Ensure no damp items or umbrellas are left inside the cabin overnight, and consider using moisture-absorbing packets on your dashboard."
      }
    ]
  },
  {
    id: 4,
    title: "What Does Property Damage Liability Cover for Chicago Drivers?",
    date: "July 4, 2026",
    category: "Coverages",
    excerpt: "For Chicago drivers, property damage liability is a critical aspect of your auto insurance. If you're involved in an accident, this coverage helps pay for damages you cause to other property.",
    slug: "property-damage-liability-chicago",
    content: [
      "1. What is Property Damage Liability? Property damage liability covers the costs associated with repairing or replacing property owned by others that you damage in an auto accident where you are found at fault.",
      "2. How Much Property Damage Liability Do You Need in Chicago? The state of Illinois enforces clear minimum limits for motorists. Drivers must carry at least $15,000 in property damage liability to remain legally compliant on public roads.",
      "3. How Does Property Damage Liability Affect Your Insurance Premium? Maintaining adequate limits ensures financial protection. Clean driving records help manage these monthly rate structures efficiently without unexpected overhead.",
      "4. What is Not Covered by Property Damage Liability? Property damage liability strictly covers the other party's assets. It will never cover repairs for your own vehicle or personal property—you need collision coverage for that.",
      "5. Steps to Take After Causing Property Damage in Chicago: Document the scene immediately, exchange accurate policy identifiers with the affected party, and notify your insurance representative right away to process verification logs."
    ],
    faqs: [
      {
        question: "What's the minimum property damage liability coverage in Illinois?",
        answer: "The legal minimum requirement in the state of Illinois is currently $15,000 for property damage liability."
      },
      {
        question: "Does property damage liability cover windshields?",
        answer: "It covers the other party's windshield if you cause the accident, but it does not cover your own vehicle's glass damage."
      }
    ]
  },
  {
    id: 3,
    title: "How to Get an Instant Car Insurance Quote in Chicago",
    date: "July 3, 2026",
    category: "Affordability",
    excerpt: "Getting an instant car insurance quote is easier than ever, especially for Chicago drivers. Learn how to compare options efficiently.",
    slug: "instant-car-insurance-quote-chicago",
    content: [
      "1. Gather Your Vehicle and Personal Information: To receive an accurate premium estimate, prepare your vehicle identification number (VIN), driver's license history, and typical daily commuting distance parameters beforehand.",
      "2. Use Online Tools to Compare Instant Quotes: Utilize centralized conversion comparison platforms to evaluate different policies side-by-side. This ensures you find coverage thresholds that match your family budget criteria.",
      "3. Customize Your Coverage Based on Your Needs: Balance your monthly expenses by adjusting deductibles and adding secondary protection items like comprehensive coverage if your vehicle asset requires it.",
      "4. Get Your Instant Quote in Just Minutes: Modern digital underwriting systems process your demographic data instantly, generating clean, official premium structures without manual delay thresholds.",
      "5. Contact a Local Agent for Personalized Help: Once you have an initial calculation, sync up with a local representative to confirm active promotional discounts and complete your safe policy activation workflow."
    ],
    faqs: [
      {
        question: "How long does it take to get an instant car insurance quote in Chicago?",
        answer: "With our streamlined digital configuration tools, you can receive an official auto insurance quote in less than 2 minutes."
      },
      {
        question: "Is it better to compare quotes from multiple providers?",
        answer: "Yes, evaluating options ensures you capture the lowest available premium thresholds for your specific driving history profile."
      }
    ]
  },
  {
    id: 2,
    title: "How to File Car Insurance Claims in Chicago",
    date: "July 2, 2026",
    category: "Affordability",
    excerpt: "Filing a car insurance claim can feel overwhelming, but understanding the process can help make it much easier. Whether you’re dealing with a minor fender-bender or a more serious accident, knowing how to navigate your car insurance claim can",
    slug: "how-to-file-car-insurance-claims-in-chicago",
    content: [
      "1. Ensure Safety and Document the Scene: The first step in filing a car insurance claim is ensuring safety. After any accident, it’s important to check for injuries and call emergency services if needed. Once you’ve taken care of any injuries, you’ll want to take steps to protect yourself and gather evidence.",
      "2. Notify Your Insurance Company and Initiate the Claim: Once you’re safe and have all the necessary documentation, it’s time to contact your insurer. In Illinois, it’s essential to inform your insurance company promptly about the accident, even if it wasn’t your fault.",
      "3. Work with the Insurance Adjuster: The insurance adjuster will review the details of your claim to assess the extent of the damage and the costs involved. This step is critical, as it determines how much compensation you’ll receive for repairs or replacements.",
      "4. Get an Estimate and Review the Settlement Offer: Once the investigation is complete, your insurance company will provide you with a settlement offer based on their findings. They may also ask for an official repair estimate from a body shop or give you the option of working with one of their preferred network shops.",
      "5. Repair or Replace Your Car: Once the claim is settled, you can proceed with repairs or replacing your vehicle, depending on the severity of the damage. If your car is repairable, you’ll work with a repair shop to restore it to its pre-accident condition."
    ],
    faqs: [
      {
        question: "What’s the minimum auto insurance required in Illinois?",
        answer: "Illinois law requires all drivers to carry $25,000 for bodily injury per person, $50,000 per accident, and $20,000 for property damage. This basic liability coverage can be increased for better protection. Learn more about Illinois minimum car insurance requirements."
      },
      {
        question: "How long does it take to get a settlement after filing a car insurance claim in Chicago?",
        answer: "The time it takes to settle a claim varies based on the complexity of the case, but most claims are settled within 30 days. If the claim involves significant damage or complex liability issues, it could take longer."
      },
      {
        question: "Do I have to pay my deductible when filing a claim for a minor accident?",
        answer: "Yes, you’ll need to pay your deductible when filing a claim, regardless of the accident’s severity. Your deductible is subtracted from your payout for repairs or vehicle replacement. For a minor accident, the repair costs might only slightly exceed the deductible."
      }
    ]
  },
];

export const mockLocationsDatabase: Location[] = [
  {
      id: 1,
      name: "Corporate Headquarters",
      address: "5440 N Cumberland Ave, Chicago, IL 60656, United States",
      phone: "(773) 202-5060",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      city: "Chicago"
  },
  {
      id: 2,
      name: "Chicago, IL South",
      address: "8537 S Cicero Ave, Chicago, IL 60652, United States",
      phone: "(773) 202-5060",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      city: "Chicago"
  },
  {
      id: 3,
      name: "Berwyn, IL",
      address: "7001 W Roosevelt Rd, Berwyn, IL 60402, United States",
      phone: "(708) 484-7400",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      city: "Berwyn"
  },
  {
      id: 4,
      name: "Melrose Park, IL",
      address: "1907 N Mannheim Rd, Melrose Park, IL 60164, United States",
      phone: "(708) 345-1000",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      city: "Melrose Park"
  }
];

export const mockContactDatabase: ContactData = {
  title: "Contact Us",
  description: "Call us at 773-202-5060 or try our Location Finder to find the Insure on the Spot location nearest you!",
  phoneNumber: "773-202-5060",
  locationFinderText: "Location Finder",
  departments: [
    {
      title: "Customer Service",
      schedule: ["Monday- Friday 8am-8pm", "Saturday 8am-5pm"],
    },
    {
      title: "Sales",
      schedule: ["Monday- Friday 8am-8:30pm", "Saturday 8am-5:30pm"],
    },
  ],
  promoTitle: "Get a Free Quote »",
  promoDetails: [
    { text: "Free $100 AMAZON Gift Card", isBold: true },
    { text: "Refer Friends & Family" },
    { text: "Mention Your Client Code" },
    { text: "Policy starts- get a $100 gift card" },
  ],
  careersText: "Interested in working with a constantly growing and exciting organization in the Chicago land area?",
  careersLinkText: "Click Here for Employment Opportunities!",
  images: {
    sideAgent: "/images/agent-side.png",
    bottomGroup: "/images/group-banner.png",
  },
};

export const footerData: FooterData = {
  categories: [
    {
      title: "SERVICES",
      links: [
        { label: "Auto Insurance", url: "#auto" },
        { label: "SR22 Insurance", url: "#sr22" },
        { label: "Motorcycle Insurance", url: "#motorcycle" },
        { label: "Commercial Vehicle Insurance", url: "#commercial" },
      ],
    },
    {
      title: "OUR LOCATIONS",
      links: [
        { label: "Corporate Headquarters", url: "#hq" },
        { label: "Chicago, IL South Branch", url: "#chicago-south" },
        { label: "Berwyn Office Location", url: "#berwyn" },
        { label: "Melrose Park Facility", url: "#melrose-park" },
      ],
    },
    {
      title: "NEED ASSISTANCE?",
      links: [
        { label: "Easy Payment Options", url: "#payments" },
        { label: "Report an Active Claim", url: "#claims" },
        { label: "Frequently Asked Questions", url: "#faqs" },
        { label: "Corporate Contact Desk", url: "#corporate" },
      ],
    },
  ],
  rateCheck: {
    title: "INSTANT RATE CHECK",
    description: "Calculate your local premium instantly. Trusted across Illinois since 1988.",
    placeholder: "Enter Zip Code",
    buttonText: "GET RATE ESTIMATE",
  },
};

