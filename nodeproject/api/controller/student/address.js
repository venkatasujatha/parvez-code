const { dataSource } = require('../../../database');
const { address } = require('../../entities/address');
const addressRepo = dataSource.getRepository('address');
const appConst = require('../../constants');

const addr = async (req, res) => {
    try {
        const resp = await addressRepo.save(
            // address: "asdsd",
            // addressid: "105",
            // student: {
            //     firstname: "pathan",
            //     lastname: "asd",
            //     email: "pp@gmail.com"
            // }
            req.body
      )
    res.status(201).json({
        status: appConst.status.success,
        response: resp.count,
        message: null,
    });
} catch (err) {
    console.log(err.message);
    res.status(400).json({
        status: appConst.status.fail,
        response: null,
        message: err.message,
    });
}
};
module.exports = { addr };