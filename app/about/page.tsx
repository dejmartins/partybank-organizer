'use client'
import Header from "../ui/landing/header";
import Footer from "../ui/landing/footer";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

export default function Page() {
    const [isOrganizer, setIsOrganizer] = useState(true);
  return (
    <main>
        <Header />

        <div className="relative pb-3 mb-20">
            <div className="relative flex items-center justify-center flex-col px-6 bg-[#FFF9FA]">
                <div className="flex justify-center mt-36">
                    <p className="border inline-block border border-[#FBD1D9] rounded-[20px] bg-[#FBD1D933] p-2 px-3 font-[600]">
                    About Us
                    </p>
                </div>

                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91B41] to-[#9E3AC3] font-[400] text-[clamp(30px,10vw,150px)] mt-2">
                    thepartybank
                </p>

                <p className="text-black text-lg mt-3 text-center leading-6 max-w-[1000px] mx-2">
                    At Partybank, we&apos;re all about enhancing the way events like parties, festivals, concerts, and large gatherings are organized and experienced. Our platform uses cutting-edge technology to simplify the entire event process—making it easier for organizers to plan, manage, and promote their events, while giving attendees a seamless and enjoyable ticket-buying experience.
                </p>
                <p className="text-black text-lg mt-3 text-center leading-6 max-w-[900px] pb-16 mx-2">
                    We are here to make every event more memorable by providing the tools to create smooth, hassle-free experiences for both organizers and guests.
                </p>

                <div className="absolute bottom-0 w-full h-2 mt-6 bg-gradient-to-r from-[#E91B41] to-[#9E3AC3]"></div>
            </div>

            <div className="container mx-auto px-3 md:px-6 mt-20">
                <div className="flex w-full flex-col md:flex-row gap-5">
                    <div className="bg-[#F9F8F7] bg-cover rounded-[30px] p-3 w-full md:w-1/2 h-[500px] md:h-[700px]"
                        style={{ backgroundImage: 'url("https://res.cloudinary.com/drddoxnsi/image/upload/v1727074882/PARTYBANK/aliane-schwartzhaupt-2Y2NvdlSTls-unsplash_duizot.jpg")' }}
                    >
                    </div>
                    
                    <div className="flex flex-col gap-5 w-full md:w-1/2 h-[500px] md:h-[700px]">
                        <div className="rounded-[30px] bg-cover bg-[#4E0916] p-6 flex-grow flex flex-col justify-center items-center"
                            style={{ backgroundImage: 'url("https://res.cloudinary.com/drddoxnsi/image/upload/v1727074880/PARTYBANK/abstral-official-YmARYcXP6xc-unsplash_vvijgq.jpg")' }}
                        >
                        </div>
                        <div className="relative bg-[#4E0916] bg-cover rounded-[30px] p-6 flex flex-col flex-grow w-full justify-center items-center"
                            style={{ backgroundImage: 'url("https://res.cloudinary.com/drddoxnsi/image/upload/v1727074872/PARTYBANK/jeff-tumale-2vSYfLxQ6UE-unsplash_byxtoe.jpg")', backgroundPosition: 'center'  }}
                        >
                        </div>
                    </div> 
                </div>
            </div>

            {/* Mission and Vision */}
            <div className="container mx-auto px-3 md:px-6 flex flex-col md:flex-row justify-between items-center gap-5 my-20">
                <div className="relative p-10 w-full md:w-1/2 bg-[#FFF9FA] md:h-[350px]">
                    <h2 className="absolute  top-0 font-[400] text-[30px] md:text-[50px] md:text-[60px] bg-[#FBD1D933] left-0 px-10 py-2">Vision</h2>
                    <p className="w-full md:w-[80%] mt-14 md:mt-24">Our vision is to enhance the way people experience live entertainment through technology. We aim to be the go-to platform for organizers and attendees of parties, festivals, and concerts, constantly improving our tools to meet the needs of the modern event landscape.</p>
                    <div className="absolute left-0 bottom-0 w-full h-2 mt-6 bg-gradient-to-r from-[#E91B41] to-[#9E3AC3]"></div>
                </div>
                <div className="relative p-10 w-full md:w-1/2 bg-[#FFF9FA] md:h-[350px]">
                    <h2 className="absolute top-0 font-[400] text-[30px] md:text-[50px] md:text-[60px] bg-[#FBD1D933] left-0 px-10 py-2">Mission</h2>
                    <p className="w-full md:w-[80%] mt-14 md:mt-24">Our mission is to use technology to improve the way people experience live events, such as parties, festivals, and concerts. We empower event organizers with an all-in-one platform that streamlines everything from event creation to ticket validation, while giving attendees the easiest and most secure way to discover and purchase tickets.</p>
                    <div className="absolute left-0 bottom-0 w-full h-2 mt-6 bg-gradient-to-r from-[#9E3AC3] to-[#E91B41]"></div>
                </div>
            </div>
            
            {/* What we do */}
            <div className="container mx-auto px-3 md:px-6 flex flex-col justify-center items-center gap-6 my-5 px-6">
                <p className="font-[400] text-[clamp(30px,5vw,150px)]">
                   What we do
                </p>
                <p className="mx-2">
                    Partybank is designed for organizers of live entertainment events—whether it&apos;s a high-energy party, a massive music festival, or a packed concert.
                </p>
            </div>

            <div className="relative border border-black relative gap-16 bg-cover md:gap-10 px-6 py-20 z-50 px-16 w-full flex flex-col items-center justify-center mt-10 min-h-[800px] md:min-h-[500px]"
                style={{ backgroundImage: 'url("/faq.svg")' }}
            >
                {/* Toggle Buttons */}
                <div className="absolute top-16 col-span-1 md:col-span-4 flex justify-center space-x-4">
                    <button
                        onClick={() => setIsOrganizer(true)}
                        className={`border inline-block rounded-[20px] p-2 px-3 text-white font-[600] bg-[#FBD1D933] ${
                            isOrganizer ? "border border-[#FBD1D9]" : "border-none"
                        }`}
                    >
                        For Organizers
                    </button>
                    <button
                        onClick={() => setIsOrganizer(false)}
                        className={`border inline-block rounded-[20px] p-2 px-3 text-white font-[600] bg-[#FBD1D933] ${
                            !isOrganizer ? "border border-[#FBD1D9]" : "border-none"
                        }`}
                    >
                        For Attendees
                    </button>
                </div>

                {/* Content for Organizers */}
                {isOrganizer && (
                    <div className="mt-16 grid gap-cols-1 md:grid-cols-2 gap-12 md:gap-6 gap-x-20 justify-center text-white">
                        <div className="relative w-72 mx-auto">
                            <p className="font-[700] mb-2">Effortless Event Management</p>
                            <p>
                                With Partybank, creating and managing your event is fast and straightforward.
                            </p>
                        </div>

                        <div className="relative w-72 mx-auto">
                            <p className="font-[700] mb-2">Real-Time Insights</p>
                            <p>
                                Track ticket sales, attendee engagement, and performance analytics in real time to make informed decisions during and leading up to your event.
                            </p>
                        </div>

                        <div className="relative w-72 mx-auto">
                            <p className="font-[700] mb-2">Quick Ticket Validation</p>
                            <p>
                                Use our web app to scan and validate tickets at your event, ensuring quick entry for all attendees.
                            </p>
                        </div>

                        <div className="relative w-72 mx-auto">
                            <p className="font-[700] mb-2">Flexible Payouts</p>
                            <p>
                                Request payouts at any time, or receive automatic payments shortly after your event is complete.
                            </p>
                        </div>
                    </div>
                )}

                {/* Content for Attendees */}
                {!isOrganizer && (
                    <div className="mt-16 grid gap-cols-1 md:grid-cols-2 gap-12 md:gap-6 gap-x-20 justify-center text-white">
                        <div className="relative w-72 mx-auto">
                            <p className="font-[700] mb-2">Discover Events</p>
                            <p>
                            Easily find and explore events near you, tailored to your interests.
                            </p>
                        </div>

                        <div className="relative w-72 mx-auto">
                            <p className="font-[700] mb-2">Seamless Ticket Purchase</p>
                            <p>
                            Purchase tickets securely and effortlessly through our user-friendly platform.
                            </p>
                        </div>

                        <div className="relative w-72 mx-auto">
                            <p className="font-[700] mb-2">Quick Entry</p>
                            <p>
                            Present your digital ticket at the event and get in quickly with fast validation.
                            </p>
                        </div>

                        <div className="relative w-72 mx-auto">
                            <p className="font-[700] mb-2">Stay Updated</p>
                            <p>
                            Get real-time updates and notifications for events you&apos;re attending.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="container mx-auto px-3 md:px-6 flex flex-col justify-center items-center gap-6  mt-20 my-5 px-6">
                <p className="font-[400] text-[clamp(30px,5vw,150px)]">
                   Why Choose Us
                </p>
                <p className="mx-2">
                    We&apos;re all about enhancing the way events like parties, festivals, concerts, and large gatherings are organized and experienced.
                </p>
            </div>

            <div className="md:px-32 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 px-6 bg-[#FFF9FA] py-20 z-50 px-16 justify-center">
                <div className="relative">
                    <p className="font-semibold">Built for Live Entertainment</p>
                    <p>Partybank is specially designed for events like parties, festivals, and concerts, providing organizers with the tools they need to manage large-scale events effectively.</p>
                    <p className="absolute text-[160px] font-bold text-gray-100 -top-16 -z-10">1</p>
                </div>
                
                <div className="relative">
                    <p className="font-semibold">Seamless Experience for Attendees</p>
                    <p>From ticket discovery to entry, our platform ensures that attendees have a smooth, enjoyable experience.</p>
                    <p className="absolute text-[160px] font-bold text-gray-100 -top-16 -z-10">2</p>
                </div>
                
                <div className="relative">
                    <p className="font-semibold">Real-Time Insights</p>
                    <p>Organizers can keep track of ticket sales, attendee data, and other key metrics in real-time, ensuring they have full control over their event&apos;s success.</p>
                    <p className="absolute text-[160px] font-bold text-gray-100 -top-16 -z-10">3</p>
                </div>
                
                <div className="relative">
                    <p className="font-semibold">Secure and Reliable</p>
                    <p>Partybank provides secure payment and ticketing systems, giving both organizers and attendees peace of mind throughout the entire event process.</p>
                    <p className="absolute text-[160px] font-bold text-gray-100 -top-16 -z-10">4</p>
                </div>

                <div className="absolute bottom-0 w-full h-2 mt-6 bg-gradient-to-r from-[#E91B41] to-[#9E3AC3]"></div>
            </div>


        </div>

        <Footer />
    </main>
  );
}
