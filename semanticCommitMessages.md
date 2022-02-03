# Mensagens semânticas de commit

Padrão de commits para um repositória mais organizado.

Formato: `<type>: <subject>`

## Example

```
feat: adicao de navbar
^--^  ^------------^
|     |
|     +-> Resumo do que foi feito.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
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

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html