# Overview

The purpose of this project was to build a relational database that I could use with the website that I am currently creating for my comic "Wildly Imaginative". I am excited to be working on this project and am working to build a full stack website from the ground up.

This software includes several files that can retrieve, create, update, and delete the information in the different tables in the MySQL database comic_site.

[Software Demo Video](https://youtu.be/NUk-y0rkmnw?si=i9IrDzdGeFGULKqJ)

# Relational Database

The relational database used for this project was MySQL.

The structure of the tables I created in MySQL can be viewed by going to
[dbdiagram.io](https://dbdiagram.io/)
and pasting in the code from
[database schema](./database/schema.dbml)
on that site.

# Development Environment

The outline for the database was created on dbdiagram.io
The relational database was created using MySQL Workbench
The code was written inside of VS Code
Claude AI was used for research and some troubleshooting in the index file.
There was one const in index.js completely written by Claude that I used because I wasn't positive how to
write it, it was useful and taught me how to write better code in the future. 


The language used was Node with JavaScript, because this is a language I am most familiar with.
Two libraries were used: mysql2, to connect to and query the MySQL database, and dotenv,
to load database credentials from a .env file.


# Useful Websites

- [CodeforGeeks](https://codeforgeek.com/nodejs-mysql-tutorial/)
- [w3schools](https://www.w3schools.com/sql/default.asp)

# Future Work

- Expand the characters table to include more information about the characters.
- Connect the database to a frontend UI so that it will be usable on the website.
- The use of filtering with tags and characters feels a little redundant, so a fix might be finding another use for the character table other than filtering comics.