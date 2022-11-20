import { useState, useEffect } from 'react';
import styles from './Local.module.css'



function ClienteTeste () {
   const [locador, setLocador] = useState([]);

   useEffect(() => {
      fetch('https://localhost:7193/api/locador',{
         method: 'GET',
         headers:{
            'Content-Type': 'application/json',
         },
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setLocador(data);
         })
         .catch((err) => {
            console.log(err.message);
         })
   }, []);

   return (
      <div className={styles.details_container}>
              {locador}
      </div>
    /*{cliente.map((cliente) => (
      <LocalCard
        id={cliente.id}
        name={cliente.name}
        budget={cliente.budget}
        category={cliente.category.name}
        key={cliente.id}
        handleRemove={removecliente}
      />
    ))}*/
    // ... consume here
   );
};



export default ClienteTeste
