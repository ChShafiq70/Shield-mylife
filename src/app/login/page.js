"use client"; 

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script"; 
import Image from "next/image";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "Admin") {
      localStorage.setItem("isAuthenticated", "true"); 
      setIsAuthenticated(true);
      router.push("/");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
      {isAuthenticated ? (
        <Script src="/leadid.js" strategy="lazyOnload" />
      ) : (
        <>
          <Script id="LeadiDscript" strategy="lazyOnload">
            {`
              (function() {
                var s = document.createElement('script');
                s.id = 'LeadiDscript_campaign';
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//create.lidstatic.com/campaign/0304e624-e930-18bd-740d-da193354c8e9.js?snippet_version=2';
                var LeadiDscript = document.getElementById('LeadiDscript');
                if (LeadiDscript) {
                  LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
                }
              })();
            `}
          </Script>

          <noscript>
            <Image
              src="//create.leadid.com/noscript.gif?lac=A4648FA2-782B-05DC-6A0F-612384BDE149&lck=0304e624-e930-18bd-740d-da193354c8e9&snippet_version=2"
              alt="LeadID"
            />
          </noscript>
        </>
      )}
    </div>
  );
};

export default Login;
