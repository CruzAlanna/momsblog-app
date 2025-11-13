export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All {props.posts_prop.length} Articles</h1>
      {props.posts_prop.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <h3>{post.author}</h3>
          <h4>{post.date}</h4>
          <h4>{post.content}</h4>
          <button>More info</button>
          <hr />
        </div>
      ))}
    </div>
  );
}