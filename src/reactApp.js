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
    // When a shot is taken the Shots Taken count should always increase
    this.setState({
      shotsTaken: (this.state.shotsTaken += 1),
    })

    // There should be a random chance that the Score counter increases.
  }

  // Output
  render() {
    return (
      <div>
        Team Name: {this.state.teamName} <br />
        Team Logo: <br /> <img src={this.state.teamLogo} width="50px" /> <br />
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
    <div>
      <h1> Welcome to the sports game starter </h1>
      This file represents the code after completing the setup step in the lab
      instructions.
      <br />
      <br />
      <br />
      <Team
        teamName="Team 1"
        teamLogo="https://www.jetpunk.com/img/user-photo-library/24/245b108023-235.png"
      />
    </div>
  )
}

//Render the application
ReactDOM.render(<App />, document.getElementById('root'))
