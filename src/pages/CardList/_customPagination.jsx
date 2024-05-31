import React from 'react';
import { Button, Stack, Flex, Center } from '@chakra-ui/react';
import { Paginated } from "@makotot/paginated";

const CustomPagination = ({
  currentPage,
  totalPage,
  updateCurrentPage,
}) => {
    if (totalPage <= 1) {
        return null; 
      }
  return (
    <Stack p={2} spacing={4}>
      <Paginated
        currentPage={currentPage}
        totalPage={totalPage}
        siblingsSize={1}
        boundarySize={1}
      >
        {({
          pages,
          currentPage,
          hasPrev,
          hasNext,
          getFirstBoundary,
          getLastBoundary,
          isPrevTruncated,
          isNextTruncated,
        }) => (
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            gap='5%'
          >
            <Stack direction="row">
              {hasPrev() && (
                <Button
                  backgroundColor="black"
                  color="white"
                  onClick={() => updateCurrentPage(currentPage - 1)}
                >
                  &lt;
                </Button>
              )}
            </Stack>

            <Center>
              <Stack direction="row">
                {getFirstBoundary().map((boundary) => (
                  <Button
                    key={boundary}
                    backgroundColor="white"
                    color="black"
                    border="1px solid black"
                    onClick={() => updateCurrentPage(boundary)}
                  >
                    {boundary}
                  </Button>
                ))}
                {isPrevTruncated && <span>...</span>}
                {pages.map((page) => (
                  page === currentPage ? (
                    <Button
                      key={page}
                      backgroundColor="black"
                      color="white"
                    >
                      {page}
                    </Button>
                  ) : (
                    <Button
                      key={page}
                      backgroundColor="white"
                      color="black"
                      border="1px solid black"
                      onClick={() => updateCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  )
                ))}
                {isNextTruncated && <span>...</span>}
                {getLastBoundary().map((boundary) => (
                  <Button
                    key={boundary}
                    backgroundColor="white"
                    color="black"
                    border="1px solid black"
                    onClick={() => updateCurrentPage(boundary)}
                  >
                    {boundary}
                  </Button>
                ))}
              </Stack>
            </Center>

            <Stack direction="row">
              {hasNext() && (
                <Button
                  backgroundColor="black"
                  color="white"
                  onClick={() => updateCurrentPage(currentPage + 1)}
                >
                  &gt;
                </Button>
              )}
            </Stack>
          </Flex>
        )}
      </Paginated>
    </Stack>
  );
};

export default CustomPagination;
