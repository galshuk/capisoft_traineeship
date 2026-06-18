
import { Flex, Box, Heading, Button, Text } from "@chakra-ui/react";
import { LuCoins, LuFileText, LuChevronDown } from "react-icons/lu";
import SideNav from "../../navbar/sideNav.tsx"
import Header from "../../header/header.tsx";
import UserOverViewChart from "./userBarChart.tsx"
import StatCard from "../../Reusable elements/statCards.tsx";


function Dashboard() {
    return (
        <Flex>
            <SideNav />
            <Box flex = "1">
                <Header />
                <Flex flex="1" p={6} gap={4} direction="column">
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
                    <Flex justify="space-between" align="center" wrap="wrap">
                        {/* User overview */}
                        <Box bg="bg.surface" p={6} borderRadius="xl" boxShadow="sm" flex="1">
                            <Flex justify="space-between" align="flex-start" mb={4}>
                                <Box textAlign="left" font="Inter">
                                <Heading size="md">User Overview</Heading>
                                <Text color="text.muted" fontSize="sm">+25% compared to last 30 days</Text>
                                </Box>

                                <Button variant="outline" size="sm">
                                This Week <LuChevronDown />
                                </Button>
                            </Flex>
                            <UserOverViewChart />
                            <Flex gap={4} mt={4}>
                                <StatCard
                                    icon={<LuCoins size={20} />}
                                    value="€200.00"
                                    percentage="+85%"
                                    label="Earnings"
                                />
                                <StatCard
                                    icon={<LuFileText size={20} />}
                                    value="52"
                                    percentage="+25%"
                                    label="Closed Offers"
                                />
                            </Flex>
                        </Box>

                        {/* Reveniew overview */}
                        <Box bg="bg.surface" p={6} borderRadius="xl" boxShadow="sm" flex="1">
                            <Flex justify="space-between" align="flex-start" mb={4}>
                                <Box textAlign="left" font="Inter">
                                <Heading size="md">Reveniew Overview</Heading>
                                <Text color="text.muted" fontSize="sm">+25% compared to last 30 days</Text>
                                </Box>

                                <Button variant="outline" size="sm">
                                This Year <LuChevronDown />
                                </Button>
                            </Flex>


                        </Box>
                    </Flex>

                    {/* Users portion */}
                     <Flex justify="space-between" align="center">

                     </Flex>
                </Flex>
            </Box>
        </Flex>

    );
}

export default Dashboard;
