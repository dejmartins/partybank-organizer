import TopNav from "../ui/auth/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100vh] max-h-[100vh] bg-[var(--pb-c-soft-grey)] overflow-hidden">
            <TopNav />
            <div className="flex flex-grow p-[24px] bg-[var(--pb-c-white)] mt-10 overflow-hidden">
                <div className="flex-shrink-0 mr-6 rounded-[40px] overflow-hidden w-[60%]"
                    style={{
                        backgroundImage: 'url("https://res.cloudinary.com/drddoxnsi/image/upload/v1724406331/PARTYBANK/ORGANIZER/hero-image_xqdvny.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>
                <div className="flex-grow overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
