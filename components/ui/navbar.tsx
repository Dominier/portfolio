import Image from "next/image"
import Link from "next/link"

export const NavigationBar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/40 border-b border-stone-200/50 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-teal-100/20 to-rose-100/20 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-4 md:px-8 flex justify-between items-center h-16 relative">
                <div className="flex gap-2 items-center text-sm md:text-base font-bold text-stone-700">
                    <Link href="/" className="px-4 py-2 rounded-full hover:bg-white/60 hover:text-orange-600 hover:shadow-sm transition-all">
                        Timothy
                    </Link>
                    <Link href="https://www.resume.lol/share/g703rle" target="_blank" className="px-4 py-2 rounded-full hover:bg-white/60 hover:text-teal-600 hover:shadow-sm transition-all">
                        Resume
                    </Link>
                </div>
                <div className="flex gap-2 items-center">
                    <Link href="mailto:tleprojectcs@gmail.com" className="p-2 rounded-full hover:bg-white/60 hover:shadow-sm hover:-translate-y-0.5 transition-all opacity-80 hover:opacity-100">
                        <Image src="./email.svg" alt="email icon" width={20} height={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/timothy-le-cs/" target="_blank" className="p-2 rounded-full hover:bg-white/60 hover:shadow-sm hover:-translate-y-0.5 transition-all opacity-80 hover:opacity-100">
                        <Image src="./linkedin.svg" alt="linkedin icon" width={20} height={20} />
                    </Link>
                    <Link href="https://github.com/Dominier" target="_blank" className="p-2 rounded-full hover:bg-white/60 hover:shadow-sm hover:-translate-y-0.5 transition-all opacity-80 hover:opacity-100">
                        <Image src="./github.svg" alt="github icon" width={20} height={20} />
                    </Link>
                </div>          
            </div>
        </nav>
    )
}