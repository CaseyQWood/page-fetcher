const fs = require('fs')

const content = 'Some content!'

fs.writeFile('./index.html', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})