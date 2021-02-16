import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((response) => {
        if (!response.ok) throw new Error('Could not fetch data');
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  const handleDeleteBlog = (idDelete) => {
    const newBlogs = blogs.filter(({ id }) => id !== idDelete);
    setBlogs(newBlogs);
  };
  return (
    <>
      <div className="home">
        {error && <div>{error}</div>}
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
