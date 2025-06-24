import React from "react";

const advantages = [
  { icon: "🏭", title: "Собственное производство", desc: "Весь цикл пошива — на нашей фабрике в Кыргызстане." },
  { icon: "🧵", title: "Сертифицированные ткани", desc: "Используем только качественные и безопасные материалы." },
  { icon: "🚚", title: "Доставка по Кыргызстану и СНГ", desc: "Оперативно отправляем заказы в любой регион." },
  { icon: "👗", title: "Более 50 моделей", desc: "Широкий ассортимент школьной формы и аксессуаров." },
  { icon: "🤝", title: "Персональный менеджер", desc: "Индивидуальное сопровождение каждого клиента." },
];

const Advantages = () => (
  <section id="advantages" className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Почему выбирают SchoolTex?</h2>
    <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-5">
      {advantages.map((adv, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <div className="text-4xl mb-2">{adv.icon}</div>
          <h3 className="font-semibold text-base mb-1 text-center">{adv.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{adv.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages; 