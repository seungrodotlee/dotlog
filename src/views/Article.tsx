import * as React from "react";
import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchArticleList } from "../store/modules/article";

const Article: FC = () => {
  const article = useAppSelector((state) => state.article.article);
  const dispatch = useAppDispatch();

  const { category, id } = useParams();
  console.log(category, id);

  const onMounted = async () => {
    await dispatch(fetchArticleList());
  };

  useEffect(() => {
    onMounted();
  }, []);

  return (
    <div className="container">
      <div
        className=""
        dangerouslySetInnerHTML={{
          __html: article ? article[category][id].html : "",
        }}
      ></div>
    </div>
  );
};

export default Article;
