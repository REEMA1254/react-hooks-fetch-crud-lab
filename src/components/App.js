import React, {  useEffect,useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

useEffect(()=> {
 fetch("/QuestionForm ")
 .then(r => r.json())
 .then( data => setquestions (data.QuestionForm))
},[id])
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
