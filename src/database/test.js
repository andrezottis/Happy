const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        name: "Lar das Meninas",
        lat: "-30.0428422",
        lng:"-51.2221605",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "559999999",
        images: [
            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595803330237-83a3a8698450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })
    
   
    //consultar dados na tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    

    //consultar so um orfanato pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
    //console.log(orphanage)

    //deletar dados
   // console.log(await db.run('DELETE FROM orphanages where id ="5"'))
});