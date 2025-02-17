"use client";

import { toast as t } from "sonner";

import { cn } from "@/utils/utils";

interface ToastInterface {
  id: number | string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  description: string;
}

export const toast = (toast: Omit<ToastInterface, "id">) => {
  return t.custom((id) => <Toast id={id} {...toast} />);
};

export const Toast = ({ id, type, title, description }: ToastInterface) => {
  console.log(id);

  return (
    <div
      className={cn(
        "border-secondary flex size-full flex-col border p-2 md:min-w-[364px]",
        {
          "bg-green-300": type === "success",
          "bg-red-300": type === "error",
          "bg-yellow-300": type === "warning",
          "bg-blue-300": type === "info",
        },
      )}
    >
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};
