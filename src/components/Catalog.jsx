import React from "react";

const products = [
  { name: "Сарафан для девочек С-03", price: "от 1660 сом", img: "https://images.unsplash.com/photo-1542846939-f9c9b4e132c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwxNXx8c2Nob29sJTIwdW5pZm9ybXxlbnwwfHx8fDE3MjAxNTUzNTd8MA&ixlib=rb-4.0.3&q=80&w=400" },
  { name: "Сарафан для девочек С-04", price: "от 1550 сом", img: "https://images.unsplash.com/photo-1628108523314-5d5d8c3f7b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwxNnx8c2Nob29sJTIwdW5pZm9ybXxlbnwwfHx8fDE3MjAxNTUzNTd8MA&ixlib=rb-4.0.3&q=80&w=400" },
  { name: "Жилет для мальчиков Жл-01", price: "от 1170 сом", img: "https://images.unsplash.com/photo-1596700755530-07e0c4f8d9c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwyM3x8c2Nob29sJTIwdW5pZm9ybXxlbnwwfHx8fDE3MjAxNTU0Njh8MA&ixlib=rb-4.0.3&q=80&w=400" },
  { name: "Юбка для девочек Ю-04", price: "от 990 сом", img: "https://images.unsplash.com/photo-1582299878201-925232d3f3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwyMHx8c2Nob29sJTIwdW5pZm9ybXxlbnwwfHx8fDE3MjAxNTU0Njh8MA&ixlib=rb-4.0.3&q=80&w=400" },
  { name: "Брюки для мальчиков Б-08", price: "от 1200 сом", img: "https://images.unsplash.com/photo-1596700755530-07e0c4f8d9c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwyM3x8c2Nob29sJTIwdW5pZm9ybXxlbnwwfHx8fDE3MjAxNTU0Njh8MA&ixlib=rb-4.0.3&q=80&w=400" },
  { name: "Пиджак для мальчиков", price: "от 2500 сом", img: "https://images.unsplash.com/photo-1596700755530-07e0c4f8d9c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwyM3x8c2Nob29sJTIwdW5pZm9ybXxlbnwwfHx8fDE3MjAxNTU0Njh8MA&ixlib=rb-4.0.3&q=80&w=400" },
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
            <img src={prod.img} alt={prod.name} className="w-full aspect-[9/16] object-cover rounded mb-4" loading="lazy" />
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