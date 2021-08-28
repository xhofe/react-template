import React from "react";
import { IconButton, Icon, Link, Tooltip } from "@chakra-ui/react";
import { DiGithubAlt } from "react-icons/di";

export const Github = () => {
  return (
    <Tooltip
      shouldWrapChildren
      hasArrow
      label={"Go to Github"}
      placement="left-start"
    >
      <Link href="https://github.com/Xhofe/react-template" isExternal>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={"Go to Github"}
          variant="ghost"
          colorScheme="brand"
          icon={<Icon as={DiGithubAlt} boxSize={6} />}
        />
      </Link>
    </Tooltip>
  );
};