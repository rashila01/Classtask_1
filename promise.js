let myfam =()=>{
    return new Promise((resolve,reject)=>{
        let fam = [{mothername:'Rabita Maharjan',
        fathername:'Maduram Maharjan'
        }]
        if (fam.length>0){
            resolve(fam)}
            else{
                reject ("Error")
            }
})
} 
myfam().then((result)=>{
    console.log("Success", result);
}).catch((error)=>{
    console.log("Error", error)
})
