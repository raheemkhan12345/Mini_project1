import { useEffect, useState } from "react"
  
// custom hook.
function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_rQvKFtMiIovNUI6E91X2bNqEK2ibOhVL2b1cseyB`)
        .then((response) => response.json())
        .then( (response) => {
            if (response?.data) {
                setData(response.data)
            }
        })
        
        .catch((err) => console.log(`Error: ${err}`))
    }, [currency])

    console.log(data)
    return data
    
}
export default useCurrencyInfo;