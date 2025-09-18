import PostItem from "./componets/PostItem";
import { posts } from "./data";

function App() {
  return (
    <div>
      <h1 className="title">Hacker News Jobs Board</h1>
      <div className="posts-container">
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default App;
