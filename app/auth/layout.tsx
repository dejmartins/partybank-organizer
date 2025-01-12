import TopNav from "../ui/auth/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100vh] bg-[var(--pb-c-soft-grey)] overflow-x-hidden">
            <TopNav />
            <div className="flex flex-col lg:flex-row flex-grow p-6 lg:p-8 bg-[var(--pb-c-white)] mt-10">
                <div
                    className="flex-shrink-0 mb-6 md:mb-10 lg:mb-0 lg:mr-6 rounded-[40px] overflow-hidden w-full h-[150px] md:h-[300px] lg:h-auto lg:w-[60%] bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://res.cloudinary.com/dp1zblmv4/image/upload/v1736717503/organizer/yffeizm1eqvozdwvfbsd.png")',
                    }}
                ></div>
                
                <div className="flex-grow w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
