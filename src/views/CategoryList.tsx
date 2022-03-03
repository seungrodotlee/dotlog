import * as React from "react";
import { FC, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchArticleList } from "../store/modules/article";

import AspectRatio from "../components/AspectRatio";

const CategoryList: FC = () => {
  const params = useParams();
  console.log(params);

  const article = useAppSelector((state) => state.article.article);
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState<string[]>([]);
  const [subCateogry, setSubCateogry] = useState<string[]>([]);

  const onMounted = async () => {
    await dispatch(fetchArticleList());
  };

  useEffect(() => {
    onMounted();
  }, []);

  useEffect(() => {
    if (!article) return;

    console.log(article);
    const keys = Object.keys(article);

    if (params.parent) {
      setCategory(keys.filter((k) => k.includes(params.parent)));
    } else {
      setCategory(keys.filter((k) => !k.includes("/")));
      setSubCateogry(keys.filter((k) => k.includes("/")));
    }
  }, [article]);

  return (
    <div className="w-full h-full">
      <div className="container grid grid-cols-5 gap-3">
        {category.map((c, i) => {
          return (
            <AspectRatio key={i} base="w" ratio="1/1">
              <Link
                to={
                  !params.parent && subCateogry.find((s) => s.includes(c))
                    ? `/category/${c}`
                    : `/articles/${c.replace("/", "-")}`
                }
                className="flex-center rounded-2xl bg-neutral-900"
              >
                {c}
              </Link>
            </AspectRatio>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
