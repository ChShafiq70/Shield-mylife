"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const MobileSystem = () => {
  return (
    <section className=" items-center justify-between  py-10 ">
      <div className="px-6 md:px-10 flex flex-col lg:flex-row gap-4 max-w-full mx-auto">
        <div className="lg:w-1/2 text-left py-10">
          <h1 className="text-5xl font-bold text-red-500 mb-4">
            Fall Detection
          </h1>
          <p className="text-gray-500 mb-6">
            Every 11 seconds, an older adult is treated in the emergency room
            for a fall. Falls are the leading cause of fatal injuries among
            seniors and the most common reason for non-fatal trauma. Unexpected
            emergencies can occur, which is why all Medical Alert systems offer
            optional fall detection. This feature automatically detects falls
            and quickly contacts help, even if you’re unable to press the
            button.
          </p>
        </div>

        <div className="lg:w-3/4 mt-6 lg:mt-0 flex justify-center">
          <Image
            src="/images/f1.webp"
            alt="Hero Image"
            width={700}
            height={400}
            className="object-cover border-3 border-red-500 rounded-2xl"
          />
        </div>
      </div>
      <section className=" py-20 w-full mt-20 flex relative">
        <div className="max-w-2xl text-start ml-1 md:ml-30">
          <h2 className="text-4xl  text-[#E74C3C] mb-3">
            No Long-Term Commitment
          </h2>
          <p className="text-gray-600 text-lg">
            Gain peace of mind with protection in all emergency and
            non-emergency situations, backed by a service with no hidden fees or
            long-term contracts.
          </p>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-full hidden lg:block">
          <Image
            src="/images/Frame.png"
            alt="Decorative pattern"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-16 px-10 flex flex-col lg:flex-row items-center gap-10">
      <div className="max-w-md">
      <h4 className="text-gray-500 text-sm font-semibold">How It Works</h4>
      <h2 className="text-3xl font-bold text-red-500 mt-2">How Does Fall Detection Work</h2>      
      <p className="text-gray-700 mt-4">
        If you are unable to press your button and the sensor technology detects a fall, trained response 
        specialists will immediately contact you through the system’s two-way speaker. Even if you cannot speak, 
        they will assess the situation and send the appropriate help.
      </p>
      <div className="mt-6 space-y-4">
        {[
          "The fall detection technology can automatically sense a fall.",
          "Response specialists contact you through a two-way speaker to assess your needs.",
          "If necessary, emergency help will be dispatched to your location."
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <FaCheckCircle className="text-red-500 text-xl mt-1" />
            <p className="text-gray-800">{item}</p>
          </div>
        ))}
      </div>
      </div>
        <div className="relative bg-white p-10">
          <div className="grid grid-cols-2   gap-1">
            <div className="col-span-2 relative">
              <div className="absolute top-0 py-10 left-0 border-r-20 border-white bg-red-600   text-white font-bold text-2xl flex flex-col items-center justify-center">
                <p className="mb-4">Your</p>
                <p className="mb-4">Safety</p>
                <p className="mb-4">is</p>
                <p>Priority</p>
              </div>
              <Image
                src="/images/h1.jpg"
                alt="Elderly couple"
                width={400}
                height={100}
                className=" w-full"
              />

              <div className="absolute bottom-0 left-0 border-r-20 border-t-10 border-white ">
                <Image
                  src="/images/f1.webp"
                  alt="Elderly couple in park"
                  width={150}
                  height={120}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MobileSystem;
