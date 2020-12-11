$("document").ready(function() {
    $("[data-type='vitamin']").css("background-color", "green");
    $("[data-type='mineralwater']").css("background-color", "blue");
    $("[data-type='proteinbar']").css("background-color", "RebeccaPurple");

    // filter
    document.querySelector("#filter-vitamins").addEventListener("change", function(evnt) {
        updateProductFilter("vitamins", evnt.target.checked);
    });
    document.querySelector("#filter-mineralwater").addEventListener("change", function(evnt) {
        updateProductFilter("waters", evnt.target.checked);
    });
    document.querySelector("#filter-proteinbars").addEventListener("change", function(evnt) {
        updateProductFilter("bars", evnt.target.checked);
    });

    const updateProductFilter = (filter, state) => {
        let val = "";

        switch (filter) {
            case "vitamins":
                val = "[data-type='vitamin']";
                break;
            case "waters":
                val = "[data-type='mineralwater']";
                break;
            case "bars":
                val = "[data-type='proteinbar']";
                break;
        }

        $(".product-item").has(val).css('display', state ? "" : "none");
    };
});
