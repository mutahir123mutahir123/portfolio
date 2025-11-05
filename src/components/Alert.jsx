import { motion, AnimatePresence } from "motion/react";
const Alert = ({ type, text }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`flex items-center text-indigo-100 leading-none lg:rounded-full rounded-md p-4 shadow-md ${
            type === "danger" ? "bg-red-800" : "bg-royal"
          }`}
        >
          <span
            className={`flex rounded-full px-2 py-1 text-sm font-semibold mr-2 ${
              type === "danger" ? "bg-red-600" : "bg-lavender"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </span>
          <p className="text-sm">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
