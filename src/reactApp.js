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
          <small>May the odds be ever in your favor.</small>
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
          <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
        </aside>
      </section>
    </main>
  )
}

//Render the application
ReactDOM.render(<App />, document.getElementById('root'))
