import React from "react";

const reviews = [
  {
    name: "Айгуль Токтосунова",
    city: "Бишкек",
    text: "Заказывали школьную форму для класса. Всё быстро, качественно, дети довольны! Спасибо SchoolTex!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Нурбек Исмаилов",
    city: "Ош",
    text: "Отличное качество и сервис. Доставили заказ в срок, рекомендую!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Елена Петрова",
    city: "Каракол",
    text: "Очень понравился индивидуальный подход и большой выбор моделей. Будем заказывать ещё!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Reviews = () => (
  <section id="reviews" className="py-16 px-4 max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Отзывы клиентов</h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {reviews.map((rev, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <img src={rev.avatar} alt={rev.name} className="w-16 h-16 rounded-full mb-3 object-cover" />
          <div className="font-semibold text-base mb-1">{rev.name}</div>
          <div className="text-xs text-gray-400 mb-2">{rev.city}</div>
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{rev.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Reviews; 