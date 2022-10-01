import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href='/'>Accueil</Link>
                </li>
                <li>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link href='/a-propos'>À propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;