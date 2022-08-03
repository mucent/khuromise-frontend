import useFetch from '../hooks/useFetch';

function useCurrentId(url) {
  const fetch = useFetch(url);
  const posts = [...fetch]
  const idList = posts.map((post) => post.id)
  const id = Math.max(...idList);
  return id;
}

export default useCurrentId;