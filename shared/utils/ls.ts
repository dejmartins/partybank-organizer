import SecureLS from "secure-ls";
// let ls = new SecureLS({ encodingType: "rc4", isCompression: true });

//@ts-ignore
let ls: any;
const init = () => {
  ls = new SecureLS({ encodingType: "rc4", isCompression: true });
};
if (global?.localStorage) init();

export const getStoredAuthToken = () => ls.get("movamSmeToken");
export const storeAuthToken = (token: string) => ls.set("movamSmeToken", token);

export const getStoredClientUser = () => {
  if (typeof window !== "undefined") {
    return ls.get("movamSMEClientUser");
  }
};
export const storeClientUser = (user: string) =>
  ls.set("movamSMEClientUser", user);

export const removeStoredAuthToken = () => {
  ls.remove("movamSmeToken");
  ls.remove("movamSMEClientUser");
};
