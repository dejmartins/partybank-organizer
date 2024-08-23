import TopNav from "../ui/auth/topnav";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100vh] max-h-[100vh] bg-[var(--pb-c-soft-grey)] overflow-hidden">
            <TopNav />
            <div className="flex flex-grow p-[24px] bg-[var(--pb-c-white)] mt-10 overflow-hidden">
                <div className="flex-shrink-0 mr-6 rounded-[40px] overflow-hidden">
                    <Image
                        src="/hero-image.png"
                        width={957}
                        height={729}
                        alt="Jazz musicians performing"
                        className="object-contain"
                    />
                </div>
                <div className="flex-grow overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
