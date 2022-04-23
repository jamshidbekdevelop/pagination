// import Posts from "./Componets/Posts";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       {/* <h1>Hello CodeSandbox</h1>
//       <hr />

//       <Posts /> */}
      
//     </div>
//   );
// }
import React from "react";
import "./styles.css";
import { Pagination } from "./App.test";
// import { favorit } from "./mock";

export default function App() {
  // const [page, setPage] = useState(1);
  // const ay = favorit.length
  return (
    <div className="App">
      <Pagination  />
    </div>
  );
}
