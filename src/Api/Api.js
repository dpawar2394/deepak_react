import React, { useEffect, useState } from 'react'

const Api = () => {

    const mystyle = {
        color: "white",
        textAlign: "center",
        padding: "10px",
        fontFamily: "Arial"
      };

      const [data, setData] = useState([]);

      const getApiData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData);
      }

       useEffect(() => {
         getApiData();
       }, []);

  return (
   <>
   <h1 style={mystyle}>
    Api Data Fetch
   </h1>
   <div className='main-div'>

   <table id="customers">
  <tr>
    <th>id</th>
    <th>title</th>
    <th>userid</th>
  </tr>

  {
    data.map((curElem, ind) => {
       return(
        <tr>
        <td>{curElem.id}</td>
        <td>{curElem.title}</td>
        <td>{curElem.userid}</td>
      </tr>
       )

    })
  }
 
</table>


   </div>
   </>
  )
}

export default Api