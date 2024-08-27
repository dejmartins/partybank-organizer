'use client'
import Image from "next/image";
import { useState } from "react";

export default function Card(
    { imageUrl, name, description }: { imageUrl: string | null, name: string, description: string }) {
  
    return (
      <div className="border w-[350px] p-4">
        <div className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                style={{
                    backgroundImage: `url("${imageUrl}")` || '/defaultImage.png',
                }}
            >
        </div>
        <h4 className="mt-4 text-xl font-bold">{name}</h4>
        <p className="mt-2 text-md">{description}</p>
      </div>
    );
  }
  