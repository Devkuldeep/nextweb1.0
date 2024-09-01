import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "./Components/Ui/sidebar";
import Footer from "./Components/Ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kuldeep Dev",
  description: "Created by developer kuldeep patel. this is the protfolio website of mine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Sidebar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
