import { useCallback, useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  const nextPage = useCallback((currentLimit, total) => {
    setPage((currentPage) =>
      currentPage + 1 <= Math.ceil(total / currentLimit)
        ? currentPage + 1
        : currentPage
    );
  }, []);
  const lastPage = useCallback(() => {
    setPage((currentPage) =>
      currentPage - 1 < 1 ? currentPage : currentPage - 1
    );
  }, []);
  const newLimit = useCallback((newLimit) => {
    setPage(1);
    setLimit(newLimit);
  }, []);

  return [page, nextPage, lastPage, limit, newLimit];
};
