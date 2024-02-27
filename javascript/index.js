const txtOp1 = document.getElementById('op1');
const txtOperacion = document.getElementById('operacion');
const txtOp2 = document.getElementById('op2');
const btnCalcular = document.getElementById('calcular');
const btnReiniciar = document.getElementById('reiniciar')
const pResultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', calcular);
btnReiniciar.addEventListener('click', reiniciar);

function calcular() {
    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    // Verificar si los operandos son números y la operación es válida
    if (isNaN(op1) || isNaN(op2) || !esOperacionValida(operacion)) {
        pResultado.innerText = 'Cálculo IMPOSIBLE. Verifica los valores ingresados.';
    } else {
        let resultado;

        // Realizar la operación según el operador
        switch (operacion) {
            case '+':
                resultado = op1 + op2;
                break;
            case '-':
                resultado = op1 - op2;
                break;
            case '*':
                resultado = op1 * op2;
                break;
            case '/':
                if (op2 !== 0) {
                    resultado = op1 / op2;
                } else {
                    pResultado.innerText = 'División por cero. Verifica el segundo operando.';
                    return;
                }
                break;
        }
        pResultado.innerText = '= ' + resultado;
    }
}

function esOperacionValida(operacion) {
    const operacionesValidas = ['+', '-', '*', '/']; 
    return operacionesValidas.includes(operacion);
   
}

function reiniciar() {
    // Limpiar los campos y el mensaje
    txtOp1.value = '';
    txtOperacion.value = '';
    txtOp2.value = '';
    pResultado.innerText = '';
}