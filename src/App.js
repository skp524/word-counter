import React,{Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text:"",
      words:0,
      vowels:0,
      consonant:0,
      semiVowels:0,
      sameWords:[],
    }
  }

  findSameWord=()=>{
    const {text} = this.state;
    if(text!==""){
      let tempArr = text.match(/\S+/gi);
       let sameWords = [];
       let count = 1;
      for (let i = 0; i < tempArr.length; i++)
       {
          if (tempArr[i] === tempArr[i + 1]) 
          { 
            count++;
      }
       else {
      if (count >1)
      {
        sameWords = [...sameWords, {word:tempArr[i],count:count}];
        count = 1;
      } 
    }}
      this.setState({sameWords:sameWords})
  } 
  }
  count=()=>{
    const {text}=this.state;
    const words = text !==""?text.match(/\S+/gi).length:0;
    const vowels = text.match(/[aeiou]/gi)!==null?text.match(/[aeiou]/gi).length:0;
    const semiVowels = text.match(/[wy]/gi)!==null?text.match(/[wy]/gi).length:0;
    const consonant = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)!==null?text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length:0;
    this.setState({vowels:vowels,semiVowels:semiVowels,consonant:consonant,words:words});
    this.findSameWord()
  
}
  render(){
    const {text}=this.state;
  return (
    <div>
      <h1>Word Counter</h1>
      <textarea
        value={text}
        onChange={(e)=>{this.setState({text:e.target.value},()=>this.count())
        }}
      />
      <h2>Vowels {this.state.vowels}</h2>
      <h2>Semi vowels {this.state.semiVowels}</h2>
      <h2>Consonant {this.state.consonant}</h2>
      <h2>Words {this.state.words}</h2>
      <h2>Same words {this.state.sameWords.map(word=>{return <h2>{word.word} {word.count}</h2>})}</h2>
    </div>
  );
}}

export default App;
