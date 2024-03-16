import { ArrowDownToLine, LockIcon, ShieldCheck } from "lucide-react";

export const PERKS_LISTS = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your inbox instantly after purchase.",
  },
  {
    name: "High-Quality Assets",
    icon: ShieldCheck,
    description:
      "Our assets are created by talented artists and are of the highest quality.",
  },
  {
    name: "Secure Payments",
    icon: LockIcon,
    description:
      "We use secure payment gateways to ensure that your transactions are safe.",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor Picks",
        href: "#",
        imageSrc: "https://source.unsplash.com/random/1",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "https://source.unsplash.com/random/2",
      },
      {
        name: "Bestsellers",
        href: "#",
        imageSrc: "https://source.unsplash.com/random/3",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Editor Picks",
        href: "#",
        imageSrc: "https://source.unsplash.com/random/4",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "https://source.unsplash.com/random/5",
      },
      {
        name: "Bestselling Icons",
        href: "#",
        imageSrc: "https://source.unsplash.com/random/6",
      },
    ],
  },
];
