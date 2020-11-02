function myfam(){
    let fam= {mothername:'Rabita Maharjan',fathername:'Maduram Maharjan'}
    return fam;
}

async function getfam(){
	try{
		var fam= await myfam();
		console.log(fam);

	}
	catch(e){
		console.log("Error is :", e)

	}
}
getfam();

