import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  useEffect(() => {
    const handleChange = (e) => {
      setMatches(e.matches);
    };
    const matchQueryList = window.matchMedia(query);
    matchQueryList.addEventListener("change", handleChange);
  }, [query]);
  return matches;
};

export default useMediaQuery;
