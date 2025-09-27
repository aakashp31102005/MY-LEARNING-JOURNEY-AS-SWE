import React, {useState, useEffect } from 'react'
import './Tittlecard.css'
import card1 from  '../../assets/assets/cards/card1.jpg'
import card2 from  '../../assets/assets/cards/card2.jpg'
import card3 from  '../../assets/assets/cards/card3.jpg'
import card4 from  '../../assets/assets/cards/card4.jpg'
import card5 from  '../../assets/assets/cards/card5.jpg'
import card6 from  '../../assets/assets/cards/card6.jpg'
import card7 from  '../../assets/assets/cards/card7.jpg'
import card8 from  '../../assets/assets/cards/card8.jpg'
import card9 from  '../../assets/assets/cards/card9.jpg'
import card10 from  '../../assets/assets/cards/card10.jpg'
import card11 from  '../../assets/assets/cards/card11.jpg'
import card12 from  '../../assets/assets/cards/card12.jpg'
import card13 from  '../../assets/assets/cards/card13.jpg'
import card14 from  '../../assets/assets/cards/card14.jpg'
function Tittlecard({category}) {
    const [cards,setcard]=useState([]);
    useEffect(()=>{
    setcard([
        { thumb: card1, name: 'kun fu panda' },
        { thumb: card2, name: 'squid game' },
        { thumb: card3, name: 'money heist' },
        { thumb: card4, name: 'stranger things' },
        { thumb: card5, name: 'dark' },
        { thumb: card6, name: 'lucifer' },
        { thumb: card7, name: 'breaking bad' },
        { thumb: card8, name: 'peaky blinders' },
        { thumb: card9, name: 'the witcher' },
        { thumb: card10, name: 'friends' },
        { thumb: card11, name: 'the crown' },
        { thumb: card12, name: 'narcos' },
        { thumb: card13, name: 'the office' },
        { thumb: card14, name: 'house of cards' }
    ])
    },[]);

    
    
    const [lvideo,setlvideo]=useState([]);
    const handlelike=(obj)=>{setlvideo(lvideo=>{
            if(lvideo.includes(obj.name)){
                return [...lvideo]
            }
           const k= [...lvideo,obj.name]
          console.log(k)
        return k;})
        setcount(count+1)
        setcount(count=>count+1)}
    const[count,setcount]=useState(0)   
    useEffect(()=>{console.log(count)},[count])
  return (<>
    <h2>{category}</h2>
   <div  className='cards'>
      {cards.map((obj,index)=>{return (
        <div className={`card ${index}`} key={index}>
          <img src={obj.thumb} alt="" /> <span >{obj.name}</span>
          <button  className='likebtn'  onClick={()=>{handlelike(obj)}}>like</button>
        </div>
          )
        })}
    </div></>
   
  )
}

export default Tittlecard
