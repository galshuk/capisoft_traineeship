import { Avatar, Box, Flex, Button, Text} from "@chakra-ui/react";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "../../components/ui/menu";
import { LuChevronDown } from "react-icons/lu"
import { useAuth } from '../Utility/AuthContext.tsx';
import janePhoto from "../../../src/assets/janePhoto.png"

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
            <Button variant="ghost" h="auto" py={2}>
                <Flex align="center" gap={3}>
                <Avatar.Root size="sm">
                    <Avatar.Fallback name="Jane Cooper" />
                    <Avatar.Image src={janePhoto} />
                </Avatar.Root>

                <Box textAlign="left">
                    <Text fontWeight="semibold" fontSize="sm">Jane Cooper</Text>
                    <Text fontSize="xs" color="text.muted">janecooper@gmail.com</Text>
                </Box>

                <LuChevronDown />
                </Flex>
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
