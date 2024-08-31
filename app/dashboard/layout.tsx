import TopNav from "../ui/dashboard/topnav";
import Header from "../ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100vh] bg-[var(--pb-c-soft-grey)] overflow-x-hidden">
            <Header />

            <TopNav />

            <div className="flex-grow flex flex-col mt-[64px] md:mt-[170px] bg-[var(--pb-c-white)] overflow-y-auto">
                {children}
            </div>
        </div>
    );
}
