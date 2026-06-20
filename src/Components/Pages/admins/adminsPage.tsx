import DataTable from "../../Reusable elements/userTable.tsx";
import { Flex, Box, Button, Heading, Text, Avatar, Badge } from "@chakra-ui/react";
import SideNav from "../../navbar/sideNav.tsx"
import Header from "../../header/header.tsx";


function AdminsPage() {

    const userColumns = ["User", "Project Name", "Project Revenue", "Status"];

const userRows = [
        [
            <Flex align="center" gap={2}>
            <Avatar.Root size="sm"><Avatar.Fallback name="Phillip Gouse" /></Avatar.Root>
            <Box>
                <Text fontWeight="medium" fontSize="sm">Phillip Gouse</Text>
                <Text fontSize="xs" color="text.muted">janinagalinda@sportsillustrated.com</Text>
            </Box>
            </Flex>,
            <Text>Project Name</Text>,
            <Text>€ 200</Text>,
            <Badge colorPalette="purple">In Negotiation</Badge>,
        ],
    ];

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
                    <DataTable columns={userColumns} rows={userRows} />

                </Flex>
            </Box>
        </Flex>

    );
}

export default AdminsPage;
