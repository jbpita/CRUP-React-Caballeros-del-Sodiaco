import React, {useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andrómeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
    },
]

export default function CrudApp(){

    const [db,setDb] = useState(initialDb);
    const [dataToEdit,setDataToEdit] = useState(null);

    /*Va a crear un nuevo registro en nuestra base de Datos*/
    const createData = (data) => {
        data.id = Date.now();
        setDb([...db,data]);
        console.log(db);
    }

    /*Va a actualizar nuestra base de datos */
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);

    }

    /*Va a eliminar un registro de nuestra Base de Datos*/
    const deleteData = (id) => {
        let isDelete = window.confirm(`Estas Seguro de Eliminar el registro con el id:'${id}'`);

        if(isDelete){
            let newData = db.filter(el => el.id !==  id);
            setDb(newData);
        } else {
            return; 
        }
    }

    return (
        <div> 
            <h2 className="centrar">CRUD APP</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
            </article>
        </div>
    );
} 