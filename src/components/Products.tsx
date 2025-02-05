import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, MemoryStickIcon as Memory, HardDrive } from "lucide-react"

interface LaptopProduct {
  id: number
  name: string
  processor: string
  ram: string
  storage: string
  price: number
  image: string
}

const laptops: LaptopProduct[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Laptop Model ${String.fromCharCode(65 + (i % 26))}${Math.floor(i / 26) + 1}`,
  processor: `Intel Core i${5 + (i % 5)}`,
  ram: `${8 + (i % 8) * 4}GB`,
  storage: `${256 + (i % 4) * 256}GB SSD`,
  price: 699 + i * 1000,
  image: 'https://images.priceoye.pk/dell-latitude-3540-15-6-inches-13th-gen-core-i5-dos-8gb-256gb-pakistan-priceoye-ribij-500x500.webp',
}))


export const LaptopProducts: React.FC = () => {
  return (
    <section id="laptopProducts" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Laptop Collection
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {laptops.map((laptop) => (
          <Card
            key={laptop.id}
            className="bg-muted/50 hover:bg-muted/70 transition-colors overflow-hidden flex flex-col p-5"
          >
            <div className="relative w-full pt-[70%]">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-lg">{laptop.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-2 justify-center">
                <Cpu className="h-4 w-4" />
                <span className="text-sm">{laptop.processor}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Memory className="h-4 w-4" />
                <span className="text-sm">{laptop.ram}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <HardDrive className="h-4 w-4" />
                <span className="text-sm">{laptop.storage}</span>
              </div>
              <div className="text-lg font-bold mt-2">Rs: {laptop.price.toLocaleString()}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

