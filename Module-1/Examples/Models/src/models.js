
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

// ===============================HANDLE STATE=====================================================
  // class App extends Component {
  //   constructor() {
  //     super()
  //     this.state = {
  //       color: 'green'
  //     }
  //   }
  //   render () {
  //     return (
  //       <div>
  //         <Square color={this.state.color}/>
  //         {['red','green','blue'].map((color)=> (
  //           <Button key={color} handleClick={()=> this.setState({color})}>{color}</Button>
  //         ))}
  //       </div>
  //     )
  //   }
  // }
// ===============================HANDLE STATE=====================================================

// ===============================COMPONENT-DIDMOUNT / COMPONENT-WILL-UNMOUNT=====================================================
  //COMPONENTDIDMOUNT: É usado quando o componente ainda nao foi criado no dom
  //COMPONENTWILLUNMOUNT: É usado quando o componente foi retirado do dom, sumiu
  //
  // class Timer extends Component {
  //   constructor() {
  //     super()
  //     this.state = {
  //       timer: 0
  //     }

  //     this.timer;
  //   }

  //   componentDidMount() {
  //     this.timer = setInterval(()=>{
  //         this.setState({
  //           timer: this.state.timer + 1
  //         })
  //       },1000)
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.timer)
  //   }
  //   render () {
  //     return <div>timer: {this.state.timer}</div>
  //   }
  // }

  // export default Timer
// ===============================COMPONENT-DIDMOUNT / COMPONENT-WILL-UNMOUNT=====================================================

// ===============================COMPONENT-WILL-RECEIVE-PROPS=====================================================
  //É executado quando alguma propriedade do componente se altera, como parametro ele traz o novo valor da propriedade
  // 
  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps', this.props,nextProps);
  // }
// ===============================COMPONENT-WILL-RECEIVE-PROPS=====================================================

// ===============================SHOULD-UPDATE-COMPONENT=====================================================
  // É executado toda a vez que o componente é renderizado, normalmente é usado para verificar se o componenente
  // deve ser atualizado ou não (true ou false)
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //    console.log('Entrou no Should');
  //    return true
  //  }

// ===============================SHOULD-UPDATE-COMPONENT=====================================================

// ===============================COMPONENT-WILL-UPDATE=====================================================
  // É executado logo antes do componente atualizar e renderizar
  //  componentWillUpdate(nextProps, nextState) {
  //    console.log('Entrou no WillUpdate');
  //  }
// ===============================COMPONENT-WILL-UPDATE=====================================================

// ===============================COMPONENT-DID-UPDATE=====================================================
  // Ele é executado quando o componente acabou de atualizar, recebe as propriedades antes da atualização e seu status
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('Entrou no DidUpdate');
  // }
// ===============================COMPONENT-DID-UPDATE=====================================================


// =============================== VERIFICAÇÃO PARA MOSTRAR COMPONENTE=====================================================
  // Se a primeira condição for verdadeira, ele executa a segunda
  //{this.state.showTimer && <Timer />}
// =============================== VERIFICAÇÃO PARA MOSTRAR COMPONENTE=====================================================

// ===================================================== PROP TYPES =====================================================
  // É usada para definir os tipos das props, e requerir elas, precisa importar o component prop-types
  // Button.propTypes = {
  //   handleClick: PropTypes.func.isRequired
  // }
// ===================================================== PROP TYPES =====================================================

// ===================================================== FORM - INPUT SETANDO VALUE =====================================================
  //O input é um elemento controlado, ou seja, quando é setado um value pra ele, ele nao deixa você altera-lo
  // por isso nesse caso é preciso usar o metodo onChange, pra permitir a alteração.
  //
  // render () {
  //   return (
  //     <div>
  //       <form>
  //         <input type='text' value={this.state.value} onChange={
  //             (e)=> {
  //               console.log(e)
  //               this.setState({
  //                 value: e.target.value
  //               })
  //             }
  //         }/>
  //       </form>
  //     </div>
  //   )
  // }
// ===================================================== FORM - INPUT SETANDO VALUE =====================================================

// ===================================================== FORM - CHECKBOX  =====================================================
  //Na forma controlada
  //
  //<label>
  //  <input type='checkbox' checked={this.state.checked} onChange={(e)=>{
  //  this.setState({ checked: e.target.checked })
  //  }}/>
  //  Checkbox
  //</label> 
  //
  // Na forma não controlada
  //
  // <label>
  //   <input type='checkbox' defaultChecked = {true}/>
  //   Checkbox
  // </label>
// ===================================================== FORM - CHECKBOX  =====================================================

// ===================================================== FORM - SELECT  =====================================================
  // <form>
  //  <select value={this.state.value} onChange={(e)=>{
  //    this.setState({value: e.target.value})
  //  }}>
  //    <option value='1'> Opção 1 </option>
  //    <option value='2'> Opção 2 </option>
  //    <option value='3'> Opção 3 </option>
  //  </select>
  //</form> 
// ===================================================== FORM - SELECT  =====================================================

// ===================================================== FORM - TEXTAREA  =====================================================
  //Não controlado
  //<form>
  //  <textarea defaultValue='ola'/>
  //</form>
  //
  //Controlado
  //
  // <form>
  //   <textarea value={this.state.value} onChange={(e)=>{
  //     this.setState({value: e.target.value})
  //   }}/>
  // </form>
// ===================================================== FORM - TEXTAREA  =====================================================

// ===================================================== FORM - EVENTOS  =====================================================
  // No onChange do form, ele pega qualquer elemento que estiver dentro dele, o 'E' vira o elemento que vc está mudando
  //
  //<form 
  // onSubmit={(e)=>{
  //    e.preventDefault();
  //    console.log('event',e)
  //  }}
  //  onChange={(e)=>{
  //    console.log('name: ',e.target.name)
  //   console.log('value: ',e.target.value)
  //  }}
  //  >
  //  <input type='name' name='name'/>
  //  <input type='email' name='email'/>        
  //  <button type='submit'>Enviar</button>
  //</form>
// ===================================================== FORM - EVENTOS  =====================================================

// ===================================================== SET STATE - CALLBACK  =====================================================
  //O Set State tem uma função de callback, que pode ser usada quando vc quiser pegar o valor exato que acabou de ser mudado
  //
  // <input 
  //  type='checkbox' 
  //  checked={this.state.checked} 
  //  onChange={()=>{
  //    this.setState({checked: !this.state.checked}, ()=>{
  //      this.setState({showContent: this.state.checked})
  //    })
  //  }} 
  ///>
// ===================================================== SET STATE - CALLBACK  =====================================================
