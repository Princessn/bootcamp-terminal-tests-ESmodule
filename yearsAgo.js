const yearsAgo = (year) => {
  	const myYear = new Date().getFullYear();
  	return myYear - year;
}

export default yearsAgo