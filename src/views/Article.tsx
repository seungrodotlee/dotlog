import * as React from "react";
import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchArticleList } from "../store/modules/article";

const ArticleBox = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid white;
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  strong {
    font-weight: 700;
  }
`;

const Article: FC = () => {
  const article = useAppSelector((state) => state.article.article);
  const dispatch = useAppDispatch();

  const { category, id } = useParams();

  const onMounted = async () => {
    await dispatch(fetchArticleList());
  };

  useEffect(() => {
    onMounted();
  }, []);

  return (
    <div className="w-full h-full">
      <ArticleBox className="container">
        <p className="text-sm font-thin">{category.replace("-", "/")}</p>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: article ? article[category.replace("-", "/")][id] : "",
          }}
        ></div>
      </ArticleBox>
    </div>
  );
};

export default Article;
