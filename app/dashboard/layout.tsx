import TopNav from "../ui/dashboard/topnav";
import Header from "../ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100vh] bg-[var(--pb-c-soft-grey)] overflow-x-hidden">
            <Header />

            <TopNav />

            <div className="flex flex-col lg:flex-row flex-grow p-6 lg:p-8 bg-[var(--pb-c-white)]">
                <div className="flex-grow w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
