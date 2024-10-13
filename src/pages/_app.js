import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default function App({ Component, pageProps }) {
  return (
    <MantineProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}
