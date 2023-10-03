/*
    resources:    
    https://web.dev/fetch-api-error-handling/
*/

import { fetchJSON } from "./utils.js"
import { blogDataPath, blogImagesPath} from "./consts.js"

function displayBlog(blogPosts) {
    const blog = document.querySelector("#blog")
    let line
    for (let post of blogPosts) {
        const title = document.createElement("h5")
        title.innerHTML = post.title;
        blog.append(title)

        const date = document.createElement("h5")
        date.innerHTML = post.date;
        date.classList.add("date")
        blog.append(date)

        const images = post.images;
        for (let image of images) {
            const img = document.createElement("img")
            img.src = blogImagesPath + image
            img.alt = "blog_image"
            blog.append(img)
        }

        const subtitle = document.createElement("p")
        subtitle.innerHTML = post.subtitle
        blog.append(subtitle)

        const content = document.createElement("p")
        content.innerHTML = post.content
        blog.append(content)

        line = document.createElement("hr")
        blog.append(line)
    }
    line.remove()
}

try {
    const blogPosts = await fetchJSON(blogDataPath)
    displayBlog(blogPosts)
} catch (error) {
    console.log(error.message);
}