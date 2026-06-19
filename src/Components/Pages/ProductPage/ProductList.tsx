import { Stack, Box, Image, Text, Button, Flex, Badge } from "@chakra-ui/react";

function ProductList({ products }: { products: any[] }) {

    return(
    <Stack gap={3}>
      {products.map((product) => (
        <Flex key={product.id} bg="bg.surface" borderRadius="xl" boxShadow="sm" p={3} align="center" gap={4}>
          <Image src={product.image} alt="" boxSize="56px" borderRadius="md" objectFit="cover" bg="gray.100" flexShrink={0} />

          <Box flex="1">
            <Text fontWeight="medium">{product.title}</Text>
            <Text fontSize="xs" color="text.muted">{product.link}</Text>
          </Box>

          <Badge bg="red.50" color="red.500" borderRadius="md">{product.status}</Badge>

          <Flex gap={2}>
            <Button size="sm" bg="black" color="white">Source</Button>
            <Button size="sm" bg="#D4F8D4" color="black">View Details</Button>
          </Flex>
        </Flex>
      ))}
    </Stack>
    );
}

export default ProductList;
