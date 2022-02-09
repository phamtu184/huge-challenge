import React, { useState } from "react"
import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Search from "../assets/search.svg"
import ArrowDown from "../assets/arrow-down.svg"

const items = [
  { text: "About us", link: "https://www.google.com/" },
  { text: "Sustainability", link: "https://www.google.com/" },
  { text: "Insight & News", link: "https://www.google.com/" },
  { text: "Strategies", link: "https://www.google.com/" },
  { text: "Funds", link: "https://www.google.com/" },
  { text: "How to Invest", link: "https://www.google.com/" },
]
function Header() {
  const [isExpandMenu, setExpandMenu] = useState(false)
  const listItems = items.map((item, index) =>
    <span key={index} className="hidden md:block">
      <a href={item.link} className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {item.text}
      </a>
    </span>
  );
  const listItemsMobile = items.map((item, index) =>
    <a key={index} href={item.link} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id={"mobile-menu-item-" + index}>{item.text}</a>
  );
  const handleClickMenu = () => {
    setExpandMenu(prev => !prev)
  }
  return (
    <nav className="header relative z-10 bg-white">
      <div className="flex flex-row items-center py-5 mx-4">
        <div className="flex-1 min-w-0 lg:w-1/3 lg:ml-28">
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="flex lg:mt-0 lg:ml-4 lg:w-2/3">
          {listItems}
          <span className="hidden md:block">
            <button className="text-gray-400 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Singapore
              <img className="ml-1" src={ArrowDown} alt="ArrowDown"/>
            </button>
          </span>
          <button type="button" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
            <img src={Search} alt="Search"/>
          </button>
          <span className="ml-3 relative md:hidden">
            <button onClick={handleClickMenu} type="button" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
              <img src={Menu} alt="Menu"/>
            </button>
            {isExpandMenu && <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabIndex="-1">
              {listItemsMobile}
              <button className="block px-4 py-2 text-sm text-gray-700">
                Singapore
              </button>
            </div>
            }
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
