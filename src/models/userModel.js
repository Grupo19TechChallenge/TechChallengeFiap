import { query } from "../database/database.js";

const getUserModel = async() => {
    const sql = 'SELECT * FROM aluno;';
    const result = query(sql);
    return result;
};

export default getUserModel;