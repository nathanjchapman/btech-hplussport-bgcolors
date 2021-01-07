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

    $.getJSON("/product-data.json")
        .done((data) => {
            let product = data.products.filter(obj => obj.prod_id === prodID);
            $("#productStock").text(product[0].in_stock);
            $("#productPrice").text(product[0].retail_price);
            $("#productDesc").text(product[0].description);
        });
});
