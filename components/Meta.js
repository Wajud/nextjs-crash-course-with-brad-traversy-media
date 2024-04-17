import Head from "next/head";
import React from "react";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Web Dev News",
  keywords: "web development, programming",
  description: "Get the latest news in Web Dev",
};

export default Meta;
