# Trabalhando em branches diferentes Git/Github Git Flow 

1. Primeiro de tudo, dar o pull na branch develop:

```bash
git checkout develop # Ir pra branch develop
git pull
```

2. Criar branch nova (feature nova) baseada na develop para você alterar o que precisa:

```bash
git branch    # Verificar se está na develop
git checkout -b nome-da-feature # Cria nova branch e já é movido para ela

# Se você der 'git branch -av' ele vai listar todas as suas branchs (as remotas e as
# locais) e você pode verificar se a mensagem do último commit da branch develop é a
# mesma da branch que você criou agora
```

3. Na branch nova, muda o que precisa

4. Dar commit nas mudanças e dar o push

```bash
git add .
git commit -m "Sua mensagem"
git push --set-upstream origin nome-da-feature
```

5. Dar merge dela com a develop e depois dar o pull

```bash
git checkout develop
git merge nome-da-feature
git pull
```

6. Confere se o que voce fez na branch que criou foi pra develop

7. Se sim, apaga a branch que criou:

```bash
git branch -d nome-da-feature # Remove a branch localmente
git push origin --delete nome-da-feature # Remove a branch remotamente
```

8. Se não, volta pra dar o merge direito

9. Dar push final na develop

```bash
git add .
git commit -m "Sua mensagem"
git push
```