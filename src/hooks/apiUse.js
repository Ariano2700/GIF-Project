import { useEffect, useState } from "react";

const apiUse = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApi = () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setLoading(true);
          setData(result.data);
          //console.log(result);
        })
        .catch((error) => console.log(error));
    };
    fetchApi();
  }, [url]);
  return { loading, data };
};
export default apiUse;
