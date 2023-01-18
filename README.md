            Chapter-06 Exploring the World

\1) What is Microservice?

`         `Nowadays Big companies/startup are using a microservice architecture. Microsevice architecture means our app will divide into a many projects like Suppose for UI we use React, for Backend we use Java, for authentication we use python and last we combine all this project using port number and create our app. 

`        `So suppose we have to change the button in UI so we don’t want to deploy our all app we just have to deploy our UI project. So it is easy to maintain compare to the monolith architecture.

\2) What is Monolith architecture?

`         `We don’t have to divide our projects like microservice was doing, we create our all app in one single project. Like in single project we will have UI, API, Authentication. So it is difficult to maintain.

\3) Why we do need useEffect hook?

`          `Suppose we are fetching some data, In react every time the component is render whenevrer we changes the some text, button the component will re-render so our API will also re-render and we don’t want that because it will consume more time. So we want that our component render first then it fetch the API so for this we are using useEffect hook. 

\4) What is optional chaining?

`         `The optional chaining operators accesses an object property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

\5) What is shimmer UI?

`         `Shimmer UI paints a view that may be similar to the acutual data to be rendered on the screen while the data is available.

\6) What is the difference between a JS expression and JS statement?

`         `An expression is bit of JS code that produces a values. 

- For Example, 1---->produce 1, 
- “hello” -----> produces hello,
- 5 \* 10 -------> produces 50,
- Num > 100 ----> produces either true or false

`        `A JS program is a sequence of statement. Each statement is an instruction for the computer to do something. 

`                `Example – let Num=5;

`                                    `If ( Num >5) {      

`                                                           `// some statement 

`                                                                  `}

\7) What is a conditional rendering, explain with a code example?

`          `If we want that our component will often need to display different things depending on different condition. In react, we can use conditionally render JSX using JS syntax like if statement, &&, and ? : operator.

<div className="body">

`        `{searchrestaurant.length > 0 ? (

`          `searchrestaurant.map((rest) => {

`            `//console.log(rest);

`            `return <RestaurantCard {...rest.data} key={rest.data.id} />;

`          `})

`        `) : (

`          `<h1>Not Found</h1>

`        `)}

`      `</div>

\8) What is async and await?

`         `The async keyword turns a method into an async method, which allows you to use the await keyword in its body. Async function returns a promise. This promise state can be either resolved or rejected. Await suspense the called function until the promise returns a result for that execution.

\9) What is the use of const json=await data.json(); in getRestaurant?

`         `The const json=await data.json(); will covert our file in json so we can read that file properly.

\10) What is CORS?

`          `Cross-origin resources sharing is a browser mechanism which enables controlled access to resources located outside of a given domain.                                   

