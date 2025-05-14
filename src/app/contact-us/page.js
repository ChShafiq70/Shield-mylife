"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <>
      <section
        className="relative bg-fixed bg-center bg-cover text-center py-30"
        style={{ backgroundImage: "url('/images/contact.jpeg')" }}
      >
        <div className="absolute inset-0 backdrop-blur-xs"></div>

        <div className="relative z-10  p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-black">Our Contact</h2>
        </div>
      </section>
      <section className="py-20 ">
        <div className="text-left mb-10 px-6 max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold uppercase text-gray-600">
            Our Contact
          </h2>
          <h3 className="text-4xl font-bold text-red-500">
            Get In Touch With Us
          </h3>
        </div>
        <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-400 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-400 rounded"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full p-3 border border-gray-400 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-400 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-400 rounded"
              />
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="consent" className="mt-1" />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  You provide your express written consent via electronic
                  signature to receive marketing communications via automated
                  telephone dialing system and/or pre-recorded calls, text
                  messages, and/or emails from, MedGuard Alert, Inc, “Premiere
                  Partners” and,
                  <a href="/marketing-partner" className="text-red-300">
                    Marketing Partner
                  </a>{" "}
                  at the phone number (including any wireless number), physical
                  address and email address provided above, even if you are on
                  any State and/or Federal Do Not Call list. Consent is not a
                  condition of purchase and may be revoked at any time. Message
                  and data rates may apply.
                  <a href="/privacy-policy" className="text-red-300">
                    California Residents
                  </a>
                </label>
              </div>

              <button className="w-full bg-red-500 text-white py-3 rounded text-lg font-semibold">
                Submit
              </button>
            </form>
          </div>
          <div>
            <iframe
              className="w-full h-80 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.933276844963!2d-77.33460402376105!3d38.63909607175809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65f4e2db9a90b%3A0x8b665647a6c207cd!2s3750%20Bogner%20Dr%2C%20Woodbridge%2C%20VA%2022193%2C%20USA!5e0!3m2!1sen!2s!4v1646789332239!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-red-500 text-4xl mb-2" />
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-gray-600">
              3750 Bogner Drive Dale City, Virginia 22193
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-red-500 text-4xl mb-2" />
            <h4 className="text-lg font-semibold">
              <a href="tel:1-844-344-4666" className="underline">
                Phone
              </a>
            </h4>
            <p className="text-gray-600">1-844-344-4666</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-red-500 text-4xl mb-2" />
            <h4 className="text-lg font-semibold">
              <a href="mailto:support@shieldmylife.com" className="underline">
                Email
              </a>
            </h4>
            <p className="text-gray-600">support@shieldmylife.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
