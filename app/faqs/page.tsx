'use client'
import { useState } from "react";
import Header from "../ui/landing/header";
import Footer from "../ui/landing/footer";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { faqList } from "../lib/placeholder-data";

export default function Page() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <main className="">
        <Header />

        <div className="relative pb-3 mb-56">
            <div
                className="h-[400px] bg-cover bg-center flex items-center justify-center flex-col px-3"
                style={{ backgroundImage: 'url("/faq.svg")' }}
            >
                <div className="flex justify-center">
                    <p className="border inline-block border border-[#FBD1D9] rounded-[20px] bg-[#FBD1D933] mb-10 p-2 px-3 text-white font-[600]">
                    FAQs
                    </p>
                </div>
                <p className="text-white text-2xl md:text-4xl font-bold">
                    Every question has an answer
                </p>
                <p className="text-white text-lg mt-3 text-center leading-6">
                    Have questions related to Partybank, we are here to provide the
                    answers you need.
                </p>
            </div>

            <div className="flex flex-col items-center mt-16 px-5">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Popular Questions and Answers
                </h1>
                <p className="max-w-[800px] text-center mt-2">
                    Everything you need to know about Partybank product and how it
                    works. If you need further help or assistance, or can&apos;t find a
                    related question and answer here, please reach our customer channel.
                </p>

                <div className="w-full max-w-[800px] mt-16">
                    {faqList.map((faq, index) => (
                    <div key={index} className="border-b-4 border-[#080D18] py-3">
                        <div
                            className="flex justify-between items-center cursor-pointe my-3"
                            onClick={() => toggleQuestion(index)}
                        >
                            <p className="text-xl font-[700]">{faq.question}</p>
                            <button className="text-xl">
                                {openQuestion === index ? 
                                    <div className="p-2 rounded-[10px] bg-[#F3F5F5]"><MinusIcon className="w-4 stroke-2" /></div> 
                                    : <div className="p-2 rounded-[10px] bg-[#F3F5F5]"><PlusIcon className="w-4 stroke-2" /></div>
                                }
                            </button>
                        </div>

                        {openQuestion === index && (
                            <div className="border rounded-[10px] p-4 my-2">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <Footer />
    </main>
  );
}
