import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Track",
  description:
    "App designed to track and organize body health related information.",
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  const children = props.children;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
