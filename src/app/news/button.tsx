"use client";

export default function Button() {
  return (
    <button
      className="bg-white text-lg py-2 px-4 text-blue-950"
      onClick={() => {
        alert("Merci du soutiens !!");
      }}
    >
      Nous soutenir !
    </button>
  );
}
