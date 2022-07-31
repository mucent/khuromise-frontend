import useFetch from '../hooks/useFetch';

function useCurrentId() {
  const fetch = [useFetch(`http://localhost:3002/posts`)];
  const posts = {...fetch}
  console.log(posts);
  const idList = posts[0].map((post) => post.id)
  console.log(idList);
  const id = Math.max(...idList);
  console.log(id);
  return id;
}

export default useCurrentId;