const load = async () => {
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    const filterdata = data.slice(0, 3);
    console.log(filterdata);
    return filterdata;
  };
  return {
    posts: getPosts()
  };
};
export {
  load
};
