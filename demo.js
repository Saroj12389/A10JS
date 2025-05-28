
const userData=[
    {
    name:"saroj",
    age:20,
    hasPassedOut:false,
    occupation:undefined,
},
{
    name:"gyanendra",
    age:20,
    hasPassedOut:false,
    occupation:"sswe",
},{
    name:"lukcy",
    age:22,
    hasPassedOut:true,
    occupation:"SWE",
}
]

const apiResponse={
    statusCode:200,
    message:"user data etched successfully",
    data:userData
}


const getUserName=()=>{
    if(apiResponse.statusCode===200){
       const result= apiResponse.data
       .filter((user)=>user.age > 20 && user.occupation)
       .filter((user)=>user.occupation)
       .map((user)=> user.occupation)
       return result
    }
 return []
}
console.log(getUserName())