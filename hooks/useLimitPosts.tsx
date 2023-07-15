import users from "@jsons/users.json";
import posts from "@jsons/posts.json";
import comments from "@jsons/comments.json";
import albums from "@jsons/albums.json";
import photos from "@jsons/photos.json";
import todos from "@jsons/todos.json";
import products from "@jsons/products.json";

export default function useLimitPosts({
  jsonFile,
  lastIndex,
}: {
  jsonFile: string;
  lastIndex: number;
}): Array<Object> | null {
  switch (jsonFile) {
    case "users":
      return users.slice(0, lastIndex);
    case "posts":
      return posts.slice(0, lastIndex);
    case "comments":
      return comments.slice(0, lastIndex);
    case "albums":
      return albums.slice(0, lastIndex);
    case "photos":
      return photos.slice(0, lastIndex);
    case "products":
      return products.slice(0, lastIndex);
    case "todos":
      return todos.slice(0, lastIndex);
    default:
      return null;
  }
}
