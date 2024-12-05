"use client";
import TopNav from "../ui/dashboard/topnav";
import Header from "../ui/dashboard/header";
import { useEffect } from "react";
import useAuth from "@/shared/hooks/useAuth";
import { useRouter } from "next/navigation";
import Footer from "../ui/landing/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { USER } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!USER.isAuth) {
      router.back();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-[100vh] bg-[var(--pb-c-soft-grey)] overflow-x-hidden">
      <Header />

      <TopNav />

      <div className="flex-grow flex flex-col mt-[64px] md:mt-[170px] bg-[var(--pb-c-white)] overflow-y-auto mb-16">
        {children}
      </div>

      <Footer />
    </div>
  );
}
