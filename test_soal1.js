var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

function MaxAmount(arguments) {
    countData = []
    minValue = 999
    maxValue = -999
    maxIndex = 0
    amount = 0

    for(var i=0; i<arguments.length; i++) {
        if(minValue > arguments[i]) {
            minValue = arguments[i]
        }
        if(maxValue < arguments[i]) {
            maxValue = arguments[i]
        }

        if(countData[arguments[i]] == undefined) {
            countData[arguments[i]] = 1
        } else {
            countData[arguments[i]]++
        }
    }

    for(var i=minValue; i<=maxValue; i++) {
        if(countData[i] > amount) {
            amount = countData[i]
            maxIndex = i
        }
    }

    console.log("total data paling banyak keluar adalah " + maxIndex + " dengan jumlah " + amount)
}

MaxAmount(data1)
MaxAmount(data2)
MaxAmount(data3)