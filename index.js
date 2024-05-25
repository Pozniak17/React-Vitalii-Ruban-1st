const user = { name: "Vitalii" };

function App(props) {
  return <h2 className="green">Hello - {props.user.name}</h2>;
}

<App user={user} />;

// ===> Hello Vitalii

//* THIS IS NOT AN HTML - JSX (JavaScript XML)
<h2 className="green">Hello - {props.user.name}</h2>;

//* JSX - JUST A SYNTAX SUGAR
//* ==> в це перетворюється JSX в JavaScript
function a() {
  return r.jsxs("h2", {
    children: [' className="green" Hello - ', 1, " "],
  });
}

//! ПРИНЦИПИ REACT
// VIEW IS DERIVATIVE OF YOUR DATA - НАШ UI Є ФУНКЦІЯ ВІД НАШИХ ДАНИХ
function App(props) {
  return <h2 className="green">Hello - {props.userName}</h2>;
}

// TO CHANGE THE VIEW - CHANGE THE DATA
//* було
document.querySelector(".green").innerText = "Anna"; //знаходимо селектор з классом 'green' і присвоюємо йому нове ім'я 'Anna'
//* ==> стало
setState({ userName: "Anna" });

// DECLARATIVE OVER IMPERATIVE === ДЕКЛАРАТИВНІСТЬ
//? IMPERATIVE
const form = document.createElement("form"); //зроби мені форму
form.action = "/submit"; // зроби сабміт
const header = document.createElement("h1"); //зроби мені хедер
header.innerText = "Submit my email"; //постав мені текст "Submit my email"
form.insertAdjacentElement("afterbegin", header); //тепер в мою форму постав цей хедер

//? DECLARATIVE - ДОБРЕ РОЗУМІННЯ КОДУ
<form action="/submit">
  <h1>Submit my email</h1>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" />
  <button>Submit</button>
</form>;

//* BASED ON COMPONENTS - БАЗУЄТЬСЯ НА КОМПОНЕНТАХ
// ANGULAR
@Component({
  selector: "my-component",
  template: `<h1>Yes, I am component</h1>`,
})
export class MyComponent {}

// REACT WAY
const MyComponent = () => <h1>Yes, I am a component</h1>;
