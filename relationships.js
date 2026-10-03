const pool = require('./db.js')


//This functions links new tags and comics inside of the
//comic_tags table and returns what rows were affected 
//by the change
async function linkTagToComic(comic_id, tag_id) {
    try {

        const [result] = await pool.query('INSERT INTO comic_tags (comic_id, tag_id) VALUES (?, ?)',
            [comic_id, tag_id]
        )
        return result.affectedRows; 

    } catch (error) {

        console.log(error)
    }
    
}

//This function links new characters and comics inside of the
//comic_characters table and returns what rows were affected
//by the change
async function linkCharacterToComic(comic_id, character_id) {

        try {

        const [result] = await pool.query('INSERT INTO comic_characters (comic_id, character_id) VALUES (?, ?)',
            [comic_id, character_id]
        )
        return result.affectedRows; 

    } catch (error) {

        console.log(error)
    }
    
}

//These next two functions will unlink the tags and comics in case you 
//need to delete any information that was in the tables
async function unlinkTagFromComic(comic_id, tag_id) {

        try {

        const [result] = await pool.query('DELETE FROM comic_tags WHERE comic_id = ? AND tag_id = ?',
            [comic_id, tag_id]
        )
        return result.affectedRows; 

    } catch (error) {

        console.log(error)
    }
    
}

async function unlinkCharacterFromComic(comic_id, character_id) {

        try {

        const [result] = await pool.query('DELETE FROM comic_characters WHERE comic_id = ? AND character_id = ?',
            [comic_id, character_id]
        )
        return result.affectedRows; 

    } catch (error) {

        console.log(error)
    }
    
}

//These next two functions use JOIN to create readable information 
//for the user when they want to see the associations between the linked tables
async function getComicsWithTags(comic_id) {

        try {

        const [result] = await pool.query(
            `SELECT comics.title, tags.tag_name
            FROM comics
            JOIN comic_tags ON comics.comic_id = comic_tags.comic_id
            JOIN tags ON comic_tags.tag_id = tags.tag_id
            WHERE comics.comic_id = ?;`,
            [comic_id]
        )
        return result; 

    } catch (error) {

        console.log(error)
    }
    
}

async function getComicsWithCharacters(comic_id) {

        try {

        const [result] = await pool.query(
            `SELECT comics.title, characters.name
            FROM comics
            JOIN comic_characters ON comics.comic_id = comic_characters.comic_id
            JOIN characters ON comic_characters.character_id = characters.character_id
            WHERE comics.comic_id = ?;`,
            [comic_id]
        )
        return result; 

    } catch (error) {

        console.log(error)
    }
    
}





module.exports = {
    linkTagToComic,
    linkCharacterToComic,
    unlinkTagFromComic,
    unlinkCharacterFromComic,
    getComicsWithTags,
    getComicsWithCharacters
}
