// Test connection to index.html
console.log('Connection confirmed. Happy hacking!')

// Team component
class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      teamName: this.props.teamName,
      teamLogo: this.props.teamLogo,
      shotsTaken: this.props.shotsTaken || 0,
      score: this.props.score || 0,
    }
  }

  // Shoot button
  shootButton = (event) => {
    console.log('Shoooot!')
    // Generate numer between
    let shotTaken = Math.floor(Math.random() * 4 + 1)
    // When a shot is taken the Shots Taken count should always increase
    this.setState({
      shotsTaken: (this.state.shotsTaken += 1),
      // There should be a random chance that the Score counter increases.
      // 1 in 4 chance of scoring function
      score: shotTaken === 2 ? (this.state.score += 1) : this.state.score,
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
          <Team teamName="HOME Team" teamLogo="../assets/homeTeam.png" />
        </section>

        {/* Visiting team */}
        <section id="visitTeam">
          <Team teamName="VISITOR Team" teamLogo="../assets/visitingTeam.png" />
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
              <li>CSS</li>
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
