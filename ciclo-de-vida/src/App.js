import React, {useState, useEffect} from "react"; // Dois hooks

function Contador(){
  const[contador, setContador] = useState(0);

  // useEffect com array de dependências vazio;
  // Comportamentos será parecido com ComponentDidMount (montagem)
  // useEffect (chamada de função, [] array de dependências)
  useEffect(() => {
    console.log("Componente Montado!")
  }, []);

// useEffect com dependência -> da variável de estado 'contador'
// Agirá similar ao componentDidMount e componentDidUpdate
useEffect(() => {
  document.title = `Contagem ${contador}`;
  console.log("Componente atualizado ou montado. Novo valor do contador")

  // Retorno da fução (função de limpeza)
  // Comportamento similar ao componentWillUnmount (desmontagem)
  return() => {
    console.log("Função de limpeza executada. O contador será removido")
    }
  }, [contador]);

  const incrementar = () =>{
    setContador(contador+1);
  };
  return(
    <div>
      <h2>Ciclo de Vida</h2>
      <p>O contador está em: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
export default Contador;
