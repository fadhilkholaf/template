import { compareSync, hashSync } from "bcryptjs";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const hash = (password: string) => {
  return hashSync(password);
};

export const compareHash = (password: string, encryptedPassword: string) => {
  return compareSync(password, encryptedPassword);
};

export const idr = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

export const wib = (date: Date) => {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
    timeZoneName: "shortGeneric",
  }).format(date);
};

export const responseSuccess = (message: string, data?: any) => {
  return {
    success: true,
    message,
    data,
  };
};

export const responseError = (message: string, data?: any) => {
  return {
    success: false,
    message,
    data,
  };
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
