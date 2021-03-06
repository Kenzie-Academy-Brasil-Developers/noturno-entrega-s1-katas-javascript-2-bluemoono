// comece a criar a sua função add na linha abaixo
/*function add(a, b){
    let soma = a+b
    return soma
}
// descomente a linha seguinte para testar sua função
//console.log(add(3,5))
//console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
    let m = 0
    for(let i=0; i<b; i++){
        m = add(m,a)
    }
    return m
}
// descomente a linha seguinte para testar sua função
//console.log(multiply(4,6))
//console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let p = 1
    for(let i=0; i<n; i++){
        p = multiply(p, x)
    }
    return p
}

// descomente a linha seguinte para testar sua função
//console.log(power(3,4))
//console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a){
    let f=a
    let r =f
    for (let index = 1; index < a; index++) {
        r *= index
    }
    return r
}
// descomente a linha seguinte para testar sua função
console.log(factorial(5))
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(q){
    let n1 = 0
    let n2 = 1
    let r = null

    for (let index = 1; index < q; index++) {
        r = n1 + n2
        n1 = n2
        n2 = r
    }
    return n1
}

// descomente a linha seguinte para testar sua função
console.log(fibonacci(8))
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
