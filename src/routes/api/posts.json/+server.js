 import { json } from "@sveltejs/kit";
 export const GET = async()=>{
    const posts =[
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "image" : "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
        },
          {
       
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            "image" : "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
        },
          {

            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            "image" : "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
        },
    ]
    return json(posts)
};