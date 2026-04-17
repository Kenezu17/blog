import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const linkClass = (section) =>
    active === section
      ? "font-bold underline decoration-yellow-400 underline-offset-7"
      : "hover:opacity-80 transition";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "blog", "about", "contact"];

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0  w-full backdrop-blur bg-white/30 z-50 flex items-center px-6 h-14">

      {/* Logo */}
      <span className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 font-bold text-red-600 text-lg shrink-0">
        Pil<span className="text-blue-500">ipi</span>
        <span className="text-yellow-400">nas</span>
      </span>

      {/* Desktop */}
      <ul className="hidden  text-red-600 md:flex gap-10 absolute left-1/2 -translate-x-1/2">
        <li><a href="#home" className={linkClass("home")}>Home</a></li>
        <li><a href="#blog" className={linkClass("blog")}>Blog</a></li>
        <li><a href="#about" className={linkClass("about")}>About</a></li>
        <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
      </ul>

      {/* Mobile button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden ml-auto text-2xl"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-full right-0 bg-red-600 text-white flex flex-col gap-3 p-4 rounded-bl-xl">
          <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
          <li><a onClick={() => setOpen(false)} href="#blog">Blog</a></li>
          <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
        </ul>
      )}

    </nav>
  );
}