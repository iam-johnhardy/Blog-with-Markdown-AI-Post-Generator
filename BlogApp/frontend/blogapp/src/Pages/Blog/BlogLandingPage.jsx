import React from "react";
import BlogLayout from "../../components/Layouts/BlogLayout/BlogLayout";

const BlogLandingPage = () => {
  const fruitList = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  return (<BlogLayout> Welcome to the Blog 
    <ul>
      {fruitList.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  </BlogLayout>)
};


export default BlogLandingPage;