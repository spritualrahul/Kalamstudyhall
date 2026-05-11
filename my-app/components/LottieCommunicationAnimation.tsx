"use client";

import React from "react";

export function LottieCommunicationAnimation() {
  return (
    <div className="mt-4 flex justify-center">
      {/* @ts-ignore — web component */}
      <dotlottie-wc
        src="https://lottie.host/69a796b8-0b95-4ad8-8bec-cdd01d749992/TbM5wvq8MF.lottie"
        style={{ width: "120px", height: "120px" }}
        autoplay
        loop
      />
    </div>
  );
}
