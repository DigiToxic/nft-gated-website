import React from "react";

export default function ThirdwebGuideHeader() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: -120,
          left: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open(
            "https://digi-portfolio.netlify.app/",
            "_blank"
          )
        }
      />

      <div
        style={{
          position: "fixed",
          top: 29,
          left: 5,
        }}
      >
        <img
          src={"/Name.png"}
          width={80}
          height={40}
          className="-rotate-[45deg]"
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://github.com/DigiToxic",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}
