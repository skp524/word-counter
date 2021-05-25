import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      words: 0,
      vowels: 0,
      consonant: 0,
      semiVowels: 0,
      sameWords: [],
    };
  }

  findSameWord = () => {
    const { text } = this.state;
    if (text !== "") {
      let sameWords = [];
      let tempArr = text.replace(/^\s+|\s+$/g, "").split(/\s+/);
      tempArr.forEach((outerWord) => {
        let count = 0;
        tempArr.forEach((innerWord) => {
          if (outerWord === innerWord) {
            count++;
          }
        });
        if (count > 1) {
          const index = sameWords.findIndex((word) => word.word === outerWord);
          index === -1
            ? sameWords.push({ word: outerWord, count: count })
            : (sameWords[index].count = count);
        }
      });

      this.setState({ sameWords: [...sameWords] });
    }
  };
  count = () => {
    const { text } = this.state;
    const words = text !== "" ? text.match(/\S+/gi).length : 0;
    const vowels =
      text.match(/[aeiou]/gi) !== null ? text.match(/[aeiou]/gi).length : 0;
    const semiVowels =
      text.match(/[wy]/gi) !== null ? text.match(/[wy]/gi).length : 0;
    const consonant =
      text.match(/[bcdfghjklmnpqrstvwxyz]/gi) !== null
        ? text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
        : 0;
    this.setState({
      vowels: vowels,
      semiVowels: semiVowels,
      consonant: consonant,
      words: words,
    });
    this.findSameWord();
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <h1>Word Counter</h1>
        <textarea
          value={text}
          onChange={(e) => {
            this.setState({ text: e.target.value }, () => this.count());
          }}
        />
        <h2>Vowels {this.state.vowels}</h2>
        <h2>Semi vowels {this.state.semiVowels}</h2>
        <h2>Consonant {this.state.consonant}</h2>
        <h2>Words {this.state.words}</h2>
        <h2>
          Same words
          {this.state.sameWords.map((word, index) => {
            return (
              <p key={index}>
                {word.word} {word.count}
              </p>
            );
          })}
        </h2>
      </div>
    );
  }
}

export default App;
