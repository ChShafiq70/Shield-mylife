"use client";
import { ShieldCheck, Leaf, Users, HouseIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Safety() {
  return (
    <section className="md:py-30 p-10 px-6 md:px-20 bg-[#F6F6F6]">
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6"
       initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
        <div className="group bg-white p-10  shadow-md text-center flex flex-col items-center transition duration-300 hover:bg-red-500 hover:text-white">
          <HouseIcon className="w-12 h-12 text-red-500 transition duration-300 group-hover:text-white" />
          <h3 className="mt-4 text-xl leading-relaxed font-medium  group-hover:text-white">Prioritize your safety</h3>
          <p className="text-gray-600 py-2 text-sm group-hover:text-white">
            Choose your alert system carefully. Start by searching for a medical alert system according to your requirements.
          </p>
        </div>        
        <div className="group bg-white p-10 shadow-md text-center flex flex-col items-center transition duration-300 hover:bg-red-500 hover:text-white">
          <Leaf className="w-12 h-12 text-red-500 transition duration-300 group-hover:text-white" />
          <h3 className="mt-4 text-xl leading-relaxed font-medium group-hover:text-white">Setup that fits your lifestyle</h3>
          <p className="text-gray-600 py-2 text-sm group-hover:text-white">
            A range of systems are available to choose from. Personalized response plan to contact the right person when needed.
          </p>
        </div>
        <div className="group bg-white p-10 shadow-md text-center flex flex-col items-center transition duration-300 hover:bg-red-500 hover:text-white">
          <Users className="w-12 h-12 text-red-500 transition duration-300 group-hover:text-white" />
          <h3 className="mt-4 text-xl leading-relaxed font-medium group-hover:text-white">Stay Connected</h3>
          <p className="text-gray-600 py-2 text-sm group-hover:text-white">
            All-time connectivity with our medical alert systems. They are reliable and keep your loved ones informed of emergencies.
          </p>
        </div>
      </motion.div>
    </section>
  );
}