
import './App.css'

function App() {
  return (
   <main className='bg-white max-x-4xl mx-auto py-24 px-48'>

    <section id='form'>

    <form>
      <div>
        <label htmlFor="weight" className='block text-neutral-600 font-light text-sm'>Peso (kg)</label>
        <input type="text" id='weight' className='block w-full border border-rose-400 rounded p-3' />
      </div>
      <div>
        <label htmlFor="height" className='block text-neutral-600 font-light text-sm'>Altura (cm)</label>
        <input type="text" id='height' className='block w-full border border-rose-400 rounded p-3'/>
      </div>
      <button className='mt-6 bg-rose-400 text-white font-bold w-full p-3 rounded '>
        Calcular
      </button>
    </form>

    </section>

    <section id='result' className='py-10 px-4 h-40'>
    <p className='text-center text-neutral-400 text-xl'>Saiba agora se está no seu peso ideal !</p>
    </section>

    <section id='reference-table'>
    <table className='mx-auto text-neutral-600 text-left'>
      <thead className='bg-zinc-100 text-rose-400 '>
        <tr>
          <th className='px-6 py-2'>IMC</th>
          <th className='px-6 py-2'>Classificação</th>
        </tr>
      </thead>

      {/* Estiliza as linhas pares para o fundo zinc-100 e impares com white e estiliza os espaçamentos dos tr e dos tds */}
      <tbody 
      className='[&>tr:nth-child(even)]:bg-zinc-100 
      [&>tr:nth-child(odd)]:bg-white
      [&>tr>td]:px-6 [&>tr>td]:py-1
      '>

      <tr>
        <td>Menos de 17</td>
        <td>Muito abaixo do peso</td>
      </tr>

      <tr>
        <td>17 e 18,49</td>
        <td>Abaixo do peso</td>
      </tr>

      <tr>
        <td>18,5 e 24,99</td>
        <td>Peso normal</td>
      </tr>

      <tr>
        <td>25 e 29,99</td>
        <td>Acima do peso</td>
      </tr>
      
      <tr>
        <td>30 e 34,99</td>
        <td>Obesidade I</td>
      </tr>

      <tr>
        <td>35 e 39,99</td>
        <td>Obesidade II (severa)</td>
      </tr>

      <tr>
        <td>Acima de 40</td>
        <td>Obesidade III (mórbida)</td>
      </tr>


      </tbody>
    </table>
    </section>


   </main>
  ) 
  
 

 
}

export default App
