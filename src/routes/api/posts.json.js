import { BASE_URL, POSTS_API_URL } from "$lib/variables";

export const get = async () => {
  const res = await fetch(`${BASE_URL}${POSTS_API_URL}?_embed`);
  const posts = await res.json();
  posts.map((post) => {
    post.image = post._embedded["wp:featuredmedia"][0].source_url;
  });

  return {
    status: 200,
    body: posts,
  };
};
