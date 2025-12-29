import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function RouteLoader({ children, delay = 2000 }) {
  const location = useLocation();
  const firstLoadRef = useRef(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (firstLoadRef.current) {
      // First page load → NO loader
      firstLoadRef.current = false;
      return;
    }

    // Route change → show loader
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, delay]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
