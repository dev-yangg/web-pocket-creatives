import {
  FaYoutube,
  FaVimeoV,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

export const applinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [{ label: "Blogs", href: "/blogs" }];

export const footerExtraLinks = [
  { label: "How we work", href: "/how-we-work" },
  { label: "Trainings", href: "/trainings" },
];

export const socials = [
  { label: "YouTube", href: "https://www.youtube.com", icon: FaYoutube },
  { label: "Vimeo", href: "https://vimeo.com", icon: FaVimeoV },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "Pinterest", href: "https://www.pinterest.com", icon: FaPinterestP },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "X", href: "https://x.com", icon: FaXTwitter },
  { label: "TikTok", href: "https://www.tiktok.com", icon: FaTiktok },
];

export const formPopupFields = [
  {
    name: "fullName",
    label: { base: "Full Name", breakpoint: "What's your name?" },
    placeholder: "Full Name",
    required: true,
  },
  {
    name: "contactNumber",
    label: { base: "Contact Number", breakpoint: "Your contact number?" },
    placeholder: "Contact Number",
    required: true,
  },
  {
    name: "email",
    label: { base: "Email Address", breakpoint: "Your email address?" },
    placeholder: "Email Address",
    required: true,
    type: "email",
  },
  {
    name: "message",
    label: { base: "Message", breakpoint: "How can we help?" },
    placeholder: "Message",
    required: true,
    type: "textarea",
  },
];
