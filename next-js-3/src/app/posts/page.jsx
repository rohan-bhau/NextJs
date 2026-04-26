import React from 'react'

//! Method -2 of Dta fetching
// const getPosts = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     return res.json()
// }

//! Method -3 of Data fetching
// const getPosts = async() => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     return res.json()
//     }
//     catch(err) {
//         throw new Error("Failed to Fetch Posts")
//     }
// }

const getPosts = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!res.ok) {
        throw new Error("Failed to Fetch Posts")
    }
    return res.json()
}

const page = async() => {
    
    //! Method -1 of Data fetching-->
    // const res= await fetch("https://jsonplaceholder.typicode.com/posts")
    // const posts = await res.json()
    // console.log(posts)

    //! Method -2,3,4 of Data fetching
    const posts= await getPosts()
  return (
    <div>
         
          Posts: {posts.length}
    </div>
  )
}

export default page
