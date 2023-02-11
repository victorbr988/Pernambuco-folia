export function transformToBrl(value) {
  return (value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })).toString()
}