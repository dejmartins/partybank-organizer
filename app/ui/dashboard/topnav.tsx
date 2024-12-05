import NavLinks from "./nav-links";

export default function TopNav() {
    return (
        <div className="hidden md:flex items-center justify-between fixed top-[64px] left-0 right-0 bg-[var(--pb-c-white)] min-h-[100px] w-full px-[24px] py-[16px] mb-4 z-40 shadow-sm">
            <div className="flex items-center p-4 gap-4 h-[56px] bg-[var(--pb-c-light-red)] w-full">
                <NavLinks />
            </div>
        </div>
    )
}