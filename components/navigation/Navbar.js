import React, { useState } from 'react';
import Link from 'next/link'
import { StyledNavbar, NavbarBrand, NavbarList, NavbarListItem, MobileNavbar, MobileNavList, MobileNavItem, MobileNavToggle } from './NavigationUIComponents';

// import BrandImage from "../../public/vercel.svg";

import { motion } from 'framer-motion';

const navbarVariants = {
    visible: {
        opacity: 1,
        transition: {
            delay: 0.75,
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.07,
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            // duration: 0.5,
            when: "afterChildren",
            staggerChildren: 0.09,
        }
    },
    scroll: {
        backgroundColor: "#2f3e46"
    }
}

const childrenVariants = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    },
    scroll: {
        opacity: 1
    }
}

const mobileNavVariants = {
    closed: { y: -300, opacity: 0 },
    open: { y: 0, opacity: 1 }
}
const mobileToggleVariants = {
    initial: {
        opacity: 0,
        backgroundColor: "transparent",
        transition: { type: "tween", duration: 4 }
    },
    closed: {
        opacity: 1,
        backgroundColor: "rgba(0,0,0, 0.4)"
    },
    open: { opacity: 1, backgroundColor: "transparent" }
}

const hamburgerVariants = {
    topClosed: { x: 0, y: 0 },
    topOpen: { x: 0, y: 10, rotate: 45, scale: 1.2 },
    middleClosed: { opacity: 1 },
    middleOpen: { opacity: 0 },
    bottomClosed: { x: 0, y: 0 },
    bottomOpen: { x: 0, y: -12, rotate: -45, scale: 1.2 }
}

function Navbar({ bgColor, scrolling }) {
    console.log(bgColor, scrolling)

    // Should be synced in redux
    const [toggleOpen, setToggleOpen] = useState(false)

    return (<>
        <StyledNavbar bgColor={bgColor} borderBottom={scrolling && "#84a98c"} initial="visible" animate={scrolling ? "scroll" : "visible"} variants={navbarVariants} >
            <Link href="/">
                <NavbarBrand variants={childrenVariants} initial="hidden"><img alt="brand name" src="/brand.png" /><h4>floramate</h4></NavbarBrand>
            </Link>
            <NavbarList >
                <NavbarListItem variants={childrenVariants} initial="hidden" whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
                    <Link href="/">Home</Link>
                </NavbarListItem>
                <NavbarListItem variants={childrenVariants} initial="hidden" whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
                    <Link href="/species">Species</Link>
                </NavbarListItem>
                <NavbarListItem variants={childrenVariants} initial="hidden" whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
                    <Link href="/about">About</Link>
                </NavbarListItem>

            </NavbarList>
        </StyledNavbar>

        <MobileNavToggle initial="initial" animate={toggleOpen ? "open" : "closed"} onClick={() => setToggleOpen(!toggleOpen)} variants={mobileToggleVariants}>
            <motion.div
                initial="topClosed" animate={toggleOpen ? "topOpen" : "topClosed"}
                variants={hamburgerVariants}></motion.div>

            <motion.div
                initial="middleClosed" animate={toggleOpen ? "middleOpen" : "middleClosed"}
                transition={{ duration: 0.1 }}
                variants={hamburgerVariants}>
            </motion.div>
            <motion.div
                initial="bottomClosed" animate={toggleOpen ? "bottomOpen" : "bottomClosed"}
                variants={hamburgerVariants}
            ></motion.div>
        </MobileNavToggle>
        <MobileNavbar initial="closed" animate={toggleOpen ? "open" : "closed"} variants={mobileNavVariants}>
            <MobileNavList>
                <MobileNavItem whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.3 }}>
                    <Link href="/">Home</Link>
                </MobileNavItem>
                <MobileNavItem whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.3 }}>
                    <Link href="/species">Species</Link>
                </MobileNavItem>
                <MobileNavItem whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.3 }}>
                    <Link href="/about">About</Link>
                </MobileNavItem>
            </MobileNavList>
        </MobileNavbar>

    </>)
}

export default Navbar;