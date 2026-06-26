import { useEffect } from "react";
import { useNavigate } from "react-router";
import { SplashPage } from "~/features/splash/SplashPage";
import type { Route } from "./+types/splash";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PhotoTrace AR - Splash Screen" },
  ];
}

export default function SplashRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding1");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <SplashPage />;
}
