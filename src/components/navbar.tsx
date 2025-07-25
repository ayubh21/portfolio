

export default function Navbar() {
// bg-[#1E1E1D]
    return (
        <header className=" w-full shadow-lg mb-40">
            <nav className="flex justify-end items-center min-h-20 pr-20">
                <ul className="flex font-semibold gap-20">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

