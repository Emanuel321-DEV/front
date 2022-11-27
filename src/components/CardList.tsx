import * as React from "react";
import { render } from "react-dom";

import { Table } from "react-chakra-pagination";

import { ChakraProvider } from "@chakra-ui/react";

// Use Chakra Ui for create a custom component for display field date in table
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading
} from "@chakra-ui/react";

// Recommended for icons
import { FiTrash2, FiUser } from "react-icons/fi";


type User = {
  id: number;
  colaborador: string;
  date: string;
  hour: string;

};

// Example list of users
// Generated using https://www.mockaroo.com/
const users: User[] = [
  {
    id: 1,
    colaborador: "Carlin Gwinn",
    date: "04/11/2009",
    hour: "18:40",
    
  },
  {
    id: 2,
    colaborador: "Yetta Snape",
    date: "06/08/1989",
    hour: "18:40",
  },
  // ...
];

export function CardList() {
  // Control current Page
  const [page, setPage] = React.useState(1);

  // Formatter for each user
  const tableData = users.map((user) => ({
    colaborador: (
      <Flex align="center">
        <Text>{user.colaborador}</Text>
      </Flex>
    ),
    date: user.date,
    hour: user.hour,

  }));

  // Accessor to get a date in user object
  const tableColumns = [
    {
      Header: "Colaborador",
      accessor: "colaborador" as const,
    },
    {
      Header: "date",
      accessor: "date" as const
    },
    {
      Header: "hour",
      accessor: "hour" as const
    },
  ];

  return (
    <Box p="12">

      <Box>
        <Table
        colorScheme="messenger"

          // Fallback component when list is empty
          emptyData={{
            icon: FiUser,
            text: "Nobody is registered here."
          }}
          totalRegisters={users.length}
          page={page}
          // Listen change page event and control the current page using state
          onPageChange={(page) => setPage(page)}
          columns={tableColumns}
          data={tableData}
        />
      </Box>
    </Box>
  );
}

