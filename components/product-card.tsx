"use client"

import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { useFavorites } from "@/contexts/favorites-context"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites()

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  const isFavorited = favoritesState.items.some((item) => item.id === product.id)

  const handleToggleFavorite = () => {
    if (isFavorited) {
      favoritesDispatch({ type: "REMOVE_FAVORITE", payload: product.id })
    } else {
      favoritesDispatch({ type: "ADD_FAVORITE", payload: product })
    }
  }

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-card">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleToggleFavorite}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
          <span className="sr-only">{isFavorited ? "Remove from favorites" : "Add to favorites"}</span>
        </Button>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{product.category}</p>
          <h3 className="font-semibold text-lg text-foreground leading-tight">{product.name}</h3>
          <p className="text-2xl font-bold text-primary">${product.price}</p>
        </div>

        <Button className="w-full group/button" onClick={handleAddToCart}>
          <ShoppingBag className="h-4 w-4 mr-2 group-hover/button:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
