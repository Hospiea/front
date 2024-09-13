"use client";
import Header from "@/components/main/header";
import { useEffect, useLayoutEffect, useRef } from "react";
import Home from "./page";
import Footer from "@/components/main/footer";
import { usePathname, useRouter } from "next/navigation";

const Body = ({ children }: { children: React.ReactNode }) => {
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  const vhRef = useRef(0);
  const pathname = usePathname();

  

  useEffect(() => {
    vhRef.current = window.innerHeight;
    if (bodyRef.current && bodyRef.current.scrollHeight > vhRef.current) {
      bodyRef.current?.classList.add("overbody");
      bodyRef.current?.classList.remove("underbody");
    } else {
      bodyRef.current?.classList.remove("overbody");
      bodyRef.current?.classList.add("underbody");
    }
  }, [pathname]);

  return (
    <body ref={bodyRef} className="outline">
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default Body;
