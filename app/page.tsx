import Image from "next/image";
import Header from "./header";
import Moshaverin from "@/app/header/moshaverin";
import Eror from "./header/eror";
import Mojtama from "./header/mojtama";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Mojtama />
    </main>
  );
}
