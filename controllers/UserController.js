import User from "../models/UserModel.js";

export const getPelatihan = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const insertPelatihan = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "Pelatihan Berhasil Ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        "Id_pelatihan": req.params.Id_pelatihan,
      },
    });
    res.status(200).json({ msg: "User Deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};
