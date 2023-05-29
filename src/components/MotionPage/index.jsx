import { motion } from "framer-motion";

const MotionPage = ({ children, className }) => {
   return (
      <motion.div
         className={className}
         initial={{ opacity: 0,scale:0.9 }}
         animate={{ opacity: 1,scale:1 }}
         transition={{ duration: 0.8 }}
      >
         {children}
      </motion.div>
   );
}

export default MotionPage;