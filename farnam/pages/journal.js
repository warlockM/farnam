import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useRef } from "react";

export default function Journal(){
  const indexRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const stateRef = useRef();
  const contextRef = useRef();
  const problemRef = useRef();
  const variableRef = useRef();
  const complicationRef = useRef();
  const expectationRef = useRef();
  const rangeRef = useRef();
  const probablityRef = useRef();
  const outcomeRef = useRef();
  const reviewRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = indexRef.current.value;
    const date = dateRef.current.value;
    const time = timeRef.current.value;
    const state = stateRef.current.value;
    const context = contextRef.current.value;
    const problem_statement = problemRef.current.value;
    const variables = variableRef.current.value;
    const complications = complicationRef.current.value;
    const range_of_outcomes = rangeRef.current.value;
    const expectations = expectationRef.current.value;
    const probablity = probablityRef.current.value;
    const outcome = outcomeRef.current.value;
    const review_date = reviewRef.current.value;
    console.log(index, date, time, state, context, problem_statement, variables, complications, range_of_outcomes, expectations, probablity, outcome, review_date);
    const data = {
      index: index,
      date: date,
      time: time,
      state: state,
      context: context,
      problem_statement: problem_statement,
      variables: variables,
      complications: complications,
      range_of_outcomes: range_of_outcomes,
      expectations: expectations,
      probablity: probablity,
      outcome: outcome,
      review_date: review_date,
    };

    fetch('http://127.0.0.1:8000/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  }

    return (
      <div>
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 p-10 space-y-4">
            <input
              class="border-2 border-black p-2"
              type="number"
              placeholder="index"
              ref={indexRef}
            />
            <input
              class="border-2 border-black p-2"
              type="date"
              placeholder="date"
              ref={dateRef}
            />
            <input
              class="border-2 border-black p-2"
              type="time"
              placeholder="time"
              ref={timeRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="state"
              ref={stateRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="context"
              ref={contextRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="problem_statement"
              ref={problemRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="variables"
              ref={variableRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="complications"
              ref={complicationRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="range_of_outcomes"
              ref={rangeRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="expectations"
              ref={expectationRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="probablity"
              ref={probablityRef}
            />
            <input
              class="border-2 border-black p-2"
              type="text"
              placeholder="outcome"
              ref={outcomeRef}
            />
            <input
              class="border-2 border-black p-2"
              type="date"
              placeholder="review_date"
              ref={reviewRef}
            />
            <button class="bg-blue-500 text-white p-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
        <Footer />
      </div>
    );
}