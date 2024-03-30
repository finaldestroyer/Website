document.addEventListener('DOMContentLoaded', async () => {
    try {
        const projects = [
            {
                title: "Project Title 1",
                description: "Description of Project 1",
                subcategories: ["Web Development", "UI/UX Design"],
                projectLink: "https://github.com/finaldestroyer"
            },
            {
                title: "Project Title 2",
                description: "Description of Project 2",
                subcategories: ["Mobile App Development", "Backend Development"],
                projectLink: "https://github.com/finaldestroyer"
            }
        ];

        const education = [
            { degree: "Bachelor of Science in Computer Science", graduationYear: "2024" },
            { degree: "Online Web Development Course", graduationYear: "2021" }
        ];

        const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

        const contact = {
            email: "jwunwun@gmail.com",
            phone: "+1(925)667-0268",
            linkedin: "https://www.linkedin.com/in/japhethwun"
        };

        const projectList = document.getElementById('projectList');
        projectList.innerHTML = projects.map(project => `
            <div class="project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.subcategories ? `<p>Subcategories: ${project.subcategories.join(', ')}</p>` : ''}
                <a href="${project.projectLink}" class="btn" target="_blank">View Project</a>
            </div>
        `).join('');

        const educationList = document.getElementById('educationList');
        educationList.innerHTML = education.map(item => `
            <div class="education-item">
                <h3>${item.degree}</h3>
                <p>${item.graduationYear}</p>
            </div>
        `).join('');

        const skillsList = document.getElementById('skillsList');
        skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');

        const contactList = document.getElementById('contactList');
        contactList.innerHTML = Object.entries(contact).map(([label, value]) => {
            if (label === 'linkedin') {
                return `
                    <li>
                        <strong>${label.charAt(0).toUpperCase() + label.slice(1)}:</strong>
                        <a href="${value}" target="_blank" rel="noopener noreferrer">${value}</a>
                    </li>
                `;
            } else if (label === 'email') {
                return `
                    <li>
                        <strong>${label.charAt(0).toUpperCase() + label.slice(1)}:</strong>
                        <a href="mailto:${value}">${value}</a>
                    </li>
                `;
            } else {
                return `
                    <li>
                        <strong>${label.charAt(0).toUpperCase() + label.slice(1)}:</strong>
                        ${value}
                    </li>
                `;
            }
        }).join('');
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
});
