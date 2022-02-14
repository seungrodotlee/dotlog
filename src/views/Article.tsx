import * as React from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { MarkdownList, getArticle } from "../articles";

const Article: FC = () => {
  const id = useParams();

  const onMounted = async () => {
    const a = await getArticle("Test");

    console.log(a);
  };

  console.log(MarkdownList);

  onMounted();

  return <div></div>;
};

export default Article;
