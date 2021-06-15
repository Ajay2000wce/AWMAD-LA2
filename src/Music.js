import React, { Component } from "react"

class Music extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <h1>Hey, Press the Bell to Listen</h1>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          {/* <source src="./iphone.mp3"></source> */}
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>
    )
  }
}

export default Music;