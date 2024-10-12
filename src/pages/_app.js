import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider>
      <Navbar />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
