'use client'
import { useState } from "react";

export default function VerifyEmailForm() {
    const [code, setCode] = useState(["", "", "", ""]);

    const handleChange = (value: string, index: number) => {
        if (value.length > 1) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            document.getElementById(`digit-${index + 1}`)?.focus();
        }
    };

    return (
        <form className="text-left">
            <div className="flex space-x-4 justify-center mb-[30px]">
                {code.map((digit, index) => (
                    <input
                        key={index}
                        id={`digit-${index}`}
                        type="number"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        className="w-12 h-12 rounded-[10px] p-[10px] text-center text-[18px] font-bold focus:outline-none focus:ring-2 focus:ring-[var(--pb-c-red)] focus:border-[var(--pb-c-red)]"
                    />
                ))}
            </div>

            <button className="w-full p-[10px] rounded-[10px] bg-[var(--pb-c-red)] text-[var(--pb-c-white)] text-[18px] font-bold">
                Verify Email
            </button>
        </form>
    );
}
