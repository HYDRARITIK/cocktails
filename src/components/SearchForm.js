import React from 'react'
import { useGlobalContext } from '../context'
import {useRef,useEffect} from 'react'

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext();

  //ref to input 
  const searchValue = useRef('')

  //focus on input on rendering
  useEffect(() => {
    searchValue.current.focus()
  }, [])


    const searchCocktail=()=>{
      //this is same as event.target.value
      setSearchTerm(searchValue.current.value)
    }

  return (
   <>
    <section className="section search">
      <form action="" className="search-form"
       onSubmit={(e)=>{e.preventDefault()}}>
        <div className="form-control">
          <label htmlFor="name" className="">search you cocktail</label>
          <input 
          type="text"
          id='name'
          ref={searchValue}
          onChange={searchCocktail} />
        </div>
       </form>
    </section>
   </>
  )
}

export default SearchForm
