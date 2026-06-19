
import { SimpleGrid, Flex, Box, Heading, Button, Text, Image} from "@chakra-ui/react";
import { LuHandCoins , LuCoins, LuFileText, LuChevronDown } from "react-icons/lu";
import SideNav from "../../navbar/sideNav.tsx"
import Header from "../../header/header.tsx";


function AdminsPage() {

    return (
        <Flex>
            <SideNav />
            <Box flex = "1">
                <Header />
                <Flex flex="1" p={6} gap={4} direction="column">
                    {/* Header portions */}
                    <Flex justify="space-between" align="center">
                        <Heading textAlign="left" font="Inter" size="xl" mb={4}>Admins</Heading>
                        <Button
                            color= "Black"
                            colorPalette="brand"
                        >
                            + Add New Admin
                        </Button>
                    </Flex>

                    {/*Content */}

                </Flex>
            </Box>
        </Flex>

    );
}

export default AdminsPage;
