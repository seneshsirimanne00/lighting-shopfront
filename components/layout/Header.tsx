import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className="mx-auto flex h-[var(--header-height)] w-full max-w-[var(--container-max)] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl">Shop</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:max-w-sm">
          <div className="relative hidden w-full sm:block">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9"
              aria-label="Search products"
            />
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" aria-label="View cart">
              <ShoppingCart className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
