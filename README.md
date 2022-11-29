# MongoDB Commerce
###### by _[Italo Amaral](https://www.linkedin.com/in/italo-rockenbach-594082132/)_

## :page_with_curl: Sobre - About

<details>
  <summary>:brazil: Portuguese</summary>

O projeto trata-se de um desafio para consolidar os aprendizados iniciais com as buscas no banco de dados não relacional MongoDB. Foram realizados diversos tipos de consultas com diferentes intuitos, além de inserção e remoção de dados no banco. O projeto simula uma lanchonete com alguns alimentos que possuem características como lista de ingredientes, número de produtos vendidos, número de curtidas e muito mais.
</details>

<details>
  <summary>:us: English </summary>

The project is a challenge to consolidate the initial learnings with the searches in the non-relational MongoDB database. Various types of queries with different purposes were carried out, in addition to insertion and removal of data in the database. The project simulates a snack bar with some foods that have characteristics such as list of ingredients, number of products sold, number of likes and much more.
</details>

## :man_technologist: Habilidades desenvolvidas - Developed skills

<details>
  <summary>:brazil: Portuguese</summary>

* MongoDB
* Realizar diversos tipos de queries com dificuldades variadas
</details>

<details>
  <summary>:brazil: Portuguese</summary>

* MongoDB
* Perform various types of queries with varying difficulties
</details>


## ⚙️ Como Executar - How to Run
<details>
  <summary>:brazil: Portuguese</summary>

É necessario ter o Docker instalado.

1. Clone o repositório em uma pasta de preferência

```
git clone git@github.com:ItaloRAmaral/Mongodb-Commerce.git
```

2. Entre na pasta raíz do projeto, e crie um container com um volume apontando para a pasta do projeto

```
docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0
```

3. Com o container em execução, acesso o terminal do container

```
docker exec -it nomeDoContainer bash
```

4. No terminal do container, acesso o diretório ```/app``` que foi mapeado no volume do container

5. Para testar o projeto use o seguinte script no terminal do container

```
./scripts/evaluate.sh
```

</details>

<details>
  <summary>:us: English</summary>

It is necessary to have Docker installed.

1. Clone the repository in a preferred folder

```
git clone git@github.com:ItaloRAmaral/Mongodb-Commerce.git
```

2. Enter the root folder of the project, and create a container with a volume pointing to the project folder

```
docker run -d --name=containerName -v "$PWD:/app" -p 27017:27017 mongo:5.0
```

3. With the container running, access the container terminal

```
docker exec -it containerName bash
```

4. In the container terminal, access the ```/app``` directory that was mapped to the container volume

5. To test the project use the following script in the container terminal

```
./scripts/evaluate.sh
```

</details>

## 🛠️ Desafios técnicos do projeto - Project Technical Challenges

<details>
  <summary>:brazil: Portuguese</summary>

