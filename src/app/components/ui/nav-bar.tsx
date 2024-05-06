"use client";
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { IconSenseLogo } from './iconsense-Logo';
import { useRouter } from 'next/navigation'

export default function NavUI() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { label: "Home", url: "/" },
    { label: "News", url: "/news" },
    { label: "Research", url: "/research" },
    { label: "About Us", url: "/about" },
    { label: "Team", url: "/team" },
    { label: "Contact Us", url: "/contact" },
    { label: "Careers", url: "/careers" }
  ];
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBrandClick = () => {
    router.push("/"); 
  };


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className={`bg-black ${isScrolled ? 'border-bottom-thin' : ''}`}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand onClick={handleBrandClick}>
          <IconSenseLogo />
          <p className="font-bold text-inherit">iConSenSe Lab</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link style={{ color: 'white' }} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: 'white' }} href="/team">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: 'white' }} href="/research">
            Research
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: 'white' }} href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: 'white' }} href="/news">
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: 'white' }} href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: 'white' }} href="/careers">
            Careers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={
                "foreground"
              }
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <div className={`white-light ${isScrolled ? 'active' : ''}`}></div>
      <style jsx>{`
        .border-bottom-thin {
          border-bottom: 1px solid white; /* Adjust thickness as needed */
        }
        
        .white-light {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px; /* Adjust height of the light */
          background-color: white;
          transition: width 0.5s ease-in-out; /* Smooth transition for width */
        }
        
        .white-light.active {
          width: 100%; /* Make the light span the entire width of the Navbar when scrolled */
        }
      `}</style>
    </Navbar>
  );
}
