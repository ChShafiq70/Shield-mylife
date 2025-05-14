"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [zip, setZip] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  useEffect(() => {
    if (zip && isAuthenticated) {
      window.history.replaceState(null, "", `?zip=${zip}`);
    }
  }, [zip, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      const leadidScript = document.createElement("script");
      leadidScript.src = "/js/leadid.js";
      leadidScript.async = true;
      document.body.appendChild(leadidScript);
      const jQueryScript = document.createElement("script");
      jQueryScript.innerHTML = `
        jQuery(document).ready(() => {
          jQuery("form.wpcf7-form").on("focusout", () => {
            document.querySelectorAll("form:has(#leadid_token) input")
              .forEach(LeadiD.formcapture.saveFormField);
          });
        });
      `;
      document.body.appendChild(jQueryScript);

      setScriptLoaded(true);
    } else {
      const guestScript = document.createElement("script");
      guestScript.innerHTML = `
        (function() {
          var s = document.createElement('script');
          s.id = 'LeadiDscript_campaign';
          s.type = 'text/javascript';
          s.async = true;
          s.src = '//create.lidstatic.com/campaign/0304e624-e930-18bd-740d-da193354c8e9.js?snippet_version=2';
          var LeadiDscript = document.getElementById('LeadiDscript');
          LeadiDscript?.parentNode?.insertBefore(s, LeadiDscript);
        })();
      `;
      document.body.appendChild(guestScript);
    }
  }, [isAuthenticated]);

  return (
    <section className="flex flex-col lg:flex-row mt-20 md:px-20 px-6 gap-6 bg-white">
      {showForm ? (
        <motion.div
          className="lg:w-1/2 w-full text-start lg:text-start"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="md:text-6xl text-4xl font-medium text-[#E74C3C]  leading-relaxed">
            A Medical Alert System For Every Lifestyle
          </h1>
          <div className="mt-6 flex flex-col gap-3">
          <input id="leadid_token" name="universal_leadid" type="hidden" value=""/>
            <input type="text" placeholder="First Name" className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input 
              type="number" 
              placeholder="Zip Code" 
              value={zip} 
              onChange={(e) => setZip(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" 
            />
            <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div className="mt-4 text-gray-600 text-sm scroll-auto h-20 overflow-y-scroll">
            <input type="checkbox" id="consent" className="mr-2" />
            <label htmlFor="consent" className="text-sm text-gray-600">
              You provide your express written consent via electronic signature to receive marketing communications via automated telephone dialing system and/or pre-recorded calls, text messages, and/or emails from, MedGuard Alert, Inc, 
              <a href="/marketing-partner" className="text-red-300"> Marketing Partner</a> at the phone number, physical address, and email provided above.
              <a href="/privacy-policy" className="text-red-300"> California Residents</a>
            </label>
          </div>
          <div>           
            {isAuthenticated ? (
              <Script src="/js/leadid.js" strategy="lazyOnload" />
            ) : (
              <Script id="guest-script">
                {`
                  (function() {
                    var s = document.createElement('script');
                    s.id = 'LeadiDscript_campaign';
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = '//create.lidstatic.com/campaign/0304e624-e930-18bd-740d-da193354c8e9.js?snippet_version=2';
                    var LeadiDscript = document.getElementById('LeadiDscript');
                    LeadiDscript?.parentNode?.insertBefore(s, LeadiDscript);
                  })();
                `}
              </Script>
            )}
          </div>
          <div className="justify-center text-center">
            <Link href={`/submissionform?zip=${zip}`}>
              <button className="mt-4 bg-red-500 text-white px-10 py-3 rounded-md hover:bg-red-600 w-full lg:w-auto">
                Submit
              </button>
            </Link>
          </div>
          <div className="mt-6 flex items-center text-black text-lg">
            <span className="mr-2">📞</span> 1-844-344-4666
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="lg:w-1/2 w-full text-start lg:text-start"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="md:text-6xl text-4xl font-medium text-[#E74C3C] leading-tight">
            A Medical Alert System For Secure Life
          </h1>
          <p className="mt-4 text-gray-700 text-lg px-2">
            Enter your zip code for more information
          </p>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-2">
            <input type="number" placeholder="Zip Code" onChange={(e) => setZip(e.target.value)} className="border border-gray-300 rounded-lg p-3 w-full lg:w-64 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <button onClick={() => setShowForm(true)} className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-full lg:w-auto">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
      <div
  className="lg:w-1/3 w-full flex justify-center p-6 pb-20 bg-gradient-to-b from-[#390308] to-[#5B0A13]"
>
  <Image
    src="/images/hero.webp"
    alt="Elderly Couple"
    width={300}
    height={100}
    className="object-cover"
  />
</div>

    </section>
  );
}
