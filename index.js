const areaCodes = require('./ac_json2.json');

var count = 0;
var elapsed = 0;

const iterateAreaCodes = () => {
    return new Promise((resolve) => {
        // Iterate over each of the area codes listed in the json file
        areaCodes.forEach(areaCode => {
            count++;
            let start = Date.now();
            console.log(`Processing: ${areaCode.areacode} State: ${areaCode.state}`);
            // Assume no prefix will start with a zero
            for (let prefix = 100; prefix <= 999; prefix++) {
                for (let localNumber = 0; localNumber <= 9999; localNumber++) {
                    // TODO: Implement output to file as csv

                    // Uncomment the following line if you want to see the incredibly repetitive output...
                    // This impacts performance greatly.

                    // console.log(`${areaCode.areacode}-${prefix.toString().padStart(3,0)}-${localNumber.toString().padStart(4,0)}`)
                }
            }
            elapsed += Date.now() - start;
        });
        resolve();
    })
}

iterateAreaCodes()
.then(() => {
    console.log("Number of area codes processed:", count);
    console.log("Total elapsed time:", elapsed / 1000, "seconds" )
    console.log("Average time per area code:", elapsed / count, "ms")
})
