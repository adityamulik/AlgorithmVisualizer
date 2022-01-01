import BinarySearchTree from './Components/BinarySearchTree';
import D3 from './Components/D3';
import data from './data.json';

const App = () => {

  return (
    <div>
      <h1>Binary Search Tree</h1>  
      <D3 data={data} />
    </div>
  );
}

export default App;
