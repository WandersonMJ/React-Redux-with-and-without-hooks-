 import React, { useState} from 'react';
 import { useSelector, useDispatch } from 'react-redux';

 // import { Container } from './styles';

 function addValueAction(title) {
     return { type: 'ADD_VALUE', title}
 }
 
 export default function ListHooks() {
     const [qty, setQty] = useState(2);

     const values = useSelector( state => state.demonstrationHooks.data );
     const dispatch = useDispatch();

     function addValue(){
        const a = qty + 1;
        setQty(a);
         dispatch(addValueAction(`Valor ${a}`))
     }

   return (
    <>
        <strong>Redux with hooks</strong>
        <ul>
            {values.map(value => <li key={value}>{value}</li>)}
        </ul>
        <button type="button" onClick={addValue}>Adicionar</button>
    </>
   );
 }
 