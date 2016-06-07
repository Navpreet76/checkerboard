var React = require('react'),
    ReactDOM = require('react-dom')
// Set up a style object (this is best kept in another file and exported)
var styles = {
  row: {height: '20px'},
  cell: {height: '20px', width: '20px', display:'inline-block'},
  colorA: {backgroundColor: prompt('What should color 1 be?')},
  colorB: {backgroundColor: prompt('What should color 2 be?')}
}

// APP COMPONENT
function App (props){
    return <CheckerBoard rows={props.rowNumbers}/>
}

// CHECKERBOARD COMPONENT
function CheckerBoard (props){
  // props.rows will equal the number collected from prompt in the App component

  // Create an array to hold all our Row elements
  var checkeredRows = [];

  for(var i = 0; i < props.rows; i+=1 ) {
    // For each row, create a row using the Row component. Pass down the number of cells to create, and the current row we're on -- we'll use that number to decide which color to start with.
    checkeredRows.push(<Row key={i} rowNum = {i} cells = {props.rows}/>)
  }
  return (
    <div>
      {checkeredRows}
    </div>
  )
}

// ROW COMPONENT
function Row (props){
  // Use props.rowNum to decide what the colors are for odd/even cells
  var colorA = (props.rowNum % 2 === 0 ) ? "colorA" : "colorB"
  var colorB = (colorA === "colorA" ) ? "colorB" : "colorA"

  var checkeredCells = [];

  for(var i = 0; i < props.cells; i+=1 ) {
    checkeredCells.push(<Cell key={i} color = { (i % 2 === 0) ? colorA : colorB } style={styles.cell}/>)
  }
  return (
    <div style={styles.row}>
      {checkeredCells}
    </div>
  )
}

// CELL COMPONENT
function Cell (props) {
  // The only purpose of this component is to render a div with the correct styling, which we've linked to a property the Row parent passed down.
  return (
    // Need to use Object.assign to turn two style objects into one
    <div style={ Object.assign({}, styles.cell, styles[props.color]) }></div>
  )
}

// RENDERING TIME! Render app and pass down the results of a prompt.
ReactDOM.render(<App rowNumbers={prompt("How many rows should the checkerboard have?")} />, document.getElementById('app'))




