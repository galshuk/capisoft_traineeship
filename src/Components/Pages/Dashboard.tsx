
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import SideNav from "../navbar/sideNav.tsx"
import Header from "../header/header.tsx";

function Dashboard() {
    return (
        <Flex>
            <SideNav />
            <Box flex = "1">
                <Header />
                <Box flex="1" p={6}>
                <Heading textAlign="left" font="Inter" size="xl" mb={4}>Dashboard</Heading>
                    {/* <Button onClick={handleLogOut} bg="#EAFBEB" color="black">Log out</Button> */}
                </Box>
            </Box>
        </Flex>

    );
}

export default Dashboard;
