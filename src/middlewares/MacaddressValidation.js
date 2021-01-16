const MacaddressValidation = (req, res, next) => {
    const { macaddress } = req.body;
    if (!macaddress) {
        return res.status(400).json({ error: 'macaddress é obrigatório' });
    } else {
        next();
    }
}

module.exports = MacaddressValidation;