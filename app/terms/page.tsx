import Header from "../ui/landing/header";
import Footer from "../ui/landing/footer";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Page() {

  return (
    <main className="">
        <Header />

        <div className="relative pb-3 mb-20">
            <div
                className="h-[350px] bg-cover bg-center flex items-start justify-center flex-col px-10 md:px-20"
                style={{ backgroundImage: 'url("/policy.svg")' }}
            >
                <p className="text-white text-2xl md:text-4xl font-bold mt-5">
                    Terms and Conditions
                </p>
                <p className="text-white text-lg mt-3 text-left leading-6 max-w-[700px]">
                    Learn more about how our website collects, uses, stores, protects, and discloses personal data of our users or customers
                </p>
            </div>

            <div className="flex flex-col items-center mt-16">
                <div className="px-10 md:px-20">
                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">Introduction</h2>
                        <p>
                        Welcome to Partybank! By accessing or using our platform, you agree to be bound by these Terms and Conditions. These terms govern your use of Partybank, whether you are an event organizer creating and managing events or an attendee purchasing tickets. If you do not agree with any part of these terms, please do not use our platform.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">1. Definitions</h2>
                            <ul className="list-disc list-inside space-y-4">
                            <li><strong>“Partybank”</strong> refers to the platform, website, and services provided by us, the owners of Partybank.</li>
                            <li><strong>“Event Organizer”</strong> refers to individuals or entities that use Partybank to create, manage, and sell tickets for events.</li>
                            <li><strong>“Attendee”</strong> refers to individuals who purchase tickets through Partybank to attend events.</li>
                            <li><strong>“You”</strong> refers to both Event Organizers and Attendees, depending on the context.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">2. Account Registration</h2>
                        <h3 className="mt-4 font-[700]">2.0 Eligibility:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                You must be at least 18 years old to register and use Partybank.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">2.1 Account Information:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                You agree to provide accurate information when creating an account and are responsible for maintaining the security of your account.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">2.2 Termination:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Partybank reserves the right to suspend or terminate your account if you violate these terms or engage in fraudulent activity.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">3. Event Organizers</h2>
                        <h3 className="mt-4 font-[700]">3.0 Event Creation:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Organizers are responsible for providing accurate event details and managing their event&apos;s compliance with laws.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">3.1 Refunds and Cancellations:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Organizers are responsible for setting refund policies and handling cancellations.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">3.2 Payouts:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Organizers can request payouts at any time before or after the event.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">4. Attendees</h2>
                        <h3 className="mt-4 font-[700]">4.0 Ticket Purchase:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                All ticket purchases are final unless otherwise stated by the Event Organizer.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">4.1 Event Changes or Cancellations:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Organizers are responsible for communicating changes or cancellations to attendees.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">4.2 Entry to Events:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Entry is contingent on validating your ticket at the event, which is managed by the Event Organizer.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">5. Payments and Fees</h2>
                        <h3 className="mt-4 font-[700]">5.0 Service Fees:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Partybank charges a fixed service fee of ₦150 per ticket sold for online transactions.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">5.1 Payment Processing Fees:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Payment processing fees, charged by our partners Paystack and/or Payshiga, will be added separately for each transaction.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">5.2 Payment Methods:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Partybank supports multiple payment options including credit cards.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">5.3 Chargebacks and Disputes:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                In the event of a dispute or chargeback, Partybank reserves the right to take legal action.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">6. Event Liability</h2>
                        <h3 className="mt-4 font-[700]">6.0 Organizer Responsibility:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Event Organizers are responsible for the execution, safety, and compliance of their events.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">6.1 Attendee Responsibility:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                            Attendees are responsible for their own safety at events.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">7. Intellectual Property</h2>
                        <p>
                            All content on the Partybank platform is the intellectual property of Partybank or its licensors. Users may not use our content without permission.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">8. Privacy</h2>
                        <p>
                            Please refer to our <Link href="/privacy-policy" className="font-[600] underline text-[var(--pb-c-red)]">Privacy Policy</Link> for information on how we collect, use, and protect your personal data.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">9. Prohibited Activities</h2>
                        <p className="mb-3">You agree not to engage in any of the following activities;</p>
                        <ul className="list-disc list-inside space-y-4">
                            <li>Impersonating others or engaging in fraudulent activity.</li>
                            <li>Attempting to hack, exploit, or damage the Partybank platform.</li>
                            <li>Posting harmful, offensive, or illegal content.</li>
                            <li>Violating the intellectual property rights of Partybank or others.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">10. Termination</h2>
                        <p>
                            Partybank reserves the right to suspend or terminate your account for violations of these terms. Upon termination, you will lose access to your account, and any pending payouts may be forfeited.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">11. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Partybank is not liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our platform. This includes, but is not limited to, lost profits, lost data, or damages resulting from delays, cancellations, or errors related to events.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">12. Governing Law</h2>
                        <p>
                        These terms are governed by Nigerian law, and disputes will be resolved in the courts of Nigeria.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">13. Changes to the Terms and Conditions</h2>
                        <p>
                        Partybank may update these terms at any time. Significant changes will be communicated through the platform or via email.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">14. Refund and Cancellation Policy</h2>
                        <h3 className="mt-4 font-[700]">14.0 Event Organizer:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Organizers set their refund and cancellation policies, and it is their responsibility to communicate these policies clearly to attendees.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">14.1 Partybank Role:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                            Partybank is not responsible for issuing refunds or handling cancellations unless specified by the Event Organizer. Refund requests must follow the Organizer&apos;s policies.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">15. Payment and Settlement Terms</h2>
                        <p>
                            Partybank will allow Event Organizers to request revenue payouts at any time, both before and after the event. Once the payout is requested, Partybank will process the payment in line with our standard settlement terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">16. Ownership of Data</h2>
                        <p>
                            All data related to the events and tickets purchased through Partybank are owned by the Event Organizer. Partybank will maintain access to this data for the purpose of providing service, ensuring compliance, and enhancing the platform’s performance.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">17. Liability and Insurance</h2>
                        <p>
                            Event Organizers are solely responsible for obtaining insurance coverage for their events. Partybank is not liable for any injuries, accidents, or incidents occurring during the event.
                        </p>
                    </section>

                    <section className="mb-8">
                    <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">8. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this policy, please contact us at:
                        </p>
                        <ul className="list-none mt-4 space-y-4">
                            <li>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-[10px] bg-[#F3F5F5]">
                                        <EnvelopeIcon className="w-4 stroke-2"/>
                                    </div>
                                    <a href="mailto:privacy@partybank.com" className="font-[600] text-[var(--pb-c-red)] underline">privacy@partybank.com</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-[10px] bg-[#F3F5F5]">
                                        <PhoneIcon className="w-4 stroke-2"/> 
                                    </div>
                                    <span className="font-[600] underline text-[var(--pb-c-red)]">+234-808-8893-600</span>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

        <Footer />
    </main>
  );
}
