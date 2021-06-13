const projects = [
    {
        "title": "Quizilla/Boota",
        "description": "My first big project with React, initially named Boota is a quiz application in which teachers have their question bank and can create quizzes for students to take. It was built using React on the front-end and Node + MongoDB on the back-end. Later refactored so it became fully responsive and also renamed to Quizilla",
        "image": "quizilla.png",
        "tags": ['HTML', 'CSS', 'TypeScript', 'React', 'Redux', 'Node.js', 'MongoDB'],
        "demo": "https://reverent-knuth-ec436c.netlify.app/",
        "source": "https://github.com/Fallenefc/boota-client"
    },
    {
        "title": "Bloodworks",
        "description": "Bloodworks is a medical app that takes in medical information such as blood exams, measurements (such as BMI and Blood Pressure) and displays them to a medical provider utilizing data visualization. Built using React, Redux and D3.js on the front-end and PostgreSQL, Node.js and TypeORM on the backend. This was a group project and I was responsible for building the back-end part of the project, as well as some part of the front-end such as Redux and API integration.",
        "image": "react.png",
        "tags": ['HTML', 'CSS', 'TypeScript', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'TypeORM', 'Docker'],
        "demo": "",
        "source": "https://github.com/Fallenefc/medicalapp-server"
    },
    {
        "title": "Unnamed Gaming App",
        "description": "Current project I am building, consists of an app that allows you to create your gaming profile and search people with similar gaming interests (such as games, gaming styles (competitive vs coop vs MMORPGs), timezones, etc) to play together. Planned stack includes PostgreSQL, TypeORM, Node.JS and Express on the back-end, with React, Redux and SCSS on the front-end. Will include Docker, AWS and also Jest for testing.",
        "image": "react.png",
        "tags": ['HTML', 'SCSS', 'TypeScript', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'TypeORM', 'Docker', 'Jest'],
        "demo": "",
        "source": "https://github.com/Fallenefc/gaming-server"
    },
    {
        "title": "Trello Clone",
        "description": "Simple Trello clone done for a skill accessment. UI is simple as it was made focused on functionalities. Built in two days using PHP, Laravel and PostgreSQL on the back-end and Vue.js, SCSS (with BEM) on the front-end.",
        "image": "trello.png",
        "tags": ['HTML', 'SCSS', 'Vue', 'Laravel', 'PHP', 'PostgreSQL'],
        "demo": "https://wizardly-archimedes-3d2797.netlify.app/",
        "source": "https://github.com/Fallenefc/assessment-client"
    },
    {
        "title": "Countries App",
        "description": "Frontend Mentor challenge to build a small application using the countries API. Built with pair programming, using React.",
        "image": "countries.jpg",
        "tags": ['HTML', 'CSS', 'React'],
        "demo": "https://countries.arylima.ca/",
        "source": "https://github.com/Fallenefc/countries"
    },
    {
        "title": "Angular Pokemon App",
        "description": "Simple Pokemon App that allows user to search for a pokemon using PokeAPI. Not responsive as it was built in early stages of my learning. Built using Angular and PokeAPI.",
        "image": "pokemon.png",
        "tags": ['HTML', 'CSS', 'Angular'],
        "demo": "https://pokemon.arylima.ca",
        "source": "https://github.com/Fallenefc/angular-poke-app"
    },
]

const projectNode = document.querySelector('.projects');

const renderContent = () => {

    // Project rendering
    projects.forEach((project) => {
        const newProject = document.createElement('div');
        newProject.classList.add('project-node')

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('project-img');
        imgDiv.style.background = `url(${project.image})`;
        imgDiv.style.backgroundPosition = 'center';
        imgDiv.style.backgroundSize = '100%';
        imgDiv.style.backgroundRepeat = 'no-repeat';
        newProject.appendChild(imgDiv);

        const textDiv = document.createElement('div');
        textDiv.classList.add('project-text');
        newProject.appendChild(textDiv);

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('project-title');
        projectTitle.innerHTML = project.title;
        textDiv.appendChild(projectTitle);

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description');
        projectDescription.innerHTML = project.description;
        textDiv.appendChild(projectDescription);

        const projectTags = document.createElement('ul');
        projectTags.classList.add('tag-list');

        project.tags.forEach(tag => {
            const htmlTag = document.createElement('li');
            htmlTag.classList.add('project-tag');
            htmlTag.innerText = tag;
            projectTags.appendChild(htmlTag);
        });
        textDiv.appendChild(projectTags);

        const projectDemo = document.createElement('a');
        projectDemo.classList.add('project-demo');
        projectDemo.innerHTML = 'Live Demo';
        if (!project.demo) {
            projectDemo.classList.add('disabled');
        } else {
            projectDemo.href = project.demo;
        }
        textDiv.appendChild(projectDemo);

        const projectSource = document.createElement('a');
        projectSource.classList.add('project-source');
        projectSource.href = project.source;
        projectSource.innerHTML = 'View Source';

        const gitHubIcon = document.createElement('i');
        gitHubIcon.classList.add('fab');
        gitHubIcon.classList.add('fa-github');
        projectSource.append(gitHubIcon);

        textDiv.appendChild(projectSource);

        projectNode.appendChild(newProject);
    });
}

renderContent();