import React from "react"
import ReactDOM from "react-dom"
import CreateHabit from "./CreateHabit"

const styles = {
  container: {
    marginTop: "3rem"
  }
}

ReactDOM.render(
  <div style={styles.container} className="container">
    <div className="row">
      <div className="column">
        <CreateHabit />
      </div>
    </div>
  </div>,
  document.getElementById("root")
)
