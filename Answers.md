# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a library used to create single page web apps. It makes the web pages dynamic easily by creating virtual DOM (using React elemnts(JSX), components, states and hooks), and the virtual DOM interacts with actual DOM.

1. Describe component state.
Component is a function of React that renders a small part of a web page and are building blocks of React applications. A web page is composed of several components. A state is data displayed by a component. This data either comes through props or is stored locally.

1. Describe props.
Props is an object(helper) used to get  and store data in a state.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
Side effects are something that can cause a component to return a different output for the same state and props. React offers us tools for managing side effects so we can avoid bugs and inconsistencies in our app. The effect hook (useEffect()) is used to run side effects. And second argument to useEffect is used to sync the execution of the effect to a list of states/props. Whenever any state/prop specified in this list changes, only then the side effect code will be run.
