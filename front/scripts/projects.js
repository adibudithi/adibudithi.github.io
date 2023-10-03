/*
    resources:    
    https://web.dev/fetch-api-error-handling/
*/

import { fetchJSON } from "./utils.js"
import { projectsDataPath, projectsImagesPath} from "./consts.js"

function displayProjects(projectsPosts) {
    const projects = document.querySelector("#projects")
    let line
    for (let project of projectsPosts) {
        const img = document.createElement("img")
        img.src = projectsImagesPath + project.image
        img.alt = "project_image"
        projects.append(img)

        const title = document.createElement("h3")
        title.innerHTML = project.name;
        projects.append(title)

        const summary = document.createElement("p")
        summary.innerHTML = project.summary
        projects.append(summary)

        line = document.createElement("hr")
        projects.append(line)
    }
    line.remove()
}

try {
    const projectsPosts = await fetchJSON(projectsDataPath)
    displayProjects(projectsPosts)
} catch (error) {
    console.log(error.message);
}