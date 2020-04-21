exports.formularioNuevaVacante = (req, res) => {
    res.render('nueva-vacante',{
        pageName: 'Nueva Vacante',
        tagline: 'Llena el formulario y publica tu vacante'
    })
}