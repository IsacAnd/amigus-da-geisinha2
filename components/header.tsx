"use client"

import { ShoppingBag, Heart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useFavorites } from "@/contexts/favorites-context"
import Link from "next/link"

export function Header() {
  const { state } = useCart()
  const { state: favoritesState } = useFavorites()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-foreground cursor-pointer">Cozy Knits</h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Shop All
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Sweaters
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Scarves
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Accessories
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/favorites">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {favoritesState.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                    {favoritesState.itemCount}
                  </span>
                )}
                <span className="sr-only">Favorites</span>
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
                <span className="sr-only">Shopping cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
