import { Stack, Box, Image, Text, Button, Flex, Badge } from "@chakra-ui/react";

function ProductList({ products }: { products: any[] }) {
  return (
    <Stack gap={3}>
      {products.map((product) => (
        <Flex
          key={product.id}
          bg="bg.surface"
          borderRadius="xl"
          boxShadow="sm"
          p={3}
          align="center"
          gap={4}
          flexWrap="wrap"
          minW={0}
        >
          <Image src={product.image} alt="" boxSize="56px" borderRadius="md" objectFit="cover" bg="gray.100" flexShrink={0} />

          {/* title + link — left aligned, takes available space */}
          <Flex align="center" gap={3} minW={0}>
            <Box flex="1" minW={0} textAlign="left">
              <Text fontWeight="medium" wordBreak="break-word">{product.title}</Text>
              <Text fontSize="xs" color="text.muted" wordBreak="break-all">{product.link}</Text>
            </Box>

            {/* status badge */}
            <Badge
              flexShrink={0}
              bg={product.status === "Removed" ? "#FEE8EA" : "#FFEFE7"}
              color={product.status === "Removed" ? "#DA3F51" : "#FF9600"}
              borderRadius="md"

            >
              {product.status}
            </Badge>
          </Flex>

          {/* buttons, far right */}
          <Flex gap={2}  justify="center" ml={{ base: 0, md: "auto" }} flex={{ base: "1 1 100%", md: "0 0 auto" }}>
            <Button size="sm" bg="black" color="white">Source</Button>
            <Button size="sm" bg="#D4F8D4" color="black">View Details</Button>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
}

export default ProductList;
