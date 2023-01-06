// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//** */

// import React, { Component } from 'react';

// class MyClassComponent extends Component {
//   static defaultProps = {};

//   static propTypes = {};

//   render() {
//     return <div>Class Component</div>;
//   }
// }

//** */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 *       Анонімні колбеки
 *
 */

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button
//         type="button"
//         onClick={evt => {
//           console.log('Increment button was clicked!', evt); // працює
//           console.log('this.props: ', this.props); // працює
//         }}
//       >
//         Increment by {step}
//       </button>
//       <button
//         type="button"
//         onClick={evt => {
//           console.log('Decrement button was clicked!', evt); // працює
//           console.log('this.props: ', this.props); // працює
//         }}
//       >
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }
// }

/**
 *        Кастомні методи
 *
 * @param {*} evt
 */

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

// handleIncrement(evt) {
//   console.log('Increment button was clicked!', evt); // працює
//   // console.log('this.props: ', this.props); // Error: cannot read props of undefined
// }

// handleDecrement(evt) {
//   console.log('Decrement button was clicked!', evt); // працює
//   // console.log('this.props: ', this.props); // Error: cannot read props of undefined
// }

// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button type="button" onClick={this.handleIncrement}>
//         Increment by {step}
//       </button>
//       <button type="button" onClick={this.handleDecrement}>
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }
// }

/**
 * 
 *                        Прив'язка контексту

 * 
 */

/**         Прив'язка під час передачі колбека
 *
 * Уникайте прив'язки контексту у методі render(). Щоразу, коли компонент ререндериться,
 * Function.prototype.bind() повертає нову функцію і передає її вниз по дереву компонентів,
 * що призводить до повторного рендеру дочірніх компонентів.
 * За достатньої кількості це істотно впливає на продуктивність.
 *
 *       ❌ Погано
 */

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

// handleIncrement(evt) {
//   console.log('Increment button was clicked!', evt); // працює
//   console.log('this.props: ', this.props); // Error: cannot read props of undefined
// }

// handleDecrement(evt) {
//   console.log('Decrement button was clicked!', evt); // працює
//   console.log('this.props: ', this.props); // Error: cannot read props of undefined
// }

// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button type="button" onClick={this.handleIncrement.bind(this)}>
//         Increment by {step}
//       </button>
//       <button type="button" onClick={this.handleDecrement.bind(this)}>
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }
// }

/**
 *          Прив'язка в конструкторі
 *
 * Ще один спосіб прив'язати контекст – зробити це у конструкторі класу.
 * Якщо callback-функцій багато, можете уявити, наскільки великий може вийти конструктор.
 * - Конструктор виконується один раз, тому bind викликається один раз
 * - Методи класу записуються у властивість prototype функції-конструктора
 *
 *          ✅ Непогано
 */

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//   }

//   handleIncrement(evt) {
//     console.log('Increment button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // працює
//   }

//   handleDecrement(evt) {
//     console.log('Decrement button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // працює
//   }

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

/**
 *         Публічні властивості класу
 *
 * Незважаючи на те, що це рекомендований спосіб прив'язки контексту, синтаксис публічних полів класу ще не стандартизовано.
 * Але вони вже настільки широко використовуються, що навіть якщо будуть синтаксичні зміни, транспайлер Babel все зробить за нас.
 * Під час оголошення публічних полів класу, вони записуються не у властивість prototype функції-конструктора, а в об'єкт екземпляра.
 *
 *           ✅ Добре
 */

// class Counter extends Component {
// static defaultProps = {
//   step: 1,
// };

//   handleIncrement = evt => {
//     console.log('Increment button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // працює
//   };

//   handleDecrement = evt => {
//     console.log('Decrement button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // працює
//   };

// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button type="button" onClick={this.handleIncrement}>
//         Increment by {step}
//       </button>
//       <button type="button" onClick={this.handleDecrement}>
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }
// }

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   state = { value: 0 };

//   handleIncrement = () => {
//     this.setState((state, props) => ({
//       value: state.value + props.step,
//     }));
//     console.log(this.state);
//   };

//   handleDecrement = () => {
//     this.setState((state, props) => ({
//       value: state.value - props.step,
//     }));
//     console.log(this.state);
//   };

//   render() {
//     const { step } = this.props;
//     const { st } = this.state;

