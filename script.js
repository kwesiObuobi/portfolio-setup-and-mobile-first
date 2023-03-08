function closeMenu() {
    document.querySelector('.mobile-nav-menu').style.display = 'none';
    document.body.style.overflow = 'scroll';
}

closeMenu();

let menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function() {
    document.querySelector('.mobile-nav-menu').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

const projects = [
    {
        name: "Multi-Post Stories <br> Gain+Glory1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage: "assets/img-placeholder.png",
        technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
        liveVersion: "#",
        sourceLink: "#"
    },
    {
        name: "Multi-Post Stories <br> Gain+Glory2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage: "assets/img-placeholder.png",
        technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
        liveVersion: "#",
        sourceLink: "#"
    },
    {
        name: "Multi-Post Stories <br> Gain+Glory3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage: "assets/img-placeholder.png",
        technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
        liveVersion: "#",
        sourceLink: "#"
    },
    {
        name: "Multi-Post Stories <br> Gain+Glory4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage: "assets/img-placeholder.png",
        technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
        liveVersion: "#",
        sourceLink: "#"
    },
    {
        name: "Multi-Post Stories <br> Gain+Glory5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage: "assets/img-placeholder.png",
        technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
        liveVersion: "#",
        sourceLink: "#"
    },
    {
        name: "Multi-Post Stories <br> Gain+Glory6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage: "assets/img-placeholder.png",
        technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
        liveVersion: "#",
        sourceLink: "#"
    }
];

let recentWorksSection = document.querySelector('.recent-works');

let recentWorksGroup = document.createElement('ul');
recentWorksGroup.classList.add('recent-works-group')

for (let i = 0; i < projects.length; i++) {
    let recentWorksItem = document.createElement('li');
    recentWorksItem.classList.add('recent-works-item');
    let imgPlaceholder = document.createElement('img');
    imgPlaceholder.classList.add('img-placeholder')
    imgPlaceholder.src = projects[i].featuredImage;

    recentWorksItem.appendChild(imgPlaceholder);
    let projectDescription = document.createElement('div');
    projectDescription.classList.add('project-description');

    let projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title')
    projectTitle.innerHTML = projects[i].name;
    projectDescription.appendChild(projectTitle);

    var projectTags = document.createElement('ul');
    projectTags.classList.add('project-tags');

    for (let j = 0; j < projects[i].technologies.length; j++) {
        let tempLi = document.createElement('li');
        tempLi.classList.add('tag');
        tempLi.innerHTML = projects[i].technologies[j]
        projectTags.appendChild(tempLi);
    }

    projectDescription.appendChild(projectTags);

    let projectBtn = document.createElement('div');
    projectBtn.classList.add('project-action', 'btn');
    projectBtn.innerHTML = "See Project";

    projectBtn.addEventListener('click', function() {
        console.log('reached');
        document.querySelector('.modal-container').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.querySelector('.modal-container').innerHTML = `
        <div class="modal-img-box">
            <img src="assets/modal-image-mobile.png" alt="project snapshot" class="modal-featured-img">
            <img src="assets/modal-close.png" alt="close button" class="modal-close-btn" onclick="closeMe()">
        </div>
        <h3 class="modal-project-title">keeping track of hundreds of components</h3>
        <ul class="modal-tags">
            <li class="modal-tag">assets/modal-image-mobile.png}</li>
            <li class="modal-tag">${projects[i].technologies[1]}</li>
            <li class="modal-tag">${projects[i].technologies[2]}</li>
            <li class="modal-tag">${projects[i].technologies[3]}</li>
        </ul>
        <p class="modal-primary-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
        <ul class="modal-btn-group">
            <li class="btn modal-btn">
                <a href="#" class="">See Live</a>
                <img src="assets/see-live.png" alt="see live icon">
            </li>
            <li class="btn modal-btn">
                <a href="#" class="">See Source</a>
                <img src="assets/modal-github.png" alt="github icon">
            </li>
        </ul>
        `;
    });

    projectDescription.appendChild(projectBtn);

    recentWorksItem.appendChild(imgPlaceholder);
    recentWorksItem.appendChild(projectDescription);
    
    recentWorksGroup.appendChild(recentWorksItem);
    recentWorksSection.appendChild(recentWorksGroup);
}