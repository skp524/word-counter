import './App.css';
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
    }
  }
  count=()=>{
    
    const {text}=this.state;
    if(text!==""){
      const words = text.match(/\S+/gi).length;
    const vowels = text.match(/[aeiou]/gi)!==null?text.match(/[aeiou]/gi).length:0;
    const semiVowels = text.match(/[wy]/gi)!==null?text.match(/[wy]/gi).length:0;
    const alphabet = text.match(/[a-z]/gi)!==null?text.match(/[a-z]/gi).length:0;
    const consonant=alphabet-vowels;
    this.setState({vowels:vowels,semiVowels:semiVowels,consonant:consonant,words:words});
  }}
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
      <h2>vowels {this.state.vowels}</h2>
      <h2>Semi vowels {this.state.semiVowels}</h2>
      <h2>cons {this.state.consonant}</h2>
      <h2>words {this.state.words}</h2>
    </div>
  );
}}

export default App;
