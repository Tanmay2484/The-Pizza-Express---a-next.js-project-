"use client"
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode); // Save dark mode preference to local storage
  };
  return (
    <>
     <button
  onClick={toggleDarkMode}
  id="toggle"
  className={`relative inline-block w-12 h-6 rounded-full bg-gray-400 p-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
>
  <span
    className={`block w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
  ></span>
</button>

      <style jsx global>{`
        body {
          background-color: ${isDarkMode ? '#000000' : '#ffffff'};
          color: ${isDarkMode ? '#ffffff' : '#000000'};
        }
      `}</style>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500  mt-4 gap-4">
          <p>

Welcome to our online pizza ordering platform! We are passionate about delivering delicious pizzas straight to your doorstep. Our goal is to provide you with a seamless and convenient ordering experience, so you can enjoy your favorite pizzas without any hassle.

<br/>
Our journey began with a simple idea: to create a place where pizza lovers could easily order their favorite pies from the comfort of their homes. We started with a small kitchen, a dedicated team of chefs, and a commitment to quality ingredients and flavors.

Over the years, we have grown into a trusted name in the pizza delivery industry, serving thousands of customers every day. We take pride in offering a wide variety of pizzas, from classic favorites to unique creations, all made with the freshest ingredients and baked to perfection.

Why Choose Us?

Wide Selection: We offer a diverse menu with a variety of pizza options to suit every taste bud.
Quality Ingredients: We use only the finest and freshest ingredients in our pizzas to ensure the best taste.
Convenience: Our online ordering platform makes it easy to order your favorite pizzas from anywhere, at any time.
Speedy Delivery: We strive to deliver your pizzas hot and fresh to your doorstep in the shortest time possible.
Customer Satisfaction: Your satisfaction is our top priority, and we go above and beyond to ensure you have a great dining experience.
Our Mission

Our mission is to bring joy and satisfaction to our customers through our delicious pizzas and exceptional service. We are committed to constantly improving and innovating to exceed your expectations and create memorable dining experiences.

Contact Us

Have a question or feedback? We'd love to hear from you! Contact our customer service team at [email protected] or call us at 1-800-PIZZA-123.

Thank you for choosing us for your pizza cravings. We look forward to serving you soon!
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:9288726677">
          9288726677
          </a>
        </div>
      </section>
    </>
  )
}
