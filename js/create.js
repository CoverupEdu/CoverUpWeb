if(!createDone) {
    var createDone = true;
    var spotNo = 0;

    $(document).on("pagecreate", "#create", function() {
        console.log("CREATE LOADED!");

        $("img-holder").css("height", $(".image").height() + "px");

        $(".image").on("click", function(event) {
            var posX = ((event.offsetX / $(document).width()) * 100), posY = ((event.offsetY / $(".img-holder").height()) * 100);
            console.log("imgholderheight " + $(".img-holder").height() + " Y " + posY);
            addSpot(posX, posY, spotNo);
            spotNo++;
        });
    });

    function addSpot(left, top, id) {
        var popupText;

        console.log("addSpot");

        $("#create-text-popup").popup("open");
        $("#create-popup-text-input").focus();
        $("#create-popup-submit-button").on("click", function() {
            popupText = $("#create-popup-text-input").val();

            $("#create-text-popup").popup("close");
            spots.push(new Spot(left, top, id, popupText).addToCreate());

            $("#create-popup-text-input").val("");
            $("#create-popup-submit-button").off("click");
        });
    }
}