import { Article, Location, ContactData, FooterData } from "../types";

export const mockArticlesDatabase: Article[] = [
  {
    id: 5,
    title: "Praesent bibendum nisi in vestibulum lacinia",
    date: "Aug 5, 2020",
    category: "Lorem ipsum dolor: consectetur",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nibh ut lobortis tincidunt",
    slug: "praesent-bibendum-nisi",
    content: [
      "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nibh ut lobortis tincidunt. Praesent bibendum nisi in vestibulum lacinia. Phasellus vel ullamcorper magna, id gravida nibh. Quisque elit justo, blandit et nulla ut, mollis sollicitudin tellus. Pellentesque luctus arcu in ipsum blandit, ac sodales purus faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse eu malesuada ligula. Donec lacinia ante tellus.",
      "2. Nunc nec ipsum tellus. Sed dapibus tortor id mauris interdum sagittis. Morbi mollis odio vel ex scelerisque, at pellentesque sem pharetra. Sed et felis fringilla, ullamcorper nisi id, malesuada diam. Donec vehicula imperdiet tellus. Sed rutrum nulla at libero ultrices scelerisque. Integer elit massa, placerat nec diam ut, ornare mattis ex.",
      "3. Aliquam gravida convallis elit non consectetur. Duis lectus metus, tristique quis egestas non, dapibus bibendum lacus. Maecenas sollicitudin ligula vitae quam lacinia, condimentum cursus sapien ultricies. Phasellus euismod bibendum tellus quis euismod. Pellentesque pellentesque varius ipsum, eget pharetra mauris sodales ut. Pellentesque euismod augue lorem, efficitur lacinia lacus cursus eu.",
      "4. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis mattis scelerisque nisl ac malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "5. Ut faucibus augue ex. Proin consequat porta pretium. Donec rhoncus leo ac sem tempus, vel placerat lectus ornare. Sed quis enim vehicula, convallis risus aliquam, iaculis leo."
    ],
    faqs: [
      {
        question: "Aliquam gravida convallis elit non consectetur?",
        answer: "Phasellus euismod bibendum tellus quis euismod. Pellentesque pellentesque varius ipsum, eget pharetra mauris sodales ut"
      },
      {
        question: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas?",
        answer: "Duis mattis scelerisque nisl ac malesuada."
      }
    ]
  },
  {
    id: 4,
    title: "Aliquam porta purus a bibendum vehicula?",
    date: "Aug 4, 2020",
    category: "Donec lacinia",
    excerpt: "Donec lacinia eros in efficitur maximus. Cras suscipit libero sit amet enim iaculis commodo. Nulla ultrices venenatis mi a condimentum.",
    slug: "donec-lacinia-eros-in",
    content: [
      "1. Donec mi diam, dapibus tincidunt congue ac, finibus vel tortor. Praesent quam quam, dictum iaculis feugiat et, vehicula non quam.",
      "2. Nulla ut leo nec eros scelerisque iaculis at in arcu. Vestibulum at elementum ex.",
      "3. Proin nisl augue, ullamcorper eget congue eget, varius quis metus. Vestibulum venenatis vehicula ex, vitae commodo nibh imperdiet eu.",
      "4. Pellentesque tristique rhoncus ultricies. Maecenas vestibulum mauris nisl, sed porta libero lacinia non.",
      "5. Nam ultrices vestibulum suscipit. Aenean nulla nunc, blandit vel tincidunt vitae, elementum nec tellus."
    ],
    faqs: [
      {
        question: "Duis sed tortor aliquet, hendrerit nulla sit amet?",
        answer: "Euismod ex. Sed ante quam, bibendum vel porttitor eu, pretium id neque."
      },
      {
        question: "Aliquam tempor nunc nisi, vitae aliquet sapien auctor vel.",
        answer: "Nulla ut leo nec eros scelerisque iaculis at in arcu. Vestibulum at elementum ex."
      }
    ]
  },
  {
    id: 3,
    title: "Aliquam gravida convallis elit non consectetur",
    date: "Aug 3, 2020",
    category: "Praesent",
    excerpt: "Phasellus vel ullamcorper magna, id gravida nibh",
    slug: "aliquam-gravida-convallis-elot-non",
    content: [
      "1. Nunc nec ipsum tellus. Sed dapibus tortor id mauris interdum sagittis",
      "2. Morbi mollis odio vel ex scelerisque, at pellentesque sem pharetra. Sed et felis fringilla, ullamcorper nisi id, malesuada diam.",
      "3. Donec vehicula imperdiet tellus. Sed rutrum nulla at libero ultrices scelerisque. Integer elit massa, placerat nec diam ut, ornare mattis ex.",
      "4. Aliquam gravida convallis elit non consectetur. Duis lectus metus, tristique quis egestas non, dapibus bibendum lacus.",
      "5. Maecenas sollicitudin ligula vitae quam lacinia, condimentum cursus sapien ultricies. Phasellus euismod bibendum tellus quis euismod."
    ],
    faqs: [
      {
        question: "Pellentesque pellentesque varius ipsum, eget pharetra mauris sodales ut?",
        answer: "Pellentesque euismod augue lorem, efficitur lacinia lacus cursus eu."
      },
      {
        question: "Duis mattis scelerisque nisl ac malesuada.",
        answer: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas?"
      }
    ]
  },
  {
    id: 2,
    title: "Ut faucibus augue ex",
    date: "Aug 2, 2020",
    category: "Proin consequat",
    excerpt: "Donec rhoncus leo ac sem tempus, vel placerat lectus ornare. Sed quis enim vehicula, convallis risus aliquam, iaculis leo.",
    slug: "ut-faucibus-augue-ex",
    content: [
      "1. In sit amet nibh quis mi aliquet fringilla id vel tellus. Vivamus in turpis varius, sollicitudin dolor ac, vestibulum odio. ",
      "2. Donec auctor tristique risus, eu ultrices justo tristique at. Vivamus nec placerat sapien, vel condimentum enim. In eget velit eu dui efficitur eleifend vitae a lorem.",
      "3. Aliquam porta purus a bibendum vehicula. Donec lacinia eros in efficitur maximus. Cras suscipit libero sit amet enim iaculis commodo. Nulla ultrices venenatis mi a condimentum.",
      "4. Donec mi diam, dapibus tincidunt congue ac, finibus vel tortor. Praesent quam quam, dictum iaculis feugiat et, vehicula non quam. Nulla ut leo nec eros scelerisque iaculis at in arcu. Vestibulum at elementum ex.",
      "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nibh ut lobortis tincidunt. Praesent bibendum nisi in vestibulum lacinia. Phasellus vel ullamcorper magna, id gravida nibh."
    ],
    faqs: [
      {
        question: "Nam ultrices vestibulum suscipit?",
        answer: "Aenean nulla nunc, blandit vel tincidunt vitae, elementum nec tellus. Duis sed tortor aliquet."
      },
      {
        question: "Hendrerit nulla sit amet, euismod ex",
        answer: "Sed ante quam, bibendum vel porttitor eu, pretium id neque."
      },
      {
        question: "Aliquam tempor nunc nisi, vitae aliquet sapien auctor vel?",
        answer: "Pellentesque luctus arcu in ipsum blandit, ac sodales purus faucibus."
      }
    ]
  },
];

