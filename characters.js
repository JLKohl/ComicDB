const pool = require('./db.js')

// all of the functions in this file were imported from
// comics and edited to work with characters, by changing
// the function names and the parameters in the functions.
// for detailed descriptions of the functions check out
// the comics.js file.
async function getCharacters() {
    try {
        const [characters]= await pool.query('SELECT * FROM characters');
        return characters

    } catch (error) {

        console.log(error)
    }
}

async function getCharacterById(id) {
    try {
    const [rows]= await pool.query('SELECT * FROM characters WHERE character_id = ?', [id]);
    return rows[0]

    } catch (error) {

        console.log(error)
    }

}

async function createCharacter(name, age, gender, description){
    try {
       const [result] = await pool.query('INSERT INTO characters (name, age, gender, description) VALUES (?, ?, ?, ?)', 
        [name, age, gender, description]);

        return result.insertId;

    } catch (error) {

        console.log(error)
    }

}

async function updateCharacter(id, name, age, gender, description){
    try {
        const [result] = await pool.query('UPDATE characters SET name = ?, age = ?, gender = ?, description = ? WHERE character_id = ?', 
            [name, age, gender, description, id]);
        return result.affectedRows;

    } catch (error) {

        console.log(error)
    }

}

async function deleteCharacter(id) {
        try {
    const [result]= await pool.query('DELETE FROM characters WHERE character_id = ?', [id]);
    return result.affectedRows;

    } catch (error) {

        console.log(error)
    }
    
}

module.exports = {
    getCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter
}