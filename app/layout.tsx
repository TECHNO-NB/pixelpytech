import type { Metadata } from "next";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "Pixelpy Tech — Web & Mobile Development",
  description: "We craft stunning websites and mobile apps that drive growth.",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" max-w-screen">
        <Wrapper>
        {children}
        </Wrapper>
        </body>
    </html>
  );
}
