import { Box, Table, Flex, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

type DataTableProps = {
  columns: string[];
  rows: React.ReactNode[][];
};

function userTable({ columns, rows }: DataTableProps) {
  return (
    <Box bg="bg.surface" borderRadius="xl" boxShadow="sm" p={4}>
        {/* search bar */}
        <Flex mb={4} align="center" gap={2} maxW="320px">
          <LuSearch />
          <Input placeholder="Search by name or email" variant="subtle" />
        </Flex>

        <Box overflowX="auto">
          <Table.Root minW="600px">
            <Table.Header>
              <Table.Row>
                {columns.map((col, i) => (
                  <Table.ColumnHeader key={i} color="text.muted" fontSize="sm">
                    {col}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rows.map((row, rowIndex) => (
                <Table.Row key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <Table.Cell key={cellIndex}>{cell}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
      </Box>
    </Box>
  );
}

export default userTable;
