export function calculateIMC(weight: number, height: number) {
  const imc = weight / (height * height)
  return Number(imc.toFixed(2))
}

// function imc result
export function IMCResult(imc: number) {
 if(imc < 17){
  return "Muito abaixo do peso"
 }
 else if (imc < 18.5){
  return "Abaixo do peso"
 }
 else if(imc < 24.9){
  return "Peso normal"
 }
 else if(imc < 29.9){
  return "Acima do peso"
 }
 else if(imc < 34.9){
  return "Obesidade grau I"
 }
 else if(imc < 39.9){
  return "Obesidade grau II"
 }
 else{
  return "Obesidade grau III"
 }
}

export default function formatNumber(num: number, digits: number) {
  return num.toLocaleString('pt-BR', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })
}