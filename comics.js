const pool = require('./db.js')

//used same logic as testConnection 
//however in this case we will return the comics
//so they can be used in other files 
async function getComics() {
    try {
        const [comics]= await pool.query('SELECT * FROM comics');
        return comics

    } catch (error) {

        console.log(error)
    }
}

async function getComicById(id) {
    try {
    const [rows]= await pool.query('SELECT * FROM comics WHERE comic_id = ?', [id]);
    return rows[0]

    } catch (error) {

        console.log(error)
    }

}
//this function will insert a new comic with a title description and episode number
//the id and timestamp are auto generated and therfor do not require a param.
async function createComic(title, description, episode){
    try {
       const [result] = await pool.query('INSERT INTO comics (title, description, episode) VALUES (?, ?, ?)', 
            [title, description, episode]);
        //return the new insertId so that you can know the id 
        //of the informaion that was just inserted.
        return result.insertId;

    } catch (error) {

        console.log(error)
    }

}

async function updateComic(id, title, description, episode){
    try {
        const [result] = await pool.query('UPDATE comics SET title = ?, description = ?, episode = ? WHERE comic_id = ?', 
            [title, description, episode, id]);
        return result.affectedRows;

    } catch (error) {

        console.log(error)
    }

}

async function deleteComic(id) {
        try {
    const [result]= await pool.query('DELETE FROM comics WHERE comic_id = ?', [id]);
    return result.affectedRows;

    } catch (error) {

        console.log(error)
    }
    
}

module.exports = {
    getComics,
    getComicById,
    createComic,
    updateComic,
    deleteComic
}