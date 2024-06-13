import { motion } from "framer-motion";
import React from "react";

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Transition = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};
export default Transition;