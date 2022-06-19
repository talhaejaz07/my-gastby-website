import React from "react";

import Layout from "../components/Layout";

export default function BlogPostLayout({ children }) {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
}
