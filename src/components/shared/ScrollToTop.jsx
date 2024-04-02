import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll"; // Import for smooth scrolling

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    scroll.scrollToTop({ behavior: "smooth", duration: 500 });
  }, [location]);

  return null;
}

export default ScrollToTop;
