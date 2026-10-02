const pool = require('./db.js')

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




module.exports = {
    linkTagToComic,
    linkCharacterToComic,
    unlinkTagFromComic,
    unlinkCharacterFromComic
}
