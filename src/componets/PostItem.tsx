import { useMemo, type FC } from "react";
import type { PostModel } from "../data";

const PostItem: FC<PostItemProps> = ({ post }) => {
  const dateObj = useMemo(() => {
    return new Date(post.time);
  }, [post.time]);

  return (
    <div className="post">
      <a href={post.url} target="_blank">
        <h2 className="post-title">{post.title}</h2>
      </a>
      <h3 className="post-description">{`By ${post.by} . ${dateObj.toString()}`}</h3>
    </div>
  );
};

interface PostItemProps {
  post: PostModel;
}

export default PostItem;
