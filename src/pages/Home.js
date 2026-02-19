import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-black dark:text-white transition-all duration-500">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Premium Belgian Waffles.
            <br />
            Crafted with Passion.
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Experience crispy perfection, rich toppings and handcrafted shakes
            in a premium café ambience.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300 shadow-lg">
              Explore Menu
            </button>

            <button className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300">
              Order Online
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
            alt="Waffle"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>


      {/* BEST SELLERS */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-center mb-16"
          >
            Customer Favorites
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            
            {[
              {
                name: "Nutella Supreme",
                price: "₹199",
                desc: "Rich Nutella, Belgian chocolate drizzle."
              },
              {
                name: "Strawberry Bliss",
                price: "₹229",
                desc: "Fresh strawberries with whipped cream."
              },
              {
                name: "Oreo Crunch",
                price: "₹239",
                desc: "Oreo crumble & vanilla scoop."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-orange-500 mt-2 font-medium">
                  {item.price}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-3">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* TESTIMONIAL */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-8">
            Loved by 1000+ Customers
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            “The best waffle café experience in Mumbai. Clean space,
            amazing flavors and premium quality.”
          </p>

          <div className="mt-6 text-orange-500 text-xl">
            ★★★★★
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;