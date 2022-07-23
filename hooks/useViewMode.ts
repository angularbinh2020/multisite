import { useEffect, useState } from "react";

const useViewMode = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isMobileApp, setIsMobileApp] = useState(true);
  useEffect(() => {
    const initIsDesktop = window?.innerWidth >= 992;
    const initIsMobile = window?.innerWidth < 992;
    const searchParams = new URLSearchParams(window?.location?.search);
    const initIsMobileApp = Boolean(searchParams.get("ViewMobileApp"));
    setIsDesktop(initIsDesktop);
    setIsMobileApp(initIsMobile);
    setIsMobile(initIsMobileApp);
  }, []);
  return { isDesktop, isMobile, isMobileApp };
};

export default useViewMode;
