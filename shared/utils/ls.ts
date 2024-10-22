import SecureLS from "secure-ls";
// let ls = new SecureLS({ encodingType: "rc4", isCompression: true });

//@ts-ignore
let ls: any;
const init = () => {
  ls = new SecureLS({ encodingType: "rc4", isCompression: true });
};
if (global?.localStorage) init();

export const getStoredAuthToken = () => ls.get("partybankToken");
export const storeAuthToken = (token: string) =>
  ls.set("partybankToken", token);

export const getStoredClientUser = () => {
  if (typeof window !== "undefined") {
    return ls.get("partbankClientUser");
  }
};
export const storeClientUser = (user: string) =>
  ls.set("partbankClientUser", user);

export const removeStoredAuthToken = () => {
  ls.remove("movamSmeToken");
  ls.remove("partbankClientUser");
};
