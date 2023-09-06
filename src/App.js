import './App.css';
import {useState } from 'react';



// function App() {
//   const [num,setNum]=useState(0);
   

//   return(
//       <div style={{textAlign:'center'}}>
//             <button onClick={()=>{setNum(num+1)}} style={{color:"red",marginTop:"50px",marginRight:"10px",fontSize:"50px"}}>increment</button>
//             <button onClick={()=>{setNum(num-1)}} style={{color:"red",marginTop:"50px",marginLeft:"10px",fontSize:"50px"}}>decrement</button>
//             <button onClick={()=>{setNum(0)}} style={{color:"red",marginTop:"50px",marginLeft:"10px",fontSize:"50px"}}>set 0</button>



//             <div><h1>number: {num}</h1></div>

//       </div>
//   ) ;
// }

// export default App;




//2
// function App() {
//   const [a,setA]=useState(0);
   

//   return(
//       <div style={{textAlign:'center'}}>

//         <input type="text" onChange={(event)=>{setA(event.target.value)}}/>
//         <h1>{a}</h1>
//       </div>
//   ) ;
// }


// export default App;

// //3
// function App() {
//   const [sh,setSh]=useState(true);
   

//   return(
//       <div style={{textAlign:'center'}}>

//         <button onClick={()=>{setSh(!sh)}}>click me</button>
//         {sh && <h1>hi welcome to my web page</h1>}

//       </div>
//   ) ;
// }


// export default App;

// 4
// function App() {
//   const [textcolor,settextcolor]=useState('blue');
   

//   return(
//       <div style={{textAlign:'center'}}>

//         <button onClick={()=>{settextcolor(textcolor==='blue'?"purple":"blue")}}>click me</button>
//         <h1 style={{color:textcolor }}>Hi Welcome To My Webpage</h1>
//       </div>
//   ) ;
// }


// export default App;



// function App() {
//   const [courses,setcourses]=useState([]);
//   const [newcourse,setnewcourse]=useState('');

//   const updatelist=()=>{
//     let a=[...courses,newcourse];
//     setcourses(a);
//   }   

//   return(
//       <div style={{textAlign:'center'}}>

//         <input placeholder='Please Enter New Course Name'  type="text" onChange={(event)=>{setnewcourse(event.target.value)}} />
//         <br/>

      
//         <button onClick={updatelist}>ADD</button>
        
//         <div>
//           {courses.map(function(course){
//               return <h2>{course}</h2>
//           })}
//         </div>

//       </div>
//   ) ;
// }

// export default App;


// function App() {
// const [fac,setfac]=useState('')
// let newdata=''

//   Axios.get("https://catfact.ninja/fact").then((res)=>{newdata=res.data.fact})

  

//   return(
//     <div style={{textAlign:'center'}}>

//       <button onClick={()=>{setfac(newdata)}}>new fact</button>

//       <p>{fac}</p>


//     </div>
    
    
//   ) ;
// }

// export default App;




// function App() {
//   const [x,setx]=useState('')
//   const [predictedage,setpredictedtage]=useState(0)
//   const [pcount,setpcount]=useState(0)




//   const f2=()=>{axios.get(`https://api.agify.io/?name=${x}`).then(
    
//   (res)=>{setpredictedtage(res.data.age)
//   setpcount(res.data.count)})}


//   const f1=(event)=>{setx(event.target.value)}


  
//     return(
//       <div style={{textAlign:'center'}}>

//         <input type="text" placeholder='Please Enter Your Name' onChange={f1} />
//         <br/>
//         <button onClick={f2}>Predict Age</button>

  
//         <p>age is: {predictedage}</p>
//         <br/>
//         <p>count is: {pcount}</p>

  
  
//       </div>
      
      
//     ) ;
//   }
  
//   export default App;



// function App() {

//   const [ex,setex]=useState('')

//   const f1=()=>{Axios.get(`https://excuser-three.vercel.app/v1/excuse/party/`).then((res)=>{setex(res.data[0].excuse)})}
//   const f2=()=>{Axios.get(`https://excuser-three.vercel.app/v1/excuse/family/`).then((res)=>{setex(res.data[0].excuse)})}
//   const f3=()=>{Axios.get(`https://excuser-three.vercel.app/v1/excuse/office/`).then((res)=>{setex(res.data[0].excuse)})}


 
  
//     return(
//       <div style={{textAlign:'center'}}>


//         <h1>Generate a Excuse</h1>
//         <button onClick={f1}>Party</button>
//         <button onClick={f2}>Family</button>
//         <button onClick={f3}>Office</button>
//         <br/>

//         <p>{ex}</p>

  
  
//       </div>
      
      
//     ) ;
//   }
  
//   export default App;

// import  SubmitForm  from './SubmitForm';


// function App(){

//   return(

//     <div>
//     <SubmitForm/>
//     <SubmitForm/>
//     <SubmitForm/>
//     </div>
//   );
// }


// export default App;

// import Buttons from './buttons';
// import { useState } from 'react';


// function App(){
// const [oc,setoc]=useState(false)
//   return(
//     <div style={{textAlign:'center'}}>
      
//       { oc && <div class="alert alert-warning alert-dismissible fade show" role="alert">
//               this is alert    
//               <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setoc(false)}}>
//               <span aria-hidden="true">&times;</span>
//               </button>
//               </div>}
      
      
//       <Buttons text='click me!' color="primary" f1={()=>{setoc(true)}} />
      
      
//       </div>
    
//   )
// }

// export default App;


function App(){

    const [display,setdisplay]=useState()
    const [temp,settemp]=useState([])

    const handleclick=(a)=>{

        settemp([...temp,a])

    }

    const handleresult=(a)=>{

        setdisplay(a.join('').split('+').reduce((previousValue, currentValue, currentIndex, array) => {
            return Number(previousValue)+ Number(currentValue)
        }, 0))

    }

    const clear=()=>{

        setdisplay()
        settemp([])

    }




    
    return(
            <div>
                <div className='display d-inline-flex'>
                    <h2>{display}</h2>
                </div>
                <div className='temp'>
                    <p className='lead'>{temp}</p>
                </div>
                <div className='btnss'>
                    
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(1)}}>1</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(2)}}>2</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(3)}}>3</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(4)}}>4</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(5)}}>5</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(6)}}>6</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(7)}}>7</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(8)}}>8</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(9)}}>9</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick(0)}}>0</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleclick('+')}}>+</button>
                    <button className='btn btn-primary m-1' onClick={()=>{handleresult(temp)}}>=</button>
                    <button className='btn btn-secondary m-1' onClick={()=>{clear()}}>clear</button> 
 
 
 
                </div>

            </div>
    )




}

export default App;