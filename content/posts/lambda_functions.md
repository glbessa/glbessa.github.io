---
title: "Funções Lambda"
author: "Gabriel Leite Bessa"
date: 2023-07-27T20:15:58-03:00
tags: ["clp", "programação", "funções"]
categories: ["programação"]
---

## Introdução

Funções lambda, também chamadas de funções anônimas, são funções que não possuem um nome atrelado em sua definição e são muito utilizadas para expressar operações simples nas quais não é necessário fazer a definição completa de uma função.

Elas se originaram a partir do *cálculo lambda* criado por Alonzo Church, sendo este um sistema formal para expressar computação se baseando em funções anônimas equivalente as máquinas de Turing. Podem ser separadas em duas categorias que são as tipadas e não tipadas. Ainda é possível especificar qual o tipo de redução será usada, existindo três tipos:

- Conversão alfa: permite a mudança de nomes vinculados a variáveis.

- Redução beta: ocorre a aplicação das funções a seus argumentos.

- Redução eta: expressa a ideia de extensionalidade.

Nas linguagens de programação, as funções lambda não tipadas serviram de inspiração e foram implementadas com as linguagens funcionais iniciando por Lisp em 1958.

## Descrição funcional

As funções anônimas possuem uma sintaxe concisa e direta, sendo boas por conseguirem expressar facilmente que operação estão realizando.

Exemplo de funções lambda em Lisp:

```
(print ((lambda (x y) (* x y)) 6 4))
```

Saída do exemplo acima:

```
24
```

## Funções lambda em Rust

As funções lambda em Rust são closures, que são funções anônimas que conseguem capturar as varíaveis no escopo aonde elas foram definidas. Elas são definidas por meio de ```|<PARAMETROS>| <IMPLEMENTAÇÃO>```. Elas também podem ser usadas em conjunto com iteradores e serem aplicadas para elementos de estruturas de dados.

Exemplo de função lambda em Rust que faz a soma de 1 em todos os elementos de um vetor:

```
let v: Vec<usize> = vec![1, 2, 3, 4, 5];
    
let v2: Vec<usize> = v.into_iter().map(|x| x + 1).collect();
    
println!("{:?}", v2);
```

Saída do exemplo acima:

```
[2, 3, 4, 5, 6]
```

## Funções lambda em Haskell

Sendo Haskell uma linguagem puramente funcional a presença das funções lambda nele não poderiam faltar. Tendo derivado a ideia de funções anônimas a partir do *cálculo lambda*.

Elas são definidas utilizando o \ (contra-barra) seguido dos parâmetros da função e o operador -> (seta) para então a implementação, para aplicarmos essa função a determinados parâmetros basta especifica-los após a definição da função do lado de fora dos parênteses. A avaliação dessas funções é feito com o uso da *redução beta* que faz a substituição do valor do parâmetro em cada ocorrência dele.

A seguir é apresentado a sintaxe:

```
ghci> (\<PARAMETROS SEPARADOS POR ESPAÇO> -> <IMPLEMENTAÇÃO>) <PARAMENTROS A SEREM APLICADOS>
```

Exemplo de função lambda em Haskell:

```
ghci> (\x y -> x * y) 2 6
```

Saída do comando acima:

```
12
```

## Aspectos de expressividade

A possibilidade de uso de funções lambda na maioria das linguagens de programação modernas é um ponto positivo visto que esta é uma forma concisa e simples de se definir e fazer o uso de funções, além do mais, seu uso sobre iteradores se faz bem presente.

## Referências

Sebesta, Robert W. "Conceitos de Linguagens de Programação", 10º edição.

https://en.wikipedia.org/wiki/Lambda_calculus

https://plato.stanford.edu/entries/lambda-calculus/

https://towardsdatascience.com/lambda-functions-with-practical-examples-in-python-45934f3653a8

https://en.wikipedia.org/wiki/Anonymous_function

https://medium.com/@luijar/understanding-lambda-expressions-4fb7ed216bc5

https://www.gnu.org/software/emacs/manual/html_node/elisp/Anonymous-Functions.html

https://www.geeksforgeeks.org/lambda-functions-in-lisp/

https://www.tutorialspoint.com/lisp/lisp_lambda_functions.htm

https://wiki.haskell.org/Anonymous_function

https://www.haskell.org/tutorial/functions.html

https://wiki.haskell.org/Lambda_abstraction

https://wiki.haskell.org/Beta_reduction