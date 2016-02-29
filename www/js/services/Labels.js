// SERVICE: Labels
// Contains information about labels on screen.
app.service('Labels', [function() {
    this.labels = [
        {
            x: 50,
            y: 20,
            label: 'Ash Cloud'
        }, {
            x: 25,
            y: 50,
            label: 'Lava Flow'
        }, {
            x: 50,
            y: 70,
            label: 'Main Pipe'
        }
    ];
    
    this.addLabel =  function (newX, newY, newLabel) {
        this.labels.push({x: newX, y: newY, label: newLabel});
    }
}])