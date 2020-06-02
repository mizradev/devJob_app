module.exports = {
    seleccionarSkills: (seleccionados = [], opciones) => {
        const skills = ['HTML5','CSS3','REACTJS', 'VUEJS', 'MVC',
        'ORM', 'DJANGO','MONGOOSE', 'SQL', 'WORDPRESS','SASS','Node'
        ,'PHP', 'GraphQL'];
        let html = '';
        skills.forEach( skill => {
            html += `<li>${skill}</li>`;
        } );
        return opciones.fn().html = html;
    }
}