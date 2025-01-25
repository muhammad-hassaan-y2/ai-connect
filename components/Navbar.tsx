
import Link from 'next/link'
import { Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Bot size={32} />
          <span className="text-2xl font-bold">D</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li>
              <Button variant="secondary" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li>
            <li>
              <Button size="sm" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