//     return (
//       <div>
//         <span>{st}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter step={5} />, document.getElementById('root'));

/**
 *                    Форми
 */

/**
 *    Неконтрольовані елементи
 */
// class LoginForm extends Component {
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const login = form.elements.login.value;
//     const password = form.elements.password.value;
//     console.log(login, password);
//     this.props.onSubmit({ login, password });
//     form.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="login" />
//         <input type="password" name="password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginForm onSubmit={values => console.log(values)} />,
//   document.getElementById('root')
// );

/**
 *    Kонтрольовані елементи
 */
// class App extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleChange = evt => {
//     this.setState({ inputValue: evt.target.value });
//   };

//   render() {
//     const { inputValue } = this.state;
//     console.log(inputValue);
//     return (
//       <>
//         <input type="text" value={inputValue} onChange={this.handleChange} />
//         <span>{inputValue}</span>
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

/**
 *            Складні форми
 */
// class SignUpForm extends Component {
//   state = {
//     login: '',
//   };

//   // Відповідає за оновлення стану
//   handleChange = e => {
//     this.setState({ login: e.target.value });
//   };

//   // Викликається під час відправлення форми
//   handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(`Signed up as: ${this.state.login}`);

//     // Проп, який передається формі для виклику під час сабміту
//     this.props.onSubmit({ ...this.state });
//   };

//   render() {
//     const { login } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <SignUpForm onSubmit={values => console.log(values)} />,
//   document.getElementById('root')
// );

/**
 *  Додамо поля для email і password, а заразом використаємо дуже корисний патерн для callback-функції, що передається в onChange.
 */
// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
// };

// class SignUpForm extends React.Component {
//   state = { ...INITIAL_STATE };

//   // Для всіх інпутів створюємо один обробник
//   // Розрізняти інпути будемо за атрибутом name
//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { login, email, password } = this.state;
//     console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { login, email, password } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <SignUpForm onSubmit={values => console.log(values)} />,
//   document.getElementById('root')
// );

/**
 *            Чекбокси
 *
 *
 */
// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
//   agreed: false,
// };

// class SignUpForm extends React.Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   handleChange = evt => {
//     const { name, value, type, checked } = evt.target;
//     // Якщо тип елемента – checkbox, беремо значення checked,
//     // в іншому випадку – value
//     this.setState({ [name]: type === 'checkbox' ? checked : value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { login, email, password, agreed } = this.state;
//     console.log(
//       `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
//     );

//     /* ... */
//   };

//   render() {
//     const { login, email, password, agreed } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Agree to terms
//           <input
//             type="checkbox"
//             checked={agreed}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit" disabled={!agreed}>
//           Sign up as {login}
//         </button>
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <SignUpForm onSubmit={values => console.log(values)} />,
//   document.getElementById('root')
// );

/**
 *           Радіокнопки
 *
 */
// const Gender = {
//   MALE: 'male',
//   FEMALE: 'female',
// };

// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
//   agreed: false,
//   gender: null,
// };

// class SignUpForm extends React.Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   handleChange = evt => {
//     const { name, value, type, checked } = evt.target;
//     // Якщо тип елемента – checkbox, беремо значення checked,
//     // в іншому випадку – value
//     this.setState({ [name]: type === 'checkbox' ? checked : value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { login, email, password, agreed } = this.state;
//     console.log(
//       `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
//     );

//     /* ... */
//   };

//   render() {
//     const { login, email, password, agreed, gender } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>

//         <section>
//           <h2>Choose your gender</h2>
//           <label>
//             Male
//             <input
//               type="radio"
//               checked={gender === Gender.MALE}
//               name="gender"
//               value={Gender.MALE}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Female
//             <input
//               type="radio"
//               checked={gender === Gender.FEMALE}
//               name="gender"
//               value={Gender.FEMALE}
//               onChange={this.handleChange}
//             />
//           </label>
//         </section>

//         <button type="submit" disabled={!agreed}>
//           Sign up as {login}
//         </button>
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <SignUpForm onSubmit={values => console.log(values)} />,
//   document.getElementById('root')
// );

/**
 *               Селект
 */
const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};
const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

class SignUpForm extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );

    /* ... */
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
ReactDOM.render(
  <SignUpForm onSubmit={values => console.log(values)} />,
  document.getElementById('root')
);
