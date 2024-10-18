import Image from "next/image";

export default function WhatWeDo() {
    return (
      <section className="py-16 bg-[#FFFFFF] my-5 rounded-[20px]">
        <div className="mx-auto px-3 md:px-6">
            <div className="flex justify-center">
                <p className="border inline-block border border-[#FBD1D9] rounded-[20px] bg-[#FBD1D933] mb-10 p-2 px-3">What we do?</p>
            </div>
          <h2 className="text-[50px] font-[700] text-center">What We Do?</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Partybank is designed for organizers of live entertainment events—whether it&apos;s a high-energy party, a massive music festival, or a packed concert.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col p-4">
              <div className="relative border bg-[#FBFBFB] pb-0 mb-4 overflow-hidden h-44 lg:h-56 xl:h-80 rounded-[20px]">
                <img 
                  src="/event-creation.svg" 
                  alt="Event Creation Simplified" 
                  className="absolute -bottom-10 -right-10 h-full object-contain" 
                />
              </div>

              <h3 className="text-xl font-[700]">Event Creation Simplified</h3>
              <p className="text-gray-600">With Partybank, creating and managing your event is fast and straightforward.</p>
            </div>

            <div className="flex flex-col p-4">
              <div className="relative border bg-[#FBFBFB] pb-0 mb-4 overflow-hidden h-44 lg:h-56 xl:h-80 rounded-[20px]">
                <img 
                  src="/real-time.svg" 
                  alt="Real-Time Event Monitoring" 
                  className="absolute -bottom-10 -right-10 h-full object-contain" 
                />
              </div>

              <h3 className="text-xl font-[700]">Real-Time Event Monitoring</h3>
              <p className="text-gray-600">Track ticket sales, attendee engagement, and performance analytics in real time to make informed decisions during and leading up to your event.</p>
            </div>

            <div className="flex flex-col p-4">
              <div className="relative border bg-[#FBFBFB] pb-0 mb-4 p-10 overflow-hidden h-44 lg:h-56 xl:h-80 rounded-[20px]">
                <img 
                  src="/smooth-ticket.svg" 
                  alt="Smooth Ticket Validation" 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-auto w-[80%] object-contain" 
                />
              </div>

              <h3 className="text-xl font-[700]">Smooth Ticket Validation</h3>
              <p className="text-gray-600">Use our web app to scan and validate tickets at your event, ensuring quick entry for all attendees.</p>
            </div>

            <div className="flex flex-col p-4">
              <div className="relative border bg-[#FBFBFB] p-10 mb-4 overflow-hidden h-44 lg:h-56 xl:h-80 rounded-[20px] flex items-center justify-center">
                <img 
                  src="/flexible-payout.svg" 
                  alt="Flexible Payout Options" 
                  className="h-auto lg:w-[80%] object-contain" 
                />
              </div>
              <h3 className="text-xl font-[700]">Flexible Payout Options</h3>
              <p className="text-gray-600">Request payouts at any time, or receive automatic payments shortly after your event is complete.</p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  