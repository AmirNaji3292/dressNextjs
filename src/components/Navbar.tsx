import Image from "next/image"
import Link from "next/link"
import Searchbar from "./Searchbar"
import { Bell, Home, ShoppingCart } from "lucide-react"


function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-3 border-gray-200">
    {/* left */}
    <Link href='/' className="flex items-center">
      <Image src='/logo.png'
       alt="logo for website" 
       width={36}
        height={36}
        className="h-6 w-6" />
      <p className="font-medium text-md tracking-wider">Trend Dresses</p>
    </Link>
    {/* rtght */}
       <div className="flex items-center gap-3">
          <Searchbar/>
          <Link href='/'>
            <Home className="w-4 h-4 text-gray-600"/>
          </Link>

           <Link href='/'>
            <Bell className="w-4 h-4 text-gray-600"/>
          </Link>

           <Link href='/'>
            <ShoppingCart className="w-4 h-4 text-gray-600"/>
          </Link>

          <Link href='/'>
            <p className="text-sm text-gray-600">sign in</p>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar