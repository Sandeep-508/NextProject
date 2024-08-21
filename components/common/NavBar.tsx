import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Logo from '../../public/hilink-logo.svg'
import PrimaryButton from "./PrimaryButton"
import User from '../../public/user.svg'
import Menu from '../../public/menu.svg'

const NavBar = () => {
    return (
        <nav className="flexBetween max-container padding-container py-5 z-30 relative">
            <Link href="/">
                <Image width={74} height={24} src={Logo} alt="Logo page" />
            </Link>
            <ul className="hidden lg:flex items-center justify-center gap-12">
                {NAV_LINKS.map((link, index) => (
                    <li key={index} className=" hover:!text-stroke">
                        <Link href={link.url}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flex">
                <PrimaryButton type="button" text={"Log In" as string} variant="btn_dark_green" icon={User} />
            </div>
            <div className="lg:hidden flex menuicon">
                <Image src={Menu} alt="hamburger menu" width={24} height={24} />
            </div>
        </nav>
    )
}

export default NavBar
