import { useSearchParams } from "react-router-dom"
export default function Search() {
  const [text, setText] = useSearchParams();
  function handleSubmit(e){
    e.preventDefault();
    const data = text.get('q');
    alert(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText({ q: e.target.value })} />
        <button>search</button>
      </form>
    </>
  );
}