import { Container } from "@/components/common/layouts/container";
import { Hero } from "@/components/common/sections/home/hero";
import { Perks } from "@/components/common/sections/home/perks";

export default function Home() {
  return (
    <>
      <section>
        <Container>
          <Hero />
          {/* TODO: List products */}
        </Container>
      </section>

      <section className="border-t border-accent bg-secondary">
        <Container className="py-20">
          <Perks />
        </Container>
      </section>
    </>
  );
}
