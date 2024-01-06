import type { Metadata } from "next";
import { Inter, Libre_Franklin, Roboto } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "The New York Times - Breaking News, US News, World News and Videos",
  description:
    "One subscription. All of The Times. The definitive coverage of your favorite subjects. Save on unlimited access to all of The Times including News, Games, Audio and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  );
}
