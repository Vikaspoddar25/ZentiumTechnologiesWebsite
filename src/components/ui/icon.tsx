import {
  Building2,
  Compass,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Headset,
  HeartPulse,
  Landmark,
  Megaphone,
  Plane,
  Plug,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  Code2,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/content/services";
import type { IndustryIconKey } from "@/content/industries";

const registry: Record<IconKey | IndustryIconKey, LucideIcon> = {
  compass: Compass,
  sparkles: Sparkles,
  plug: Plug,
  users: Users,
  headset: Headset,
  "trending-up": TrendingUp,
  code: Code2,
  database: Database,
  globe: Globe,
  "shopping-bag": ShoppingBag,
  "heart-pulse": HeartPulse,
  building: Building2,
  landmark: Landmark,
  "graduation-cap": GraduationCap,
  plane: Plane,
  megaphone: Megaphone,
  cpu: Cpu,
};

export function Icon({
  name,
  className,
}: {
  name: IconKey | IndustryIconKey;
  className?: string;
}) {
  const Component = registry[name];
  return <Component aria-hidden className={className} strokeWidth={1.5} />;
}
