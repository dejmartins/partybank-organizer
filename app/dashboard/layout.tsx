import TopNav from "../ui/dashboard/topnav";
import Header from "../ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100vh] bg-[var(--pb-c-soft-grey)] overflow-x-hidden">
            <Header />

            <TopNav />

            <div className="flex-grow flex flex-col md:mt-[164px] overflow-y-auto bg-[var(--pb-c-white)] mx-0 md:mx-5">
                <div className="flex-grow w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
