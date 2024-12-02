## registo

```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{
      "name": "vitormarcker",
      "email": "vitormarcker@example.com",
      "password": "Vitormarcker@123"
    }'
```
## login
```bash
curl -X POST http://localhost:3000/login \
-H "Content-Type: application/json" \
-d '{
      "email": "vitormarcker@example.com",
      "senha": "Vitormarcker@123"
    }'
```
## registrar livro
```bash
curl -X POST http://localhost:3000/newbook \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Produto Exemplo",
    "descricao": "Descrição do produto",
    "preco": 100.50,
    "autor": "Autor Exemplo"
  }'
```
## update livro
```bash
curl -X PUT http://localhost:3000/update/5 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Novo Nome do Produto",
    "descricao": "Nova descrição do produto",
    "preco": 150.75,
    "autor": "Novo Autor"
  }'
```
## get livros
```bash
curl -X GET http://localhost:3000/getbook

````
## atualizar livros
```bash
curl -X DELETE http://localhost:3000/deletebook/2
```