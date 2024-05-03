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
        name: 'LM JR',
        position: 'midfielder',
        skills: ['falling', ' Tripping', ' Crying'],
        strengths: 'Losing',
        weakness: ' Scoring',
        biography: ' YEAH',
    },

]
//team members

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')
        //styling card based on position
let backgroundColor


const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML = `
        <div class = "card">
        <div class = "card-header">${member.name} </div>
        <div class = "card-body"></div>
    <p><strong>Positions:</strong> ${member.position}</p>
    <p><strong>Skills:</strong> <ul> ${skillsList} </ul></p>
    <p><strong>Strengths:</strong> ${member.strengths}</p>
    <p><strong>Weakness:</strong> ${member.weakness}</p>
    <p><strong>Biography:</strong> ${member.biography}</p>
    </div>
        `
        teamCardsContainer.appendChild(card)
    })
}
window.onload = generateTeamCards()