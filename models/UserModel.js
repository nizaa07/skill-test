import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;
const User = db.define(
  "pelatihan",
  {
    Id_pelatihan : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nama_pelatihan : DataTypes.STRING,
    Deskripsi_pelatihan : DataTypes.TEXT,
    Mulai_pelatihan : DataTypes.DATE,
    Jumlah_pertemuan : DataTypes.INTEGER,
    Batas_pendaftaran : DataTypes.DATE,
    Durasi_pelatihan : DataTypes.INTEGER,
    Harga_pelatihan : DataTypes.INTEGER,
    Diskon_pelatihan : DataTypes.INTEGER
  },
  {
    freezeTableName: true,
  }
);

export default User;
(async () => {
  await db.sync();
})();
