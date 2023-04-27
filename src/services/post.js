const apiKey = "099148be22804e849a0c6fe022b7cf5e";

export async function getPostList() {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  ).then((res) => res.json());
}
