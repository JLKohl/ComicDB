const pool = require('./dbjs')

async function linkTagToComic(comic_id, tag_id) {
    try {

        const [result] = await pool.query('INSERT INTO comic_tags WHERE comic_id = ? AND tag_id = ?',
            [comic_id, tag_id]
        )
        return result.insertId; 

    } catch (error) {

        console.log(error)
    }
    
}

async function linkCharacterToComic(comic_id, character_id) {

        try {

        const [result] = await pool.query('INSERT INTO comic_characters WHERE comic_id = ? AND character_id = ?',
            [comic_id, character_id]
        )
        return result.insertId; 

    } catch (error) {

        console.log(error)
    }
    
}

module.exports = {
    linkTagToComic,
    linkCharacterToComic
}
