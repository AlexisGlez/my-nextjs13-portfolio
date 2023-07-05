"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { TransitionEffect } from "@/shared/components/TransitionEffect";

export const NavigationEvents: React.FunctionComponent<{
  onRouteChange: () => void;
}> = ({ onRouteChange }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    onRouteChange();
  }, [pathname, searchParams, onRouteChange]);

  if (!isMounted.current) {
    return <div />;
  }

  return <TransitionEffect key={pathname + "TransitionEffect"} />;
};
