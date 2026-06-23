import { Flex, Box, Text, Heading } from "@chakra-ui/react";

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  percentage: string;
  label: string;
};

function StatCard({ icon, value, percentage, label }: StatCardProps) {
  return (
    <Flex
      bg="bg.surface"
      p={5}
      borderRadius="xl"
      boxShadow="sm"
      align="center"
      gap={4}
      flex="1"
      flexWrap="wrap"
    >
      {/* green icon circle */}
      <Flex
        align="center"
        justify="center"
        bg="#D4F8D4"
        borderRadius="full"
        boxSize="48px"
        flexShrink={0}
      >
        {icon}
      </Flex>

      {/* text block */}
      <Box minW={0} flex="1">
        <Flex align="baseline" gap={2} flexWrap="wrap">
          <Heading size="lg">{value}</Heading>
          <Text color="#808080" fontSize="sm" fontWeight="medium" >{percentage}</Text>
        </Flex>
        <Text color="text.muted" fontSize="sm" textAlign="left" >{label}</Text>
      </Box>
    </Flex>
  );
}

export default StatCard;
