import React,{useState} from 'react'

const defaultItems = [
    {
name : "ITEM 1"
    },
    {
name: "ITEM 2"
    }
]

function ToDo() {
  const [text, setText] = useState("")
  const [item, setİtem] = useState(defaultItems)
  console.log(text)
    return (
        <div>
          <label>text
            <input type="text" value={text} onChange={(e)=> setText(e.target.value) } />
            </label>
            <button onClick={()=> setİtem((prev)=> [...prev, {name: text}])}>Ekle</button>
            {item.map((item, key)=>(<div key={key}>{item.name}</div>))}
        </div>
    )
}

export default ToDo
