const request = require('request');
const fs = require('fs').promises
const arg = process.argv.splice(2)
const url = arg[0]
const localFile = arg[1]

request(url, (body) => {
  fs.writeFile(localFile, body, err => {
    if (err) {
      console.error(err)
      return
    }
  })
    console.log(`Downloaded and saved ${body.length} bytes to ${localFile}`)
})


