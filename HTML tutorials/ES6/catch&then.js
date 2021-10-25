promise = new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //     resolve();
    // },3000);
    
    var request = new XHTMLRequest()
        request.onload = () =>{
            resolve();
        }

});

promise. then(()=> console.log("yey"))
        .then(()=> console.log("yey"))
        .catch(()=> console.log("aw"))