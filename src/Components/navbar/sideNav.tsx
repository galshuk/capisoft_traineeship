import { Box } from "@chakra-ui/react";
import NavLinks from "./navItems.tsx";

function SideNav() {
    return (
        <Box
        as="nav"
        display={{base: "none", md: "block"}}
        w="250px"
        bg="bg.surface"
        borderRightWidth="1px"
        borderColor="#F0F0F0"
        p={4}
        minH="100vh"
        >
            <NavLinks />
        </Box>
    );
}

export default SideNav;
