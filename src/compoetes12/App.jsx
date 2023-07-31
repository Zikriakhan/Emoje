import React, { useState ,useEffect} from 'react'
import Emojedate from './EmojiData.json'


function App() {
    const [Search,setSearch] = useState('')
    const [date,setDate] = useState([])
    useEffect(() => {
        const newData = Emojedate.filter((emoji) =>
        emoji.title.toLowerCase().includes(Search.toLocaleLowerCase())
        );
     setDate(newData)
    }, [Search]);
    
  return (
    <div><h1 style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black' ,color:'white'}}>Emoje Search</h1>
    <input type='text' placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}} value={Search}/>
  { date.map((emoji) => (
        <h2 key={emoji.title}>
          {emoji.title} {emoji.symbol}
        </h2>
      ))}
    </div>
  )
}   

export default App