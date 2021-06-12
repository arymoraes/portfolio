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
        "tags": ['HTML', 'CSS', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'TypeORM'],
        "demo": "test",
        "source": "source"
    },
    {
        "title": "Unnamed Gaming App",
        "description": "Proin viverra, neque ut ultrices finibus, sapien sapien vehicula erat, ut imperdiet libero ex a urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec elementum pellentesque velit, non facilisis eros rhoncus commodo. In suscipit massa enim, nec efficitur justo rhoncus et. Ut iaculis, est vitae consequat porta, augue elit aliquet nulla, vitae mattis arcu orci et sapien.",
        "image": "test url",
        "tags": [],
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
        newProject.appendChild(projectSource);

        projectNode.appendChild(newProject);
    });
}

renderContent();