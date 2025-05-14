"use client";
import Image from "next/image";
import { Phone, UserCheck, Droplet, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-6 px-6 md:px-40 bg-[#fff] flex flex-col lg:flex-row items-center gap-10">
      <div className="relative w-full lg:w-[40%]">
        <Image src="/images/home3.webp" alt="Elderly Man Reading" width={500} height={500} className="object-cover " />
        <motion.div className=" flex gap-3 py-4 absolute bottom-0 left-0 bg-red-500 text-white px-3 shadow-lg"
        initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}>
          <h3 className="text-4xl text-center justify-center">2 +</h3>
          <p className="text-lg w-40">Years of Experience</p>
        </motion.div>
      </div>
      <motion.div className="lg:w-[60%] text-left"
      initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
        <h4 className="text-sm letter-spacing-2 tracking-normal leading-loose text-black uppercase">About Us</h4>
        <h2 className="text-5xl font-medium tracking-normal leading-snug text-red-500 mt-2">Safe And Independent Living</h2>
        <p className="mt-4 text-gray-600 text-sm">
          Welcome to Shield My Life, your comprehensive source of information on high-quality emergency devices. Our mission is to ensure you and your loved ones are prepared for any unexpected situation with reliable and innovative safety solutions. The alert system enables independent living by giving you quick, easy access to trained response specialists 24/7/365. The help button is reliable, easy to use, and waterproof, allowing it to be worn in the shower or tub where slips and falls are most common.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <UserCheck className="w-8 h-8 text-red-500" />
            <span className="text-md text-gray-500 tracking-normal leading-snug">Online Consultation</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-8 h-8 text-red-500" />
            <span className="text-md text-gray-500 tracking-normal leading-snug">24/7 Response</span>
          </div>
          <div className="flex items-center gap-3">
            <Droplet className="w-8 h-8 text-red-500" />
            <span className="text-md text-gray-500 tracking-normal leading-snug">Water Proof Devices</span>
          </div>
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-red-500" />
            <span className="text-md text-gray-500 tracking-normal leading-snug">Easy to Manage</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}