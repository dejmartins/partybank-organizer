import Header from "../ui/landing/header";
import Footer from "../ui/landing/footer";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
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
                    Privacy Policy
                </p>
                <p className="text-white text-lg mt-3 text-left leading-6 max-w-[700px]">
                    Learn more about how our website collects, uses, stores, protects, and discloses personal data of our users or customers.
                </p>
            </div>

            <div className="flex flex-col items-center mt-16">
                <div className="px-10 md:px-20">
                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">Introduction</h2>
                        <p>
                            At Partybank, we are committed to protecting your privacy and ensuring that your personal information is secure. 
                            This Privacy Policy outlines how we collect, use, store, and disclose your information when you use our platform 
                            to create or attend events. By using Partybank, you agree to the practices described in this policy.
                        </p>
                    </section>
            
                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">1. Information We Collect</h2>
                        <p>We collect various types of information to provide and improve our services:</p>
                        <h3 className="mt-4 font-[700]">1.0 Personal Information:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                For Event Organizers, we collect your name, email address, phone number, and payment details.
                            </li>
                            <li>
                                For Event Attendees, we collect similar personal information when you purchase a ticket.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">1.1 Usage Information:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                We collect data about how you use our platform, including the pages you visit, the events you interact with and your browsing behavior.  This helps us improve our services and provide a more personalized experience.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">1.2 Device and Technical Information:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                We may collect information such as your device type, browser type, IP address, and operating system to optimize the platform's performance.
                            </li>
                        </ul>


                    </section>
            
                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">2. How We Use Your Information</h2>
                        <h3 className="mt-4 font-[700]">2.0 Provide Services:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Manage your account and transactions.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">2.1 Communicate with You:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Send updates, notifications, and confirmations.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">2.2 Improve Our Platform:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Analyze usage to enhance the platform&apos;s performance.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">2.3 Marketing:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Send promotional materials with your consent.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">2.4 Security and Fraud Prevention:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Safeguard your data and prevent fraud.
                            </li>
                        </ul>
                    </section>
            
                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">3. How We Share Your Information</h2>
                        <p>We do not sell your information. However, we may share your information under the following circumstances:</p>

                        <h3 className="mt-4 font-[700]">3.0 With Event Organizers:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                When you purchase a ticket, your details are shared with the event organizer.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">3.1 With Service Providers:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                We may share your information with third parties to help operate our platform.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">3.2 Legal Requirements:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                We may disclose your information if required by law.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">4. Data Security</h2>
                        <p>
                            We use industry-standard security measures, such as encryption and SSL technology, to protect your data. 
                            However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </section>
            
                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">5. Your Choices and Rights</h2>
                        <p>You have the following rights regarding your personal information:</p>

                        <h3 className="mt-4 font-[700]">5.0 Access:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Request access to the personal information we hold about you.
                            </li>
                        </ul>
                        <h3 className="mt-4 font-[700]">5.1 Correction:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Request updates to incorrect or outdated information.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">5.2 Deletion:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Request the deletion of your personal data.
                            </li>
                        </ul>

                        <h3 className="mt-4 font-[700]">5.3 Opt-Out:</h3>
                        <ul className="list-disc list-inside space-y-4 mt-4">
                            <li>
                                Unsubscribe from marketing communications.
                            </li>
                        </ul>

                        <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:privacy@partybank.com" className="font-[600] text-[var(--pb-c-red)] underline">privacy@partybank.com</a>.</p>
                    </section>
            
                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">6. Children's Privacy</h2>
                        <p>
                            Partybank is not intended for individuals under 16. If we become aware that we have collected personal information from a child, we will delete it as soon as possible.
                        </p>
                    </section>
            
                    <section className="mb-8">
                        <h2 className="text-[30px] md:text-[40px] mb-4 font-[700]">7. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this policy from time to time to reflect changes in our practices. We will notify you of any significant changes by posting the revised policy on our platform or sending an email.
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
