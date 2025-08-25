import React from 'react'

const App = () => <div><Foo/><Baz/></div>
const Foo = () => <span><Bar/></span>
const Bar = () => <span>Bar</span>
const Baz = () => <span>Baz</span>

console.log(<Foo/>)

// const App = () => ({
//   $$typeof: Symbol.for('react.element'),
//   props: {
//     children: [{ 
//       $$typeof: Symbol.for('react.element'),
//       props: {
//         children: {
//           $$typeof: Symbol.for('react.element'),
//           props: { children: 'Bar' },
//           ref: null,
//           type: 'span'
//         },
//       },
//       ref: null,
//       type: 'span',
//     }, {
//       $$typeof: Symbol.for('react.element'),
//       props: { children: 'Baz' },
//       ref: null,
//       type: 'span',
//     }],
//   },
//   ref: null,
//   type: 'div',
// })

export default App