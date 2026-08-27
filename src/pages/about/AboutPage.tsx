import Clients from "./sections/Clients";
import DiscoveryNudge from "./sections/DiscoveryNudge";
import Hero from "./sections/Hero";
import Principles from "./sections/Principles";
import Services from "./sections/Services";
import StudioOverview from "./sections/StudioOverview";
import ValueProposition from "./sections/ValueProposition";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <StudioOverview />
      <Services />
      <ValueProposition />
      <Principles />
      <Clients />
      <DiscoveryNudge />
    </>
  );
}
