"use client";
import React from "react";

import Header from "./components/Header";
import HomeLanding from "./components/Home";
import Promociones from "./components/Promociones";

import "./globals.css";
import Clasicos3D from "./components/Clasicos3D";
import Publicidad from "./components/Publicidad";
import Destacados from "./components/Destacados";
import Nuevo from "./components/Nuevo";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="mt-[62px]">
        <HomeLanding></HomeLanding>
        <Promociones></Promociones>
        <h1 className="text-5xl mt-12 text-center">Nuestros Clásicos</h1>
        <Clasicos3D></Clasicos3D>
        <Publicidad></Publicidad>
        <Destacados></Destacados>
        <Nuevo></Nuevo>
      </div>
    </div>
  );
}
