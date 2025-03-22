import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Accountdashboard from "./accountdashboard";
import BreadCramp from "@/components/BreadCramp";

export default function index() {
  return (
    <div>
      <Navbar />
      <BreadCramp />
      <Accountdashboard />
      <Footer />
    </div>
  );
}
