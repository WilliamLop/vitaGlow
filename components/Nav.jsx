"use client";

import Image from "next/image";
import Link from "next/link";
import {
    hongobg,
    logoBlack,
    menu,
    close,
    plantacion,
    logo,
} from "../public/images/index";
import { navLinks } from "../constants";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const Nav = () => {
    const pathname = usePathname();
    const homeIndex = navLinks.findIndex((link) => link.href === "/");

    const [navToggleMask, setNavToggleMask] = useState("w-0");
    const [navToggle, setNavToggle] = useState("w-0");
    const [list, setList] = useState("hidden");
    const [buttonSvg, setButtonSvg] = useState("menu");
    const [selectedLink, setSelectedLink] = useState(homeIndex);
    const [hoveredLink, setHoveredLink] = useState(null);

    const headerRef = useRef(null);
    const ubicacionPrincipal = useRef(0);

    const handleCLick = () => {
        setNavToggle((preValue) => (preValue === "w-0" ? "w-[45%]" : "w-0"));
        setList((preValue) =>
            preValue === "hidden" ? "block text-white" : "hidden"
        );
        setNavToggleMask((preValue) => (preValue === "w-0" ? "w-full" : "w-0"));
        setButtonSvg((preBtn) => (preBtn === "menu" ? "close" : "menu"));
    };

    const handleClickLinks = (index) => {
        setSelectedLink(index);
    };

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const desplazamientoActual = window.pageYOffset;
            if (ubicacionPrincipal.current >= desplazamientoActual) {
                headerRef.current.style.top = '0px';
                headerRef.current.classList.remove('bg-transparent'); // Eliminar clase de fondo transparente si está presente
                headerRef.current.classList.add('bg-gray-950', 'bg-opacity-70', 'backdrop-blur-md'); // Agregar clase de fondo blanco con opacidad
                if (ubicacionPrincipal.current <= 10) {
                    headerRef.current.classList.remove('bg-gray-950', 'bg-opacity-70', 'backdrop-blur-md'); // Eliminar clase de fondo blanco con opacidad si está presente
                    headerRef.current.classList.add('bg-transparent'); // Agregar clase de fondo transparente
                }
            }  else {
                headerRef.current.style.top = '-200px'; // Oculta el header
                headerRef.current.classList.add('bg-transparent'); // Eliminar clase de fondo transparente si está presente
                headerRef.current.classList.add('bg-gray-800', 'bg-opacity-10', 'backdrop-blur-md'); // Agregar clase de fondo blanco con opacidad
            }

            ubicacionPrincipal.current = desplazamientoActual;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className="h-auto w-full box-border bg-neutral-950 fixed z-20
            duration-300 ease-in-out"
        >
            {/* <Image
        src={plantacion}
        className="absolute h-screen -z-10 object-cover"
      /> */}
            <div className="container">
                <nav className="py-2 flex justify-between lg:h-auto">
                    <Link href="./">
                        <Image
                            src={logo}
                            width={200}
                            height={200}
                            alt="Gano Excel Colombia"
                        />
                    </Link>

                    {/* Nav mobile y desktop */}
                    <div
                        className={`bg-black/40 absolute inset-0 h-screen duration-300 ease-in-out
          ${navToggleMask} lg:static lg:w-full lg:bg-none lg:h-auto z-20
          lg:grid lg:place-items-center lg:bg-transparent`}
                    >
                        <div
                            className={`grid gap-4 absolute items-center bg-slate-100 right-0
            h-screen ${navToggle} duration-300 ease-in-out lg:static
            lg:w-full lg:h-auto lg:bg-transparent`}
                        >
                            <ul
                                className={`font-poppins mb-[250px] self-center px-5 grid gap-10
              relative lg:block ${list} lg:mb-0 
              lg:flex lg:items-center lg:justify-end`}
                            >
                                {navLinks.map((link, index) => (
                                    <li
                                        key={link.id}
                                        className="
                  text-gray-900 lg:text-slate-50"
                                        onClick={() => handleClickLinks(index)}
                                        onMouseEnter={() => setHoveredLink(index)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`
                        ${pathname === link.href
                                                    ? "font-semibold border-b-2 border-gray-800 lg:border-slate-200 duration-100 ease"
                                                    : ""
                                                }
                        ${index === hoveredLink
                                                    ? "font-medium text-blue-600 lg:text-white"
                                                    : ""
                                                }
                      `}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <button className="z-20 lg:hidden" onClick={handleCLick}>
                        {buttonSvg === "menu" ? (
                            <Image src={menu} alt="icon-menu" />
                        ) : (
                            <Image
                                src={close}
                                className="hover:border-[1px] hover:border-red-600
                rounded-full object-contain duration-300 ease"
                                width={30}
                                alt="icon-close"
                            />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
