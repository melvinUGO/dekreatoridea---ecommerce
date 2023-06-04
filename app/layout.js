import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { NavigationContextProvider } from "@/contexts/navigaionContext";
import SearchModal from "@/components/modals/SearchModal";
import { UserContextProvider } from "@/contexts/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "De Kreator Idea",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <UserContextProvider>
          <NavigationContextProvider>
            <Sidebar />
            <Navbar />
            <SearchModal />
            {children}
            <Footer />
          </NavigationContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
