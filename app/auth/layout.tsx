import TopNav from "../ui/auth/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-grow flex flex-col overflow-hidden">
            <TopNav />
            <div className="flex overflow-auto p-6 md:px-5">
                <div>
                    <p>Image Here</p>
                </div>
                {children}
            </div>
        </div>
    )
}