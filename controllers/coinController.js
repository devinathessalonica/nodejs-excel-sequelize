const models = require ('../models/index');
var async = require('async');

const Proses = models.proses;
const Output = models.output;
const Pivot = models.pivot;
const Input = models.input;
const Tally = models.tally;
// store
exports.store = async function (req, res) {
    const prosesModel = await Proses.build();
    const inputs = req.body.output;
    console.log(inputs);
    var key = 1;
    await Promise.all(inputs.map(async (input) => {
        const outputModel = await Output.create({ jumlah_koin: input.jumlah_koin,Proses_id:prosesModel.id });
        key = 1;
        await Promise.all(input.input.map(async (inputDetail) => {
            const inputModel1 = await Input.create({ Proses_id:prosesModel.id,jenis_koin: "Jenis "+key,jumlah_koin:inputDetail.jumlah_koin});
            const pivotModel = await Pivot.create({ Output_id: outputModel.id, Input_id : inputModel.id });
            key++;
            
        await Promise.all(inputDetail.tally.map(async (tallys) => {
                const tallyModel = await Tally.create({ Pivot_id: pivotModel.id, jumlah_koin: tallys.jumlah_koin });
            }));
        }));
    }));
    
};
