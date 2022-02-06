# Nomes Semânticos para Branch

Padrão de nomes de branch para um repositória mais organizado.

Formato: `<type>/#<issueNumber>-<alias>`

## Example

```
feat/#1-init
^------^   ^---^
|          |
|          +---> palavra chave da issue
|
+-------> Type: feat, chore, docs, fix, refactor, style ou test.
```

Type pode ser:

- `feat`: (novo recurso para o usuário, não um novo recurso para o código)

- `fix`: (correção de bug para o usuário, não correção de bug de código)

- `docs`: (mudanças na documentação)

- `style`: (formatação de código, adicionando ponto e vírgula, etc; sem mudanças em produção)

- `refactor`: (refatoração do código de produção; por exemplo renomear uma variável ou função)

- `test`: (adicionando novos testes, refatorando testes já existentes; sem mudanças em produção)

- `chore`: (desativando suporte para Node 6 etc)

Referências:

- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716