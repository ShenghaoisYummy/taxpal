import React from "react";
import Container from "./Container";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Link from "next/link";
import NavLink from "@/components/Navlink";

const Header = () => {
  return (
    <div className="py-10">
      <Container>
        <nav className="flex items-center md:gap-x-12">
          <div>
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto"></Logo>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign In</NavLink>
            </div>
            <Button href="/register">
              Get Started
              <span className="hidden lg:inline">Today</span>
            </Button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
