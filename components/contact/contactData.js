import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

export const contactDetails = [
  {
    id: 1,
    label: "Email",
    value: "uyuoukoh@gmail.com",
    href: "mailto:uyuoukoh@gmail.com",
    icon: FiMail,
  },
  {
    id: 2,
    label: "Phone",
    value: "+234 814 211 8703",
    href: "tel:+2348142118703",
    icon: FiPhone,
  },
  {
    id: 3,
    label: "Location",
    value: "Nigeria · Available worldwide",
    href: null,
    icon: FiMapPin,
  },
];

export const socialLinks = [
  {
    id: 1,
    label: "GitHub",
    href: "https://github.com/Felixx-jnr",
    icon: FiGithub,
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/uyuoukoh-udoh?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: FiLinkedin,
  },
  {
    id: 3,
    label: "X",
    href: "https://x.com/felixx_jnr",
    icon: FiTwitter,
  },
  {
    id: 4,
    label: "Instagram",
    href: "https://www.instagram.com/felixx_jnr/",
    icon: FiInstagram,
  },
];
