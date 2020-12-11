$(function() {
	let paramLoc = window.location.href.indexOf("?");
	let paramStr = window.location.href.slice(paramLoc+1);
	let prodName = "";
	let prodID = "";

	let i = paramStr.indexOf("prodName=")+9;
	for (let j=i; j < paramStr.length; j++) {
		if (paramStr.charAt(j) == "&") {
			break;
		}
		prodName += paramStr.charAt(j);
	}
	console.log(prodName)

	let k = paramStr.indexOf("prodID")+7;
	for (let l = k; l < paramStr.length; l++) {
		if (paramStr.charAt(l) == "&") {
			break;
		}
		prodID += paramStr.charAt(l);
	}
	prodName = decodeURIComponent(prodName);
	prodID = decodeURIComponent(prodID);

	$("#productName").text(prodName);
});
