const teamMembers = [
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['Drippling', ' Shooting', ' Ball Control'],
        strengths: 'Ball Control',
        weakness: ' Heading Ability',
        biography: ' blah blah',
    },
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['Drippling', ' Shooting', ' Ball Control'],
        strengths: 'Ball Control',
        weakness: ' Heading Ability',
        biography: ' blah blah',
    },

]

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')
const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML = `
        <div class = "card">
        <div class = "card-header">${member.name} </div>
        <div class = "card-body"></div>
    <p><strong>Positions:</strong> ${member.position}</p>
    <p><strong>Skills:</strong> <ul> ${skillsList} </ul></p>
    </div>
        `
        teamCardsContainer.appendChild(card)
    })
}
window.onload = generateTeamCards()