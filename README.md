# API GERADOR DE TÍTULO E DECRIÇÃO DE VÍDEO UTILIZANDO IA

![GitHub code size](https://img.shields.io/github/languages/code-size/igoralvesr/upload-ai-api)

> Esta é uma aplicação desenvolvida no último evento NLW IA da Rockeseat.

<div style="width:100%; display:flex; align-items:center; gap:16px">
    <img src="./assets/app.png" width="30%">
</div>

## Detalhes do aplicativo

- O aplicativo permite carregar um vídeo, mostrar o preview do vídeo e em seguida faz a conversão de .mp4 para .mp3
para que o contéudo fiquei mais leve para trafegar na rede. Tudo isso no frontend utilizando webassembly. Após essa 
conversão, o usuário pode escolher se quer gerar um título ou uma descrição para o vídeo, e utilizando stream a IA 
vai preenchendo o campo de acordo com a que vem da api.

## 🚀 Melhorias futuras
- [ ] - Criar mais prompts, como por exemplo: resumo do vídeo.
- [ ] - Inserir testes automátizados
- [ ] - Criar um fluxo de tratamento de erros

## Tecnologias utilizadas

- Fastify (framework node)
- OpenIA (Api para o modelo de IA)
- Prisma (ORM utilizado)
- Postgres (Banco de dados utilizado)

## 💻 Como usar o projeto
Para utilizar e testar o projeto, esteja em um computador com Node Js instalado e siga as
etapas abaixo:

1 clone o projeto com o comando
```
git clone https://github.com/IgorAlvesR/upload-ai-api
```
2 Acesse o projeto pelo terminal com o comando
```
cd upload-ai-api
```
3 Instale o gestor de pacotes pnpm com o comando
```
npm install -g pnpm
```
4 Instale as dependências necessárias com o comando
```
pnpm install
```
5 Rode esse comando para criar o banco de dados 
```
pnpm prisma migrate dev --name init
```
6 Crie uma variável de ambiente `OPENAI_KEY` e gere uma chave de api na OpenAI.
Verifique se você tem créditos, pois caso contrário não irá conseguir comunicar com a api.
```
https://platform.openai.com/account/api-keys
```
7 Rode o projeto com o comando
```
pnpm run dev
```
8 Acesse o projeto 
```
http://localhost:3333
```

## 🌐 Links úteis
[NodeJS](https://nodejs.org/en/download)
[Festify](https://fastify.dev/)
[Tailwind](https://tailwindcss.com/)
[OpenAI](https://platform.openai.com/)
[FFmpeg](https://ffmpegwasm.netlify.app/)
[ShadcnUI](https://ui.shadcn.com/)


## 🧑‍💻 Igor Alves Rodrigues

[<img
    src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/igor-alves-rodrigues-7941a116b/)
[<img
    src=" https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://gthub.com/igoralvesr)
[<img
    src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />](http://wa.me/5548998434969)
[<img src="https://img.shields.io/website-up-down-green-red/http/shields.io.svg"
    height="28" />](https://igoralvesr.github.io)