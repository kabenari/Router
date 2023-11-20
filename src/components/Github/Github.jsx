import React, { useEffect, useState } from 'react'

function Github() {
    const[data,setData] = useState(0);
    useEffect(()=>{
        fetch('https://api.github.com/users/kabenari')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Followers : {data.followers}
      <img src={data.avatar_url} alt="pic"  width={300}/>
    </div>
  )
}

export default Github
