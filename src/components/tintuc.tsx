import { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
}

export default function NewsApp() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then(res => setArticles(res.data.results));
  }, []);

  return (
    <div>
      <h2>Tin tức vũ trụ</h2>
      <div style={{ display: "grid", gap: "15px" }}>
        {articles.map(a => (
          <div key={a.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img src={a.image_url} alt={a.title} width="200" />
            <h3>{a.title}</h3>
            <p>{a.summary}</p>
            <p><a href={a.url} target="_blank" rel="noopener noreferrer">Đọc thêm</a></p>
            <small>Ngày đăng: {new Date(a.published_at).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export{};