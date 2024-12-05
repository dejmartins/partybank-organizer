"use client";
import { useEffect, useState } from "react";
import Loader from "../loaders/loader";

import PrimaryButton from "@/shared/components/buttons/primary-button";
import { validateOtp } from "@/services/auth-service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { storeAuthToken } from "@/shared/utils/ls";
import { useDispatch } from "@/store/store";
import { setUser } from "@/store/userSlice/UserSlice";
import { extractUsername } from "@/shared/utils/helper";

export default function VerifyEmailForm() {
  const [isloading, setisloading] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [otpCode, setotpCode] = useState("");
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(false);
  const [intendedRoute, setintendedRoute] = useState("");

  const openLoaderModal = (e: any) => {
    e.preventDefault();
    setIsLoaderModalOpen(true);
  };

  const closeLoaderModal = () => setIsLoaderModalOpen(false);
  const handleCodeInputChange = (value: string, index: number) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`digit-${index + 1}`)?.focus();
    }
  };

  const handleDelete = (e: any) => {
    if (e.keyCode === 8 && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
    }
  };
  const router = useRouter();
  const dispatch = useDispatch();

  const handleValidation = () => {
    if (isloading) return;
    setIsLoaderModalOpen(true);
    const queryApi = () => {
      if (otpCode.length === 6) {
        setisloading(true);
        validateOtp({ code: otpCode }).subscribe({
          next: (res) => {
            if (res) {
              const { token, user } = res.data;
              storeAuthToken(token);
              dispatch(
                setUser({
                  ...user,
                  isAuth: true,
                  username: extractUsername(user.username),
                })
              );
              localStorage.removeItem("tempemail");
              if (intendedRoute) {
                router.push(intendedRoute);
              } else {
                router.push("/dashboard");
              }
            } else {
              toast.info(res.error);
              setIsLoaderModalOpen(false);
            }
          },
          error: (msg) => {
            toast.error(msg.message);
            setisloading(false);
            setIsLoaderModalOpen(false);
          },
          complete: () => {
            setisloading(false);
            setIsLoaderModalOpen(false);
          },
        });
      }
    };
    queryApi();
  };

  useEffect(() => {
    setotpCode(code.join(""));
  }, [code]);

  useEffect(() => {
    const intendedRouteTemp = localStorage.getItem("intendedRoute");
    if (intendedRouteTemp) {
      setintendedRoute(intendedRouteTemp);
    }
  }, []);

  return (
    <div className="text-left w-full">
      <div className="flex justify-center space-x-2 md:space-x-4 mb-[30px] w-full">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`digit-${index}`}
            type="number"
            maxLength={1}
            value={digit}
            onChange={(e) => handleCodeInputChange(e.target.value, index)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-[10px] p-[10px] text-center text-[18px] font-bold focus:outline-none focus:ring-2 focus:ring-[var(--pb-c-red)] focus:border-[var(--pb-c-red)] border border-partybank-border"
            onKeyUp={(e: any) => handleDelete(e)}
          />
        ))}
      </div>

      <PrimaryButton
        isloading={false}
        title=" Verify Email"
        isDisabled={otpCode.length == 6 ? false : true}
        onClick={handleValidation}
      />

      <Loader isOpen={isLoaderModalOpen} message="Verifying Email" />
    </div>
  );
}
