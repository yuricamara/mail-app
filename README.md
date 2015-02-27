Teste frontend - Mail App
=====

Build
-----------------

**SASS**

1. Instale Sass Globbin: gem install sass-globbing
2. Acesse a pasta src no console do S.O.
3. Execute: sass -r sass-globbing --watch sass:css

**Running Cross-Device**

1. Instale browser-sync: npm install -g browser-sync
2. Acesse a pasta src no console do S.O.
3. Execute: browser-sync start --server --files "css/*.css"

Arquitetura CSS
-----------------

### Ordem das propriedades

1. Diretivas de processadores, como ```@extends``` e ```@include```.

2. Box-model, como ```height```, ```width```, ```margin```, ```padding```, ```border```.

3. Posicionamento: ```position```, ```top```, ```left```, ```z-index```, ```float```, ```clear```

4. Visibilidade: ```display``` e ```visibility```

4. Fonte e texto: ```font-family```, ```font-size```, ```line-height```, ```text-decoration```, ```color```, ```text-align```.

5. Design: ```background```, ```transform```, ```box-shadow```, ```border-radius```.

### Prefixos das Classes

* Layout: l
* Estado: is ou has
* Módulos: m
* Temas: t

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

### Ordem das classes

estado módulo layout tema

### Abreviações usadas nas classes

ss - telas pequenas (small screens)
bs - telas grandes (big screen)
