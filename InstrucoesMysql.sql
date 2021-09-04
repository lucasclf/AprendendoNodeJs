/* Iniciar o mySQL */

/* mysql -h localhost -u root -p
SENHA */

/* Comando para criar um banco de dados */
/* CREATE DATABASE nome; */

/* Comando para criar uma tabela */
/* CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
); */


/* Comando para inserir dados */

/* INSERT INTO usuarios(nome, email, idade) VALUES(
    "Teste Naruto",
    "emailChampgnon@teste.com",
    1
); */

/* Comando para listar dados da tabela */

/* SELECT * FROM usuarios; */

/* Listar dados especificos */

/* SELECT * FROM usuarios WHERE idade = 1; 
SELECT * FROM usuarios WHERE idade <= 10;*/

/* Deletar registros */

/* DELETE FROM usuarios WHERE nome = "Teste Naruto"; */

/* Atualizar dados da tabela */

/* UPDATE usuarios SET nome = "Abajur", email = "emailAbajur@teste.com", idade = "15" WHERE nome = "Teste Naruto"; */