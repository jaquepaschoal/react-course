
// ===============================RENDERIZANDO COMPONENTE=====================================================

//------------------- função pura ----------------------------
  // const Title = (props) =>(
  //   <h1>Ola {`${props.name} ${props.lastname}`}</h1>
  // )

  // Title.defaultProps = {
  //   name:'Desconhecido',
  //   lastname: 'Sem sobrenome'
  // }
//------------------------------------------------------------

//------------------- create class ----------------------------
  // const Title = createReactClass({
  //   getDefaultProps: function() {
  //     return {
  // name:'Desconhecido',
  // lastName: 'Sem sobrenome'
  //     }
  //   },
  //   render: function() {
  //     return (
  //      <h1>Olá {this.props.name + ' '+ this.props.lastName}</h1>
  //     )
  //   }
  // })
//------------------------------------------------------------

//---------------------- class ----------------------------
  // class Title extends React.Component {
  //   render() {
  //     return (
  //       <h1 >Olá {this.props.name}</h1>
  //     )
  //   }
  // }
//------------------------------------------------------------

// ===============================RENDERIZANDO COMPONENTE=====================================================

// ===============================ADICIONANDO STYLE=====================================================
  // const square = ({color} ) => (
    //   <div style={{
    //     backgroundColor: color,
    //     height: '100px',
    //     width: '100px',
    //   }}/>
    // )
// ===============================ADICIONANDO STYLE=====================================================

// ===============================PROP KEY=====================================================
  // É necessario em todo loop
  // const App = () =>(
  //   <div>
  //     {['blue','red','green'].map((square)=> (
  //       <Square key={square} color = {square} />
  //     ))}
  //   </div>
  // )
// ===============================PROP KEY=====================================================

// ===============================EVENTOS=====================================================
  // const App = () =>(
  //   <div onClick={(e) =>{alert('clicou');}}>
  //       <Square  />
  //   </div>
  // )
// ===============================EVENTOS=====================================================

// ===============================CHILDREN=====================================================
  // const Button = ({children}) => (
  //   <button>{children}</button>
  // ) 
// ===============================CHILDREN=====================================================

// ===============================STATE=====================================================
  // Esta propriedade só pode ser usado quando o elemento é renderizado por class ou component
  // A vantagem do state é que você pode mudar ele, lembrando que só pode mudar usando a função setState
  // class App extends Component {
  //   constructor () {
  //     super()
  //     this.state = {
  //       text: 'Fernando'
  //     }
  //   }
  
  //   render () {
  //     return (
  //       <div onClick={()=> this.setState({
  //         text: 'Outro texto'
  //       })} >
  //         {this.state.text}
  //       </div>
  //     )
  //   }
  // }
// ===============================STATE=====================================================
