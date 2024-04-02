document.addEventListener('DOMContentLoaded', async () => {
    try {
        const resume = {
            email: "jwunwun@gmail.com",
            phone: "(925) 667-0268",
            linkedin: "www.linkedin.com/in/JaphethWun",
            github: "https://github.com/finaldestroyer",
            projects: [
                {
                    title: "Project 1",
                    description: "Description of Project 1",
                    link: "https://github.com/finaldestroyer"
                },
                // More project entries...
            ],
            education: [
                {
                    institution: "San Francisco State University",
                    location: "San Francisco, CA",
                    degree: "Bachelor of Science in Computer Science",
                    graduationYear: "2023"
                }
                // More education entries...
            ],
            skills: [
                "Programming Languages: C++, C#, Java, Python, TypeScript/JavaScript, XML, HTML, CSS, Dart, Assembly",
                "Experienced in Algorithms, Object-Oriented Programming, and Data Structures, UML Design",
                "Spoken Languages: English, Chinese (Cantonese and Mandarin)"
            ]
        };

        // Fill in contact information
        const fillContactInfo = () => {
            const contactList = document.getElementById('contactList');
            contactList.innerHTML = `
                <li><strong>Email:</strong> <a href="mailto:${resume.email}">${resume.email}</a></li>
                <li><strong>Phone:</strong> ${resume.phone}</li>
                <li><strong>LinkedIn:</strong> <a href="https://${resume.linkedin}" target="_blank">${resume.linkedin}</a></li>
                <li><strong>Github:</strong> <a href="${resume.github}" target="_blank">${resume.github}</a></li>
            `;
        };

        // Fill in projects
        const fillProjects = () => {
            const projectList = document.getElementById('projectList');
            projectList.innerHTML = resume.projects.map(project => `
                <div class="list-item">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn" target="_blank">View Project</a>
                </div>
            `).join('');
        };

        // Fill in education
        const fillEducation = () => {
            const educationList = document.getElementById('educationList');
            educationList.innerHTML = resume.education.map(item => `
                <div class="list-item">
                    <h3>${item.degree}</h3>
                    <p>${item.institution}, ${item.location}</p>
                    <p>${item.graduationYear}</p>
                </div>
            `).join('');
        };

        // Fill in skills
        const fillSkills = () => {
            const skillsList = document.getElementById('skillsList');
            skillsList.innerHTML = resume.skills.map(skill => `<li>${skill}</li>`).join('');
        };

        // Main function to fill all sections
        const fillResume = () => {
            fillContactInfo();
            fillProjects();
            fillEducation();
            fillSkills();
        };

        // Execute main function
        fillResume();
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
});
