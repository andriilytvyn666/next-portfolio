import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrii Lytvyn",
  description: "My portfolio website",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-bg text-fg-secondary"}>
        <div className="w-[51.25rem] grid h-screen grid-cols-10 grid-rows-1 gap-5 mx-auto [&>*]:col-span-10">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-16">
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
