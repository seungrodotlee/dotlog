import * as React from "react";
import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchArticleList } from "../store/modules/article";

import noise from "../assets/img/noise.svg";

type ArticleListItem = {
  path: string;
  category: string;
  title: string;
  content: string;
};

const Noise = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: url(${noise}) 0 0 repeat;
  background-position: center;

  animation: bg-animation 1.5s steps(6) infinite;

  @keyframes bg-animation {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    30% {
      transform: translate(3%, -15%);
    }
    50% {
      transform: translate(12%, 9%);
    }
    70% {
      transform: translate(9%, 4%);
    }
    90% {
      transform: translate(-1%, 7%);
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
`;

const Main: FC = () => {
  const article = useAppSelector((state) => state.article.article);
  const dispatch = useAppDispatch();

  const [generated, setGenerated] = useState<ArticleListItem[]>([]);
  const [category, setCategory] = useState<string[]>([]);

  const onMounted = async () => {
    await dispatch(fetchArticleList());
  };

  useEffect(() => {
    onMounted();
  }, []);

  useEffect(() => {
    if (!article) return;

    setCategory(Object.keys(article));

    let list: ArticleListItem[] = [];

    for (let cate in article) {
      const data = article[cate];

      for (let key in data) {
        const d = data[key];

        const el = document.createElement("div");
        el.innerHTML = d;
        const titleElement = el.querySelector("h1");

        if (!titleElement) continue;

        const title = titleElement.textContent;
        const subtitle = el.querySelector("h2");
        const text = subtitle ? subtitle.textContent : "";

        list.push({
          path: `/article/${cate}/${key}`,
          title: title,
          category: cate,
          content: text,
        });
      }
    }

    setGenerated(list);
  }, [article]);

  return (
    <div className="w-full h-full flex-col">
      <div className="container relative">
        <div className="relative !px-0 rounded-3xl overflow-hidden mb-36">
          <Noise />
          <Overlay className="bg-gradient-to-b from-neutral-700 to-neutral-400 min-h-screen"></Overlay>
          <div className="divide-y-2 divide-neutral-700 px-6">
            {generated.map((g) => {
              return (
                <Link
                  to={g.path}
                  key={g.title}
                  className="flex flex-col article relative py-4 opacity-60 hover:opacity-100 transition-opacity duration-500"
                >
                  <p className="text-sm font-thin">{g.category}</p>
                  <h3 className="text-[2.25rem] font-black">{g.title}</h3>
                  {g.content ? (
                    <p className="font-bold">{g.content}</p>
                  ) : (
                    <p className="font-bold">부제목이 없습니다 :(</p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="affix flex flex-col absolute left-full top-2">
          {category.map((c, i) => {
            return (
              <Link
                to={`/articles/${c}`}
                key={i}
                className="font-bold text-sm opacity-60 hover:opacity-100 transition-opacity duration-500"
              >
                {c}
              </Link>
            );
          })}
          {category.length > 8 && (
            <Link
              to="/articles"
              className="font-bold text-sm opacity-60 hover:opacity-100 transition-opacity duration-500"
            >
              {category.length - 8}개의 카테고리 더 보러가기
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
