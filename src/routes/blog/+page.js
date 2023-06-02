export const load = async({fetch})=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const allposts = await res.json()
    const posts = allposts.slice(0,10);

    return{
        posts,
    }
}