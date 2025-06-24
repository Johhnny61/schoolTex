import React, { useState } from "react";

const navItems = [
  { id: "hero", label: "Главная" },
  { id: "advantages", label: "Преимущества" },
  { id: "catalog", label: "Каталог" },
  { id: "howtoorder", label: "Как заказать" },
  { id: "reviews", label: "Отзывы" },
  { id: "order", label: "Заказ" },
  { id: "contacts", label: "Контакты" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: scroll to top
      if (id === "hero") window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false); // Закрываем меню после клика
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-5 relative">
        <div className="font-bold text-lg tracking-tight">SchoolTex</div>

        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>

        {/* Navigation links */}
        <ul
          className={`
            ${menuOpen ? "flex" : "hidden"}
            absolute top-full left-0 w-full bg-white dark:bg-black sm:bg-transparent sm:dark:bg-transparent
            flex-col sm:flex-row items-center gap-4 py-4 sm:py-0 border-b sm:border-b-0 border-gray-200 dark:border-gray-800 sm:relative sm:flex sm:justify-end
          `}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="hover:text-blue-600 transition-colors py-2 sm:py-0 w-full block text-center"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 