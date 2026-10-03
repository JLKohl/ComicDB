//creating constants so we can use the functions
// in the index file.
const tags = require("./tags");
const comics = require("./comics.js");
const characters = require("./characters.js");
const relationships = require("./relationships.js")

// main() in index.js will run through the process of creating, updating, 
// finding and deleting a comic. It will also create a new tag and character and link them
// to the comics through the comic_tags and comic_characters tables. A JOIN will run to display 
// the information from the associated tables in a readable fashion. Then the links will be 
// unlinked so that in the end everything can be deleted and the database is back to where it was
// to start.

async function main() {
    //function returns the id, so the const will 
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

    //grabbing all the comics
    const allComics = await comics.getComics();

    console.log(
        "All of the comics in the database: ",
        allComics
    );

    ///grabbing the new comic by using the comic_id
    const comicById = await comics.getComicById(newComicId);

    console.log (
        "New comic retrieved by the Id: ",
        comicById);

    //updating the new comic that was created
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
        "Comic is updated: ",
        updatedComic
    );

    //create a character
    const newCharacterId = await characters.createCharacter(
        "Stuart",
        3,
        "male",
        "The baby of the family"
    );

    //create a tag
    const newTagId = await tags.createTag(
        "Youngest Child"
    );

    //linking the tables information together
    await relationships.linkCharacterToComic(newComicId, newCharacterId);

    await relationships.linkTagToComic(newComicId, newTagId);

    //the next two lines call the functions that will print the relationships in a readable way
    const comicWithCharacters = await relationships.getComicsWithCharacters(newComicId);
    console.log(
        "Characters related to comic: ",
        comicWithCharacters
    );

    const comicTags = await relationships.getComicsWithTags(newComicId);
    console.log(
        "Tags related to comic: ",
        comicTags
    )

    //unlinking the tables so that I can delete to comic
    await relationships.unlinkCharacterFromComic(newComicId, newCharacterId);
    await relationships.unlinkTagFromComic(newComicId, newTagId);

    //deleting the unneeded new comic, chatacter and tag from the database
    //so that the code can be rerun with out issues
    await comics.deleteComic(newComicId);
    await tags.deleteTag(newTagId);
    await characters.deleteCharacter(newCharacterId);

    const updatedDB = await comics.getComics();

    console.log(
        "Database (new comic has been deleted): ",
        updatedDB
    );

    

}

main()