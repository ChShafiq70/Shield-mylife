"use client";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="py-12 px-10 md:px-10 bg-white">
        <div className="py-20 bg-white flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-left">
            <p className="text-gray-500 uppercase text-sm font-semibold">
              Get Your Alerts
            </p>
            <h2 className="text-4xl font-semibold text-red-500 mt-2">
              Contact Us And Get Updates
            </h2>
          </div>
          <div className="lg:w-1/2 h-full flex justify-end">
            <Link href="/contact-us">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300">
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Image
              src="/images/footer.webp"
              alt="Shield My Life Logo"
              width={120}
              height={50}
              className="w-30 mb-4"
            />
            <p className="text-gray-600 text-sm w-60">
              At ShieldMyLife, we prioritize accurate, timely, and relevant data
              to enhance medical billing outcomes. Trust in our commitment to
              informed solutions for your healthcare practice.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-500">Get In Touch</h3>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Bogner Drive, Dale
                City, Virginia
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />{" "}
                support@shieldmylife.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" /> 1-844-344-4666
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-500" /> 08:00 AM - 07:00 PM
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-500">Quicklinks</h3>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>
                <Link href="#" className="hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Home System
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Mobile System
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Fall Detection
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Smart Watches
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-500">Subscribe</h3>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                Send
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className=" text-gray-500 py-3 text-center">
        Copyright © 2025 ShieldMyLife
      </div>
    </>
  );
}
