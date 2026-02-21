import { Container } from "@/components/layout/Container";

export default function CartPage() {
  return (
    <Container className="py-8">
      <h1 className="text-2xl font-semibold">Cart</h1>
      <p className="mt-2 text-muted-foreground">
        Your cart is empty. Add products from the products page.
      </p>
    </Container>
  );
}
