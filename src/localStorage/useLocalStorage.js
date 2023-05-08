import { useState, useEffect } from "react";

export const useLocalStorage = () => {
  const [follow, setFollow] = useState(() => {
    const following = JSON.parse(localStorage.getItem("follow"));
    return following ? following : [];
  });

  useEffect(() => {
    localStorage.setItem("follow", JSON.stringify(follow));
  }, [follow]);

  return [follow, setFollow];
};

