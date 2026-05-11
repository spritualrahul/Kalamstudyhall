"use client";

import React from "react";

export function LottieMessageAnimation() {
  return (
    <div className="inline-flex items-center">
      {/* @ts-ignore — web component */}
      <dotlottie-wc
        src="https://lottie.host/9f9cd558-f213-466c-b9bb-0c2bb203fe29/jPBhASk2L5.lottie"
        style={{ width: "140px", height: "140px" }}
        autoplay
        loop
      />
    </div>
  );
}
