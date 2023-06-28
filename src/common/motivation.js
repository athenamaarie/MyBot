const motivationMessages = [
    'abc',
    '123',
    'def',
    '456'
]

async function main(){
    return motivationMessages[Math.floor(Math.random()*motivationMessages.length)].toString();
}

module.exports = {main}