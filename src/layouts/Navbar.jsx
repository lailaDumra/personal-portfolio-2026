import { Button} from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NavLinks =[
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#experience', label: 'Experiences' },
    // skills
    
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect (() => {
        const scrolling = () => {
            if(window.scrollY > 50){
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', scrolling);
        return () => window.removeEventListener('scroll', scrolling);
    }, [])
    return (
            <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-m" : "bg-transparent py-5"}  z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold traking-tight hover:text-primary">
                    LD<span className="text-primary">.</span>
                </a>
{/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {NavLinks.map((link, index) => (
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
{/* contact button */}
                    <div className="hidden md:block ">
                        <Button size="sm" onClick={() =>document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact Me</Button>
                    </div>

{/* mobile button */}
                        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
            </nav>
{/* mobile menu */}
                {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {NavLinks.map((link, index) => (
                            <a key={index} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-foreground rounded-full py-2">
                                {link.label}
                            </a>
                        ))}
                        <Button size="md" onClick={() => {document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setIsMobileMenuOpen(false);}}>Contact Me</Button>
                    </div>
                </div>
                )}
        </header>
    )
}