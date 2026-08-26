import Clients from "./sections/Clients";
import DiscoveryNudge from "./sections/DiscoveryNudge";
import Hero from "./sections/Hero";
import StudioOverview from "./sections/StudioOverview";
import ValueProposition from "./sections/ValueProposition";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <StudioOverview />
      <ValueProposition />
      <Clients />
      <DiscoveryNudge />
    </>
  );
}
