"use client";

import React, { useEffect, useState } from "react";

import { removeStoredAuthToken } from "../utils/ls";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "@/store/store";
import { clearUser } from "@/store/userSlice/UserSlice";

export default function useAuth() {
  const user = useSelector((state) => state.user);
  const [isAuth, setisAuth] = useState(user?.data.auth);
  const [USER, setUSER] = useState<any>(user.data);
  const [UserSub, setusersub] = useState<any>(user.sub);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    removeStoredAuthToken();
    dispatch(clearUser());
    router.push("/");
  };

  useEffect(() => {
    console.log("===>", user);
    // setisAuth(user.data.auth);
    // setUSER(user.data);
    // setusersub(user.sub);
  }, [user?.data]);

  return {
    isAuth,
    USER,
    logoutUser,
  };
}
