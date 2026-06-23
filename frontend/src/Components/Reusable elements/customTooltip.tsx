import {Text, Box } from "@chakra-ui/react"

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;   // nothing hovered → show nothing

  return (
    <Box bg="black" color="white" px={4} py={2} borderRadius="md">
      <Text font="Inter" fontSize="lg" textAlign="left" fontWeight="bold">{payload[0].value}</Text>
      <Text opacity="80%" fontSize="sm">New Clients</Text>
    </Box>
  );
}

export default CustomTooltip
