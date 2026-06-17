import { Stack, Button , Heading, Image as ChakraImage, Icon} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LuSquareUserRound  } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { BiSolidGridAlt } from "react-icons/bi";
import productsLogo from "../../assets/productsLogo.png"


const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: BiSolidGridAlt, isImage: false},
  { label: "Products", path: "/products", icon: productsLogo, isImage: true },
  { label: "Users", path: "/users", icon: RxPeople, isImage: false},
  { label: "Admins", path: "/admins", icon: LuSquareUserRound, isImage: false },
];

function NavLinks() {
  const location = useLocation();

  return (
    <Stack gap={2}>
      <Heading textAlign="left" fontSize="18px" >Intern Docs</Heading>

      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

      return (
        <Button
            key={item.path}
            asChild
            color={location.pathname === item.path ? "black" : "#808080"}
            variant={location.pathname === item.path ? "subtle" : "ghost"}
            colorPalette="brand"
            justifyContent="flex-start"
          >
          <RouterLink to={item.path}>
            {item.isImage ? (
              <ChakraImage
                src={typeof item.icon === "string" ? item.icon : undefined}
                boxSize="20px"
                mr={2}
                alt=""
                opacity={isActive ? 1 : 0.5}
              />
            ) : (
              <Icon
                style={{
                  marginRight: "8px",
                  color: isActive ? "black" : "#808080"
                }}
              />
            )}
            {item.label}
          </RouterLink>
        </Button>
      );
    })}
    </Stack>
  );
}

export default NavLinks
