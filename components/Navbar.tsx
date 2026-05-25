"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
    logo: string;
};

export default function Navbar({ logo }: NavbarProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        {
            href: "/contact",
            label: "Contact",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20 4H4C2.895 4 2 4.895 2 6v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2v.511l-8 4.8-8-4.8V6h16zM4 18V8.489l8 4.8 8-4.8V18H4z" />
                </svg>
            ),
        },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="text-2xl font-bold">{logo}</div>

                    <div className="hidden sm:flex gap-2 text-lg items-center">
                        {links.map((link) => {
                            const isActive = link.href === pathname;
                            const baseClasses = "flex items-center gap-2 rounded-full px-3 py-2 transition-all";
                            const activeClasses = isActive
                                ? "bg-white text-black"
                                : "text-white hover:text-gray-300 hover:bg-gray-800";

                            return (
                                <Link key={link.label} href={link.href} className={`${baseClasses} ${activeClasses}`}>
                                    {link.icon}
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="sm:hidden p-2 rounded-md text-gray-200 hover:bg-gray-800 focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {open && (
                <div className="sm:hidden bg-black border-t border-gray-800">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {links.map((link) => {
                            const isActive = link.href === pathname;
                            const baseClasses = "block px-2 py-2 rounded transition-all";
                            const activeClasses = isActive
                                ? "bg-white text-black"
                                : "text-white hover:bg-gray-900";

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`${baseClasses} ${activeClasses}`}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.icon && (
                                        <span className="inline-flex items-center mr-2">{link.icon}</span>
                                    )}
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}