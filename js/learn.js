var spotNo = 0;

if(!done) {
    var done = true;
    $(document).on("pagecreate", "#learn", function() {
        console.log("LEARN LOADED!");

        setTimeout(function() {
            console.log("ADDING SPOTS!");
            for(i = 0; i < spots.length; i++) {
                spots[i].addToLearn();
            }
        }, 100);
    });
}