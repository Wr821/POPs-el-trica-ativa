/*
 * Manual de POPs - WMS E-SHIP Eletrica Ativa
 * Arquivo JavaScript principal
 * Versão: 1.0
 */

// Configurações globais
const CONFIG = {
    searchDelay: 300,
    animationDuration: 500,
    highlightDuration: 2000
};

// Inicialização do sistema
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Inicializa a aplicação
 */
function initializeApp() {
    console.log('🚀 Inicializando Manual de POPs WMS E-SHIP');
    
    // Mostrar visão geral por padrão
    showSection('overview');
    
    // Configurar eventos
    setupEventListeners();
    
    // Configurar busca com debounce
    setupSearch();
    
    console.log('✅ Manual de POPs inicializado com sucesso');
}

/**
 * Configurar event listeners
 */
function setupEventListeners() {
    // Scroll suave para navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
    
    // Fechar menu mobile ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Atalhos de teclado
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

/**
 * Configurar sistema de busca com debounce
 */
function setupSearch() {
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        let searchTimeout;
        
        searchBox.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchContent(this.value);
            }, CONFIG.searchDelay);
        });
        
        // Placeholder dinâmico
        const placeholders = [
            '🔍 Buscar procedimentos...',
            '📋 Ex: separação, recebimento...',
            '🔧 Ex: movimentação, ajustes...',
            '📦 Ex: armazenagem, conferência...'
        ];
        
        let placeholderIndex = 0;
        setInterval(() => {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
            searchBox.placeholder = placeholders[placeholderIndex];
        }, 3000);
    }
}

/**
 * Atalhos de teclado
 */
function handleKeyboardShortcuts(event) {
    // Ctrl + F ou / para focar na busca
    if ((event.ctrlKey && event.key === 'f') || event.key === '/') {
        event.preventDefault();
        const searchBox = document.querySelector('.search-box');
        if (searchBox) {
            searchBox.focus();
            searchBox.select();
        }
    }
    
    // Esc para limpar busca
    if (event.key === 'Escape') {
        const searchBox = document.querySelector('.search-box');
        if (searchBox && searchBox.value) {
            searchBox.value = '';
            searchContent('');
        }
    }
    
    // Números 1-7 para navegação rápida
    if (event.altKey && event.key >= '1' && event.key <= '7') {
        event.preventDefault();
        const sections = ['overview', 'recebimento', 'armazenagem', 'separacao', 'conferencia', 'movimentacao', 'ajustes'];
        const index = parseInt(event.key) - 1;
        if (sections[index]) {
            showSection(sections[index]);
        }
    }
}

/**
 * Mostrar seção específica
 */
function showSection(sectionId) {
    console.log(`📄 Navegando para seção: ${sectionId}`);
    
    // Ocultar todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Controlar overview
    const overview = document.getElementById('overview');
    if (sectionId !== 'overview') {
        overview.style.display = 'none';
    } else {
        overview.style.display = 'block';
    }
    
    // Mostrar seção selecionada
    if (sectionId !== 'overview') {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
    
    // Atualizar links ativos
    updateActiveNavLink(sectionId);
    
    // Fechar menu mobile
    closeMobileMenu();
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Analytics (simulado)
    trackPageView(sectionId);
}

/**
 * Atualizar link ativo na navegação
 */
function updateActiveNavLink(sectionId) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        
        // Encontrar link correspondente à seção
        const linkText = link.textContent.toLowerCase();
        if (
            (sectionId === 'overview' && linkText.includes('visão geral')) ||
            (sectionId === 'recebimento' && linkText.includes('recebimento')) ||
            (sectionId === 'armazenagem' && linkText.includes('armazenagem')) ||
            (sectionId === 'separacao' && linkText.includes('separação')) ||
            (sectionId === 'conferencia' && linkText.includes('conferência')) ||
            (sectionId === 'movimentacao' && linkText.includes('movimentação')) ||
            (sectionId === 'ajustes' && linkText.includes('ajustes'))
        ) {
            link.classList.add('active');
        }
    });
}

/**
 * Toggle menu mobile
 */
function toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

/**
 * Fechar menu mobile
 */
function closeMobileMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.remove('active');
}

/**
 * Sistema de busca avançado
 */
function searchContent(query) {
    console.log(`🔍 Buscando: "${query}"`);
    
    if (!query || query.trim() === '') {
        // Mostrar todos os elementos
        showAllElements();
        return;
    }
    
    query = query.toLowerCase().trim();
    let resultsFound = 0;
    
    // Buscar em todos os elementos de conteúdo
    const searchElements = document.querySelectorAll('.processo-card, .operation-card, .step-item');
    
    searchElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        const isMatch = text.includes(query);
        
        if (isMatch) {
            showElement(element);
            highlightSearchTerm(element, query);
            resultsFound++;
        } else {
            hideElement(element);
        }
    });
    
    // Mostrar estatísticas da busca
    showSearchStats(resultsFound, query);
    
    console.log(`📊 Busca concluída: ${resultsFound} resultados`);
}

