import React, { useRef, useEffect, useState } from "react"
import TabTitle from "../components/TabTitle";
import { TimelineLite, Power3 } from 'gsap';
import Line1 from "../assets/line-1.svg";
import Line2 from "../assets/line-2.svg";
import CountUp from 'react-countup';
import ArrowRight from "../assets/arrow-right-color.svg";

const tabs = [
  { number: "01", title: "Our Featured Funds", subTitle: "Nikko AM ARK Disruptive Innovation Fund 1", nav: 196977, net: 7309193, dayChange: -1094, issued: 3710686634 },
  { number: "02", title: "Our Featured Funds", subTitle: "Nikko AM ARK Disruptive Innovation Fund 2", nav: 256421, net: 3542123, dayChange: -231, issued: 3453453543 },
  { number: "03", title: "Our Featured Funds", subTitle: "Nikko AM ARK Disruptive Innovation Fund 3", nav: 354213, net: 4535428, dayChange: -4345, issued: 1235432132 },
  { number: "04", title: "Our Featured Funds", subTitle: "Nikko AM ARK Disruptive Innovation Fund 4", nav: 645214, net: 9645643, dayChange: -532, issued: 2132345354 },
]
function Section3() {
  const [activeTab, setActiveTab] = useState("01");
  const [isChanging, setIsChanging] = useState(false);

  let content = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let numbers = useRef(null)
  let headLineMb = useRef(null);
  let tl = new TimelineLite({ delay: .2 });

  useEffect(() => {
    const headline = content.children[0].children[0];
    const subline = content.children[0].children[1];
    tl.staggerFrom([headLineMb, headline, subline, line1, line2, numbers], 1, { x: 0, y: 75, opacity: 0, ease: Power3.easeOut, duration: .8 }, .15, 'Start')
  }, [activeTab])

  const handleChangeTab = (item) => {
    if (isChanging) return
    setIsChanging(true)
    setActiveTab(item.number)
    setTimeout(() => setIsChanging(false), 1000)
  }
  const renderTabsTitle = tabs.map((item, index) =>
    <TabTitle key={index} number={item.number} isActive={activeTab === item.number} onClick={() => handleChangeTab(item)} />
  );

  const renderTabsContent = tabs.map((item, index) => {
    if (activeTab !== item.number) return;
    return (
      <div key={index} className="mx-8 flex flex-col">
        <h1 className="sm:text-6xl text-4xl mb-8 w-3/4 order-1 sm:block hidden">{item.title}</h1>
        <h3 className="sm:text-3xl text-2xl text-main-color w-3/4 order-2">{item.subTitle}</h3>
        <div className="relative sm:order-3 order-4">
          <img ref={el => line1 = el} className="absolute" style={{ top: "0" }} src={Line1} alt="line-1" />
          <img ref={el => line2 = el} src={Line2} alt="line-2" />
        </div>
        <div ref={el => numbers = el} className="mt-10 sm:order-4 order-3">
          <div className="sm:py-4 py-1 sm:border-b border-0 border-gray-400 sm:w-3/5 w-full">
            <h3 className="inline-block font-semibold text-lg mr-4">NAV (per 100 shares)</h3>
            <span className="text-base text-gray-400">
              <CountUp duration={2} separator="," prefix="¥" end={item.nav}></CountUp>
            </span>
          </div>

          <div className="sm:py-4 py-1 sm:border-b border-0 border-gray-400 sm:w-3/5 w-full">
            <h3 className="inline-block font-semibold text-lg mr-4">Net Assets</h3>
            <span className="text-base text-gray-400">
              <CountUp duration={3} separator="," suffix=" million" end={item.net}></CountUp>
            </span>
          </div>

          <div className="sm:py-4 py-1 sm:border-b border-0 border-gray-400 sm:w-3/5 w-full">
            <h3 className="inline-block font-semibold text-lg mr-4">Day Change</h3>
            <span className="text-base text-gray-400">
              <CountUp duration={2} separator="," prefix="¥" end={item.dayChange}></CountUp>
            </span>
          </div>

          <div className="sm:py-4 py-1 sm:border-b border-0 border-gray-400 sm:w-3/5 w-full">
            <h3 className="inline-block font-semibold text-lg mr-4">Issued</h3>
            <span className="text-base text-gray-400">
              <CountUp duration={3} separator="," suffix=" shares" end={item.issued}></CountUp>
            </span>
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className="w-full h-screen">
      <div className="container mx-auto sm:py-28 py-6">
        <div className="sm:flex flex-row h-full">
          <h1 ref={el => headLineMb = el} className="sm:text-6xl mx-8 text-4xl mb-8 w-3/4 order-1 sm:hidden block">{tabs.find(el => el.number === activeTab).title}</h1>
          <div className="flex-1 flex sm:flex-col flex-row min-w-0 lg:w-1/3 sm:items-end sm:mr-12 sm:ml-0 ml-6">
            {renderTabsTitle}
          </div>
          <div className="flex lg:w-2/3 h-full">
            <div ref={el => content = el} className="mt-4">
              {renderTabsContent}
              <a href="https://www.google.com" className="mx-8 flex mt-12 items-center text-main-color font-semibold sm:text-xl text-base">
                <span>Explore more funds</span>
                <button className="ml-2"><img style={{ width: "22px", height: "22px" }} src={ArrowRight} alt="ArrowRight" /></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
