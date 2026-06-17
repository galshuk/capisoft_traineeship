import { Link } from 'react-router-dom'
import { useAuth } from '../Utility/AuthContext.tsx';
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import SideNav from "../navbar/sideNav.tsx"

function Dashboard() {
    const { logout } = useAuth();

        function handleLogOut() {
            logout();
        }

    return (
        <Flex>
            <SideNav />
            <Box flex="1" p={6}>
                <Heading size="xl" mb={4}>Dashboard</Heading>
                <Button onClick={handleLogOut} bg="#EAFBEB" color="black">Log out</Button>
            </Box>
        </Flex>

    );
}

export default Dashboard;
