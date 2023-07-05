"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { TransitionEffect } from "@/shared/components/TransitionEffect";

export const NavigationEvents: React.FunctionComponent<{
  onRouteChange: () => void;
}> = ({ onRouteChange }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onRouteChange();
  }, [pathname, searchParams, onRouteChange]);

  return <TransitionEffect key={pathname + "TransitionEffect"} />;
};
