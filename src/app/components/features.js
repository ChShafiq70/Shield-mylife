"use client";
import Image from "next/image";
import { Bell,  Umbrella, Database, CircleAlert , TimerReset, Smartphone} from "lucide-react";

export default function Feature() {
  return (
    <section className="py-6 px-6 md:px-30 bg-[#f6f6f6] text-center">
      <h3 className="text-black text-sm p-3">Why Choose Shieldmylife</h3>
      <h2 className="text-3xl md:text-4xl  text-[#E74C3C] mt-2">Help At The Press Of A Button</h2>
      <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-start">
        <div className="lg:w-[40%] flex justify-center">
          <div className="border-2 border-red-500  overflow-hidden rounded-3xl">
            <Image src="/images/home3.webp" alt="Elderly Couple" width={300} height={200} className="object-cover " />
          </div>
        </div>
        <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-10 text-left py-8 md:py-0">
          <div className="flex items-start gap-2">
            <Bell className="w-40 h-10 text-gray-600" />
            <div className="flex flex-col gap-2" >
              <h3 className="text-xl uppercase">Personalized responce plan</h3>
              <p className="text-gray-600 text-sm">Immediate response at the press of a button. The right person will be immediately contacted to provide you with the help you require.</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Umbrella className="w-40 h-10 text-gray-600" />
            <div className="flex flex-col gap-2" >
              <h3 className="text-xl uppercase">waterproof help buttons</h3>
              <p className="text-gray-600 text-sm">These devices are waterproof and come in handy. You can wear them or install them at any place in your home including.</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <TimerReset className="w-30 h-15 text-gray-600" />
            <div className="flex flex-col gap-2" >
              <h3 className="text-xl uppercase">24/7/365 RESPONSE</h3>
              <p className="text-gray-600 text-sm">Trained specialists are all time available to provide you with the assistance you need.</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CircleAlert className="w-40 h-10 text-gray-600" />
            <div className="flex flex-col gap-2" >
              <h3 className="text-xl uppercase">FALL DETECTION</h3>
              <p className="text-gray-600 text-sm">Add fall detection to automatically detect when you fall and quickly contact help, even if you are unable to press the button.</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Smartphone className="w-40 h-10 text-gray-600" />
            <div className="flex flex-col gap-2" >
              <h3 className="text-xl uppercase">MOBILE APP</h3>
              <p className="text-gray-600 text-sm">The Medical Alert Connect app makes it simple to manage your account from your phone, ensuring your loved ones receive real-time notifications of emergencies, updates, and alerts.</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Database className="w-40 h-10 text-gray-600" />
            <div className="flex flex-col gap-2" >
              <h3 className="text-xl uppercase">NO LONG-TERM CONTRACTS</h3>
              <p className="text-gray-600 text-sm">Experience peace of mind knowing you are protected in both emergency and non-emergency situations with a service that has no hidden fees or long-term contracts.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
