import axios from "axios";
import { useEffect, useState } from "react";

export function useFatch<T = unknown>(url: string){

  const [ data, setData] = useState<T | null>(null);

  const [ isFetching, setIsFetching ] = useState(true);

  useEffect(() => {
    axios.get(url)
    .then(Response => {
      setData(Response.data)
    })
    .finally(() => {
      setIsFetching(false);
    })
  }, [])

  return { data, isFetching }
}


