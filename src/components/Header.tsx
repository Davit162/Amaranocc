import "../components_css/Header.css";
import Mainheder from "./Mainheder";
import IconInput from "./Iconimput";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        setShow(false); 
      } else {
        setShow(true); 
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="header"
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Mainheder />
      <IconInput />
    </motion.header>
  );
}
