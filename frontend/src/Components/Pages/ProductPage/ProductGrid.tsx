import { SimpleGrid, Box, Image, Text, Button, Flex, Badge } from "@chakra-ui/react";

function ProductGrid({ products }: { products: any[] }) {

    return(
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4}>
      {products.map((product) => (
        <Box key={product.id} bg="bg.surface" borderRadius="xl" boxShadow="sm" overflow="hidden">

          {/* image with badge overlaid */}
          <Box position="relative">
            <Image src={product.image} alt="" h="160px" w="100%" objectFit="cover" bg="gray.100" />
            <Badge position="absolute" top={2} left={2} bg="#85858533" color="white" borderRadius="md">
              {product.status}
            </Badge>
          </Box>

          {/* text + actions */}
          <Box p={2}>
            <Text fontWeight="medium" color="black" textAlign="left">{product.title}</Text>
            <Text fontSize="xs" color="text.muted" mb={2} textAlign="left">{product.link}</Text>
            <Flex gap={1} justify="space-between">
              <Button size="xs" bg="#D4F8D4" color="#404040">View Details</Button>
              <Button size="xs" bg="black" color="white">Source</Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
    );
}

export default ProductGrid;
