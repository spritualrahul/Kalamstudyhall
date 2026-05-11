"use client";

/* TypeScript declaration for the custom web component */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          autoplay?: boolean | string;
          loop?: boolean | string;
          style?: React.CSSProperties;
        },
        HTMLElement
      >;
    }
  }
}

import React from "react";

export function LottieGroupAnimation() {
  return (
    <div className="mt-4 flex justify-center">
      {/* @ts-ignore — web component, not a React element */}
      <dotlottie-wc
        src="https://lottie.host/c730bcaa-e014-430a-8d6b-66de081ac3dc/zIgzt8WT0P.lottie"
        style={{ width: "120px", height: "120px" }}
        autoplay
        loop
      />
    </div>
  );
}
