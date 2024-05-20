const teamMembers = [
  {
    name: 'Shah Rukh Khan',
    position: 'Batsman',
    skills: ['Acting', 'Dancing', 'Production'],
    strengths: 'Charisma, Versatility, Popularity',
    weaknesses: 'Selectivity, Public image',
    biography: 'Shah Rukh Khan is an Indian actor, film producer, and television personality who works in Hindi films.',
    bestMovie: 'Dilwale Dulhania Le Jayenge',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Hrithik Roshan',
    position: 'All-rounder',
    skills: ['Acting', 'Dancing', 'Modeling'],
    strengths: 'Physique, Dance skills, Screen presence',
    weaknesses: 'Typecasting, Public perception',
    biography: 'Hrithik Roshan is an Indian actor known for his dancing skills and performance in Hindi films.',
    bestMovie: 'Koi Mil Gaya',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Siddharth Malhotra',
    position: 'Batsman',
    skills: ['Acting', 'Modeling'],
    strengths: 'Looks, Versatility',
    weaknesses: 'Limited filmography',
    biography: 'Siddharth Malhotra is an Indian actor and former model who appears in Hindi films.',
    bestMovie: 'Student of the Year',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Varun Dhawan',
    position: 'Wicketkeeper',
    skills: ['Acting', 'Dancing', 'Comedy'],
    strengths: 'Energy, Dance skills, Comic timing',
    weaknesses: 'Typecasting',
    biography: 'Varun Dhawan is an Indian actor known for his roles in Hindi films and his energetic performances.',
    bestMovie: 'Badlapur',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Rajkumar Rao',
    position: 'Bowler',
    skills: ['Acting', 'Theater'],
    strengths: 'Versatility, Method acting',
    weaknesses: 'Limited mainstream appeal',
    biography: 'Rajkumar Rao is an Indian actor known for his work in Hindi films and his versatility as an actor.',
    bestMovie: 'Newton',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Farhan Akhtar',
    position: 'All-rounder',
    skills: ['Acting', 'Directing', 'Singing'],
    strengths: 'Multitalented, Creativity',
    weaknesses: 'Balancing multiple roles',
    biography: 'Farhan Akhtar is an Indian actor, director, and singer known for his work in Hindi films.',
    bestMovie: 'Bhaag Milkha Bhaag',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Aditya Roy Kapoor',
    position: 'Batsman',
    skills: ['Acting', 'Music'],
    strengths: 'Looks, Versatility',
    weaknesses: 'Limited filmography',
    biography: 'Aditya Roy Kapoor is an Indian actor known for his roles in Hindi films and his musical talent.',
    bestMovie: 'Aashiqui 2',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Ranveer Singh',
    position: 'Batsman',
    skills: ['Acting', 'Dancing'],
    strengths: 'Energy, Versatility, Screen presence',
    weaknesses: 'Over-the-top performances',
    biography: 'Ranveer Singh is an Indian actor known for his energetic and versatile performances in Hindi films.',
    bestMovie: 'Padmaavat',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Ayushmann Khurrana',
    position: 'All-rounder',
    skills: ['Acting', 'Singing', 'Writing'],
    strengths: 'Versatility, Unique roles',
    weaknesses: 'Limited mainstream appeal',
    biography: 'Ayushmann Khurrana is an Indian actor known for his unconventional roles in Hindi films.',
    bestMovie: 'Andhadhun',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Riteish Deshmukh',
    position: 'Bowler',
    skills: ['Acting', 'Comedy'],
    strengths: 'Comic timing, Versatility',
    weaknesses: 'Typecasting',
    biography: 'Riteish Deshmukh is an Indian actor known for his comedic roles in Hindi films.',
    bestMovie: 'Housefull',
    img: 'image/placeholder.jpg'
  },
  {
    name: 'Shahid Kapoor',
    position: 'Batsman',
    skills: ['Acting', 'Dancing'],
    strengths: 'Versatility, Dance skills',
    weaknesses: 'Inconsistent film choices',
    biography: 'Shahid Kapoor is an Indian actor known for his versatile roles and dancing skills in Hindi films.',
    bestMovie: 'Kabir Singh',
    img: 'image/placeholder.jpg'
  }
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards');

  teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4'); // Added 'mb-4' for margin bottom

    // Styling card based on position:
    let backgroundColor;

    switch (member.position.toLowerCase()) {
      case 'batsman':
        backgroundColor = '#ffc107'; // Yellow for batsmen
        break;
      case 'all-rounder':
        backgroundColor = '#28a745'; // Green for all-rounders
        break;
      case 'bowler':
        backgroundColor = '#007bff'; // Blue for bowlers
        break;
      case 'wicketkeeper':
        backgroundColor = '#dc3545'; // Red for wicketkeepers
        break;
      default:
        backgroundColor = '#6c757d'; // Gray for other positions
    }
    card.style.backgroundColor = backgroundColor;

    // Create a list of Skills with <li> tags
    const skillsList = member.skills.map(skill => `<li>${skill}</li>`).join('');

    card.innerHTML = `
      <div class="card">
        <div class="card-header">${member.name}</div>
        <div class="card-body">
          <p><strong>Position:</strong> ${member.position}</p>
          <p><strong>Best Movie:</strong> ${member.bestMovie}</p>
          <p><strong>Skills:</strong>
            <ul>${skillsList}</ul>
          </p>
          <p><strong>Strengths:</strong> ${member.strengths}</p>
          <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
          <p><strong>Biography:</strong> ${member.biography}</p>
          <p><strong>Image:</strong> <img src="${member.img}" alt="${member.name}" class="img-fluid"></p>
        </div>
      </div>
    `;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards;



