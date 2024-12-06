"use client";

import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CldUploadButton uploadPreset="svpsghx2" />
      
    </main>
  );
}
