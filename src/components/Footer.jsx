import React from "react";

const Footer = () => (
  <footer id="contacts" className="py-12 px-4 bg-gray-100 dark:bg-gray-900 text-center mt-12 border-t border-gray-200 dark:border-gray-800">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">Связаться с нами</h2>
      <div className="flex flex-col gap-2 justify-center mt-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
        <span className="font-medium">SchoolTex</span>
        <span>г. Бишкек, ул. Усенбаева, 106, ТЦ Берен Голд, цокольный этаж</span>
        <a href="tel:+996550997709" className="hover:text-blue-600 transition-colors">Тел.: +996 550 997 709</a>
        <a href="mailto:info@schooltex.kg" className="hover:text-blue-600 transition-colors">info@schooltex.kg</a>
        <a href="https://wa.me/79585832213" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">WhatsApp: +7 958 583 2213</a>
        <a href="https://t.me/mythical_god" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Telegram: @mythical_god</a>
      </div>
      <div className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} SchoolTex — фабрика школьной формы</div>
    </div>
  </footer>
);

export default Footer;
