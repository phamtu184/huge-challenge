import React, { useRef, useEffect } from "react"
import Wave from "../assets/wave2.svg";
import ArrowRight from "../assets/arrow-right.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap, { Power3 } from "gsap"

function App() {
  let img = useRef(null);
  let smallTitle = useRef(null);
  let mainTitle = useRef(null);
  let content = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("section2"),
        start: "top 75%",
        end: "top",
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause",
      }
    });
    tl.from(smallTitle, { x: 200, y: -100, opacity: 0, ease: Power3.easeOut, duration: 1 })
      .from(img, { x: -200, y: 50, opacity: 0, ease: Power3.easeOut, duration: 1 })
      .from(mainTitle, { x: 200, y: 0, opacity: 0, ease: Power3.easeOut, duration: 1 })
      .from(content, { x: 50, y: 100, opacity: 0, ease: Power3.easeOut, duration: 1 })
  }, [])
  return (
    <section id="section2" className="section2 z-10 relative w-full h-full bg-main-color">
      <div className="container mx-auto">
        <div className="sm:flex flex-row h-full">
          <div ref={el => img = el} className="flex-1 min-w-0 lg:w-1/3 wrapper-wave2 sm:py-32 py-6">
            <img src={Wave} alt="wave2" className="wave2" />
          </div>
          <div className="flex lg:w-2/3 h-full items-center sm:pt-32 pt-6">
            <div className="text-white mx-8">
              <div ref={el => smallTitle = el} className="text-xl mb-12">Team of unique combination</div>
              <h1 ref={el => mainTitle = el} className="sm:text-7xl text-4xl mb-12">
                <div className="">
                  Global Intelligence
                </div>
                <div className="">
                  Asian Insights
                </div>
                <div className="">
                  Local Experience
                </div>
              </h1>
              <div ref={el => content = el} className="sm:pl-10 sm:border-l sm:border-gray-300 pb-14 sm:mt-36 mt-2">
                <p className="sm:text-xl text-base mb-8">
                  We transform intelligent insights into innovative, relevant investment opportunities for our clients. Leveraging our unique combination of a global perspective complemented by our Asian DNA, we aspire to create sophisticated and diverse solutions that set new standards in the asset management industry.
                </p>
                <a href="https://www.google.com" className="flex items-center font-semibold sm:text-xl text-base">
                  <span>Learn more about what makes us unique</span>
                  <button className="ml-2"><img style={{ width: "22px", height: "22px" }} src={ArrowRight} /></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
