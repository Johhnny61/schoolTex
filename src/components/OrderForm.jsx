import React, { useState } from "react";
import sendTelegramOrder from "../utils/telegram";

const initialState = { name: "", phone: "", details: "" };

const OrderForm = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Пожалуйста, заполните обязательные поля.");
      return;
    }
    setLoading(true);
    try {
      await sendTelegramOrder(form);
      setForm(initialState);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Ошибка отправки. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-16 px-4 max-w-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Заказ</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white dark:bg-gray-900 rounded-xl shadow p-6">
        <input
          type="text"
          name="name"
          placeholder="Имя*"
          value={form.name}
          onChange={handleChange}
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон*"
          value={form.phone}
          onChange={handleChange}
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="details"
          placeholder="Детали заказа (необязательно)"
          value={form.details}
          onChange={handleChange}
          className="border rounded px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow transition-colors disabled:opacity-60"
        >
          {loading ? "Отправка..." : "Отправить заказ"}
        </button>
        {success && <div className="text-green-600 text-center">Успешно отправлено!</div>}
        {error && <div className="text-red-600 text-center">{error}</div>}
      </form>
    </section>
  );
};

export default OrderForm; 