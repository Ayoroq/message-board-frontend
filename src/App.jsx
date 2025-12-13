import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <main>
        <h1>Scroll down</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam
          sint tempora totam doloribus maiores in voluptas, at error
          reprehenderit dolor alias quaerat vero! Delectus inventore iste
          quisquam labore odit.
        </p>
      </main>
      <Footer />
    </ReactLenis>
  );
}
