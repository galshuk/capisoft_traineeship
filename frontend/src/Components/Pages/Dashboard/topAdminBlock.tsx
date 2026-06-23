import { Flex, Box, Text, Heading, Link, Image, Button, Stack } from "@chakra-ui/react";
import adminPhoto from "../../../components/ui/adminPhoto.png";   // import like your other images

function TopAdmin() {
  return (
    <Box bg="bg.surface" p={6} borderRadius="xl" boxShadow="sm">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="md">Top Admin</Heading>
        <Link fontSize="sm" fontWeight="medium">View all</Link>
      </Flex>

      <Flex direction="column" align="center" gap={6}>
        {/* profile */}
        <Box textAlign="center" flexShrink={0}>
          <Image src={adminPhoto} alt="" boxSize="80px" borderRadius="full" objectFit="cover" />
          <Text fontWeight="medium" mt={2}>Carl Meadows</Text>
          <Text fontSize="xs" color="text.muted">Admin</Text>
        </Box>

        {/* right side: stat + button stacked */}
        <Stack gap={3} flex="1">
          <Box bg="bg.muted" p={3} borderRadius="md">
            <Text fontSize="sm" color="text.muted">
              Notices Reviewed: <Text as="span" fontWeight="bold" color="black">23,353</Text>
            </Text>
          </Box>
          <Button bg="#D4F8D4" color="black" size="lg">View Details</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default TopAdmin;
