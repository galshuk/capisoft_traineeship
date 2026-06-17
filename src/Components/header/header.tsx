import { Flex, Button } from "@chakra-ui/react";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "../../components/ui/menu";
import { LuChevronDown } from "react-icons/lu"
import { useAuth } from '../Utility/AuthContext.tsx';

function Header() {
    const { user, logout } = useAuth();

    return (
        <Flex
            as="header"
            align="center"
            justify="flex-end"
            px={6}
            py={4}
            borderBottomWidth="1px"
            borderColor="#F0F0F0"
            bg="bg.surface"
            w="100%"
            h="72px"
        >
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="ghost">
                    {user?.email ?? "Account"} <LuChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                <MenuItem value="logout" onClick={logout}>
                    Log out
                </MenuItem>
            </MenuContent>
        </MenuRoot>
        </Flex>
    );
}

export default Header;
