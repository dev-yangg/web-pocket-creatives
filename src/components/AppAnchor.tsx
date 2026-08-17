import logo from "../assets/logo.svg";

export default function AppAnchor({ className }: { className?: string }) {
  return (
    <a href="/" className={`${className ?? " "}`}>
      <img src={logo} alt="Web Pocket Creatives logo" />
    </a>
  );
}
