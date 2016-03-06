// SERVICE: Labels
// Contains information about labels on screen.
app.service('Labels', [function() {
    this.labels = [];
    
    this.addLabel =  function (newX, newY, newLabel) {
        this.labels.push({x: newX, y: newY, label: newLabel});
    }
}])