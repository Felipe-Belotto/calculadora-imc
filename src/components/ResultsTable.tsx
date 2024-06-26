
import formatNumber from '../lib/IMC'

const ResultsTable = ({IMCData}: 
  {IMCData: {weight: number, height: number, IMC: number, IMCResult: string}}) => {
  return (
    <table className='text-center md:text-base md[&>tr>td]:p-2 nd:[&>tbody>tr>td]:px-4 [&>tbody>tr>td]:px-2 text-neutral-600 mx-auto '>
      <tbody>

          <tr className='font-bold border-b border-b-purple-400'>
            <td>Peso</td>
            <td>Altura</td>
            <td>IMC</td>
            <td>Resultado</td>
          </tr>

          <tr>
            <td>{formatNumber(IMCData.weight, 2)} kg</td>
            <td>{formatNumber(IMCData.height, 2)} m</td>
            <td>{formatNumber(IMCData.IMC, 2)}</td>
            <td>{IMCData.IMCResult}</td>
          </tr>
          
      </tbody>
    </table>
  )
}

export default ResultsTable