"use client";
import Image from "next/image";
import Button from "../buttons/button";
import { useState } from "react";
import { isValidEmail } from "@/shared/utils/helper";
import { loginWithEmail } from "@/services/auth-service";
import { toast } from "react-toastify";
import PrimaryButton from "@/shared/components/buttons/primary-button";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const [email, setemail] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const handleLoginWithEmail = (e: any) => {
    const queryApi = () => {
      if (email.length && isValidEmail(email)) {
        setisLoading(true);
        loginWithEmail({ username: email }).subscribe({
          next: (res) => {
            if (res && res.data.username === email.toLowerCase()) {
              setemail("");
              toast.success(res.data.message);
              localStorage.setItem("tempemail", email.toLowerCase());
              router.push("/auth/verify");
            } else {
              toast.info(res.error);
            }
          },
          error: (msg) => {
            toast.error(msg.message);
            setisLoading(false);
          },
          complete: () => {
            setisLoading(false);
          },
        });
      }
    };
    queryApi();
  };

  return (
    <div className="text-left w-full">
      <label className="text-[18px] font-[500]">Email</label>
      <input
        className="w-full rounded-[10px] p-[10px] mt-[8px] mb-[30px] focus:outline-none focus:ring-2 focus:ring-[var(--pb-c-red)] focus:border-[var(--pb-c-red)]"
        placeholder="johndoe@thepartybank.com"
        value={email}
        onChange={(event) => setemail(event.target.value)}
      />

      <PrimaryButton
        isloading={isLoading}
        title="Continue with Email"
        isDisabled={isValidEmail(email) ? false : true}
        onClick={handleLoginWithEmail}
      />

      <hr className="my-8 border-[1px]" />

      {/* <GoogleButton /> */}
    </div>
  );
}

function SigninButton() {
  return (
    <Button className="bg-[var(--pb-c-red)] text-[var(--pb-c-white)] text-[18px] font-bold">
      Continue with Email
    </Button>
  );
}

function GoogleButton() {
  return (
    <Button className="bg-[var(--pb-c-white)] text-[18px] font-[500]">
      <Image
        src="/google-icon.png"
        alt="Google Icon"
        width={20}
        height={20}
        className="mr-4"
      />
      Continue with Google
    </Button>
  );
}
