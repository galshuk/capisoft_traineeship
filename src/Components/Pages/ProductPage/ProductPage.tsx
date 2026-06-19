
import { useState } from "react";
import { SimpleGrid, Flex, Box, Heading, Button, Text, Image} from "@chakra-ui/react";
import SideNav from "../../navbar/sideNav.tsx"
import Header from "../../header/header.tsx";
import ProductList from "./ProductList.tsx"
import ProductGrid from "./ProductGrid.tsx"

function ProductPage() {
    const [view, setView] = useState<"grid" | "list">("grid");
    const products = [
        { id: 1, title: "Product title goes here", link: "https://yourproductgoeshere122.com", status: "Removed", image: "" },
        { id: 2, title: "Product title goes here", link: "https://yourproductgoeshere122.com", status: "Reminder Sent", image: "" },
        { id: 3, title: "Product title goes here", link: "https://yourproductgoeshere122.com", status: "Removed", image: "" },
    ];

    return (
        <Flex>
            <SideNav />
            <Box flex = "1">
                <Header />
                <Flex flex="1" p={6} gap={2} direction="column">
                    {/* Header portions */}
                    <Flex justify="space-between" align="center">
                        <Heading textAlign="left" font="Inter" size="xl" mb={4}>Products</Heading>
                        <Flex gap={2}>
                        <Button
                            onClick={() => setView("grid")}
                            bg={view === "list" ? "#D4F8D4" : "white"}
                            color="black"
                            borderWidth="1px"
                            borderColor="border.subtle"
                        >
                            Grid view
                        </Button>
                        <Button
                            onClick={() => setView("list")}
                            bg={view === "grid" ? "#D4F8D4" : "white"}
                            color="black"
                            borderWidth="1px"
                            borderColor="border.subtle"
                        >
                            List view
                        </Button>
                        </Flex>
                    </Flex>

                    <Box>
                        {/* header + Grid/List toggle buttons that call setView */}
                        {view === "grid"
                            ? <ProductGrid products={products} />
                            : <ProductList products={products} />}
                    </Box>

                </Flex>
            </Box>
        </Flex>

    );
}

export default ProductPage;
