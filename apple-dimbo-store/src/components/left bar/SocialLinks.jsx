import React from "react";
const links = [
  { label: "Instagram", icon: "bxl-instagram", href: "#" },
  { label: "Whatsapp", icon: "bxl-whatsapp", href: "#" },
  { label: "Telegram", icon: "bxl-telegram", href: "#" },
  { label: "YouTube", icon: "bxl-youtube", href: "#" },
];
export const SocialLinks = () => (
  <div className="flex justify-between pr-6 pb-2 text-[#EC4899]">
    {links.map(({ label, icon, href }) => (
      <a key={label} href={href} aria-label={label}>
        <i className={`bx ${icon} text-2xl`} />
      </a>
    ))}
  </div>
);
