
import { SimpleGrid, Flex, Box, Heading, Button, Text, Image} from "@chakra-ui/react";
import { LuHandCoins , LuCoins, LuFileText, LuChevronDown } from "react-icons/lu";
import SideNav from "../../navbar/sideNav.tsx"
import Header from "../../header/header.tsx";
import UserOverViewChart from "./userBarChart.tsx"
import RevenueOverviewChart from "./revenueLineChart.tsx"
import TopFiveList from "./top5.tsx"
import TopAdmin from "./topAdminBlock.tsx"
import StatCard from "../../Reusable elements/statCards.tsx";
import illustration from "../../../../src/assets/Illustration1.png";
import archiveIcon from "../../../../src/assets/archiveIcon.png";
import coinshand from "../../../../src/assets/coins-hand.png";
import coinsStacked from "../../../../src/assets/coins-stacked-01.png";
import fileLock from "../../../../src/assets/file-lock-02.png";

function Dashboard() {
    const topUsers = [
        { name: "Rose Meadows", listing: "Listing #2464", iconBg: "#D4F8D4" },
        { name: "Madden Esparza", listing: "Listing #6345", iconBg: "#FAD4E0" },
        { name: "Edison Norman", listing: "Listing #9815", iconBg: "#E4D4F8" },
        { name: "Terrance Conner", listing: "Listing #9245", iconBg: "#D4E4F8" },
        ];

    const fakeSellers = [
        { name: "Rose Meadows", listing: "Listing #2464", iconBg: "#D4F8D4" },
        { name: "Madden Esparza", listing: "Listing #6345", iconBg: "#FAD4E0" },
        { name: "Edison Norman", listing: "Listing #9815", iconBg: "#E4D4F8" },
        { name: "Terrance Conner", listing: "Listing #9245", iconBg: "#D4E4F8" },
    ];

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

                    {/* Overview */}
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4}>
                        <Box bg="bg.surface" p={6} borderRadius="xl" boxShadow="sm" flex="1">
                            <Flex align="center" gap={6}>
                                <Box>
                                    <Image src={illustration} alt="" maxW="180px" w="100%" flexShrink={0} />
                                </Box>
                                <Box textAlign="left" font="Inter">
                                <Heading size="md">Ready to get started?</Heading>
                                <Text color="text.muted" fontSize="sm">Take advantage of our platform and start onboarding affiliates today!</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <SimpleGrid columns={{ base: 1, sm: 2}}  gap={4}>
                            <StatCard
                                icon={<Image src={coinsStacked} boxSize={4} />}
                                value="€500.00"
                                percentage="+20%"
                                label="Yearly Earnings"
                            />
                            <StatCard
                                icon={<Image src={coinshand} boxSize={4} />}
                                value="800.00"
                                percentage="+33%"
                                label="Revenue"
                            />
                            <StatCard
                                icon={<Image src={fileLock} boxSize={4} />}
                                value="52"
                                percentage="+20%"
                                label="Closed Offers"
                            />
                            <StatCard
                                icon={<Image src={archiveIcon} boxSize={4} />}
                                value="125"
                                percentage="+20%"
                                label="Total affiliates"
                            />
                        </SimpleGrid>
                    </SimpleGrid>

                    {/* Graph portion */}
                    <SimpleGrid columns={{ base: 1, sm:2, lg: 2 }} gap={4}>
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
                            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4} mt={4}>
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
                            </SimpleGrid>
                        </Box>

                        {/* Reveniew overview */}
                        <Box bg="bg.surface" p={6} borderRadius="xl" boxShadow="sm" flex="1">
                            <Flex justify="space-between" align="flex-start" mb={4}>
                                <Box textAlign="left" font="Inter">
                                <Heading size="md">Revenue Overview</Heading>
                                <Text color="text.muted" fontSize="sm">+25% compared to last 30 days</Text>
                                </Box>

                                <Button variant="outline" size="sm">
                                This Year <LuChevronDown />
                                </Button>
                            </Flex>

                            <RevenueOverviewChart />

                        </Box>
                    </SimpleGrid>

                    {/* Users portion */}
                     <SimpleGrid columns={{ base: 1, lg: 3 }} gap={4}>
                        <TopFiveList title="Top 5 Users" people={topUsers} />
                        <TopFiveList title="Top 5 Fake Sellers" people={fakeSellers} />
                        <TopAdmin />
                     </SimpleGrid>
                </Flex>
            </Box>
        </Flex>

    );
}

export default Dashboard;
