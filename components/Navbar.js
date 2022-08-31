import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className='navbarLogo'>
                <Link href="/">
                    <Image src="/img/logo_bw.png" alt="logo" width="70%" height="70%"/>
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/mission">
                        <div  class="no-underline">Mission</div> 
                    </Link>
                </li>
                <li>
                    <Link href="https://www.notion.so/Regen-Library-c3ca587347594684b3b744bcb0c9f2f0">
                    <div class="no-underline">Library</div> 
                    </Link>
                </li>
                <li>
                    <Link href="https://medium.com/@agartha.one">
                    <div  class="no-underline">Blog</div> 
                    </Link>
                </li>
                <li>
                    <Link href="https://discord.com/invite/b9v5YM9hwJ">
                    <div  class="no-underline">Join</div> 
                    </Link>
                </li>
            </ul>
        </nav>

    )
}