import { useState, useEffect } from "react";
import BlogItems from "./BlogItems";

export default function LatestBlogs() {
  let [bItems, setBItems] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogItems")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBItems(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  });

  return (
    <>
      <div className="container-fluid mt-6rem px-5">
        <div className="row">
          <div className="col-12">
            <p className="titleBlog">OUR LATEST BLOG</p>
            <p className="descBlog">The freshest and most exciting news</p>
          </div>
        </div>
        <div className="row mt-3rem">
          {bItems && (
            <>
              <BlogItems blogItems={bItems[0]} />
              <BlogItems blogItems={bItems[1]} />
              <BlogItems blogItems={bItems[2]} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
