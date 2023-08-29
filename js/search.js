// To create an object for each sidebar content to be put on sidebar
class SidebarContent{
    constructor(header, info=[], link, id){
        this.header = header,
        this.info = info,
        this.link = link,
        this.id = id
    }
    // Template for each sidebar content
    sidebarMenuHtml(){
        var sidebarMenuTemplate = 
        `<div class="d-flex flex-column ps-3 mb-3">
            <a href="${this.link}" class="text-secondary h5 text-decoration-none" 
            id="${this.id}">> ${this.header}</a>
            <ol class="ps-5">`;
                
        // Adds new li element for each information
        for(var i = 0; i < this.info.length; i++){
            sidebarMenuTemplate +=
            `<li>${this.info[i]}</li>`;
        }
        sidebarMenuTemplate += 
            `</ol>
        </div>`;
        return sidebarMenuTemplate
    }
}

// Creating all sidebar contents
const introduction = new SidebarContent("Introduction", ["Name", "School", "Course", "More about course"], './index.html#introduction', 'menu-item1');
const aboutMyself = new SidebarContent("About Myself", ["Values", "Personality", "Interest", "Awards"], "./index.html#about-myself", 'menu-item2');
const myExperience = new SidebarContent("My Experience", ["Academic", "Social", "CCAs"], './experience.html#experience', 'menu-item3');
const otherCourses = new SidebarContent("Other courses", ["DCITP", "DISM", "DIT"], './experience.html#other-courses', 'menu-item4');
const careerInterests = new SidebarContent("Career Interests", ["Data Analytics", "Web Development", "Application Engineering"], './careers.html#career-interests', 'menu-item5');

const allContent = [introduction, aboutMyself, myExperience, otherCourses, careerInterests];

var searchBox = document.getElementById("search");
var sidebarMenu = document.getElementById("sidebar-menu");

var searchedContent = [];
searchBox.addEventListener("keyup", function (e) {
    if (e.code === "Enter") {  // Stops form submit onpress "Enter"
        e.preventDefault();
    }

    sidebarMenu.innerHTML = ''; // Empty sidebar content

    let text = e.target.value; // Get user input
    text = text.toUpperCase();

    searchedContent = allContent.filter(content => {
        // Convert all to upperCase
        let header = content.header.toUpperCase();
        let info = content.info.map(content => content.toUpperCase());
        // Check user input is in header array
        if(header.includes(text)){
            return content;
        }else{
            for(var i = 0; i < info.length; i++){
                // Check if user input is in more information instead of header
                if(info[i].includes(text)){
                    return content;
                }
            }
        }
    })

    // Check if user's cursor is in searchBox
    if(searchBox === document.activeElement){
        for(var i = 0; i < searchedContent.length; i++){
            sidebarMenu.innerHTML += searchedContent[i].sidebarMenuHtml();
        }
    }
});

var allContentHtml = ''; // Contain all sidebar content
for(var i = 0; i < allContent.length; i++){
    allContentHtml += allContent[i].sidebarMenuHtml();
}

// Check every second 
setInterval(() => { // If cursor not in searchBox, show all content
    if(searchBox !== document.activeElement){
        sidebarMenu.innerHTML = allContentHtml;
    }
}, 1000);