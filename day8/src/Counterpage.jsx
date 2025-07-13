export function Counter({func, name}){
    return <>
    <button onClick={func}>{name}</button>
    </>
}