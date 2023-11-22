import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-white font-bold text-4xl bg-gradient-to-r from-blue-500 to-purple-500">
      <div>
        <p className="text-6xl animate-bounce">Welcome</p>
      </div>
    </div>
  );
}
