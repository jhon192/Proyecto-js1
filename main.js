//Method Get
/* fetch('https://reqres.in/api/users?page=2')
.then(res => res.json())
.then(data => console.log(data.data))
.catch(e => console.log(e));*/

//Method post
/* const peticion = fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    }),
    headers:{
        "Content-Type": "application/json"
    },
    credentials: "same-origin"
}).then(res =>{
    console.log(res.json())
})*/

//method Patch/Put
/* const peticion = fetch('https://reqres.in/api/users',{
    method: 'PATCH',
    body: JSON.stringify({
        "name": "Jhon",
        "job": "zion resident"
    }),
    headers:{
        "Content-Type": "application/json"
    },
    credentials: "same-origin"
}).then(res =>{
    console.log(res.json())
})*/

//axios get default
/* axios('https://reqres.in/api/users?page=2')
.then(res => console.log(res.data.data))
.catch(e => console.log(e));*/

//axios post
/*axios.post('https://reqres.in/api/users', {
    "name": "morpheus",
    "job": "leader"
}).then(res =>{
    console.log(res);
}).catch(e =>{
    console.log(e);
})*/

//axios patch/put
/*axios.patch('https://reqres.in/api/users', {
    "name": "Jhon",
    "job": "leader"
}).then(res =>{
    console.log(res);
}).catch(e =>{
    console.log(e);
})*/

/* fin*/