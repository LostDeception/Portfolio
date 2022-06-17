document.addEventListener('DOMContentLoaded', () => {

    var projectContent = document.getElementsByClassName("project_content")[0];
    var projectCards = document.getElementsByClassName("project_card");

    projectContent.innerHTML = projectCards[0].outerHTML;

    // Get when user resizes screen
    var width = window.innerHeight;
    var height = window.innerHeight;
    window.addEventListener("resize", () => {
        width = window.innerWidth;
        height = window.innerHeight;
    })


    // When user clicks on project list item display the project information
    $(".project_list li").on("click", (event) => {

        // Unhighlight previously selected project
        $(".project_list li").toArray().forEach((project) => {
            project.classList.remove("project_active");
        });
        
        // Highlight selected project
        event.target.classList.add("project_active");
    })


})