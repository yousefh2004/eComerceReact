import React, { useEffect } from "react";
import Brandds from "../../components/brands/Brandds";

export default function Home() {
  useEffect(() => {
  let isScrolling = false;
  const handleWheel = (e) => {
    if (isScrolling) return;
    const delta = e.deltaY;
    const sections = document.querySelectorAll(".section");
    const currentScroll = window.scrollY;
    let target = currentScroll;
    for (let sec of sections) {
      const styleTop = parseInt(window.getComputedStyle(sec).top) || 0;
      const offset = sec.offsetTop - styleTop;
      if (delta > 0 && offset > currentScroll) {
        target = offset;
        break;
      } else if (delta < 0 && offset < currentScroll) {
        target = offset;
      }
    }
    if (target === currentScroll) return;
    isScrolling = true;
    window.scrollTo({ top: target, behavior: "smooth" });
    setTimeout(() => (isScrolling = false), 600);
  };
  window.addEventListener("wheel", handleWheel, { passive: false });
  return () => window.removeEventListener("wheel", handleWheel);
}, []);

  return (
    <>
     {/* Section 1 */}
<div
  className="section"
  style={{
    height: "100vh",
    position: "relative",
    display: "flex",
    color: "white",
    marginLeft: 230,
    fontSize: 40,
    fontFamily: '"Kristen ITC", cursive',
    backgroundColor: "transparent",
    paddingTop: 170, 
    overflow: "visible", 
  }}
>
  <div>
    <h1 style={{ marginTop: 30, width: 530, height: 200 }}>
      Step <span style={{ color: "#820cb4ff" }}>Into</span> Fashion
    </h1>
    <button
      style={{
        backgroundColor: "#5e0386ff",
        color: "white",
        fontSize: 30,
        width: 450,
        height: 80,
        padding: 10,
        fontFamily: "Orbitron",
        border: "none",
        borderRadius: 10,
        fontWeight: "bold",
      }}
    >
      Shop Now
    </button>
    <p
      style={{
        width: 500,
        fontSize: 20,
        fontFamily: "Roboto",
        color: "#b5b5b5ff",
      }}
    >
      Explore our carefully curated collection with modern designs to keep you comfortable while looking stylish.
    </p>
  </div>

  <div
    style={{
      backgroundColor: "#8748a2ff",
      width: "fit-content",
      height: 500,
      marginLeft: 0,
      marginTop: 0,
      borderRadius: 1000,
      display: "flex",
    }}
  >
    <img
      src="/images/sneaker.png"
      alt="Sneaker"
      width={500}
      style={{ filter: "brightness(60%)" }}
    />
  </div>
</div>


      {/* Section 2 */}
      <div
        className="section"
        style={{
          height: "100vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
        }}
      >
        <Brandds></Brandds>
      </div>

      {/* Section 3 */}
      <div
        className="section"
        style={{
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
        }}
      >
        Another Section
      </div>
    </>
  );
}
