const findItemsOver20 = (list) => {
  	let over20 = [];
  	for(let i = 0; i < list.length; i++){
      	let obj = list[i];
      	if(obj["qty"] > 20) over20.push(obj);
    }
  	return over20;
}

export default findItemsOver20