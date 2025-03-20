import React from 'react'
import { SignedIn,SignedOut,SignInButton,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { ChevronDown, ChevronLeft, LayoutDashboard, MousePointer, PointerIcon,file } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent,  DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuItem,DropdownMenuLabel, DropdownMenuSubContent } from './ui/dropdown-menu'

function Header() {
return (
    <header className='fixed top-0 w-full vorder-b bg-background/80 backdrop-blur-md z50 supports-[backdrop-filter]:bg-background/60'>
            <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
                   
                <Link href="/">
                    <Image src="/logo-1.png" width={100} height={60} className='h-50 py-1 w-auto object-contain'/>
                    
                </Link>
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <SignedIn>
                        <Link href="/dashboard">
                        <Button className="cursor-pointer">
                            <LayoutDashboard className="h-4 w-4" />
                            <span className='hidden md:block'>Industry Insights</span>
                        </Button>
                        </Link>
                  

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button className="cursor-pointer">
                            <span className='hidden md:block'>Growth Tools</span>
                            <ChevronDown className="h-4 w-4" />
                            
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>

                            <DropdownMenuItem>
                                <Link href={"/resume"} className="cursor-pointer flex items-center gap-4">
                                  
                                    <span className='py-2 px-2'>Build Resume</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/resume"} className="cursor-pointer flex items-center gap-4">
                                  
                                    <span className='py-1 px-1'>Cover Letter</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/resume"} className="cursor-pointer flex items-center gap-4">
                                  
                                    <span className='py-2 px-2'>Interview Prep</span>
                                </Link>
                            </DropdownMenuItem>


                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline" className="cursor-pointer">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton 
                        appearance={{
                            elements:{
                                avatarBox:"w-10 h-10",
                                userButtonPopoverCard:"Shadow-xl",
                                userPreviewMainIdentifier:"font-semibold",
                            },
                        }}
                        afterSignedOutUrl="/"
                        />
                    </SignedIn>

                </div>
        </nav>



    </header>
  )
}

export default Header