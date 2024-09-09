import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";



export default function PaginationComponent({ page, setPage, totalPages }) {

  const pageRenderer = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink isActive={i === page + 1} onClick={() => setPage(i - 1)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };


  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() =>
              setPage((prev) => {
                if (prev == 0) return 0;
                return prev - 1;
              })
            }
          />
        </PaginationItem>
        {pageRenderer()}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() =>
              setPage((prev) => {
                if (prev == totalPages - 1) return totalPages - 1;
                return (prev += 1);
              })
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
