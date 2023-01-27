// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

/**
 *           Хук useState
 */
// import { useState } from 'react';

// export const App = () => {
//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       {value}
//       <button type="button" onClick={() => setValue(value + 1)}>
//         Increment value by 1
//       </button>
//     </div>
//   );
// };

/**
 *               Хук useEffect
 */

/**
 *        Example 1
 */
// import { useState, useEffect } from 'react';

// export const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${value} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {value} times</p>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </div>
//   );
// };

/**
 *        Example 2
 *        Аналог componentDidMount
 */
// import { useState, useEffect } from 'react';
// export const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('Mouting phase: same when componentDidMount runs');
//   }, []);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

/**
 *        Example 3
 *        Аналог componentDidUpdate
 */
// import { useState, useEffect } from 'react';
// export const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log(value);
//     console.log(`Updating phase ${value}: same when componentDidUpdate runs`);
//   }, [value]);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

/**
 *           Example 4
 *          Список залежностей
 */
// import { useState, useEffect } from 'react';
// export const App = () => {
//   const [firstValue, setFirstValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(0);

//   // ❌ Погано. ESLint покаже попередження
//   //   useEffect(() => {
//   //     console.log(firstValue + secondValue);
//   //   }, [firstValue]);

//   // ✅ Добре. Вказані всі залежності, що використовуються всередині ефекту
//   useEffect(() => {
//     console.log(firstValue + secondValue);
//   }, [firstValue, secondValue]);

//   return (
//     <>
//       <button onClick={() => setFirstValue(firstValue + 1)}>
//         First: {firstValue}
//       </button>
//       <button onClick={() => setSecondValue(secondValue + 1)}>
//         Second: {secondValue}
//       </button>
//     </>
//   );
// };

/**
 *           Example 5
 *          Аналог componentWillUnmount
 */
// import { useEffect } from 'react';
// export const App = () => {
//   useEffect(() => {
//     console.log('Mounting phase: same when componentDidMount runs');

//     return () => {
//       console.log('Unmounting phase: same when componentWillUnmount runs');
//     };
//   }, []);

//   return null;
// };

/**
 *           Example 6
 *
 */
import { useEffect, useRef } from 'react';

export const App = () => {
  const valueRef = useRef(0);

  useEffect(() => {
    // Виконається лише один раз під час монтування.
    // Наступні оновлення значення рефа не
    // викличуть оновлення компонента
    console.log(valueRef.current);
  });

  const handleClick = () => {
    valueRef.current += 1;
    console.log(valueRef.current);
  };

  return <button onClick={handleClick}>Click to update ref value</button>;
};
