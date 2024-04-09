import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Label from './components/Label'
import ReferenceTable from './components/ReferenceTable'
import { IMCResult, calculateIMC } from './lib/IMC'
import React from 'react'
import ResultsTable from './components/ResultsTable'
import Titulo from './components/Titulo'

function App() {

  const[IMCData, setIMCData] = React.useState<null | {
    weight: number;
    height: number;
    IMC: number;
    IMCResult: string
  }>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    
    const data = Object.fromEntries(formData) as {weight: string, height: string}

    const { weight, height } = data

    if(!weight || !height){
      alert("Ops... você precisa preencher todos os campos")
      return
    }

    const weightNumber = parseFloat(weight.replace(',','.'))
    const heightNumber = parseFloat(height.replace(',','.'))/100;

    if(isNaN(weightNumber) || isNaN(heightNumber)){
      alert("Ops... você precisa preencher os campos com números validos") 
      return
    }

    if(weightNumber < 2 || weightNumber > 500){
      alert("Ops... o seu peso precisa ser maior que 2 kg e menor que 500 kg") 
    }

    if(heightNumber < 0.5 || heightNumber > 2.5){
      alert("Ops... a sua altura precisa ser maior que 0,5 cm e menor que 2,5 cm") 
    }

    const IMC = calculateIMC(weightNumber, heightNumber)

    const IMCResultString = IMCResult(IMC)

    setIMCData(
     { weight: weightNumber,
      height: heightNumber,
      IMC: IMC,
      IMCResult: IMCResultString}
      )

      e.currentTarget.reset()

  }
  
  function handleClickReset(e : React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    setIMCData(null)
  }

  return (
   <main className='bg-white max-w-7xl mx-auto md:py-10 md:px-48 px-5 py-10'>

    <Titulo/>

    <section id='form'>

    <form onSubmit={handleSubmit}>
      <div>
      <Label htmlFor='weight'> Peso (kg)</Label>
      <Input disabled={!!IMCData} className='mt-1' type="text" id='weight' name='weight' />
      </div>
      <div className='mt-4'>
      <Label htmlFor='height'> Altura (cm)</Label>
      <Input disabled={!!IMCData} className='mt-1' type="text" id='height' name='height' />
      </div>
      {IMCData? (<Button onClick={handleClickReset}>Refazer</Button>): (<Button type='submit'>Calcular</Button>)}
    </form>

    </section>

    <section id='result' className='py-10 px-4 h-40'>
    {IMCData ? (

    <ResultsTable IMCData={IMCData}/>
    
    ) : 
    (
      <p className='text-center text-neutral-400 text-xl'>Saiba agora se está no seu peso ideal !</p>
    )}
   
    </section>

    <section id='reference-table'>
    <ReferenceTable/>
    </section>


   </main>
  ) 
  
 

 
}

export default App
