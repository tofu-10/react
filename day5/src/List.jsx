const fruits =['apple', 'banana', 'cherry'];


const people=[
    {
    id: 0, 
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
},
    {
    id: 1, 
    name: 'Rijan Shrestha',
    profession: 'Astronaut',
},
    {
    id: 2, 
    name: 'Aashis Kafle',
    profession: 'Donaut Maker',
},
    {
    id: 3, 
    name: 'Adarsha Gaihre',
    profession: 'Cake Maker',
},
    {
    id: 4, 
    name: 'Sanjita Kandel',
    profession: 'Gender Changer',
}   
]
export default function List(){
    const number =[1,2,3,4,5];
    const evenNumbers=number.filter(num=> num%2==0);
    console.log(evenNumbers);
    // const numberDoubled=number.map((num)=> num * 2);
    // console.log(numberDoubled);
    // return       <>
    //     <h1>hello</h1>
    //     <ul>
    //         {evenNumbers.map(num=>
    //             <li>{num}</li>
    //         )}
    //     </ul>
    //   </>
    
    return <>
    {number.map((n,index)=>
    <li key={index}>Index={index},Value={n}</li>
    )}
    </>
}