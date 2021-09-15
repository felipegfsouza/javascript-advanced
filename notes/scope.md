# Scope 

* Escopo  determina a visibilidade de alguma variável no JS

# Block statement
```js
// vamos iniciar um bloco
{
  // aqui  dentro é um bloco e posso colocar qualquer código
  // aqui fechamos o bloco 
}
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`


## var
```js
//var é global e poderá funcionar fora de um escopo de bloco
// var é global e, também local
// hoisting - elevação
console.log('> existe x antes do bloco?', x)

{
  var x = 0
}

console.log('> existe x depois do bloco?', x)

```

## let e const

```js
// const e let são locais e só funcionam no escopo onde foi criada

console.log('> existe x antes do bloco?', x)

{
  let x = 0
}

console.log('> existe x depois do bloco?', x)


let y = 1;

  {
    y = 0
    console.log('> existe y', y);

  }

   console.log('> existe x depois do bloco?', y);


```

```js

  const z = 1;

  {
    const z = 0 
    console.log('assim conseguimos  criar uma outra const com  o valor', z)
  }

  console.log('acessando o z que definimos com o valor',z)

```

