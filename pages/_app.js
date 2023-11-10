import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer.js";
import { Provider } from "react-redux";
import store from "../store/store";
import NextNProgress from "nextjs-progressbar";
import Drawer from "../components/Drawer";
import Copyright from "../components/Copyright";
import HeaderBar from "../components/HeaderBar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#393185" options={{ showSpinner: false }} />
      <div className="app">
        <Provider store={store}>
          <Header />
          <div className="page_wrapper">
            <Component {...pageProps} />
          </div>
          <Footer />
          <Copyright />
        </Provider>
      </div>
    </>
  );
}

export default MyApp;
