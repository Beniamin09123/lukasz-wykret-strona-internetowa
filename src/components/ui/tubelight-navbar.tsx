"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { DivideIcon as LucideIcon, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [indicatorPosition, setIndicatorPosition] = useState({ width: 0, left: 0 })
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    handleResize()
    handleScroll()
    
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const updateIndicatorPosition = (element: HTMLElement | null) => {
    if (!element || !navRef.current) return

    const navRect = navRef.current.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()

    setIndicatorPosition({
      width: elementRect.width,
      left: elementRect.left - navRect.left
    })
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-2 border-[#DCCBB7]/20",
        isScrolled ? "bg-background shadow-lg" : "bg-transparent",
        className,
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wallet className="h-8 w-8 text-[#DCCBB7]" />
            <span className="font-montserrat font-bold text-xl text-white">ANDERSON Finance</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div 
              ref={navRef} 
              className={cn(
                "relative items-center gap-3 rounded-full transition-all duration-300 hidden md:flex",
                isScrolled ? "bg-muted/10 border-2 border-[#DCCBB7]/20 backdrop-blur-lg py-1 px-1" : "bg-muted/5 border-2 border-[#DCCBB7]/20 backdrop-blur-sm py-1 px-1"
              )}
            >
              <motion.div
                className="absolute h-full bg-[#DCCBB7]/10 rounded-full -z-10"
                initial={false}
                animate={{
                  width: hoveredItem ? indicatorPosition.width : 0,
                  x: hoveredItem ? indicatorPosition.left : 0,
                  opacity: hoveredItem ? 1 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-primary rounded-t-full">
                  <div className="absolute w-12 h-6 bg-[#DCCBB7]/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-[#DCCBB7]/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-[#DCCBB7]/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>

              {items.map((item) => {
                const Icon = item.icon
                const isHovered = hoveredItem === item.name

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    onMouseEnter={(e) => {
                      setHoveredItem(item.name)
                      updateIndicatorPosition(e.currentTarget)
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                      "text-foreground/60 hover:text-[#DCCBB7]",
                      isHovered && "text-[#DCCBB7]"
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                  </a>
                )
              })}
            </div>
            
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  )
}