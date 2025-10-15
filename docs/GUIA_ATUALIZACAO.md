
# 📚 GUIA DE ATUALIZAÇÃO - POPs WMS E-SHIP

## 🔧 Como Adicionar Novos Processos

### 1. Estrutura Básica
- Cada processo é uma `<section class="content-section" id="ID_UNICO">`
- ID único para navegação (ex: "expedicao", "inventario", etc.)
- Ícone representativo no header

### 2. Componentes Disponíveis

#### 📋 Processo Card
```html
<div class="processo-card">
    <h3 class="processo-title">📋 Nome do Processo</h3>
    <!-- Conteúdo -->
</div>
```

#### 📝 Lista de Passos
```html
<ol class="step-list">
    <li class="step-item">
        <div class="step-text">
            <strong>Nome do Passo</strong><br>
            Descrição detalhada.
        </div>
    </li>
</ol>
```

#### ⚠️ Destacar Informações
```html
<div class="highlight">
    <strong>Importante:</strong> Informação crítica.
</div>
```

#### 🔧 Cards de Operação
```html
<div class="operation-types">
    <div class="operation-card">
        <h3 class="operation-title">🔧 Tipo</h3>
        <p class="operation-desc">Descrição.</p>
    </div>
</div>
```

### 3. Passos para Adicionar

1. **Adicionar no Menu**: Incluir link na navegação
2. **Criar Seção**: Usar template de processo
3. **Atualizar JavaScript**: Incluir na função showSection()
4. **Testar**: Verificar navegação e responsividade

### 4. Ícones Disponíveis
- 📦 Recebimento
- 🏪 Armazenagem  
- 📋 Separação
- ✅ Conferência
- 🔄 Movimentação
- ⚙️ Ajustes
- 📊 Expedição
- 📋 Inventário
- 🔍 Auditoria
- 📈 Relatórios
- 🛠️ Manutenção
- 👥 Usuários

## 💡 Dicas de Boas Práticas

1. **Clareza**: Use linguagem simples e direta
2. **Consistência**: Mantenha padrão visual
3. **Exemplos**: Inclua casos práticos
4. **Alertas**: Destaque informações críticas
5. **Navegação**: Teste em mobile e desktop

## 📝 Template Pronto

Vou aguardar os novos processos para implementar!
