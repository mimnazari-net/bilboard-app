import Image from "next/image";
import Header from "./header";
import Moshaverin from "@/app/header/moshaverin";
import Eror from "./header/eror";
import Mojtama from "./header/mojtama";
import "./globals.css";
import Newest from "./header/newset";
import Dastebandi from "./header/dastebandi";

export default function Home() {
  return (
    <main><Header />
    <Moshaverin/>  </main>
  );
}
