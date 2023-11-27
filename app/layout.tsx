import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Navbar } from "./components/Header/Navbar";
import { ClientOnly } from "./components/ClientOnly";
import { RegisterModel } from "./components/models/RegisterModel";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModel } from "./components/models/LoginModel";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbub",
  description: "Airbub clone..",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModel />
          <RegisterModel />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
