"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import Catalog from "../components/Catalog";
import HowToOrder from "../components/HowToOrder";
import Reviews from "../components/Reviews";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";
import FabContacts from "../components/FabContacts";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Advantages />
        <Catalog />
        <HowToOrder />
        <Reviews />
        <OrderForm />
      </main>
      <Footer />
      <FabContacts />
    </div>
  );
}
