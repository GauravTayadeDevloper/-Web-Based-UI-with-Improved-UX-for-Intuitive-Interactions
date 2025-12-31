import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function RouteLoader({ children }) {
  const location = useLocation();
  const firstLoad = useRef(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ❌ No loader on Home page
    if (location.pathname === "/") return;

    // ❌ No loader on first page load
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
