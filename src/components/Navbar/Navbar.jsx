import React, { useEffect, useState } from "react"
import { links } from "@/constants"
import { cn } from "@/lib/utils"
import { Workflow, X, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="bg-background text-foreground fixed top-0 left-0 right-0 z-50 shadow-md border-b border-border">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Workflow className="w-6 h-6" />
          Task Manager
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "hover:text-primary transition-colors",
                    location.pathname === link.path ? "font-bold text-primary" : ""
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        {isMobile && (
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            className="md:hidden z-50"
          >
            {menuOpen ? <X /> : <MenuIcon />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full z-40 bg-background/30 backdrop-blur-md border-l border-border shadow-xl transition-all">
          <nav className="flex flex-col h-full p-6 text-foreground">
            <ul className="flex flex-col space-y-4 font-medium">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "hover:text-primary",
                      location.pathname === link.path ? "font-bold text-primary" : ""
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              variant="default"
                className="mt-6 w-full"
                onClick={() => setMenuOpen(false)}
            >
              <Link to='/task-manager'>
                Get Started
              </Link>
            </Button>

          </nav>
        </div>
      )}
    </header>
  )
}

  

export default Navbar
