exports.mostrarTrabajos = (req, res) =>{
    res.render('home', {
        pageName: 'Inicio',
        tagline: 'Encuentra y publica trabajos para desarrolladores Web',
        barra: true,
        boton: true
    })
}