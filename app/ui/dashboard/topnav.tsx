import NavLinks from "./nav-links";

export default function TopNav() {
    return (
        <div className="flex items-center justify-between bg-[var(--pb-c-white)] min-h-[100px] w-full px-[24px] py-[16px] mt-1 mb-4">
            <div className="flex items-center p-4 gap-4 h-[56px] bg-[var(--pb-c-light-red)] w-full">
                <NavLinks />
            </div>
        </div>
    )
}