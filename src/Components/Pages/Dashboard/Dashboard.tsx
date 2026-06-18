
import { Flex, Box, Heading, Button, Text } from "@chakra-ui/react";
import SideNav from "../../navbar/sideNav.tsx"
import Header from "../../header/header.tsx";
import UserOverViewChart from "./userBarChart.tsx"

function Dashboard() {
    return (
        <Flex>
            <SideNav />
            <Box flex = "1">
                <Header />
                <Box flex="1" p={6}>
                    {/* Header portions */}
                    <Flex justify="space-between" align="center">
                        <Heading textAlign="left" font="Inter" size="xl" mb={4}>Dashboard</Heading>
                        <Button
                            color= "Black"
                            colorPalette="brand"
                        >
                            + Add Revenue
                        </Button>
                    </Flex>

                    {/* Data portion */}
                    <Flex justify="space-between" align="center">
                        <Box bg="bg.surface" p={6} borderRadius="xl" boxShadow="sm" flex="1">
                            <Heading size="md" mb={1}>User Overview</Heading>
                            <Text color="text.muted" mb={4}>+25% compared to last 30 days</Text>
                            <UserOverViewChart />
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>

    );
}

export default Dashboard;
