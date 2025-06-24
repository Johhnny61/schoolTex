import React from "react";

const products = [
  { name: "Сарафан для девочек С-03", price: "от 1660 сом", img: "https://i.ibb.co/DDDhNyGQ/image.png" },
  { name: "Сарафан для девочек С-04", price: "от 1550 сом", img: "https://i.ibb.co/q3k0M0wh/image.png" },
  { name: "Жилет для мальчиков Жл-01", price: "от 1170 сом", img: "https://i.ibb.co/k6BXNF4H/image.png" },
  { name: "Юбка для девочек Ю-04", price: "от 990 сом", img: "https://i.ibb.co/4n2241N2/image.png" },
  { name: "Брюки для мальчиков Б-08", price: "от 1200 сом", img: "https://i.ibb.co/Lz2d7Fp7/image.png" },
  { name: "Пиджак для мальчиков", price: "от 2500 сом", img: "https://i.ibb.co/S7yZ19S0/image.png" },
];

const Catalog = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById("order");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="catalog" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Каталог продукции</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((prod, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6">
            <div className="w-full aspect-[3/4] relative mb-4">
              <img src={prod.img} alt={prod.name} className="absolute inset-0 w-full h-full object-cover rounded" loading="lazy" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center">{prod.name}</h3>
            <div className="text-blue-700 dark:text-blue-300 font-bold mb-2">{prod.price}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href="#order" onClick={handleScroll} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors">Получить полный каталог</a>
      </div>
    </section>
  );
};

export default Catalog; 