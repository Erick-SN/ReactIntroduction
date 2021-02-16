import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, error, isPending } = useFetch(
    'http://localhost:8000/blogs/' + id
  );
  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <>
      <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
