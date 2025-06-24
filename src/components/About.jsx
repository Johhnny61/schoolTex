import React from "react";

const About = () => (
  <section id="about" className="py-16 px-4 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      alt="Швейное производство"
      className="rounded-xl shadow w-full max-w-md object-cover mb-4"
      loading="lazy"
    />
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">О нас</h2>
    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
      Наша компания — это современное швейное производство, специализирующееся на пошиве школьной формы и корпоративной одежды. Мы гарантируем высокое качество, индивидуальный подход и выполнение заказов в срок. Работаем как с частными клиентами, так и с организациями.
    </p>
  </section>
);

export default About; 