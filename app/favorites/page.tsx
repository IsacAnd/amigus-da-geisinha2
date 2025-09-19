"use client"

import { Heart, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useFavorites } from "@/contexts/favorites-context"
import { useCart } from "@/contexts/cart-context"

export default function FavoritesPage() {
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites()
  const { dispatch: cartDispatch } = useCart()

  const handleRemoveFromFavorites = (productId: number) => {
    favoritesDispatch({ type: "REMOVE_FAVORITE", payload: productId })
  }

  const handleAddToCart = (product: any) => {
    cartDispatch({ type: "ADD_ITEM", payload: product })
  }

  const handleClearFavorites = () => {
    favoritesDispatch({ type: "CLEAR_FAVORITES" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">My Favorites</h1>
              <p className="text-muted-foreground">
                {favoritesState.itemCount === 0
                  ? "No favorite items yet"
                  : `${favoritesState.itemCount} favorite ${favoritesState.itemCount === 1 ? "item" : "items"}`}
              </p>
            </div>
            {favoritesState.itemCount > 0 && (
              <Button variant="outline" onClick={handleClearFavorites}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>

          {favoritesState.itemCount === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">No favorites yet</h2>
              <p className="text-muted-foreground mb-6">
                Start browsing and add items to your favorites by clicking the heart icon.
              </p>
              <Button asChild>
                <a href="/">Continue Shopping</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoritesState.items.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300"
                >
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
                      onClick={() => handleRemoveFromFavorites(product.id)}
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                      <span className="sr-only">Remove from favorites</span>
                    </Button>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-medium">{product.category}</p>
                      <h3 className="font-semibold text-lg text-foreground leading-tight">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary">${product.price}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 group/button" onClick={() => handleAddToCart(product)}>
                        <ShoppingBag className="h-4 w-4 mr-2 group-hover/button:scale-110 transition-transform" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleRemoveFromFavorites(product.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove from favorites</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
