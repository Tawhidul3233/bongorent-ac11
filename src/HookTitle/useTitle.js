import { useEffect } from "react"

const useTitle = title => {
     useEffect(()=>{
          document.title =`${title} - BongoRent`;
     }, [title])
}
export default useTitle;