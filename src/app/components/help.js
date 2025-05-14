"use client";

export default function Help() {
  return (
    <section className=" px-6 md:px-30 bg-[#F6F6F6] py-20 text-center mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="border-2 justify-self-start text-start border-red-500 p-20 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-red-500 mb-10">01</h2>
          <h3 className=" text-2xl font-medium">Press Your Help Button</h3>
          <p className="text-gray-600 mt-4">
            Press the help button on your pendant or bracelet, which you should wear at all times.
          </p>
        </div>        
        <div className="border-2 justify-self-start text-start border-red-500 p-20 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-red-500 mb-10">02</h2>
          <h3 className=" text-2xl font-medium">Talk to a Response Specialist</h3>
          <p className="text-gray-600 mt-4">
          Shieldmylife highly trained response specialists are available 24/7/365 to assist you.
          </p>
        </div>
        <div className="border-2 justify-self-start text-start border-red-500 p-20 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-red-500 mb-10">03</h2>
          <h3 className=" text-2xl font-medium">Get the Right Help</h3>
          <p className="text-gray-600 mt-4">
          The specialists evaluate your situation and contact the most appropriate emergency person, whether it’s a family member, friend, neighbor, or first responder.
          </p>
        </div>
      </div>
    </section>
  );
}
