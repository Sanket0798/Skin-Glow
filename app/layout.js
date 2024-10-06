import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Gubani Skincare",
  description: "World of Skincare Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
