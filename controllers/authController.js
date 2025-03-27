const authService = require('../services/authService');

const registerController = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginController = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { registerController, loginController };
