import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Chunky Cable Knit Sweater",
    price: 89,
    image: "/placeholder-4t1l9.png",
    category: "Sweaters",
  },
  {
    id: 2,
    name: "Merino Wool Scarf",
    price: 45,
    image: "/placeholder-hr6b9.png",
    category: "Scarves",
  },
  {
    id: 3,
    name: "Cozy Cardigan",
    price: 95,
    image: "/placeholder-j70al.png",
    category: "Sweaters",
  },
  {
    id: 4,
    name: "Knitted Beanie",
    price: 28,
    image: "/placeholder-9q680.png",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Alpaca Throw Blanket",
    price: 120,
    image: "/placeholder-uh03v.png",
    category: "Home",
  },
  {
    id: 6,
    name: "Fingerless Gloves",
    price: 32,
    image: "/placeholder-vbiuf.png",
    category: "Accessories",
  },
]

export function ProductGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Featured Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each piece is lovingly handcrafted using premium natural fibers. Discover warmth, comfort, and timeless
            style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
