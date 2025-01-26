"use client"

import Link from "next/link"
import { Bot, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

export function Navbar() {
  const router = useRouter()
  const { data: session } = useSession()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push("/")
  }

  return (
    <header className="bg-cyan-700 text-sky-100 shadow-md ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Bot size={32} />
          <span className="text-2xl font-bold">D</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
            {/* <Link href="/" className="hover:text-sky-600 transition-colors duration-200">
                Home
              </Link> */}
            </li>
            {session ? (
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                      <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border border-sky-200 rounded-md shadow-lg">
                    <DropdownMenuItem onClick={handleLogout} className="text-sky-900 hover:bg-sky-50">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ) : (
              <>
                <li>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                </li>
                <li>
                  <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white" asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

