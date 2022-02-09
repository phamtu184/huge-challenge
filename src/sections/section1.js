import React, { useRef, useEffect } from "react"

import { TimelineLite, TweenMax, Power3 } from 'gsap';
import ArrowRight from "../assets/arrow-right-color.svg";

function Section1() {
  let app = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8 });

  useEffect(() => {
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];

    TweenMax.to(app, 0, { css: { visibility: 'visible' } })

    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      opacity: 0,
      y: 55,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'Start')
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)

  }, [])

  return (
    <section className="section1 w-full h-screen">
      <div className="flex flex-row items-center h-full">
        <div className="flex-1 min-w-0 lg:w-1/3"></div>
        <div className="flex lg:w-2/3 h-full items-center">
          <div className="invisible" ref={el => app = el}>
            <div className="flex items-center justify-between mx-8">
              <div className="">
                <div className="" ref={el => content = el}>
                  <h1 className="sm:text-6xl text-2xl mb-12">
                    <div className="">
                      <div className="">Progressive Solutions</div>
                    </div>
                    <div className="">
                      <div className="">Competitive Performance</div>
                    </div>
                    <div className="">
                      <div className="">Global citizen with Asian DNA</div>
                    </div>
                  </h1>
                  <div className="sm:pl-10 sm:border-l sm:border-gray-300">
                    <p className="sm:text-2xl text-lg mb-2 text-gray-500">
                      We're one of Asia's largest asset managers.
                    </p>
                    <a href="https://www.google.com" className="flex mt-8 items-center text-main-color font-semibold sm:text-xl text-base">
                      <span>Learn more about who we are</span>
                      <button className="ml-2"><img style={{ width: "22px", height: "22px" }} src={ArrowRight} alt="ArrowRight" /></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
