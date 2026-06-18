import { Flex, Box, Text, Heading, Link, Stack } from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";

type Person = {
  name: string;
  listing: string;
  iconBg: string;
};

type TopFiveProps = {
  title: string;
  people: Person[];
};

function TopFiveList({ title, people }: TopFiveProps) {
  return (
    <Box bg="bg.surface" p={6} borderRadius="xl" boxShadow="sm">
      {/* header row */}
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="md">{title}</Heading>
        <Link fontSize="sm" fontWeight="medium">View all</Link>
      </Flex>

      {/* the list */}
      <Stack gap={4}>
        {people.map((person, index) => (
          <Flex key={index} justify="space-between" align="center">
            <Flex align="center" gap={3}>
              <Flex
                align="center" justify="center"
                boxSize="36px" borderRadius="full"
                bg={person.iconBg} flexShrink={0}
              >
                <LuUser size={18} />
              </Flex>
              <Box>
                <Text fontWeight="medium">{person.name}</Text>
                <Text fontSize="xs" color="text.muted">Company name</Text>
              </Box>
            </Flex>
            <Text fontSize="sm" color="text.muted">{person.listing}</Text>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}

export default TopFiveList;
