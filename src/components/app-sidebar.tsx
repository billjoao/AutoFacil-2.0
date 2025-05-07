import { Home, Package, LayoutDashboard, LocateIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Início",
    url: "/auto/home",
    icon: Home,
  },
  {
    title: "Produtos",
    url: "/auto/produtos",
    icon: Package,
  },
  {
    title: "Dashboard",
    url: "/auto/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Rastreamento",
    url: "/auto/rastramento",
    icon: LocateIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="text-white">
      <SidebarContent className="bg-red-950">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-bold text-2xl"><Link to="/">AutoFacil</Link></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex gap-2 items-center">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
