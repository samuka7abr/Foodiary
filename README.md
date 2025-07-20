# 🍽️ Foodiary

<div align="center">

**Controle sua dieta de forma simples e inteligente**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Serverless](https://img.shields.io/badge/Serverless-FD5750?style=for-the-badge&logo=serverless&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

</div>

## 📖 Sobre o Projeto

O **Foodiary** é um aplicativo mobile de diário alimentar que utiliza inteligência artificial para simplificar o registro de refeições. Com ele, você pode:

- 🎯 **Definir objetivos personalizados** (perder, manter ou ganhar peso)
- 🎤 **Registrar refeições por voz** - apenas descreva o que comeu
- 📸 **Capturar fotos dos alimentos** para análise automática
- 📊 **Acompanhar metas nutricionais** calculadas automaticamente
- 🤖 **Processamento inteligente** com IA para identificar alimentos e nutrientes

## 🏗️ Arquitetura

O projeto está organizado em duas partes principais:

### 📱 Frontend (`foodiary-app/`)
- **React Native** com Expo
- **TypeScript** para tipagem
- **TailwindCSS** via NativeWind para estilização
- **Expo Router** para navegação
- **React Query** para gerenciamento de estado
- **React Hook Form** + Zod para formulários

### ⚡ Backend (`foodiary-api/`)
- **Serverless Framework** para deploy na AWS
- **Node.js** + **TypeScript**
- **AWS Lambda** para processamento
- **PostgreSQL** com **DrizzleORM**
- **AWS S3** para armazenamento de arquivos
- **AWS SQS** para processamento assíncrono
- **OpenAI API** para análise de áudio e imagens

## 🛠️ Stack Tecnológica

| Categoria | Tecnologias |
|-----------|-------------|
| **Mobile** | React Native, Expo, TypeScript |
| **Estilização** | TailwindCSS, NativeWind |
| **Backend** | Node.js, TypeScript, Serverless Framework |
| **Banco de Dados** | PostgreSQL, DrizzleORM |
| **Cloud** | AWS Lambda, S3, SQS |
| **IA/ML** | OpenAI API |
| **Autenticação** | JWT |
| **Gerenciamento de Estado** | React Query, Context API |

## 🚀 Funcionalidades

### ✨ Cadastro Personalizado
- Definição de objetivos (perder, manter, ganhar peso)
- Coleta de dados físicos (altura, peso, idade, gênero)
- Cálculo automático de metas calóricas e nutricionais
- Seleção do nível de atividade física

### 🍽️ Registro de Refeições
- **Áudio**: Grave uma descrição da refeição
- **Foto**: Capture imagens dos alimentos
- Processamento automático com IA
- Identificação de alimentos e cálculo nutricional

### 📊 Acompanhamento
- Dashboard com progresso das metas
- Histórico de refeições
- Análise nutricional detalhada
- Relatórios de consumo

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI
- Conta AWS
- Banco PostgreSQL
- Chave da OpenAI API

### 🔧 Backend Setup

```bash
# Entre na pasta da API
cd foodiary-api

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Configure o banco de dados com Drizzle
npm run db:generate
npm run db:push

# Execute localmente
npm run dev
```

### 📱 Frontend Setup

```bash
# Entre na pasta do app
cd foodiary-app

# Instale as dependências
npm install

# Execute o projeto
npm start

# Para executar em dispositivos específicos
npm run android  # Android
npm run ios      # iOS
```

### ⚙️ Variáveis de Ambiente

#### Backend (`.env`)
```env
DATABASE_URL=postgresql://user:password@host:port/database
JWT_SECRET=your-jwt-secret
OPENAI_API_KEY=your-openai-api-key
```

#### Frontend
Configure a URL da API em `src/services/httpClient.ts`


## 📚 Estrutura do Projeto

```
📦 Foodiary
├── 📱 foodiary-app/          # React Native App
│   ├── src/
│   │   ├── app/              # Navegação (Expo Router)
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── contexts/         # Context API
│   │   ├── hooks/            # Hooks customizados
│   │   ├── services/         # APIs e serviços
│   │   └── styles/           # Configurações de estilo
│   └── assets/               # Imagens e recursos
│
├── ⚡ foodiary-api/          # Serverless Backend
│   ├── src/
│   │   ├── controllers/      # Controladores das rotas
│   │   ├── functions/        # AWS Lambda functions
│   │   ├── db/               # Schema e configuração do DB
│   │   ├── lib/              # Utilitários
│   │   ├── services/         # Serviços externos (IA, etc)
│   │   └── types/            # Definições de tipos
│   └── serverless.yml        # Configuração do Serverless
│
└── 📄 README.md
```

## 🔐 Funcionalidades de Segurança

- Autenticação JWT
- Senhas criptografadas com bcrypt
- Validação de dados com Zod
- URLs pré-assinadas para upload seguro no S3
- Sanitização de inputs

## 👨‍💻 Autor

<div align="center">

<img src="https://github.com/samuka7abr.png" width="100" height="100" style="border-radius: 50%;" alt="Samuel Abrao"/>

**Samuel Abrao**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samuka7abr)
[![Portfolio](https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white)](https://portifolio-lyart-three-23.vercel.app/)

*Desenvolvedor Full Stack apaixonado por tecnologia e inovação*

</div>

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ para uma alimentação mais saudável e consciente**

</div> 