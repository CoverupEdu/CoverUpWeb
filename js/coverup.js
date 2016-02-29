if(!Spot) {
    var Spot = function(x, y, id, text) {
        this.spotX = x;
        this.spotY = y;
        this.spotId = id;
        this.spotText = text;

        console.log("Creating spot #" + this.spotId);
    };

    Spot.prototype.addToLearn = function() {
        console.log("Adding spot #" + this.spotId + " to learn");

        $(".learn-img-holder").append(
            $("<div />", {"class" : "spot-holder",
                          "style" : "top: " + this.spotY + "%; left: " + this.spotX + "%",
                          "id" : "spot-" + spotNo + "-holder"}).append(
                $("<a />", {
                    "href" : "#learn-popup",
                    "data-rel" : "popup",
                    "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                    "data-transition" : "flip",
                    "id" : "spot-" + this.spotId,
                    "popup-text" : this.spotText
                })
            )
        );

        $("#spot-" + this.spotId).on("click", function(event) {
            $("#learn-popup-text").text(event.target.getAttribute("popup-text"));
        });

        return this;
    };

    Spot.prototype.addToCreate = function() {
        console.log("Adding spot #" + this.spotId + " to create");

        $(".img-holder").append(
            $("<div />", {"class" : "spot-holder",
                          "style" : "top: " + this.spotY + "%; left: " + this.spotX + "%",
                          "id" : "spot-" + spotNo + "-holder"}).append(
                $("<a />", {
                    "href" : "#create-popup",
                    "data-rel" : "popup",
                    "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                    "data-transition" : "flip",
                    "id" : "spot-" + this.spotId,
                    "popup-text" : this.spotText
                })
            )
        );

        $("#spot-" + this.spotId).on("click", function(event) {
            $("#create-popup-text").text(event.target.getAttribute("popup-text"));
        });

        return this;
    };

    var spots = []; 
}