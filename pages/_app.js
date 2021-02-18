import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.scss";
import "../styles/tailwind.css";

import { AuthProvider } from "../auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
