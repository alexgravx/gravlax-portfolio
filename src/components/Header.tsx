import React from "react"
import Link from "next/link"
import NavBar from "@/components/NavBar"

export default async function Header() {
    const fullName = "Alexandre Gravereaux"
    return (
        <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
            <NavBar />
        </header>
    )
}