import { useEffect, useState } from "react";

export function useWindowListener(eventTyoe: string, listener: EventListener) {
  useEffect(() => {
    window.addEventListener(eventTyoe, listener);

    return () => {
      window.removeEventListener(eventTyoe, listener);
    };
  }, []);
}
