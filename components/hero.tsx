import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Handcrafted with Love
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Discover our collection of beautifully handmade knitted pieces. Each item is crafted with care using
                premium yarns and traditional techniques.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Shop Collection
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn Our Story
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card">
              <img
                src="/placeholder-a913l.png"
                alt="Handmade knitted sweater"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
              Made to Order
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
