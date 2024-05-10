const Box = props => {
  //  Write your code here.
  const {className, text} = props
  return <h1 className={'${className}'}>{text}</h1>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Boxes</h1>
    <div className='card-container'>
      <Box className='small' text='Small' />
      <Box className='medium' text='Medium' />
      <Box className='large' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
