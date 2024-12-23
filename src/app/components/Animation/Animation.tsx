import { motion } from "framer-motion";

type AnimationProps = {
  children: React.ReactNode;
  className?: string;
};

const Animation = ({ children, className }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