| Desafio | Descrição |
|---|---|
| `1` | Query para retorna a quantidade de documentos inseridos na coleção produtos |
| `2` | Query para ordenar a coleção produtos pela quantidade de lanches vendidos em ordem crescente |
| `3` | Query para mostrar o lanche mais vendido |
| `4` | Query todos os lanches com mais de 50 e menos de 100 vendas |
| `5` | Query que filtra os produtos que tem 36 curtidas ou 85 vendas no total |
| `6` | Query que retorna os produtos com mais de 10 e menos de 100 curtidas |
| `7` | Query que retorna os produtos com número de vendas diferente de 50 e que não tenha o campo `tags` |
| `8` | Query para deletar os lanches com menos de 50 curtidas |
| `9` | Query para retornar todos os lanches com menos de 500 calorias |
| `10` | Query para filtrar os lanches com mais de 30% e menos de 40% de proteínas |
| `11` | Query para filtrar os lanches que não tenham os nomes: Big Mac e McChicken  |
| `12` | Query para adicionar ketchup aos ingredientes para todos os sanduíches menos o McChicken |
| `13` | Query para incluir o campo criadoPor em todos os documentos, com valor Ronald McDonald |
| `14` | Query que retorne os lanches que possuem picles como ingredientes e mostre apenas os 3 primeiros itens no campo valoresNutricionais |
| `15` | Query para adicionar o campo avaliacao em todos os documentos |
| `16` | Query para adicionar o campo ultimaModificacao com a data atual apenas para o Big Mac |
| `17` | Query para criação de uma nova coleção chamada resumoProdutos com a quantidade total de produtos |
| `18` | Query para incluir bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo |
| `19` | Query para remover o ingrediente Cebola de todos os sanduíches |
| `20` | Query para remover o primeiro ingrediente do sanduíche Quarteirão com Queijo |
| `21` | Query para remover o último ingrediente do sanduíche Cheddar McMelt |
| `22` | Query para criar o campo vendasPorDia em todos os sanduíches  |
| `23` | Query para adicionar os valores `combo` e `tasty` no array tags de todos os sanduíches em ordem alfabética |
| `24` | Query para ordernar todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente |
| `25` | Query para adicionar o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40 |
| `26` | Query para adicionar  o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40|
| `27` | Query que conta quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas |
| `28` | Query que conta quantos produtos têm 4 ingredientes |
| `29` | Query para renomear o campo descricao para descricaoSite em todos os documentos |
| `30` | Query para remover o campo curtidas do item Big Mac|
| `31` | Query para retornar o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos|
| `32` | Query para retornar o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5|
</details>

<details>
  <summary>:us: English</summary>

| Challenge | Description |
|---|---|
| `1` | Query to return the number of documents inserted in the products collection |
| `2` | Query to sort the products collection by the number of sandwiches sold in ascending order |
| `3` | Query to show the most sold sandwich |
| `4` | Query all sandwiches with more than 50 and less than 100 sales |
| `5` | Query that filters the products that have 36 likes or 85 sales in total |
| `6` | Query that returns the products with more than 10 and less than 100 likes |
| `7` | Query that returns the products with a number of sales different from 50 and that do not have the `tags` field |
| `8` | Query to delete the sandwiches with less than 50 likes |
| `9` | Query to return all sandwiches with less than 500 calories |
| `10` | Query to filter the sandwiches with more than 30% and less than 40% of protein |
| `11` | Query to filter the sandwiches that do not have the names: Big Mac and McChicken |
| `12` | Query to add ketchup to the ingredients for all sandwiches except McChicken |
| `13` | Query to include the createdBy field in all documents, with value Ronald McDonald |
| `14` | Query that returns the sandwiches that have pickles as ingredients and only shows the first 3 items in the nutritionalValues field |
| `15` | Query to add the evaluation field to all documents |
| `16` | Query to add the lastModification field with the current date only for Big Mac |
| `17` | Query for creating a new collection called resumoProdutos with the total number of products |
| `18` | Query to include bacon at the end of the list of ingredients of the Big Mac and Cheese Quarter Pounder sandwiches |
| `19` | Query to remove the Onion ingredient from all sandwiches |
| `20` | Query to remove the first ingredient from the Cheese Quarter Pounder sandwich |
| `21` | Query to remove the last ingredient from the Cheddar McMelt sandwich |
| `22` | Query to create the salesPerDay field in all sandwiches |
| `23` | Query to add the values `combo` and `tasty` to the array tags of all sandwiches in alphabetical order |
| `24` | Query to sort all documents by the nutritionalValues array values by the percentual field in descending order |
| `25` | Query to add the value very sodium at the end of the array tags in the products in which the sodium percentage is greater than or equal to 40 |
| `26` | Query to add the value contains sodium at the end of the array tags in the products in which the sodium percentage is greater than 20 and less than 40 |
| `27` | Query that counts how many products contain Mc in the name, without considering uppercase or lowercase letters |
| `28` | Query that counts how many products have 4 ingredients |
| `29` | Query to rename the description field to descricaoSite in all documents |
| `30` | Query to remove the likes field from the Big Mac item |
| `31` | Query to return the name of the sandwiches in which the number of likes is greater than the number of sandwiches sold |
| `32` | Query to return the name and the number of sales (sold) of the sandwiches in which the number of sales is a multiple of 5 |
</details>

