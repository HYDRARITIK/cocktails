import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,cocktailsList}=useGlobalContext();
  if(loading){
    return <Loading/>
  }
  if(cocktailsList.length<1){
    return (
      <>
        <h2 className="section-title">
          no cocktails matched
        </h2>
      </>
    )
  }

  return (
    <>
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          {
            cocktailsList.map((item)=>{
              const {id,name,image,info,glass}=item;
              return <Cocktail  key={id} {...item}/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default CocktailList