export const mockLocationsDatabase: Location[] = [
  {
      id: 1,
      name: "Location Alpha",
      address: "123 Lorem Ipsum St, Dolor City, ST 12345, United States",
      phone: "(123) 456-7890",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      city: "Alpha"
  },
  {
      id: 2,
      name: "Location Beta",
      address: "456 Consectetur Rd, Adipiscing Town, ST 67890, United States",
      phone: "(123) 456-7891",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      city: "Beta"
  },
  {
      id: 3,
      name: "Location Gamma",
      address: "789 Eiusmod Ave, Tempor Village, ST 11223, United States",
      phone: "(123) 456-7892",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      city: "Gamma"
  },
  {
      id: 4,
      name: "Location Delta",
      address: "101 Incididunt St, Labore City, ST 44556, United States",
      phone: "(123) 456-7893",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      city: "Delta"
  }
];

export const mockContactDatabase: ContactData = {
  title: "Pellentesque",
  description: "Call us at 123-456-7890 or try our Location Finder to find the Lorem Ipsum branch nearest you!",
  phoneNumber: "123-456-7890",
  locationFinderText: "Location Finder",
  departments: [
    {
      title: "Proin consequat",
      schedule: ["Monday- Friday 8am-8pm", "Saturday 8am-5pm"],
    },
    {
      title: "Pellentesque",
      schedule: ["Monday- Friday 8am-8:30pm", "Saturday 8am-5:30pm"],
    },
  ],
  promoTitle: "Action Button »",
  promoDetails: [
    { text: "Lorem Ipsum Dolor Sit Amet", isBold: true },
    { text: "Consectetur Adipiscing Elit" },
    { text: "Sed Do Eiusmod Tempor Incididunt" },
    { text: "Ut Labore Et Dolore Magna" },
  ],
  careersText: "Aliquam porta purus a bibendum vehicula, Donec lacinia eros in efficitur maximus.",
  careersLinkText: "Donec rhoncus leo ac sem tempus!",
  images: {
    sideAgent: "/images/agent-side.png",
    bottomGroup: "/images/group-banner.png",
  },
};

export const footerData: FooterData = {
  categories: [
    {
      title: "Vestibulum",
      links: [
        { label: "Feature One", url: "#feat1" },
        { label: "Feature Two", url: "#feat2" },
        { label: "Feature Three", url: "#feat3" },
        { label: "Feature Four", url: "#feat4" },
      ],
    },
    {
      title: "Aliquam",
      links: [
        { label: "Main Headquarter", url: "#mhq" },
        { label: "Location Alpha", url: "#locA" },
        { label: "Location Beta", url: "#locB" },
        { label: "Location Gamma", url: "#locG" },
      ],
    },
    {
      title: "Consectetur",
      links: [
        { label: "Support Center", url: "#support" },
        { label: "Documentation", url: "#docs" },
        { label: "FAQ", url: "#faqs" },
        { label: "Contact Support", url: "#contact" },
      ],
    },
  ],
  rateCheck: {
    title: "SUBSCRIBE NOW",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    placeholder: "Enter Email Address",
    buttonText: "Action Button",
  },
};

