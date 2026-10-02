const pool = require('./db.js')

// all of the functions in this file were imported from
// comics and edited to work with tags, by changing
// the function names and the parameters in the functions.
// for detailed descriptions of the functions check out
// the comics.js file.
async function getTags() {
    try {
        const [tags]= await pool.query('SELECT * FROM tags');
        return tags

    } catch (error) {

        console.log(error)
    }
}

async function getTagById(id) {
    try {
    const [rows]= await pool.query('SELECT * FROM tags WHERE tag_id = ?', [id]);
    return rows[0]

    } catch (error) {

        console.log(error)
    }

}

async function createTag(tag_name){
    try {
       const [result] = await pool.query('INSERT INTO tags (tag_name) VALUES (?)', 
        [tag_name]);

        return result.insertId;

    } catch (error) {

        console.log(error)
    }

}

async function updateTag(id, tag_name){
    try {
        const [result] = await pool.query('UPDATE tags SET tag_name = ? WHERE tag_id = ?', 
            [tag_name, id]);
        return result.affectedRows;

    } catch (error) {

        console.log(error)
    }

}

async function deleteTag(id) {
        try {
    const [result]= await pool.query('DELETE FROM tags WHERE tag_id = ?', [id]);
    return result.affectedRows;

    } catch (error) {

        console.log(error)
    }
    
}

module.exports = {
    getTags,
    getTagById,
    createTag,
    updateTag,
    deleteTag
}