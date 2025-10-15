# Manual de POPs - WMS E-SHIP Eletrica Ativa

## 🚀 Instruções para GitHub Pages

### 📋 Passos para Hospedar no GitHub Pages

1. **Criar Repositório no GitHub**
   ```bash
   # No GitHub, crie um novo repositório
   # Nome sugerido: manual-pops-wms-eship
   ```

2. **Inicializar Git Local**
   ```bash
   cd "Manual_POPs_WMS"
   git init
   git add .
   git commit -m "🎉 Inicial: Manual de POPs WMS E-SHIP"
   ```

3. **Conectar com GitHub**
   ```bash
   git remote add origin https://github.com/SEUUSUARIO/NOME-DO-REPO.git
   git branch -M main
   git push -u origin main
   ```

4. **Configurar GitHub Pages**
   - Vá para Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Clique em "Save"

5. **Aguardar Deploy**
   - O GitHub levará alguns minutos para processar
   - Acesse: `https://SEUUSUARIO.github.io/NOME-DO-REPO/`

### 🔧 Configurações Incluídas

✅ **GitHub Actions** (`.github/workflows/deploy.yml`)
- Deploy automático a cada push
- Configuração otimizada para GitHub Pages

✅ **Jekyll Config** (`_config.yml`)
- Configurações para Jekyll
- Otimizações de SEO
- Estrutura de arquivos

✅ **Gitignore** (`.gitignore`)
- Ignora arquivos desnecessários
- Mantém repositório limpo

✅ **Licença MIT** (`LICENSE`)
- Licença open source
- Permite uso e modificação

### 🌐 URLs Típicas
- **Repositório**: `https://github.com/SEUUSUARIO/NOME-DO-REPO`
- **Site**: `https://SEUUSUARIO.github.io/NOME-DO-REPO/`

### ⚡ Comandos Úteis

```bash
# Atualizar o site
git add .
git commit -m "📝 Atualização: descrição das mudanças"
git push

# Ver status
git status

# Ver histórico
git log --oneline

# Criar nova branch para features
git checkout -b feature/nova-funcionalidade
```

### 🎯 Estrutura Final para GitHub

```
Manual_POPs_WMS/
├── 📄 index.html              # Página principal
├── 📁 assets/                 # CSS e JS
├── 📁 templates/              # Templates
├── 📁 docs/                   # Documentação
├── 📁 .github/workflows/      # GitHub Actions
├── ⚙️ _config.yml            # Configuração Jekyll
├── 🚫 .gitignore             # Arquivos ignorados
├── 📜 LICENSE                # Licença MIT
└── 📋 README.md              # Documentação
```

### 💡 Dicas Importantes

1. **Nome do Repositório**: Use nomes descritivos como `manual-pops-wms-eship`
2. **Branch Principal**: Use `main` (padrão atual do GitHub)
3. **Commits**: Use mensagens descritivas com emojis
4. **Atualizações**: Cada push atualiza o site automaticamente
5. **Domínio Personalizado**: Configure em Settings > Pages se tiver

### 🛠️ Troubleshooting

**Site não carrega?**
- Verifique se o arquivo `index.html` está na raiz
- Aguarde até 10 minutos após o primeiro deploy
- Verifique a aba "Actions" para erros

**CSS/JS não carrega?**
- Verifique se os caminhos estão corretos
- Use caminhos relativos (sem `/` no início)

**404 em sub-páginas?**
- GitHub Pages serve apenas arquivos estáticos
- Todas as páginas devem ser arquivos HTML reais

### 📞 Suporte
Para dúvidas sobre GitHub Pages: https://docs.github.com/pages