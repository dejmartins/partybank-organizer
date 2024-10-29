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

export function convertIsoToDate(isoString: any) {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function dateToISOFormat(dateStr: any) {
  const [day, month, year] = dateStr.split("-");
  const date = new Date(year, month - 1, day);
  return date.toISOString();
}

export function convertTimeToISO(timeStr: any) {
  const [time, period] = timeStr.split(" ");
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  let hour24 = hours;
  if (period === "PM" && hours !== 12) {
    hour24 = hours + 12;
  } else if (period === "AM" && hours === 12) {
    hour24 = 0;
  }
  date.setHours(hour24);
  date.setMinutes(minutes);

  return date.toISOString();
}
