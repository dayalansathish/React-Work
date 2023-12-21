import React, { useState } from 'react'

function Home() {
  //Hooks concept
  //usestate ---> re render
  //syntax  --->[update , setupdate] 
  const [count, setcount] = useState(0)   //-----> initial value ---> num,string,array,boolean,object...
  const [show, setshow] = useState(false)
  const [error,seterror] = useState("")
  return (
    <>
      <div>
        <button className='btn btn-sm btn-outline-danger m-2' onClick={() => setcount(count - 1)} disabled={count <= 0}>-</button>
        {count}
        <button className='btn btn-sm btn-outline-success m-2' onClick={() => setcount(count + 1)} disabled={count >= 5}>+</button>
      </div>

      <div className='container'>
        <h1>sathish <button className={show?'btn btn-sm btn-outline-danger': 'btn btn-sm btn-outline-success'}onClick={()=>setshow(!show)}>{show?"hide":"Show"}</button></h1>
        {
          show? <p>Line 21:52:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

          src\Components\PriceList.js
          Line 51:19:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

          webpack compiled with 1 warning</p> :""
        }
        
      </div>

          <div>
            <img src='profile.jpeg' width={"500px"} height={"500px"}/>
          </div>
    </>
  )
}

export default Home