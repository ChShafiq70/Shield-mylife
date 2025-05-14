import "./globals.css";
import "@fontsource/roboto";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import AuthWrapper from "./components/AuthWrapper"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shieldmylife</title>
      </head>
      <body>
        {/* <AuthWrapper> */}
          <Header />
          <main>{children}</main>
          <Footer />
        {/* </AuthWrapper> */}
      </body>
    </html>
  );
}
