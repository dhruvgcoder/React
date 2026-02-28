import Card from './components/Card'

function App(){
return (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
    <Card company="Amazon" time="5 days ago" />
    <Card company="Netflix" time="3 days ago" />
    <Card company="Google" time="2 days ago" />
    
  </div>
)
}

export default App