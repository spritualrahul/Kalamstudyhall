"use client";

import React from "react";

export function LottieHolisticAnimation() {
  return (
    <div className="mt-4 flex justify-center">
      {/* @ts-ignore — web component */}
      <dotlottie-wc
        src="https://lottie.host/35e7ee4e-e8e2-4d10-858e-ee89fc9d6a85/S7uI3PTz6Y.lottie"
        style={{ width: "120px", height: "120px" }}
        autoplay
        loop
      />
    </div>
  );
}
