
export interface FAQItem{
    question: string;
    answer: string;
}

export interface Article {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    slug: string;
    content: string[];
    faqs: FAQItem[];
}

export interface Location {
    id: number;
    name: string;
    address: string;
    phone: string;
    hours?: string;
    city?: string;
}

export interface ContactDetail {
    title: string;
    schedule: string[];
}

export interface PromoItem{
    text: string;
    isBold?: boolean;
}

export interface ContactData {
  title: string;
  description: string;
  phoneNumber: string;
  locationFinderText: string;
  departments: ContactDetail[];
  promoTitle: string;
  promoDetails: PromoItem[];
  careersText: string;
  careersLinkText: string;
  images: {
    sideAgent: string;
    bottomGroup: string;
  };
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterCategory {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  categories: FooterCategory[];
  rateCheck: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
}

export interface BreadcrumbItem {
    label: string;
    url?: string;
}

export interface PageBannerProps {
    title:string;
    description?: string;
    breadcrumbs:BreadcrumbItem[];
    children?: React.ReactNode;
    paddingY?: string;
    marginY?: string;
    maxContainerWidth?: string;
}
