import React, { useEffect, useState } from "react"
import { Workflow, X, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { links } from "@/constants"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"
import ThemeToggle from "@/context/mode-toggle"

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
  <header className="bg-white dark:bg-gray-800 text-foreground fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-border overflow-hidden">
  <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
    {/* Logo */}
    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
      <Workflow className="w-6 h-6" />
      Task Manager
    </Link>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-6">
      <ThemeToggle />
      <ul className="flex space-x-6 text-sm font-medium">
        {links.map((link) => (
          <li key={link.path} className=" p-1 rounded-md hover:bg-blue-900">
            <Link
              to={link.path}
              className={cn(
                "transition-colors hover:text-primary",
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
      <div className="z-50">
        <ThemeToggle />
        <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden z-50">
          {menuOpen ? <X className="h-6 w-6 z-50"/>
          
          : <MenuIcon className="h-6 w-6" />}
        </Button>
      </div>
    )}
  </div>

  {/* Mobile Menu */}
  {isMobile && menuOpen && (
    <div className="fixed top-0 right-0 w-64 h-full z-40 bg-white dark:bg-gray-800 border-l border-border shadow-lg transition-all">
      <div className="p-6 flex flex-col justify-between h-full">
        <ul className="flex flex-col space-y-4 text-sm font-medium">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
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

        <div className="mt-6 flex flex-col gap-4">
          <Button asChild variant="default" className="w-full">
            <Link to="/task-manager" onClick={() => setMenuOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )}
</header>

  )
}

export default Navbar
