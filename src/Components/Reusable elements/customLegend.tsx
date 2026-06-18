import { Flex, Box, Text } from "@chakra-ui/react";

function CustomLegend() {
  return (
    <Flex gap={3} pl={4} pt={4}>
      <Flex align="center" gap={2}>
        <Box w="24px" h="10px" borderRadius="full" bg="#8C7BF7" />
        <Text fontSize="sm" color="#808080">Earnings</Text>
      </Flex>
      <Flex align="center" gap={2}>
        <Box w="24px" h="10px" borderRadius="full" bg="#7BD88F" />
        <Text fontSize="sm" color="#808080">Revenue</Text>
      </Flex>
    </Flex>
  );
}

export default CustomLegend;
