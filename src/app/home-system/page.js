"use client";
import React from "react";
import Image from "next/image";
import {
  Umbrella,
  SmartphoneCharging,
  ArrowBigRightDash,
  RadioTower,
  MessageCircle,
  Search,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaMobileAlt, FaDotCircle } from "react-icons/fa";
import Link from "next/link";

const testimonials = [
  {
    name: "Clark",
    review:
      "I needed a home detection system for my parents' safety. This website helped me to choose the one according to my requirements. Recommended to visit this website before choosing the medical alert system.",
  },
  {
    name: "Thomas",
    review:
      "I’m so happy to find such a reliable home medical alert system. This website has all the information you need. Recommended to visit this website before choosing the medical alert system.",
  },
  {
    name: "Megan",
    review:
      "My friend recommended me to contact Shieldmylife to get information about the medical alert system. They have a quick service, responded on time, and provided me with all the information I needed.",
  },
  {
    name: "Emily Johnson",
    review:
      "Finding a trustworthy medical alert system was challenging until I found this one. The website provides clear, detailed information, making it easy to choose the right system for my loved ones.",
  },
  {
    name: "Michael Brown",
    review:
      "This medical alert system has given my family peace of mind. Packed with all the necessary details to make an informed decision. Definitely worth checking out before making a choice!",
  },
];

const HomeSystem = () => {
  return (
    <section className=" items-center justify-between  py-10 ">
      <div className="px-6 md:px-10 flex flex-col lg:flex-row gap-4 max-w-full mx-auto">
        <div className="lg:w-1/2 text-left py-10">
          <h1 className="text-5xl font-bold text-red-500 mb-4">Home System</h1>
          <p className="text-gray-500 mb-6">
            The Medical Alert Home System supports independent living by
            providing round-the-clock access to trained response specialists.
            The help button is dependable, user-friendly, and waterproof, making
            it suitable for wearing in the shower or tub, where slips and falls
            are most likely.
          </p>
          <h1 className="uppercase font-bold pb-4 text-2xl ">Choose Your Connectivity</h1>
          <div className="flex space-x-4">
          
            <Link href="/cellular-system"><button className="bg-[#E74C3C] text-white px-8 py-3 ">
              Cellular
            </button>
            </Link>
          <Link href="/landline-system">
            <button className="bg-[#E74C3C] text-white px-8 py-3  ">
              Landline
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-3/4 mt-6 lg:mt-0 flex justify-center">
          <Image
            src="/images/h1.jpg"
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
            width={300}
            height={300}
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-xl">Why Choose Us</h2>
          <h3 className="text-4xl text-red-600 mt-2">Features</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/3 flex justify-center">
            <Image
              src="/images/mf1.webp"
              alt="Elderly couple embracing"
              width={300}
              height={300}
              className="w-full max-w-sm rounded-lg border-4 border-red-500 shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 px-2">
            {[
              {
                icon: <ArrowBigRightDash className="text-gray-500 text-7xl hover:text-red-500" />,
                title: "Easy Setup and Use",
                desc: "Just plug the base unit into a power outlet and wear your help button at all times. Press the button to call for help anytime, 24/7/365. ",
              },
              {
                icon: <RadioTower className="text-gray-500 text-6xl hover:text-red-500" />,
                title: "800-Foot Range",
                desc: "Medical Alert’s help buttons have an 800-foot range, covering your entire home—that’s equivalent to more than two and a half football fields.",
              },
              {
                icon: <Search className="text-gray-500 text-6xl hover:text-red-500" />,
                title: "Optional Fall Detection",
                desc: "The Home System can be paired with a fall detection button that automatically detects when you fall and alerts a response specialist.",
              },
              {
                icon: <MessageCircle className="text-gray-500 text-6xl hover:text-red-500" />,
                title: "Two-Way Communication",
                desc: "The system includes a built-in two-way speaker for direct communication. Help will be send even if you’re unable to respond.",
              },
              {
                icon: <Umbrella className="text-gray-500 text-6xl hover:text-red-500" />,
                title: "Fall Detection",
                desc: "Sensors to automatically detect falls and trigger alerts. Sends notifications to response teams or designated contacts if a fall is detected.",
              },
              {
                icon: <SmartphoneCharging className="text-gray-500 text-6xl hover:text-red-500" />,
                title: "Waterproof",
                desc: "Designed to be worn while swimming or in the shower, ensuring it’s functional in various conditions.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-2"
              >
                <div className="w-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className=" text-2xl">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center py-12 bg-gray-100">
        <h4 className="text-gray-500 text-sm">What You wll Get</h4>
        <h2 className="text-3xl font-bold text-red-500 my-2">
          What is Included
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
          <div className="flex flex-col items-center text-center max-w-sm">
            <FaMobileAlt className="text-red-500 text-4xl mb-2 border-2 border-red-500 rounded-full p-2" />
            <h3 className="text-lg font-semibold">CUSTOM ALERTS</h3>
            <p className="text-gray-600 text-sm mt-2">
              Set up alerts for specific health metrics or activity levels.
              Provides notifications for abnormal readings or potential issues.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-sm">
            <FaDotCircle className="text-red-500 text-4xl mb-2 border-2 border-red-500 rounded-full p-2" />
            <h3 className="text-lg font-semibold">EMERGENCY CONTACTS</h3>
            <p className="text-gray-600 text-sm mt-2">
              Pre-set list of contacts that are notified in case of an
              emergency. It allows the wearer to customize who receives alerts.
            </p>
          </div>
        </div>
      </section>
      <section className=" px-6 md:px-30 bg-[#F6F6F6] py-20 text-center mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="border-2 justify-self-start text-start border-red-500 p-20 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-red-500 mb-10">01</h2>
            <h3 className=" text-2xl font-medium">Press Your Help Button</h3>
            <p className="text-gray-600 mt-4">
              Press the help button on your pendant or bracelet, which you
              should wear at all times.
            </p>
          </div>
          <div className="border-2 justify-self-start text-start border-red-500 p-20 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-red-500 mb-10">02</h2>
            <h3 className=" text-2xl font-medium">
              Talk to a Response Specialist
            </h3>
            <p className="text-gray-600 mt-4">
              Shieldmylife highly trained response specialists are available
              24/7/365 to assist you.
            </p>
          </div>
          <div className="border-2 justify-self-start text-start border-red-500 p-20 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-red-500 mb-10">03</h2>
            <h3 className=" text-2xl font-medium">Get the Right Help</h3>
            <p className="text-gray-600 mt-4">
              The specialists evaluate your situation and contact the most
              appropriate emergency person, whether it’s a family member,
              friend, neighbor, or first responder.
            </p>
          </div>
        </div>
      </section>
      <section
        className="text-center py-16 bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('/images/feedback.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <h4 className="text-white text-md">Reviews</h4>
        <h2 className="text-3xl font-bold text-[#e74c3c] my-2">
          Our Satisfied Customers
        </h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-6 px-6 max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <p className="text-gray-700 italic">&quot; {testimonial.review} &quot;</p>
                <h3 className="text-lg font-semibold mt-4 text-gray-900 text-right">
                  - {testimonial.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default HomeSystem;
