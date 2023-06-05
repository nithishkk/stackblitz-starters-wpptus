import React from "react";
import "./style.css";
const data = [
  { id: 1, name: "nithish" },
  { id: 2, name: "megana" }
];
export default function App() {
  const ListItem=[]
  for (let i = 0; i < data.length; i++) {
    ListItem.push(<li key={data[i].id}>{data[i].name}</li>);
  }
// for (const i =0 ;i<data.length;i++){
//   // ListItem.push(<li key={data[i].id>{data[i].name}</li>);
//   ListItem.push(<li key={data[i].id}>{data[i].name}</li>);
// }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :){ListItem}</p>
    </div>
  );
}
