## React Basics Lab: A Sports Game

In this lab, you will build a simple sports game. This lab will exercise your comfort level with JSX, Both stateful and stateless ReactJS components, working with props, and leveraging local state within a stateful component.

To get started you need to get everything set up so we are able to run our React application. This includes creating an HTML page to display our application, importing React and other scripts, and leveraging these script to render an application to our HTML page.

## GitLab Pages URL

https://josephdubon.gitlab.io/

### Setup

    Setup and HTML page that will present our application to our users.
    Setup a default component for our App that ReactDOM.render() renders to our HTML page. This can be a stateless component
        App is a common name used for this default component. Many components can make up our App but we render this default component component to display the entire application.
        ReactDOM.render() should only ever render this component.
        All other components will render through this component either referenced directly in this component or as children of components referenced directly in this component.

    The code in this repo, index.html and reactApp.js represent the lab up to this point. You're welcome to use this code as a starter or for reference to help you get going.

#### Normal Mode

Let's start building our game
The Team Component

Usually, in a sports game, we want our favorite Team to win. In order to play this game, you are going to need to create teams so they can compete for the win. Below is an outline of the functionality our team component should include.

    Create a stateful Team component that accepts a name and a path to a logo for the team as a prop
    This component should display the team name and the logo provided through props
    The Team component should also display some stats about the team.
        It should display the number of Shots Taken
        It should display the Score for the team
    The Team component should have a Shoot button. We don't score every time we shoot so let's discuss the shoot buttons functionality.
        When a shot is taken the Shots Taken count should always increase
        There should be a random chance that the Score counter increases.
    Make sure to render and test your Team component functionality as you add new features.

Setup our battle of the sports teams

Now that we have a Default component that represents our Application and we have created our Team component, we can start assembling the game.

    Update the default App component you created to display 2 teams, the home team and the visiting team.
    Use your knowledge of HTML and CSS to make the page look like more like a game where two teams, home and visiting, are facing off in competition
    Verify both teams are displayed and keeping track of their stats

#### Medium Mode

Let's add some extra functionality to our sports game.

    Add functionality to make a sound play when a team shoots and a different sound when a team scores. The resources below should help accomplish this.
        https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
        https://www.freesoundeffects.com/free-sounds/sports-10098/
    Let's add an additonal statistic to our teams. Let's display a Shot Percentage metric. This should be shots attempted divided by shots scored.
        This metric should only display if a shot has been taken. This should not be visible if the team has not attempted to make a shot.
    Create a Game Component that accepts a venue name as a prop.
    Update your default component that is currently displaying your teams to display the Game component instead. And move everything the default component was displaying into the Game component
    Update the Game component to display "Welcome to" followed by the name of the venue passed in as a prop.
    Your app should still render the default component with ReactDOM.render(), commonly named App.
        The default App component should only render the Game component instead of rendering the Team components as before.
        The Game component should display the venue name for the game and the Team components that were previously displayed in the default App component.
        Each team should function as before but now conditionally display a Shot Percentage metric if a shot has been taken by the team.
    Think about what would happen if we added another Game component to our App. We could change the Venue name but we can only create new games with the same teams. What could we modify in the Game and Team components to allow us to have unique teams for each game we include in our default App component?

#### How to Break Down a Project

1. Read the requirements document in detail.
   a. Take notes of important points.
   b. Write down your questions.
2. Answer your questions!
3. Make a development plan.
   a. Describe the entire behavior of the program in 3 (or at most 4) steps. Don't use any JavaScript words!
   b. Break down each item into 4 (or 4) smaller steps by asking the question, "How?".
   c. Repeat until it's obvious how to turn the step into JS code.
4. Write the code!
