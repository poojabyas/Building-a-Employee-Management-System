let cont = document.getElementById("cont");
let navbar = document.getElementById("navbar");
let filterDep = document.getElementById("filterDep");
let filtergen = document.getElementById("filtergen");
let sortorder = document.getElementById("sortorder");
let button = document.querySelector("button")

button.addEventListener("click", function(){
    fetchData()
})


async function fetchData(){
    try {
        let response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
        let data = await response.json()
    console.log(data)
        
        // let sortedData = sortData(data,sortorder.value)
        //         showData(sortedData)
             
        
         showData(data.data)
       
    } catch (error) {
        console.log(error)
        
    }
}


        // function sortData(data,order){
        //     if(order === "asc"){
        //         return data.slice().sort((a,b)=> a.price - b.price)
        //     }else if (order === "desc"){
        //         return data.slice().sort((a,b)=> b.price - a.price)
        //     } 
        //     return data
        // }


function showData(data){
         cont.innerHTML=""
         data.forEach(element => {

        let sepDiv = document.createElement("div")
        sepDiv.className = "sepDiv"

        let id = document.createElement("h4")
        id.innerHTML=element.id

        let salary = document.createElement("p")
        salary.innerHTML=element.salary
        
        let department = document.createElement("p")
        department.innerHTML=element.department

        let gender = document.createElement("h4")
        gender.innerHTML=element.gender

        let name = document.createElement("h4")
        name.innerHTML=element.name
        

        sepDiv.append(id,name,salary,department,gender,)
        cont.appendChild(sepDiv)
    });
}