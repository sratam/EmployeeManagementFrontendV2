import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import TableComponent from "@/components/TableComponent";
import { LoginContext } from "@/components/AppWrapper";
import PaginationComponent from "@/components/PaginationComponent";

export default function HomePage() {
  const { token, role } = useContext(LoginContext);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      // const url = `/api/${attach}`;
      const url = `/api/paged?size=5&page=${page}`;
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setData(res.data.content);
          setTotalPages(res.data.total_pages);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [token, page]);

  return (
    <div className="px-48">
      {data && (
        <div className="flex flex-col">
          <TableComponent employees={data} />
          <div className="ml-auto mr-4 mt-2">
            <PaginationComponent
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      )}
    </div>
  );
}
