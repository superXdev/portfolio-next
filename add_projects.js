const axios = require('axios');
const prompt = require('prompt');
const fs = require('fs');
const path = require('path');

const jsonFile = path.join(process.cwd(), '/public/data_projects.json')

prompt.start();

prompt.get(['id', 'name', 'description', 'linkImage', 'stack'], function (err, result) {
    if (err) console.log(err)
    addProject(parseInt(result.id), result.name, result.description, result.linkImage, result.stack)
});

async function addProject(id, name, description, linkImage, stack) {
    const data = await (await axios('http://localhost:3000/data_projects.json')).data
    data.push({
        id,
        name,
        description,
        linkImage,
        stack
    })

    fs.writeFile(jsonFile, JSON.stringify(data, null, 2), (err) => {
        if(err) console.log(err),
        console.log('Added new project success:');
    })
}