# Pay Challenge Backend

## Descrição

Objetivo: O desafio é desenvolver um sistema de processamento de pagamentos integrado
ao ambiente de homologação do Asaas, utilizando Node.js para o backend. O cliente deve
acessar uma página simples onde poderá selecionar a opção de pagamento entre Boleto,
Cartão ou Pix.

## Configuração do projeto

É necessário criar um arquivo .env com base no arquivo .env.example. Então, acessa a plataforma do Asaas e gere um api-key e preencha as seguintes variáveis.  

```
PAY_API_KEY=YOUR_KEY
PAY_BASE_URL=https://api-sandbox.asaas.com
```

## Instale as dependencias
```bash
$ npm install
```

## Compilar e executar o projeto

```bash
$ npm run start
```

## O front-end está disponível no seguinte repositório

[Payment-challenge-frontend](https://github.com/alanrps/payment-challenge-frontend)
