import ArticleList from "../../components/ArticleList";
import { server } from "../../config";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

// Request to jsonplaceholder

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// End of request to jsonplaceholder

// Request to api folder from nextjs

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

// End of Request to api folder from nextjs
