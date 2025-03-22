import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/cartcontext";
import { Gilroy } from "@/fonts/fonts";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
// import "bootstrap-icons/font/bootstrap-icons.css";

const gilroyFont = {
  variable: "--font-gilroy-semibold",
  style: {
    fontFamily: "Gilroy-SemiBold, sans-serif",
  },
};

const gilroyBoldFont = {
  variable: "--font-gilroy-bold",
  style: {
    fontFamily: "Gilroy-Bold, sans-serif",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className={Gilroy.className}>
        <main
        >
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </main>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>

  );
}
