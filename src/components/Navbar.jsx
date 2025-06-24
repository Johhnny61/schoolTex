import React from "react";

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
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: scroll to top
      if (id === "hero") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="font-bold text-lg tracking-tight">SchoolTex</div>
        <ul className="flex gap-4 sm:gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="hover:text-blue-600 transition-colors"
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