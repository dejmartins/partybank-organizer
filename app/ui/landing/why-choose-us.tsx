import { MicrophoneIcon, ShieldCheckIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
    return (
      <section className="flex flex-col justify-between md:flex-row relative gap-12 border rounded-[30px] h-full overflow-hidden">
        <div className="flex flex-col items-start z-10 p-12">
          <h2 className="text-[50px] md:text-[90px] font-[300] mb-8 leading-tight">Why Choose <br/><span className="font-[600] text-[var(--pb-c-red)] italic">Partybank?</span></h2>
          <p className="mb-8 max-w-xl">
            Partybank empowers organizers of live entertainment events—whether it’s a vibrant party, a major music festival, or a sold-out concert—with the tools to create extraordinary experiences, from planning to execution.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="flex flex-col">
              <div className="flex h-14 w-16 flex justify-center items-center p-3 border rounded-[10px] bg-[#F9F7F7] mb-3"><MicrophoneIcon className="w-8 text-[var(--pb-c-red)]" /></div>
              <div>
                <h4 className="text-xl font-[700]">Built for Live Entertainment</h4>
                <p>
                  Partybank is purpose-built for organizers of large-scale events like parties, festivals, and concerts, offering specialized tools to streamline event management.
                </p>
              </div>
            </div>
  
            <div className="flex flex-col">
            <div className="flex h-14 w-16 flex justify-center items-center p-3 border rounded-[10px] bg-[#F9F7F7] mb-3"><UserGroupIcon className="w-8 text-[var(--pb-c-red)]" /></div>
              <div>
                <h4 className="text-xl font-[700]">Seamless Experience for Attendees</h4>
                <p>
                  From ticket discovery to seamless entry, Partybank ensures a hassle-free, enjoyable experience for your audience.
                </p>
              </div>
            </div>
  
            <div className="flex flex-col">
            <div className="flex h-14 w-16 flex justify-center items-center p-3 border rounded-[10px] bg-[#F9F7F7] mb-3"><SparklesIcon className="w-8 text-[var(--pb-c-red)]" /></div>
              <div>
                <h4 className="text-xl font-[700]">Real-Time Insights</h4>
                <p>
                  Track ticket sales, attendee data, and key metrics live, giving you full control over your event&apos;s success.
                </p>
              </div>
            </div>
  
            <div className="flex flex-col">
            <div className="flex h-14 w-16 flex justify-center items-center p-3 border rounded-[10px] bg-[#F9F7F7] mb-3"><ShieldCheckIcon className="w-8 text-[var(--pb-c-red)]" /></div>
              <div>
                <h4 className="text-xl font-[700]">Secure and Reliable</h4>
                <p>
                  With secure payment and ticketing systems, Partybank offers peace of mind for both organizers and attendees.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div
          className="hidden md:block md:w-1/5 bg-right bg-repeat opacity-5 h-56 md:min-h-[820px] bg-left bg-cover"
          style={{
            backgroundImage: `url('/logo.svg')`
          }}
        ></div>
      </section>
    );
  }
  