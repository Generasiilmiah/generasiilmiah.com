import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.scss";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
