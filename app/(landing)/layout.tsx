import { NavigationBar } from "@/components/ui/navbar";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <div className="site-shell"><a href="#main-content" className="skip-link">Skip to content</a><NavigationBar /><main id="main-content">{children}</main></div>;
}
