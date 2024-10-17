'use client'
import { useState } from "react";
import Header from "../ui/landing/header";
import Footer from "../ui/landing/footer";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqList = [
    {
        question: "What is Partybank and how does it work?",
        answer:
          "Partybank is an event management platform that allows you to create, manage, and sell tickets for your events. It helps both organizers and attendees by offering a seamless experience.",
    },
    {
      question: "Is there customer support available?",
      answer:
        "Yes, Partybank offers dedicated customer support to assist event organizers. Whether you need help with setting up your event, tracking sales, or handling attendee issues, our support team is available to provide assistance.",
    },
    {
      question: "Are there any fees for using Partybank?",
      answer:
        "Partybank charges a small service fee on each ticket sold. This fee can either be passed on to the attendee or absorbed by the event organizer, depending on your preference.",
    },
    {
      question: "How do I get paid for ticket sales?",
      answer:
        "Event organizers can request a payout at any time before the event. However, if no request is made, organizers will automatically receive their payments after the event date, typically within a few hours or less than 24 hours after the event has concluded.",
    },
    {
      question: "Is there a way to validate tickets at the event?",
      answer:
        "Yes, Partybank provides QR codes for each ticket. You can use our web app to scan and validate tickets at the event, ensuring a smooth check-in process.",
    },
    {
      question: "Can I collect attendee data?",
      answer:
        "Currently, Partybank provides access to basic attendee information such as their email address and phone number. While the data collection is not fully customizable yet, these details are available to help you manage your attendees effectively.",
    },
    {
      question: "Can I track ticket sales and attendee information?",
      answer:
        "Yes, Partybank offers real-time analytics that help you monitor ticket sales and view attendee details. This allows you to track event performance and gain insights into your audience.",
    },
    {
      question: "How do I manage ticket types and pricing?",
      answer:
        "Partybank enables you to create multiple ticket types, such as General Admission or VIP. You can set different prices, create early-bird discounts, and control the availability of each ticket type through our intuitive event management tools.",
    },
  ];

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
