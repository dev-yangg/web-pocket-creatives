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
  { label: "Photography", href: "/photography" },
  { label: "Videography", href: "/videography" },
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

export const baseContactFormFields = [
  {
    name: "fullName",
    label: { base: "Full Name", breakpoint: "What's your name?" },
    placeholder: "Full Name",
    required: true,
  },
  {
    name: "contactNumber",
    label: { base: "Contact", breakpoint: "Your contact number?" },
    placeholder: "Contact Number",
    required: true,
  },
  {
    name: "email",
    label: { base: "Email", breakpoint: "Your email address?" },
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

export const contactInfo = {
  companyName: "Pocket Creatives",
  email: "team@pocketcreatives.co.uk",
  address: {
    text: "Wow Workspaces Battersea, Unit 3, 7-9 Ingate Place, Battersea, London SW8 3NS",
    mapHref:
      "https://www.google.com/maps/@51.474706,-0.1456135,3a,90y,150.58h,90.26t/data=!3m7!1e1!3m5!1s0OQWGxEl7_F3Ig2ROdBLfQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.2560872843961022%26panoid%3D0OQWGxEl7_F3Ig2ROdBLfQ%26yaw%3D150.57895195361183!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.8250709344568!2d-0.14601204778609078!3d51.47465275977989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cba927b96d3%3A0xc609e25096588735!2sPocket%20Creatives%20Video%20Production%20and%20Photography!5e0!3m2!1sen!2sph!4v1790250323369!5m2!1sen!2sph",
  },
  tel: {
    display: "020 3633 8494",
    href: "+02036338494",
  },
};
