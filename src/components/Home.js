import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  const handleDeleteBlog = (idDelete) => {
    const newBlogs = blogs.filter(({ id }) => id !== idDelete);
    setBlogs(newBlogs);
  };
  return (
    <>
      <div className="home">
        {isPending && <div>Loading...</div>}
        {blogs && (
          <BlogList
            blogs={blogs}
            title="All Blogs"
            handleDeleteBlog={handleDeleteBlog}
          />
        )}
      </div>
    </>
  );
};

export default Home;
