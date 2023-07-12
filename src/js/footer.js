/*
    Footer rendering method like React Propeties

*/

export default function Footer(Foot){

    const author_name = 'Waren Gador',
          author_kodego_unit = 'WD47P',
          project_name = 'API JSON vanilla JS';

    Foot.innerHTML = (
        `
            <div>
                <p>
                    Name: ${author_name} <br>
                    Unit: ${author_kodego_unit} <br>
                    Project: ${project_name}
                </p>
            </div>
        `
        )
 
}