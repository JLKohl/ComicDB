//creating constants so we can use the functions
// in the index file.
const tags = require("./tags");
const comics = require("./comics.js");
const characters = require("./characters.js");
const relationships = require("./relationships.js")

async function main() {
    //funtion returns the id, so the const will 
    //hold the id of the new inserted comic
    // which can be used in the code later.
    const newComicId = await comics.createComic(
        "A new comic",
        "This is a new comic",
        10
    ); 

    console.log(
        "ID of new comic created:",
        newComicId
    );

    const allComics = await comics.getComics();

    console.log(
        "All of the commics in the database: ",
        allComics
    );

    const comicById = await comics.getComicById(newComicId);

    console.log (
        "New comic retrieved by the Id: ",
        comicById);

    await comics.updateComic(
        newComicId,
        "This is an updated title", 
        "This is an updated description", 
        10
    );

    //Used Claude Code for this const because I was not 
    // sure how to print something that was updated and 
    //  would be helpful for a human to read. 
    const updatedComic = await comics.getComicById(newComicId);
    console.log(
        "Comic is update: ",
        updatedComic
    );

    const newCharacterId = await characters.createCharacter(
        "Stuart",
        3,
        "male",
        "The baby of the family"
    );

    const newTagId = await tags.createTag(
        "Youngest Child"
    );

    await relationships.linkCharacterToComic(newComicId, newCharacterId);

    await relationships.linkTagToComic(newComicId, newTagId);

    const comicWithCharacters = await relationships.getComicsWithCharacters(newComicId);
    console.log(
        "Characters realated to comic: ",
        comicWithCharacters
    );

    const comicTags = await relationships.getComicsWithTags(newComicId);
    console.log(
        "Tags realted to comic: ",
        comicTags
    )

    //unlinking the tables so that i can delete to comic
    await relationships.unlinkCharacterFromComic(newComicId, newCharacterId);
    await relationships.unlinkTagFromComic(newComicId, newTagId);

    //deleting the unneeded new comic, chatacter and tag from the database
    //so that the code can be rerun with out issues
    await comics.deleteComic(newComicId);
    await tags.deleteTag(newTagId);
    await characters.deleteCharacter(newCharacterId);

    const updatedDB = await comics.getComics();

    console.log(
        "Comic has been deleted from database: ",
        updatedDB
    );

    

}

main()