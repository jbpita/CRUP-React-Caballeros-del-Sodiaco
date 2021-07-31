import CrudTableRow from "./CrudTableRow";


const CrudTable = ({data , setDataToEdit , deleteData}) => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                            <tr>
                                <td colSpam="3">Sin Datos</td>
                            </tr>
                        ) : (
                            data.map(e => <CrudTableRow key={e.id} el={e} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                    )}                    
                </tbody>
            </table>
        </div>
    );
}

export default CrudTable;