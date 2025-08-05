import { React, useState, useEffect } from "react";
import AxiosInstance from "../../Axios";
import ArticleCard from "../ArticleCard";
import Grid from "@mui/material/Grid";

const Article = () => {
  const [articles, setArticles] = useState([]);

  console.log("Article", articles);

  const GetData = () => {
    AxiosInstance.get(`blog/article/`).then((res) => {
      setArticles(res.data);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
          <ArticleCard options={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Article;
