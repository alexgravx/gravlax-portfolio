import React from "react"
import Link from "next/link"

export default async function Header() {
    const fullName = "Alexandre Gravereaux"
    return (
        <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
            <nav>
                <ul>
                    <li>
                        <Link href="/" aria-label="Home Page">{fullName}</Link>
                    </li>
                    <li>
                        <Link href="/about" aria-label="Home Page">About</Link>
                    </li>
                    <li>
                        <Link href="/set" aria-label="Home Page">Settings</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}