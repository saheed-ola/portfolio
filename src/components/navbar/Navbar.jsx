// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import {FiMenu} from "react-icons/fi"
// import {MdClose} from "react-icons/md" 
// import { logo } from "../../assets/index";
// import { navLinksdata } from "../../constants";
// import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
// import { div, li } from "framer-motion/client";

// const Navbar = () => {
//   const [showMenu, setshowMenu] = useState(false)
//   console.log(showMenu)
//   return (
//     <div className="w-full sticky top-0 z-50 bg-bodyColor h-24 mx-auto flex justify-between items-center font-titleFont border-b-[2px] border-b-gray-600">
//       <div className="w-[100px] h-[100px] flex items-center justify-center">
//         <img src={logo} alt="logo"/>
//       </div>
//       <div> 
//         <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
//           {navLinksdata.map(({ _id, title, link }) => (
//             <li
//               className=" text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
//               key={_id}
//             >
//               <Link
//                 activeclass="active"
//                 to={link}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 {title}
//               </Link>
//             </li> 
//           ))}
//         </ul>
//         <span onClick={() => {setshowMenu(!showMenu)}} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center roundef-full text-white cursor-pointer"><FiMenu/></span>
//         {/*if showMenu is true then display and execute all content in div   */}
//         {showMenu && (<div className="w-[80%] h-screen overflow-scroll absolute top-0 left-[-17px] bg-gray-900 p-4 scrollbar-hide">
//           <div className="flex flex-col gap-8 py-2 relative">
//           <div>
//           <img className="w-[100px] h-[100px] flex items-center justify-center" src={logo} alt="logo"/>
//           <p className='text-sm font-bodyFont text-gray-400 mt-2 tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui corrupti nemo id inventore libero sunt maiores doloremque quasi fuga nisi repellat debitis laboriosam labore optio dignissimos ad, consequuntur sequi ea!</p>
//           </div>
//           <ul className="flex flex-col gap-4">
//             {
//               navLinksdata.map((item) => (<li key={item._id} className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300" >
//                <Link  
//                onClick={()=>setshowMenu(false)}              
//                 activeclass="active"
//                 to={item.link}
//                 spy={true}
//                 smooth={true}
//                 offset={-70} 
//                 duration={500}>{item.title}</Link>
//                 </li>
//                 ))
//             }
//           </ul>
//           <div className='flex flex-col gap-4'>
//               <h2 className='text-base uppercase font-titleFont mb-4'>Find me on</h2>
//               <div className='flex gap-4'>
//                 <span className='bannerIcon'><FaFacebookF/></span>
//                 <span className = 'bannerIcon' ><FaTwitter/></span>
//                 <span className = 'bannerIcon'><FaLinkedin/></span>
//               </div>
//           </div>
//           <span onClick={()=> setshowMenu(false)} className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"> <MdClose/> </span>
//           </div>

//         </div>)}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import { logo } from '../../assets';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='hover:bg-[#052659] bg-[#5483B3] w-full sticky top-0 z-50 h-16 md:h-20 lg:h-24 mx-auto flex justify-between items-center font-titleFont border-b-[2px] px-4 sm:px-6 lg:px-8 border-b-gray-600'>
      {/* Logo */}
      <div className='w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] flex items-center justify-center'>
        <img 
          src={logo} 
          alt="Logo" 
          className="w-full h-full object-contain text-white" 
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-6 xl:gap-8">
          {navLinksdata.map(({ _id, title, link }) => (
            <li 
              className="text-base lg:text-lg xl:text-xl font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeclass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-2xl text-white hover:text-designColor transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)}>
          <div 
            className="absolute right-0 top-full w-full max-w-sm bg-[#444444] h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] p-6 border-l border-gray-600"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-4 md:gap-6">
              {navLinksdata.map(({ _id, title, link }) => (
                <li 
                  className="text-lg md:text-xl font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
                  key={_id}
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    activeclass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

