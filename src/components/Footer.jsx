import React from "react";

const Footer = () => (
  <footer id="contacts" className="py-8 px-4 bg-gray-100 dark:bg-gray-900 text-center mt-12 border-t border-gray-200 dark:border-gray-800">
    <div className="max-w-3xl mx-auto flex flex-col gap-2 items-center">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
        alt="Контакты швейного производства"
        className="rounded-full w-20 h-20 object-cover mb-2 shadow"
        loading="lazy"
      />
      <div className="text-lg font-semibold">Связаться с нами</div>
      <div className="flex flex-col gap-1 justify-center mt-2 text-base">
        <span>SchoolTex, г. Бишкек, ул. Усенбаева, 106, ТЦ Берен Голд, цокольный этаж</span>
        <a href="tel:+996550997709" className="hover:text-blue-600 transition-colors">Тел.: +996 550 997 709</a>
        <a href="mailto:info@schooltex.kg" className="hover:text-blue-600 transition-colors">info@schooltex.kg</a>
        <a href="https://wa.me/79585832213" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">WhatsApp: +7 958 583 2213</a>
        <a href="https://t.me/mythical_god" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Telegram: @mythical_god</a>
      </div>
      <div className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} SchoolTex — фабрика школьной формы</div>
    </div>
  </footer>
);

export default Footer; 