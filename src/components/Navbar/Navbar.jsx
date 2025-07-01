import React, { useState } from 'react'
import { links } from '@/constants'
import { cn } from '@/lib/utils'
import { Workflow, X, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const isMobile = window.innerWidth < 768
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => setMenuOpen((prev) => !prev);


    return (
        <div className="bg-gray-800 text-white flex justify-between items-center p-4 ">
            <div>
                <Workflow />
            </div>
            <div>
                <nav className="hidden md:flex font-bold cursor-pointer items-center justify-between gap-2">
                    <ul className="flex space-x-4 ">
                        {links.map((link) => (
                            <li key={link.path} className="cursor-pointer">
                                <Link to={link.path}
                                    className={cn(
                                        "text-white hover:text-gray-300",
                                        location.pathname === link.path ? "font-bold" : ""
                                    )}
                                    onClick={() => setMenuOpen(false)}>

                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Button variant="secondary">
                            <Link to="/login">Login</Link>
                        </Button>
                    </div>
                    <div>
                        <Button variant="primary">
                            <Link to="/signup">Sign Up</Link>
                        </Button>
                    </div>
                </nav>

            </div>


            {/* Mobile menu */}
            {isMobile && (
                <div className="md:hidden fixed top-0 right-0 p-4 cursor-pointer">
                    <Button onClick={toggleMenu} className="bg-gray-700 p-2 rounded">
                        {menuOpen ? (
                            <X />
                        ) : (
                            <MenuIcon />
                        )}
                    </Button>
                </div>
            )}

            {isMobile && menuOpen && (
                <div className="fixed top-0 right-0 h-full bg-gray-900 z-50">
                    <nav className="bg-gray-800 text-white absolute top-0 right-0 w-64 h-full shadow-lg">
                        <ul className="flex flex-col space-y-4 p-4">
                            {links.map((link) => (
                                <li key={link.path} className="cursor-pointer">
                                    <Link to={link.path}
                                        className={cn(
                                            "text-white hover:text-gray-300",
                                            location.pathname === link.path ? "font-bold" : ""
                                        )}
                                        onClick={() => setMenuOpen(false)}>

                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            )}

        </div>

    )
}

export default Navbar