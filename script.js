const projects = [
    {
        "title": "Quizilla/Boota",
        "description": "My first big project with React, initially named Boota is a quiz application in which teachers have their question bank and can create quizzes for students to take. It was built using React on the front-end and Node + MongoDB on the back-end. Later refactored so it became fully responsive and also renamed to Quizilla",
        "image": "test url",
        "tags": ['HTML', 'CSS', 'React', 'Redux', 'Node.js', 'MongoDB'],
        "demo": "Live Demo",
        "source": "View Source"
    },
    {
        "title": "Bloodworks",
        "description": "Bloodworks is a medical app that takes in medical information such as blood exams, measurements (such as BMI and Blood Pressure) and displays them to a medical provider utilizing data visualization. Built using React, Redux and D3.js on the front-end and PostgreSQL, Node.js and TypeORM on the backend. This was a group project and I was responsible for building the back-end part of the project, as well as some part of the front-end such as Redux and API integration.",
        "image": "test url",
        "tags": ['HTML', 'CSS', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'TypeORM', 'Docker'],
        "demo": "test",
        "source": "source"
    },
    {
        "title": "Unnamed Gaming App",
        "description": "Current project I am building, consists of an app that allows you to create your gaming profile and search people with similar gaming interests (such as games, gaming styles (competitive vs coop vs MMORPGs), timezones, etc) to play together. Planned stack includes PostgreSQL, TypeORM, Node.JS and Express on the back-end, with React, Redux and SCSS on the front-end. Will include Docker, AWS and also Jest for testing.",
        "image": "test url",
        "tags": ['HTML', 'SCSS', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'TypeORM', 'Docker', 'Jest'],
        "demo": "test",
        "source": "source"
    },
    {
        "title": "Trello Clone",
        "description": "Simple Trello clone done for a skill accessment. UI is simple as it was made focused on functionalities. Built using PHP, Laravel and PostgreSQL on the back-end and Vue.js, SCSS (with BEM) on the front-end.",
        "image": "test url",
        "tags": ['HTML', 'SCSS', 'Vue', 'Laravel', 'PHP', 'PostgreSQL'],
        "demo": "test",
        "source": "source"
    }
]

const projectNode = document.querySelector('.projects');

const renderContent = () => {

    projects.forEach((project) => {
        const newProject = document.createElement('div');
        newProject.classList.add('project-node')

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('project-title');
        projectTitle.innerHTML = project.title;
        newProject.appendChild(projectTitle);

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description');
        projectDescription.innerHTML = project.description;
        newProject.appendChild(projectDescription);

        const projectTags = document.createElement('ul');
        projectTags.classList.add('tag-list');

        project.tags.forEach(tag => {
            const htmlTag = document.createElement('li');
            htmlTag.classList.add('project-tag');
            htmlTag.innerText = tag;
            projectTags.appendChild(htmlTag);
        });
        newProject.appendChild(projectTags);

        const projectDemo = document.createElement('a');
        projectDemo.classList.add('project-demo');
        projectDemo.href = project.demo;
        projectDemo.innerHTML = 'Live Demo';
        newProject.appendChild(projectDemo);

        const projectSource = document.createElement('a');
        projectSource.classList.add('project-source');
        projectSource.href = project.source;
        projectSource.innerHTML = 'View Source';

        const gitHubIcon = document.createElement('i');
        gitHubIcon.classList.add('fab');
        gitHubIcon.classList.add('fa-github');
        projectSource.append(gitHubIcon);

        newProject.appendChild(projectSource);

        projectNode.appendChild(newProject);
    });
}

renderContent();