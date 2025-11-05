// the code done from we learn this project


// import {motion} from "motion/react";
// const Card = ({style ,text ,image,containerRef}) => {
//   return image && !text ? (
//     <motion.img className="absolute w-15 cursor-grab"
//     src={image} 
//     style={style}
//     whileHover={{scale: 1.05}}
//     drag
//     dragConstraints={containerRef}
//     dragElastic={1}
//     />
//     ) : (
//     <motion.div className="absolute px-1 py-4 text-xl text-center
//     rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem]
//     cursor-grab" 
//     style={style}
//     whileHover={{scale: 1.05}}
//     drag
//     dragConstraints={containerRef}
//     dragElastic={1}
//     >
//         {text}
//     </motion.div>
//   )
// }

// export default Card





// My code The Code for falling animation on About Me Grid-1 Section
import { DragControls, motion } from "motion/react";
const Card = ({ style, text, image, containerRef, delay = 0 }) => {
  // Common physics-based animation setup
const fallAnimation = {
  y: 0,
  opacity: 1,
  transition: {
  type: "spring",
  stiffness: 80,
  damping: 15,     // lower damping = more bounce
  mass: 3,      // slightly heavier feel
  delay,
  },
};

const commonProps = {
  style,
  whileHover: { scale: 1.05 },
  drag: true,
  dragConstraints:containerRef,
  dragElastic: 1.5,
  dragMomentum: true,
  initial: { y: -300, opacity: 0 }, // start from above
  animate: fallAnimation,
};

  if (image && !text) {
    return (
      <motion.img
        {...commonProps}
        src={image}
        className="absolute w-20 cursor-grab active:cursor-grabbing select-none"
      />
    );
  }

  return (
    <motion.div
      {...commonProps}
      className="absolute px-3 py-3 text-xl text-center rounded-full ring ring-gray-700 
      font-extralight bg-storm w-[12rem] cursor-grab active:cursor-grabbing select-none"
    >
      {text}
    </motion.div>
  );
};

export default Card;




