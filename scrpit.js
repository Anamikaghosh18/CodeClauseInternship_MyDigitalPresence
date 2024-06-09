function visitGitHub() {
    window.open("https://github.com/Anamikaghosh18","_blank");
}
function visitGmail() {
    window.open("https://gmail.com/g.anamika0101", "_blank");
}
function visitLinkedin() {
    window.open("https://linkedin.com/anamikaghosh18", "_blank");
}
function visitTwitter() {
    window.open("https://twitter.com/__imanamika", "_blank");
}
// skills addition 
function addSkill() {
    const skillInput = document.getElementById('skill-input');
    const skill = skillInput.value.trim();
    if (skill) {
        const skillsContainer = document.getElementById('skills-container');
        const skillBox = document.createElement('div');
        skillBox.className = 'skill-box';
        skillBox.innerText = skill;
        skillsContainer.appendChild(skillBox);
        skillInput.value = '';
    }
}
// budgrt container 
function toggleBudget(show) {
    document.getElementById('budget-container').style.display = show ? 'block' : 'none';
}
function toggleBudget(show) {
    const budgetContainer = document.getElementById('budget-container');
    if (show) {
        budgetContainer.style.display = 'block';
    } else {
        budgetContainer.style.display = 'none';
    }
}
// chatbot functionality

function toggleChatbot() {
      var popup = document.getElementById("chatbot-popup");
      if (popup.style.display === "block") {
        popup.style.display = "none";
      } else {
        popup.style.display = "block";
      }
    }

    // Function to process user questions and generate bot responses
    function processQuestion(question) {
      var response;
      question = question.toLowerCase();

      if (question.includes("services") || question.includes("do you offer")) {
        response = "I specialize in web development, including front-end and back-end technologies, as well as UI/UX design.";
      } else if (question.includes("skills") || question.includes("expertise")) {
        response = "My key skills include HTML, CSS, JavaScript, React, Node.js, and Python. I also have experience with databases and cloud services.";
      } else if (question.includes("projects") || question.includes("work")) {
        response = "You can view my portfolio on the projects section of my website. It includes a variety of web development projects and design works.";
      } else if (question.includes("experience") || question.includes("background")) {
        response = "I have over 5 years of experience in web development, working on a range of projects from small websites to large-scale applications.";
      } else if (question.includes("contact") || question.includes("reach")) {
        response = "You can contact me via email at g.lorem@gmail.com or through the contact form on my website.";
      } else {
        response = "I'm sorry, I didn't understand that question. Can you please try asking in a different way?";
      }

      return response;
    }

