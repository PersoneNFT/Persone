interface SocialItem {
  icon: string;
}

const socialItems: SocialItem[] = [
  { icon: "fab fa-twitter" },
  { icon: "fab fa-telegram-plane" },
  { icon: "icon-fl-vt" },
];

export default function Social() {
  return (
    <>
      {socialItems.map((item, index) => (
        <li key={index}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={item.icon} />
          </a>
        </li>
      ))}
    </>
  );
}
