import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData();
//     useEffect(()=>{
//         const [data,setData]=useState([])
//         fetch('https://api.github.com/users/shresh15')
//         .then(response=>response.json())
//         .then(data =>{
//          console.log(data); 
//          setData(data);  
//         })
//     },[])
  return (
    <div className='text-center m-4 bg-slate-500 text-white p-4 text-3xl'>Github followers:{data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300}/></div>
    
   )
 }

export default Github
export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/shresh15') 
   return response.json() 
}
