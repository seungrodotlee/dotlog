import { useEffect, useState } from "react";

export const useTitle = (initial: string) => {
  const [title, setTitle] = useState<string>(initial);

  const updateTitle = () => {
    const titleElement = document.querySelector("title");
    titleElement.textContent = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};
