// const url = "https://zenquotes.io/api/quotes.json";
const url = "https://22babar.github.io/quoat/quotes.json";
let myPromis = new Promise((resolve,reject) => {
    let req = new XMLHttpRequest();
    req.open('GET',url);
    req.onload = () => {
        if(req.status == 200){
            resolve(req.response);
        }else{
                reject("file not found");
        }
    };  
        req.send();
}); 
myPromis.then(ok => {
    let data = JSON.parse(ok);
    // console.log(data[0].q +" "+ data[0].a);
    for(let i = 0 ; i<= data.length ; i++){
        // let br = document.createElement("br");
        document.write(`${i+1} - <strong>${data[i].q} </strong> 
                <i>${data[i].a} </i>  <hr>`);
        // document.write(i + " - "+data[i].q +"  -   "+ data[i].a);  
        //  document.body.appendChild(br);
        
    }
})
myPromis.catch(error => {document.write(error)});




