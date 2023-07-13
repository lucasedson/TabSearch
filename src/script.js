const makeSearchBox = () => {
    let taskBar = document.querySelector('#header > div.Header__HeaderItem-sc-1wu4agm-1.bPqwjc');
    let searchBox = document.createElement('div');
    searchBox.innerHTML = `
    <div class="searchBox">
        <input type="text" class="inputSearch" placeholder="Pesquisar no Google">
        <button class="btnSearch">Pesquisar</button>
    </div>

    <style>
        .searchBox{
            margin-left: 10px;
            margin-right: 10px;
            justify-self: start;
        }
        .btnSearch{

            border: none;
            border-radius: 5px;
            height: 30px;
            cursor: pointer;

        }
        .btnSearch:hover{
            background-color: #f1f1f1;
            color: black;
        }

        .inputSearch{
            outline: none;
            border: none;
            border-radius: 5px;
            height: 30px;
            width: 300px;

            padding-left: 10px;
        }
    </style>

    `;



    taskBar.appendChild(searchBox);

    const btnSearch = document.querySelector('.btnSearch');
    btnSearch.addEventListener('click', () => {

        window.open(`https://www.google.com/search?q=inurl%3A+"www.tabnews.com.br"+%2B+${document.querySelector('.inputSearch').value}`);
    })

    const inputSearch = document.querySelector('.inputSearch');
    inputSearch.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            window.open(`https://www.google.com/search?q=inurl%3A+"www.tabnews.com.br"+%2B+${document.querySelector('.inputSearch').value}`);
        }

    })
}

makeSearchBox();

homebtn = document.querySelector('#header > div:nth-child(1) > a')
homebtn.addEventListener('click', () => {
    window.location.replace('https://www.tabnews.com.br');
})



document.addEventListener('click', function (event) {
    if ((event.target.tagName === 'A' || event.target.className === 'Header')) {
        let link = event.target.href;
        window.location.replace(link);
        console.log(link);
    }
});