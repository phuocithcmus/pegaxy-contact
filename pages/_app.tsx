import { AppProps } from "next/app";

import "../assets/styles/main.scss";
import "../assets/styles/fonts.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