/**
 * Mostrar elemento com animação
 */
function showElement(element) {
    element.style.display = '';
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    
    // Animar entrada
    setTimeout(() => {
        element.style.transition = 'all 0.3s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 50);
}

/**
 * Ocultar elemento com animação
 */
function hideElement(element) {
    element.style.transition = 'all 0.3s ease';
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, 300);
}

/**
 * Mostrar todos os elementos
 */
function showAllElements() {
    const allElements = document.querySelectorAll('.processo-card, .operation-card, .step-item');
    allElements.forEach(element => {
        element.style.display = '';
        element.style.opacity = '';
        element.style.transform = '';
        element.style.transition = '';
        removeHighlight(element);
    });
    
    hideSearchStats();
}

/**
 * Destacar termo de busca
 */
function highlightSearchTerm(element, term) {
    // Adicionar borda destacada
    element.style.border = '2px solid #2196F3';
    element.style.boxShadow = '0 0 15px rgba(33, 150, 243, 0.3)';
    
    // Remover destaque após tempo determinado
    setTimeout(() => {
        removeHighlight(element);
    }, CONFIG.highlightDuration);
}

/**
 * Remover destaque
 */
function removeHighlight(element) {
    element.style.border = '';
    element.style.boxShadow = '';
}

/**
 * Mostrar estatísticas da busca
 */
function showSearchStats(count, query) {
    // Remover estatísticas anteriores
    hideSearchStats();
    
    // Criar elemento de estatísticas
    const statsElement = document.createElement('div');
    statsElement.id = 'search-stats';
    statsElement.className = 'search-stats';
    statsElement.innerHTML = `
        <div class="search-results-info">
            📊 <strong>${count}</strong> resultado${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''} para "<strong>${query}</strong>"
            ${count === 0 ? '<br>💡 Tente termos como: recebimento, separação, movimentação' : ''}
        </div>
    `;
    
    // Adicionar estilos
    statsElement.style.cssText = `
        background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
        border: 1px solid #2196F3;
        border-radius: 10px;
        padding: 15px;
        margin: 15px 0;
        text-align: center;
        animation: slideIn 0.3s ease;
    `;
    
    // Inserir após a busca
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.insertAdjacentElement('afterend', statsElement);
    }
}

/**
 * Ocultar estatísticas da busca
 */
function hideSearchStats() {
    const existingStats = document.getElementById('search-stats');
    if (existingStats) {
        existingStats.remove();
    }
}

/**
 * Analytics simulado
 */
function trackPageView(sectionId) {
    // Simular tracking de analytics
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: `POPs WMS - ${sectionId}`,
            page_location: window.location.href + '#' + sectionId
        });
    }
    
    console.log(`📈 Analytics: Página visualizada - ${sectionId}`);
}

/**
 * Utilitários para desenvolvimento
 */
const DevUtils = {
    // Gerar relatório de seções
    getSectionReport() {
        const sections = document.querySelectorAll('.content-section, .overview-section');
        const report = {
            totalSections: sections.length,
            sections: []
        };
        
        sections.forEach(section => {
            const title = section.querySelector('.section-title')?.textContent || 'Sem título';
            const cards = section.querySelectorAll('.processo-card').length;
            const steps = section.querySelectorAll('.step-item').length;
            
            report.sections.push({
                id: section.id,
                title: title,
                cards: cards,
                steps: steps
            });
        });
        
        return report;
    },
    
    // Validar estrutura HTML
    validateStructure() {
        const errors = [];
        
        // Verificar se todas as seções têm ID
        document.querySelectorAll('.content-section').forEach(section => {
            if (!section.id) {
                errors.push('Seção sem ID encontrada');
            }
        });
        
        // Verificar se todos os links têm seções correspondentes
        document.querySelectorAll('.nav-link').forEach(link => {
            const onclick = link.getAttribute('onclick');
            if (onclick && onclick.includes('showSection')) {
                const sectionId = onclick.match(/showSection\('([^']+)'\)/)?.[1];
                if (sectionId && sectionId !== 'overview' && !document.getElementById(sectionId)) {
                    errors.push(`Link aponta para seção inexistente: ${sectionId}`);
                }
            }
        });
        
        return errors;
    }
};

// Disponibilizar utilitários globalmente em desenvolvimento
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.DevUtils = DevUtils;
    console.log('🛠️ Utilitários de desenvolvimento disponíveis: window.DevUtils');
}