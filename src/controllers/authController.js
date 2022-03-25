const authBusiness = require(`../business/authBusiness`);

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authBusiness.login(email, password);
        res.json({ token })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.register = async (req, res) => {
    try {
        const { email, password, name, surname } = req.body;
        const token = await authBusiness.register(name, surname, email, password);
        res.json({ token })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

