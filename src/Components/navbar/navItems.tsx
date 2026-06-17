import { Stack, Button , Heading} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
export default NavLinks

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Products", path: "/products" },
  { label: "Users", path: "/users" },
  { label: "Admins", path: "/admins" },
];

function NavLinks() {
  const location = useLocation();

  return (
    <Stack gap={2}>
      <Heading size="ml" >Intern Docs</Heading>

      {navItems.map((item) => (
        <Button
            key={item.path}
            asChild
            variant={location.pathname === item.path ? "subtle" : "ghost"}
            colorPalette="brand"
            justifyContent="flex-start"
          >
          <RouterLink to={item.path}>{item.label}</RouterLink>
        </Button>
      ))}
    </Stack>
  );
}
