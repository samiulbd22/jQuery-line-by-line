+function($){
    //<!-- task for html(value) -->
    //<!-- task no 1 start -->
    let firstDiv = $(".only-one-select").html();
    console.log(firstDiv) //<p>Selected me</p>
    //<!-- task no 1 end -->
    //<!-- task no 2 start -->
    let overRidev = $("#overrideHtmlContent").html("<h2>I am overrider form</h2>");
    console.log(overRidev)
    //<!-- task no 2 end -->
    //<!-- task no 3 start -->
    let contentAddByFunction = $(".contentAddByFunction").html(function(){
        let a = $(this).length;
        return `<h2>function text ${a} added</h2>`
    });
    //<!-- task no 3 end -->
    //<!-- task for html(value) -->
    //<!-- task for text() start here -->
    // task no 1
    let b = $("#retrieveValue").text();
    console.log(b) //hello world
    //task no 2
    let setValue = $(".mySetValue").text("hello world!");
    console.log(setValue)
    //task no 3
    let setByfunction = $(".setByfunction").text(function(){
        return "heloo bangladesh";
    })
    console.log(setByfunction);
    //<!-- task for text() ended here -->
    //<!-- task for before()start here-->
    //task no 1
    let takeMe = $('#beforeSelect').before("<div> take me end into first place</div>");
    console.log(takeMe);//<div> take me end into first place</div>/$('#beforeSelect')
    //task no 2
    let takePlace = $("<h2>Hi</h2>").insertBefore("#countMe");
    console.log(takePlace)//<h2>Hi</h2>"/"#countMe"
    //task no 3
    $("#plcState").after($("#tMe"))
    //task no 4
    $("#bd").insertAfter($("#pak"))
    //<!-- task for before()ended here-->
    //<!-- task for prepend and append start here -->
    $("#parentNode").prepend($("#child"))
    $("#parentNode").append($("#child2"))
    //<!-- task for prepend and append ended here -->
    //<!-- task for prependto and afterto start here -->
    $("#attach1").prependTo($('#parent2'));
    $('#attach2').appendTo($("#parent2"))
    //<!-- task for prependto and afterto ended here -->
    //<!-- task for wrap, wrapall and unwrap start here -->
    //<!-- task no 1 -->
    $(".countr").wrap("<h4></h4>");
    //<!-- task no 2 -->
    $(".fruit").wrapAll("<h3></h3>");
    // task no 3
    $(".wrapping").unwrap(".wrapper");
    //<!-- task for wrap, wrapall and unwrap ended here -->
    // <!-- task for empty start here -->
    $(".institute").empty()
    // <!-- task for empty ended here -->
    // task for remove start here 
    $(".movie").remove()
    // $(".movie").remove(".jp");
    //task for replacewith
    //$("#replaceMe").replaceWith("<h3>1947</h3>")
    // task for replaceWith ended here 
    $("#replaceMe").click({name:"sanim",age:28},coolFunction);
    
}(jQuery)