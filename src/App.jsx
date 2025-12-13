import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

export default function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Navbar />
      <Outlet />
      <Footer />
    </ReactLenis>
  );
}
