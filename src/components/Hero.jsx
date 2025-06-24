import React from "react";

const bgUrl = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"; // пример фото швейного производства

const Hero = () => {
  const handleOrderClick = () => {
    const el = document.getElementById("order");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 pt-24 pb-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url('${bgUrl}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white drop-shadow-lg">
          Современные решения для швейного производства
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl drop-shadow">
          Мы специализируемся на пошиве качественной школьной формы и корпоративной одежды на заказ. Надёжность, стиль и индивидуальный подход для каждого клиента.
        </p>
        <button
          onClick={handleOrderClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors"
        >
          Сделать заказ
        </button>
      </div>
    </section>
  );
};

export default Hero; 