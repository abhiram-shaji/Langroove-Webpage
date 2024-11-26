// src/pages/_app.tsx
import "antd/dist/reset.css"; // Import Ant Design styles
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
