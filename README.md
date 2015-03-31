Etapas Iniciais para Trabalhar com este Projeto
===============

Grunt
---------------

### Instale o Grunt-Cli

1. Execute npm install -g grunt-cli no console.

### Instale os pacotes globais

1. Acesse a raiz do projeto pelo console.
2. Execute npm install para instalar os pacotes do NPM.

### Instale os pacotes para execução de testes

1. Acesse a pasta tests pelo console.
2. Execute npm install para instalar os pacotes do NPM.

### Tarefas do Grunt

Todas as tarefas configuradas para execução pelo desenvolvedor são acessíveis executando o comando grunt no console na pasta raiz da aplicação.

Opções:

* src-connect: executa a app em dev em um servidor estático.
* test-report: executa testes na app em dev e exibe o resultado no browser padrão do usuário.
* build: cria os arquivos para deploy.
* public-connect: executa a app criada para deploy em um servidor estático.

Bower
---------------
### Instale o Bower

1. Execute npm install -g bower no console.

### Instale os pacotes para desenvolvimento

1. Acesse a pasta src pelo console.
2. Execute bower install para instalar os pacotes do Bower.

### Instale os pacotes para execução de testes

1. Acesse a pasta tests pelo console.
2. Execute bower install para instalar os pacotes do Bower.

Ambiente de Dev
================

SASS
------------------

1. Instale Sass Globbin: gem install sass-globbing.
2. Acesse a pasta src do projeto no console do S.O.
3. Execute: sass -r sass-globbing --watch --line-comments sass:css

Para se ter um CSS compilado com indicação em comentários, do arquivo e linha de cada regra correspondente nos arquivos SCSS, mantenha o parâmetro --line-comments.

Arquitetura CSS
-----------------

### Ordem das propriedades

1. Diretivas de processadores, como ```@extends``` e ```@include``` exceto para breakpoint que deve ficar por último.

2. Propriedade ```content```

3. Box-model, como ```height```, ```width```, ```margin```, ```padding```, ```border```.

4. Posicionamento: ```position```, ```top```, ```left```, ```z-index```, ```float```, ```clear```

5. Visibilidade: ```display``` e ```visibility```

6. Fonte e texto: ```font-family```, ```font-size```, ```line-height```, ```text-decoration```, ```color```, ```text-align```.

7. Design: ```background```, ```transform```, ```box-shadow```, ```border-radius```.

### Prefixos das Classes

* Layout: l
* Estado: is ou has
* Módulos: m
* Temas: t
* Javascript : js

### Classes dos módulos

```
m-{módulo}
m-{módulo}--{especificação}
m-{módulo}_{elemento}
m-{módulo}_{elemento}--{especificação}
```
Exemplos

```css
.m-contact{}
.m-contact--first{}
.m-contact_field{}
.m-contact_field--email{}
```

Breakpoints
-----------------

[Smartphone]-30em-["Tablet"]-60em-[Desktop]

O primeiro breakpoint é usado apenas para correção de quebra de layout.

Executando Cross-Device e com reload após mudanças de CSS
-------------------

1. Instale browser-sync: npm install -g browser-sync
2. Acesse a pasta src no console do S.O.
3. Execute: browser-sync start --server --files "css/*.css"

Executando com Grunt sem cross-device
------------------

1. Acesse a raiz do projeto pelo console.
2. Execute o comando grunt.
3. Selecione src-connect.

Ambiente de Testes
============

1. Execute o comando grunt no console na pasta raiz da aplicação.
2. Selecione test-report para executar testes com Mocha e Chai na app em desenvolvimento. O resultado será exibido no seu browser padrão.

Ambiente de Deploy
============

### Criar app para deploy

1. Execute o comando grunt no console na pasta raiz da aplicação.
2. Selecione build para criar a app para deploy.

### Executar no browsers a app criada para deploy

1. Execute o comando grunt no console na pasta raiz da aplicação.
2. Selecione public-connect para executar no browser a app criada para deploy em um servidor estático.

Manual do Usuário
================

### Labels

* Clique uma vez em uma label para filtrar a lista de e-mails por ela.
* Clique uma segunda vez na label que está impondo uma filtragem para mostrar todos os e-mails novamente.

[App em produção](http://www.yuricamara.com.br/projetos/mail-app/)
