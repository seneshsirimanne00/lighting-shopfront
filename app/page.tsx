import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export default function HomePage() {
  return (
    <Container className="py-12 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to the Shop
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Discover our curated collection. Start browsing to find what you need.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/products">Browse Products</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/cart">View Cart</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
