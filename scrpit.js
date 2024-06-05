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
