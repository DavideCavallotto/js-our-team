const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },
]

console.log(team)


for (let i = 0; i < team.length; i++) {
    const membroCorrente = team[i] 
    const informazioniMembro = `nome: ${membroCorrente.nome} ruolo: ${membroCorrente.ruolo} immagine: ${membroCorrente.img}`
    console.log(informazioniMembro)
    
    // const htmlString = `<div class="members">${informazioniMembro}</div>`
    const htmlString = `
    <div class="col-4">
        <div class="card" style="width: 100%;">
            <img src="./img/${membroCorrente.img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${membroCorrente.nome}</h5>
                <p class="card-text">${membroCorrente.ruolo}</p>                
            </div>
        </div>
    </div>
    `
    console.log(htmlString);
    const myTeam = document.querySelector('.row')
    console.log(myTeam)

    myTeam.innerHTML += htmlString
    
}
