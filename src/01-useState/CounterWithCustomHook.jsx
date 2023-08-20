import { useCounter } from '../Hooks/useCounter'


export const CounterWithCustomHook = () => {
  
    const { counter } = useCounter();
  
    return (

    <> 
    <h1>Counter Custom Hook: { counter } </h1>
    <hr/>

    <button className="btn btn-primary"> +1 </button>
    <button className="btn btn-secondary">Reset</button>
    <button className="btn btn-success"> -1 </button>

    </>

  )
}

