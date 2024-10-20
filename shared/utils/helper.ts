export function getTimeWithAmPm(dateString: any) {
  const date = new Date(dateString);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes} ${amPm}`;
}

export function createEllipsis(str: string, maxLength: number) {
  try {
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + "...";
  } catch (error) {}
}

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function extractUsername(email: string) {
  try {
    return email.split("@")[0];
  } catch (error) {}
}

export const uploadToCloudinary = async (file: any, upload_preset: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", upload_preset);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    if (res.ok) {
      return data.secure_url;
    } else {
      throw new Error("Failed to upload image to Cloudinary");
    }
  } catch (err) {
    console.error("Error uploading image:", err);
    // throw err;
  }
};

export function getVenueName(str: string) {
  return str.split(",")[0];
}
