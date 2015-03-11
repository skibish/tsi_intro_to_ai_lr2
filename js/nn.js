// hatchback, coupe, jeep
var learningArray = [
//  b, doors, avgFuel, seats, weight, t1, t2
    [1, 5, 4.5,  4, 2.5, 0, 0],
    [1, 3, 4.2,  2, 2.2, 0, 0],
    [1, 5, 4.9,  4, 2.3, 0, 0],
    [1, 3, 6.0,  2, 2.1, 0, 0],
    [1, 5, 5.0,  4, 2.0, 0, 0],
    [1, 2, 10.0, 2, 3.0, 0, 1],
    [1, 2, 12.0, 2, 2.5, 0, 1],
    [1, 2, 14.0, 2, 3.0, 0, 1],
    [1, 2, 15.0, 2, 2.5, 0, 1],
    [1, 2, 13.0, 2, 3.0, 0, 1],
    [1, 5, 10.0, 4, 4.0, 1, 0],
    [1, 5, 11.0, 5, 5.0, 1, 0],
    [1, 5, 12.0, 6, 6.0, 1, 0],
    [1, 5, 14.0, 5, 5.0, 1, 0],
    [1, 5, 15.0, 4, 5.0, 1, 0]
];

/**
 * Neural network
 * @constructor
 */
var NN = function () {
    this.learningCurve = 1;
    this.w0 = [0.1, 0.1, 0.1, 0.1, 0.1];
    this.w1 = [1.1, 1.1, 1.1, 1.1, 1.1];
    this.errors = [1000000];
    this.epochs = 1000;

    this.activation = function (value) {
        return (value >= 0 ? 1 : 0);
    };

    /**
     * Era
     * @param learningArray
     */
    this.era = function (learningArray) {
        var totalErrors = 0;
        for (var i = 0; i < learningArray.length; i++) {
            var resFor1 = math.multiply([learningArray[i][0], learningArray[i][1], learningArray[i][2], learningArray[i][3], learningArray[i][4]], this.w0);
            var resFor2 = math.multiply([learningArray[i][0], learningArray[i][1], learningArray[i][2], learningArray[i][3], learningArray[i][4]], this.w1);

            if ((learningArray[i][5] != this.activation(resFor1)) || (learningArray[i][6] != this.activation(resFor2))) {
                totalErrors++;
                for (var j = 0; j < this.w0.length; j++) {
                    this.w0[j] = this.w0[j] + this.learningCurve * (learningArray[i][5] - this.activation(resFor1)) * learningArray[i][j];
                    this.w1[j] = this.w1[j] + this.learningCurve * (learningArray[i][6] - this.activation(resFor2)) * learningArray[i][j];
                }
            }
        }

        this.errors.push(totalErrors);
    };

    /**
     * Learn neural network
     */
    this.learn = function () {
        while (this.errors[this.errors.length - 1] >= 1) {
            this.era(learningArray);
        }
    };

    /**
     * Give data, and network will give answer back
     * @param data
     * @returns {*[]}
     */
    this.expluatate = function (data) {
        var resFor1 = math.multiply([data[0], data[1], data[2], data[3], data[4]], this.w0);
        var resFor2 = math.multiply([data[0], data[1], data[2], data[3], data[4]], this.w1);

        return [this.activation(resFor1), this.activation(resFor2)];
    }
};