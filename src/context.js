import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()





const AppProvider = ({ children }) => {




  
  


const [loading,setLoading]=useState(false);
const [searchTerm,setSearchTerm]=useState('a');
const [cocktailsList,setCocktailsList]=useState([]);





useEffect(()=>{

  //i have to cal  fetch data funvtion each time when 
  //there is any change in searchterm
  const fetchData=async ()=>{
    setLoading(true);
    try {
      const response=await fetch(`${url}${searchTerm}`);
      const data=await response.json();
      // console.log(data)
      //now i have data
      const {drinks}=data;
    

      if(drinks){
        const cocktails=drinks.map((item)=>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
          return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass
          }
        })
       
        setCocktailsList(cocktails)
        
      }
      else{
        setCocktailsList([])
      }



      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  
  }


  // How to fix missing dependency warning when using useEffect React Hook
  //use fetch business inside use effect hook

  fetchData()
},[searchTerm])







const globalThings={
  loading,setLoading,searchTerm,setSearchTerm,
  cocktailsList,setCocktailsList
}





  return <AppContext.Provider value={globalThings}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
