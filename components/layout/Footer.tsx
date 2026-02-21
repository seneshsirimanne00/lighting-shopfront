import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div
        className="mx-auto max-w-[var(--container-max)] px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {currentYear} Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
