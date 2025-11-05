import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Navigation({ setIsOpen, active, setActive }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10 nav-ul">
      {navItems.map((item) => (
        <li key={item.id} className="relative nav-li">
          <Link
            to={item.id}
            smooth={true}
            spy={true}
            offset={-70}
            duration={600}
            onClick={() => {
              setIsOpen(false);
              setActive(item.id);
            }}
            onSetActive={() => setActive(item.id)}
            className={`cursor-pointer text-lg transition-colors ${
              active === item.id
                ? "text-white font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {item.label}
          </Link>

          {/* Sliding underline animation */}
          {active === item.id && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-lavender rounded-full"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-2">
          {/* Brand */}
          <a
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Mutahir
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation setIsOpen={setIsOpen} active={active} setActive={setActive} />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden sm:hidden bg-primary/50 backdrop-blur-lg"
      >
        <div className="flex flex-col items-center py-5">
          <Navigation setIsOpen={setIsOpen} active={active} setActive={setActive} />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;


// My code //

// import { useState } from 'react'
// import { motion } from 'motion/react';
// function Navigation(){
//     return(

//         <ul className='nav-ul'>
//         <li className='nav-li'>
//           <a className='nav-link' href='#home'>
//           Home
//           </a>
//         </li>
//          <li className='nav-li'>
//         <a className='nav-link' href='#about'>
//         About
//         </a>
//         </li>
//          <li className='nav-li'>
//         <a className='nav-link' href='#work'>
//         Work
//         </a>
//         </li>
//          <li className='nav-li'>
//         <a className='nav-link' href='#contact'>
//         Contact
//         </a>
//         </li>
//         </ul>
//     );
// }
// const Navbar = () => {
//     const[isOpen , setIsOpen]=useState(false);
//   return (
//     <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
//         <div className='mx-auto c-space max-w-7xl'>
//             <div className='flex items-center justify-between py-2 sm:py-0'>
//                 <a href='#home' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
//                 Mutahir
//                 </a>
//                 <button 
//                 onClick={() => setIsOpen(!isOpen)}
//                 className='flex cursor-pointer text-neutral-400 
//                 hover:text-white focus:outline-none sm:hidden'>
//                     <img src={isOpen ? 'assets/close.svg': 'assets/menu.svg'} 
//                     className='w-6 h-6' alt='toggle'/>
//                 </button>
//                 <nav className='hidden sm:flex'>
//                     <Navigation/>
//                 </nav>
//             </div>
//         </div>
//         {isOpen &&(<motion.div className='block overflow-hidden text-center sm:hidden'
//         initial={{opacity:0 , x:-20}}
//         animate={{opacity:1 ,x:0}}
//         style={{maxHeight:"100vh"}}
//         transition={{duration: 1}}>
//             <nav className='pb-5'>
//                 <Navigation/>
//             </nav>
//         </motion.div>)}
//     </div>
//   )
// }

// export default Navbar