import React from "react";

const services = [
  { icon: "🧵", title: "Пошив школьной формы", desc: "Индивидуальный и массовый пошив формы для учеников и учебных заведений.", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
  { icon: "👔", title: "Корпоративная одежда", desc: "Пошив одежды для персонала компаний, детских садов, кафе и других организаций.", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
  { icon: "✂️", title: "Индивидуальные заказы", desc: "Выполним любой индивидуальный заказ по вашим эскизам и пожеланиям.", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
];

const Services = () => (
  <section id="services" className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Наши услуги</h2>
    <div className="grid gap-8 sm:grid-cols-3">
      {services.map((srv, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <img src={srv.img} alt={srv.title} className="w-full h-32 object-cover rounded mb-4" loading="lazy" />
          <div className="text-4xl mb-2">{srv.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{srv.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">{srv.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 