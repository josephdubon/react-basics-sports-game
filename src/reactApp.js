// Test connection to index.html
console.log('Connection confirmed. Happy hacking!')

// Team component
class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      teamName: this.props.teamName,
      teamLogo: this.props.teamLogo,
      sfxShoot: this.props.sfxShoot || 'assets/sfxShoot.mp3',
      sfxScore: this.props.sfxScore || 'assets/sfxHomeScore.mp3',
      shotsTaken: this.props.shotsTaken || 0,
      score: this.props.score || 0,
      shotsPercentage: null,
    }
  }

  shootSound = () => {
    // Play shoot sound
    let sfxShoot = new Audio(this.state.sfxShoot)
    // Play score sound
    let sfxScore = new Audio(this.state.sfxScore)

    if (this.setState === 2) {
      sfxShoot.play()
      sfxScore.play()
      console.log('score')
    } else {
      sfxShoot.play()
    }
  }

  // Shoot button
  shootButton = () => {
    console.log('Shoooot!')
    // Play sounds
    this.shootSound()
    // Generate numer between
    let shotTaken = Math.floor(Math.random() * 4 + 1)
    let didScore = false
    // When a shot is taken the Shots Taken count should always increase
    this.setState({
      sfxShoot: this.state.sfxShoot,
      shotsTaken: this.state.shotsTaken + 1,
      // There should be a random chance that the Score counter increases.
      // 1 in 4 chance of scoring function
      score: shotTaken === 2 ? this.state.score + 1 : this.state.score,
    })
  }

  // Output
  render() {
    return (
      <div>
        Team Logo: <br /> <img src={this.state.teamLogo} /> <br />
        <br />
        Team Name: {this.state.teamName}
        <br />
        Shots Taken: {this.state.shotsTaken}
        <br />
        Score: {this.state.score}
        <br />
        <br />
        Shot Percentage:
        {this.state.score > 0
          ? this.state.shotsTaken / this.state.score
          : this.shotsPercentage}
        <br />
        <br />
        <button onClick={this.shootButton}>Shoot!</button>
      </div>
    )
  }
}

// Deafault App component that all other compents are rendered through
function App(props) {
  return (
    <main>
      <header>
        <h1>Welcome to my simple sports game</h1>
        <p>
          Each click of the 'shoot button' will give you a 1 in 4 chance to
          score.
          <br />
          <small>"May the odds be ever in your favor."</small>
        </p>
      </header>

      <section id="teamsArea">
        {/* Home Team */}
        <section id="homeTeam">
          <Team
            teamName="HOME Team"
            teamLogo="assets/homeTeam.png"
            sfxScore="assets/sfxHomeScore.mp3"
          />
        </section>

        {/* Visiting team */}
        <section id="visitTeam">
          <Team
            teamName="VISITOR Team"
            teamLogo="assets/visitingTeam.png"
            sfxScore="assets/sfxVisitorScore.mp3"
          />
        </section>

        {/* Credits section */}
        <aside>
          <p>
            <u>BUILT/DESIGN BY</u>
            <br />
            <ul>
              <li>Joseph Dubon</li>
              <li>josephdubon@pm.me</li>
            </ul>
            <br /> <br />
            <u>BUILT WITH</u>
            <br />
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>ReactJS</li>
            </ul>
            <br /> <br />
            <u>BUILT FOR</u>
            <br />
            <ul>
              <li>Kenzie Academy</li>
              <li>Software Engineering</li>
              <li>April 2020 Cohort / Quarter 2</li>
            </ul>
            <br /> <br />
            <small>
              Gamer character licensed from Adobe Stock and edited with Adobe
              Illustrator by Joseph Dubon
              <br /> <br />
              Made With Peace, Love and Understanding
            </small>
          </p>
        </aside>
      </section>
    </main>
  )
}

//Render the application
ReactDOM.render(<App />, document.getElementById('root'))
