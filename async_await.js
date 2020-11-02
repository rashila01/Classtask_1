function myfam(){
    let fam= {mothername:'Rabita Maharjan',fathername:'Maduram Maharjan'}
    return fam;
}

async function getfam(){
	try{
		var intro= await myfam();
		console.log(fam);

	}
	catch(e){
		console.log("Error is :", error)

	}
}
getfam();

