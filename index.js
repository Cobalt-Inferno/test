var Fuse = require('fuse.js')
var data = ('./data.json')
const main = document.querySelector('main')


let _render = "";


const opts = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    keys: [
        'title'
    ]
};

const render = (link, title) => {
    _render += `<div><a href="${link}">${title}</a></div><br>`
}

const fuse = new Fuse(data, opts)
function perform_search() {
    var search = fuse.search(document.getElementById('input'))
    for (let i = 0; search[i]; i++) {
        console.log(search[i].item.url)
        render(search[i].item.url, search[i].item.title)
    }
    main.innerHTML = render
}
document.getElementById('btn').onclick = perform_search;
console.log(_render)
