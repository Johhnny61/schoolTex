import React from "react";

const steps = [
  { icon: "📝", title: "Оставьте заявку", desc: "Заполните форму обратной связи на сайте или свяжитесь с нами по телефону/мессенджерам." },
  { icon: "📞", title: "Консультация и прайс", desc: "Менеджер свяжется с вами, уточнит детали и отправит прайс-лист." },
  { icon: "🧵", title: "Согласование заказа", desc: "Обсудим детали, сроки и условия. Подтвердим заказ." },
  { icon: "🚚", title: "Получите форму", desc: "Мы отшиваем и доставляем заказ в ваш город или регион." },
];

const HowToOrder = () => (
  <section id="howtoorder" className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Как заказать</h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <div className="text-4xl mb-2">{step.icon}</div>
          <h3 className="font-semibold text-base mb-1 text-center">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowToOrder; 