#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
require('colors')
inquirer.prompt(

    {
        name: 'name',
        message: 'What is your Web Component name?',
        default: 'MyWebComponent',
        validate: function (input) {
            if (!input.match(/^[a-zA-Z0-9_]+$/g)) {
                console.log('\t You can`t use spaces or special characters')
                return false
            } else {
                return true
            }
        }
    }).then(answer => {
        const lowerCase = answer.name.toLowerCase().slice(1);
        const firstLetter = answer.name.charAt(0).toUpperCase();
        const fileName = firstLetter + lowerCase;
        const read = fs.createReadStream(path.join(__dirname, `./webComponentTemplate.js`), {
            autoClose: true,
        });
        const write = fs.createWriteStream(`${fileName}.js`);
        read.on("data", chunk => {
            const partial_text = chunk.toString();
            const text_replaced = partial_text
            .replace("web-component-template", `${answer.name.toLowerCase()}-tag`)
            .replace(/WebComponent/, fileName)
            .replace("My Web Component", fileName)
            .replace("My Web Component", fileName)
            .replace(/WebComponent/, fileName);
            write.write(text_replaced);
        });


        console.log(`${'CREATED'.green} ${'FILE'.magenta} ${fileName.yellow}${'.js'.yellow}`)


    });