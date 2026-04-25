// ============================================================
// ESTADO INICIAL
// ============================================================

let itens   = JSON.parse(localStorage.getItem('pedido_itens') || '[]');
let cardapio = JSON.parse(localStorage.getItem('cardapio') || 'null') || [
  // Refrigerantes
  { id: 1,  nome: 'Coca-Cola Lata',                  cat: 'bebida',  subcat: 'refrigerante' },
  { id: 2,  nome: 'Coca-Cola Zero Lata',             cat: 'bebida',  subcat: 'refrigerante' },
  { id: 3,  nome: 'Coca-Cola 1,5L',                  cat: 'bebida',  subcat: 'refrigerante' },
  { id: 4,  nome: 'Coca-Cola Zero 1,5L',             cat: 'bebida',  subcat: 'refrigerante' },
  { id: 5,  nome: 'Guaraná Antarctica',         cat: 'bebida',  subcat: 'refrigerante' },
  { id: 6,  nome: 'Guaraná Antarctica Zero',         cat: 'bebida',  subcat: 'refrigerante' },
  { id: 7,  nome: 'Guaravita',                     cat: 'bebida',  subcat: 'outro' },
  { id: 8,  nome: 'Guaraviton',                     cat: 'bebida',  subcat: 'outro' },
  { id: 9,  nome: 'H20',                     cat: 'bebida',  subcat: 'outro' },
  // Sucos — separados por formato
  { id: 10,  nome: 'Suco de Laranja — Copo',     cat: 'bebida',  subcat: 'suco' },
  { id: 11,  nome: 'Suco de Laranja — Jarra P',  cat: 'bebida',  subcat: 'suco' },
  { id: 12,  nome: 'Suco de Laranja — Jarra G',  cat: 'bebida',  subcat: 'suco' },
  { id: 13,  nome: 'Suco de Limão — Copo',     cat: 'bebida',  subcat: 'suco' },
  { id: 14,  nome: 'Suco de Limão — Jarra P',  cat: 'bebida',  subcat: 'suco' },
  { id: 15,  nome: 'Suco de Limão — Jarra G',  cat: 'bebida',  subcat: 'suco' },
  { id: 16,  nome: 'Suco de Abacaxi — Copo',     cat: 'bebida',  subcat: 'suco' },
  { id: 17,  nome: 'Suco de Abacaxi — Jarra P',  cat: 'bebida',  subcat: 'suco' },
  { id: 18,  nome: 'Suco de Abacaxi — Jarra G',  cat: 'bebida',  subcat: 'suco' },
  { id: 19,  nome: 'Suco de Manga — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 20,  nome: 'Suco de Manga — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 21, nome: 'Suco de Manga — Jarra G', cat: 'bebida',  subcat: 'suco' },
  { id: 22,  nome: 'Suco de Frutas Vermelhas — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 23,  nome: 'Suco de Frutas Vermelhas — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 24, nome: 'Suco de Frutas Vermelhas — Jarra G', cat: 'bebida',  subcat: 'suco' },
  { id: 25,  nome: 'Suco de Morango — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 26,  nome: 'Suco de Morango — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 27, nome: 'Suco de Morango — Jarra G', cat: 'bebida',  subcat: 'suco' },
  { id: 28,  nome: 'Suco de Pitanga — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 29,  nome: 'Suco de Pitanga — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 30, nome: 'Suco de Pitanga — Jarra G', cat: 'bebida',  subcat: 'suco' },
  { id: 31,  nome: 'Suco de Maracujá — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 32,  nome: 'Suco de Maracujá — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 33, nome: 'Suco de Maracujá — Jarra G', cat: 'bebida',  subcat: 'suco' },
  { id: 34,  nome: 'Suco de Cajú — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 35,  nome: 'Suco de Cajú — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 36, nome: 'Suco de Cajú — Jarra G', cat: 'bebida',  subcat: 'suco' },
  { id: 37,  nome: 'Suco de Abacaxi com Hortelã — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 38,  nome: 'Suco de Abacaxi com Hortelã — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 39, nome: 'Suco de Abacaxi com Hortelã — Jarra G', cat: 'bebida',  subcat: 'suco' },
  { id: 40,  nome: 'Suco de Goiaba — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 41,  nome: 'Suco de Goiaba — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 42, nome: 'Suco de Goiaba — Jarra G', cat: 'bebida',  subcat: 'suco' },
  { id: 43,  nome: 'Suco de Graviola — Copo',    cat: 'bebida',  subcat: 'suco' },
  { id: 44,  nome: 'Suco de Graviola — Jarra P', cat: 'bebida',  subcat: 'suco' },
  { id: 45, nome: 'Suco de Graviola — Jarra G', cat: 'bebida',  subcat: 'suco' },
  // Águas
  { id: 46, nome: 'Água sem Gás',               cat: 'bebida',  subcat: 'agua'    },
  { id: 47, nome: 'Água com Gás',               cat: 'bebida',  subcat: 'agua'    },
  { id: 48, nome: 'Água Tônica',               cat: 'bebida',  subcat: 'agua'    },
  // Cervejas
  { id: 49, nome: 'Cerveja Long Neck',         cat: 'bebida',  subcat: 'cerveja' },
  { id: 50, nome: 'Cerveja Spaten 600ml',          cat: 'bebida',  subcat: 'cerveja' },
  { id: 51, nome: 'Cerveja Original 600ml',          cat: 'bebida',  subcat: 'cerveja' },
  { id: 52, nome: 'Cerveja Heineken 600ml',          cat: 'bebida',  subcat: 'cerveja' },
  // Petiscos
  { id: 53, nome: 'Pavê',              cat: 'petisco', subcat: null }
];

let wppNum     = localStorage.getItem('wpp_num') || '';
let nextId     = Date.now();
let notifTimer;

// Toggles únicos: usados por suco-copo e suco-jarra
let sucoToggle = { gelo: null, acucar: null };

// Copos individuais: usados por refrigerante, cerveja, água
let coposState = [];
let qtdCopos   = 1;

// ============================================================
// INICIALIZAÇÃO
// ============================================================
function init() {
  document.getElementById('whatsapp-num').value = wppNum;
  renderCardapioSelect();
  renderResumo();
  renderModalCardapio();
  atualizarBadge();
  if (itens.length > 0) {
    document.getElementById('resumo-comanda-num').textContent    = itens[0].comanda;
    document.getElementById('resumo-comanda-info').style.display = 'inline-flex';
  }
}

// ============================================================
// TABS
// ============================================================
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.getElementById('page-' + tab).classList.add('active');
  if (tab === 'resumo') renderResumo();
}

// ============================================================
// SEARCH SELECT — estado
// ============================================================
let itemSelecionado = null; // { id, nome, cat, subcat }
let dropdownFocusIdx = -1;

function getItemSelecionado() { return itemSelecionado; }

function setItemSelecionado(item) {
  itemSelecionado = item;
  document.getElementById('item-search').value        = item ? item.nome : '';
  document.getElementById('item-select-id').value     = item ? item.id   : '';
  document.getElementById('item-select-cat').value    = item ? item.cat  : '';
  document.getElementById('item-select-subcat').value = item ? (item.subcat || '') : '';
  document.getElementById('item-select-nome').value   = item ? item.nome : '';
  fecharDropdown();
  if (item) onItemChange();
  else      resetForm();
}

// ============================================================
// SEARCH SELECT — renderizar dropdown
// ============================================================
function renderDropdown(filtro) {
  const dd    = document.getElementById('search-dropdown');
  const termo = (filtro || '').toLowerCase().trim();

  const bebidas  = cardapio.filter(i => i.cat === 'bebida'  && (!termo || i.nome.toLowerCase().includes(termo)));
  const petiscos = cardapio.filter(i => i.cat === 'petisco' && (!termo || i.nome.toLowerCase().includes(termo)));

  if (!bebidas.length && !petiscos.length) {
    dd.innerHTML = `<div class="dropdown-empty">Nenhum item encontrado</div>`;
    dropdownFocusIdx = -1;
    return;
  }

  let html = '';
  let globalIdx = 0;

  if (bebidas.length) {
    html += `<div class="dropdown-group-label">🥤 Bebidas</div>`;
    bebidas.forEach(i => {
      const sel = itemSelecionado && itemSelecionado.id === i.id ? ' selected' : '';
      html += `<div class="dropdown-item${sel}" data-idx="${globalIdx}" data-id="${i.id}"
        onmousedown="selecionarDropdownItem(${i.id})">${i.nome}</div>`;
      globalIdx++;
    });
  }

  if (petiscos.length) {
    html += `<div class="dropdown-group-label">🍟 Petiscos</div>`;
    petiscos.forEach(i => {
      const sel = itemSelecionado && itemSelecionado.id === i.id ? ' selected' : '';
      html += `<div class="dropdown-item${sel}" data-idx="${globalIdx}" data-id="${i.id}"
        onmousedown="selecionarDropdownItem(${i.id})">${i.nome}</div>`;
      globalIdx++;
    });
  }

  dd.innerHTML = html;
  dropdownFocusIdx = -1;
}

function selecionarDropdownItem(id) {
  const item = cardapio.find(i => i.id === id);
  if (item) setItemSelecionado(item);
}

function filtrarItens() {
  const termo = document.getElementById('item-search').value;
  // Se apagou o texto, limpa seleção
  if (!termo.trim()) { itemSelecionado = null; resetForm(); }
  abrirDropdown();
  renderDropdown(termo);
}

function abrirDropdown() {
  const dd    = document.getElementById('search-dropdown');
  const arrow = document.getElementById('search-arrow');
  const termo = document.getElementById('item-search').value;
  renderDropdown(termo);
  dd.classList.add('open');
  arrow.classList.add('open');
}

function fecharDropdown() {
  document.getElementById('search-dropdown').classList.remove('open');
  document.getElementById('search-arrow').classList.remove('open');
  dropdownFocusIdx = -1;
}

function navDropdown(e) {
  const dd    = document.getElementById('search-dropdown');
  const items = dd.querySelectorAll('.dropdown-item');
  if (!dd.classList.contains('open') || !items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    dropdownFocusIdx = Math.min(dropdownFocusIdx + 1, items.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    dropdownFocusIdx = Math.max(dropdownFocusIdx - 1, 0);
  } else if (e.key === 'Enter' && dropdownFocusIdx >= 0) {
    e.preventDefault();
    const id = parseInt(items[dropdownFocusIdx].dataset.id);
    selecionarDropdownItem(id);
    return;
  } else if (e.key === 'Escape') {
    fecharDropdown(); return;
  }

  items.forEach((el, i) => el.classList.toggle('focused', i === dropdownFocusIdx));
  if (dropdownFocusIdx >= 0) items[dropdownFocusIdx].scrollIntoView({ block: 'nearest' });
}

// Fecha ao clicar fora
document.addEventListener('click', e => {
  if (!document.getElementById('search-select-wrap').contains(e.target)) fecharDropdown();
});

// ============================================================
// SELECT DO CARDÁPIO (mantido para compatibilidade interna)
// ============================================================
function renderCardapioSelect() {
  // Apenas re-renderiza o dropdown se já estiver aberto
  const dd = document.getElementById('search-dropdown');
  if (dd.classList.contains('open')) renderDropdown(document.getElementById('item-search').value);
  // Se o item selecionado foi deletado do cardápio, limpa
  if (itemSelecionado && !cardapio.find(i => i.id === itemSelecionado.id)) {
    setItemSelecionado(null);
  }
}

// ============================================================
// HELPER — detecta o tipo do item selecionado
// Tipos possíveis: 'petisco' | 'suco-copo' | 'suco-jarra' | 'bebida'
// ============================================================
function getTipoItem(item) {
  if (!item) return null;
  const cat  = item.cat;
  const sub  = item.subcat || '';
  const nome = item.nome.toLowerCase();
  if (cat === 'petisco')                         return 'petisco';
  if (sub === 'suco' && !nome.includes('jarra')) return 'suco-copo';
  if (sub === 'suco' &&  nome.includes('jarra')) return 'suco-jarra';
  return 'bebida';
}

// ============================================================
// ON ITEM CHANGE — exibe campos condicionais corretos
// ============================================================
function onItemChange() {
  const item = itemSelecionado;
  const tipo = getTipoItem(item);
  const sub  = item ? (item.subcat || '') : '';

  resetForm();

  if (tipo === 'suco-copo') {
    setVisible('field-gelo-suco',   true);
    setVisible('field-acucar-suco', true);
  }
  else if (tipo === 'suco-jarra') {
    setVisible('field-gelo-suco',   true);
    setVisible('field-acucar-suco', true);
    setVisible('field-qtd-copos',   true);
  }
  else if (tipo === 'bebida') {
    setVisible('field-qtd-copos',   true);
    setVisible('field-copos-lista', true);
    qtdCopos = 1;
    document.getElementById('qtd-copos-valor').textContent = 1;
    renderCoposLista(sub);
  }
}

function resetForm() {
  ['field-qtd-copos','field-copos-lista','field-gelo-suco','field-acucar-suco'].forEach(id => {
    document.getElementById(id).classList.remove('visible');
  });
  sucoToggle = { gelo: null, acucar: null };
  ['gelo-suco-sim','gelo-suco-nao','acucar-suco-sim','acucar-suco-nao'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = 'toggle-btn';
  });
  coposState = [];
  qtdCopos   = 1;
  document.getElementById('copos-lista').innerHTML       = '';
  document.getElementById('qtd-copos-valor').textContent = 1;
}

function setVisible(id, mostrar) {
  const el = document.getElementById(id);
  if (mostrar) el.classList.add('visible');
  else         el.classList.remove('visible');
}

// ============================================================
// QUANTIDADE DE COPOS
// ============================================================
function alterarQtdCopos(delta) {
  const item = itemSelecionado;
  const sub  = item ? (item.subcat || '') : '';
  const tipo = getTipoItem(item);

  qtdCopos = Math.max(1, Math.min(20, qtdCopos + delta));
  document.getElementById('qtd-copos-valor').textContent = qtdCopos;

  if (tipo === 'bebida') renderCoposLista(sub);
}

// ============================================================
// RENDERIZAR CARDS DE COPOS INDIVIDUAIS (bebidas não-suco)
// ============================================================
function renderCoposLista(subcat) {
  const container = document.getElementById('copos-lista');
  const ehRefri   = subcat === 'refrigerante';

  while (coposState.length < qtdCopos) coposState.push({ gelo: null, limao: null });
  coposState = coposState.slice(0, qtdCopos);

  let html = '<div class="copos-lista-wrap">';
  for (let i = 0; i < qtdCopos; i++) {
    html += `
      <div class="copo-card" id="copo-card-${i}">
        <div class="copo-titulo"><span class="copo-titulo-icon">🥤</span> Copo ${i + 1}</div>
        <div class="copo-campo">
          <label>Gelo</label>
          <div class="toggle-group">
            <button class="toggle-btn ${coposState[i].gelo === 'sim' ? 'selected-yes' : ''}"
              id="copo-${i}-gelo-sim" onclick="selectCopo(${i},'gelo','sim')">Com Gelo</button>
            <button class="toggle-btn ${coposState[i].gelo === 'nao' ? 'selected-no' : ''}"
              id="copo-${i}-gelo-nao" onclick="selectCopo(${i},'gelo','nao')">Sem Gelo</button>
          </div>
        </div>
        ${ehRefri ? `
        <div class="copo-campo">
          <label>Limão</label>
          <div class="toggle-group">
            <button class="toggle-btn ${coposState[i].limao === 'sim' ? 'selected-yes' : ''}"
              id="copo-${i}-limao-sim" onclick="selectCopo(${i},'limao','sim')">Com Limão</button>
            <button class="toggle-btn ${coposState[i].limao === 'nao' ? 'selected-no' : ''}"
              id="copo-${i}-limao-nao" onclick="selectCopo(${i},'limao','nao')">Sem Limão</button>
          </div>
        </div>` : ''}
      </div>`;
  }
  html += '</div>';
  container.innerHTML = html;
}

function selectCopo(idx, campo, valor) {
  coposState[idx][campo] = valor;
  document.getElementById(`copo-${idx}-${campo}-sim`).className = 'toggle-btn' + (valor === 'sim' ? ' selected-yes' : '');
  document.getElementById(`copo-${idx}-${campo}-nao`).className = 'toggle-btn' + (valor === 'nao' ? ' selected-no'  : '');
}

// ============================================================
// TOGGLES DE SUCO (gelo e açúcar únicos — copo e jarra)
// ============================================================
function selectToggleSuco(campo, valor) {
  sucoToggle[campo] = valor;
  document.getElementById(`${campo}-suco-sim`).className = 'toggle-btn' + (valor === 'sim' ? ' selected-yes' : '');
  document.getElementById(`${campo}-suco-nao`).className = 'toggle-btn' + (valor === 'nao' ? ' selected-no'  : '');
}

// ============================================================
// ADICIONAR ITEM AO PEDIDO
// ============================================================
function adicionarItem() {
  const comanda = document.getElementById('comanda').value.trim();
  const item    = itemSelecionado;
  const tipo    = getTipoItem(item);
  const sub     = item ? (item.subcat || '') : '';

  const obs     = document.getElementById('obs').value.trim();

  if (!comanda) { mostrarNotif('⚠ Preencha o número da comanda'); return; }
  if (!tipo)    { mostrarNotif('⚠ Selecione um item');            return; }

  // PETISCO
  if (tipo === 'petisco') {
    pushItem({ comanda, nome: item.nome, tipo: 'petisco', obs });
    resetAposAdicionar(); return;
  }

  // SUCO COPO
  if (tipo === 'suco-copo') {
    if (sucoToggle.gelo   === null) { mostrarNotif('⚠ Escolha: Com Gelo ou Sem Gelo');     return; }
    if (sucoToggle.acucar === null) { mostrarNotif('⚠ Escolha: Com Açúcar ou Sem Açúcar'); return; }
    pushItem({ comanda, nome: item.nome, tipo: 'suco-copo', obs,
      gelo: sucoToggle.gelo, acucar: sucoToggle.acucar });
    resetAposAdicionar(); return;
  }

  // SUCO JARRA
  if (tipo === 'suco-jarra') {
    if (sucoToggle.gelo   === null) { mostrarNotif('⚠ Escolha: Com Gelo ou Sem Gelo');     return; }
    if (sucoToggle.acucar === null) { mostrarNotif('⚠ Escolha: Com Açúcar ou Sem Açúcar'); return; }
    pushItem({ comanda, nome: item.nome, tipo: 'suco-jarra', obs,
      gelo: sucoToggle.gelo, acucar: sucoToggle.acucar, qtdCopos });
    resetAposAdicionar(); return;
  }

  // BEBIDA com copos individuais
  for (let i = 0; i < qtdCopos; i++) {
    if (coposState[i].gelo === null) {
      mostrarNotif(`⚠ Copo ${i + 1}: escolha Gelo ou Sem Gelo`); return;
    }
    if (sub === 'refrigerante' && coposState[i].limao === null) {
      mostrarNotif(`⚠ Copo ${i + 1}: escolha Limão ou Sem Limão`); return;
    }
  }
  pushItem({ comanda, nome: item.nome, tipo: 'bebida', sub, obs,
    copos: coposState.map(c => ({ ...c })) });
  resetAposAdicionar();
}

function pushItem(item) {
  item.id = nextId++;
  itens.push(item);
  salvarItens();
  atualizarBadge();
  mostrarNotif('✓ ' + item.nome + ' adicionado');
  document.getElementById('resumo-comanda-num').textContent    = item.comanda;
  document.getElementById('resumo-comanda-info').style.display = 'inline-flex';
}

function resetAposAdicionar() {
  itemSelecionado = null;
  document.getElementById('item-search').value = '';
  document.getElementById('obs').value         = '';
  coposState = [];
  qtdCopos   = 1;
  sucoToggle = { gelo: null, acucar: null };
  resetForm();
}

// ============================================================
// RENDERIZAR RESUMO
// ============================================================
function renderResumo() {
  const lista    = document.getElementById('lista-itens');
  const btn      = document.getElementById('btn-finalizar');
  const badge    = document.getElementById('total-badge');
  const clearBtn = document.getElementById('btn-clear');

  badge.textContent = itens.length;
  btn.disabled      = itens.length === 0;

  if (itens.length > 0) {
    document.getElementById('resumo-comanda-num').textContent    = itens[0].comanda;
    document.getElementById('resumo-comanda-info').style.display = 'inline-flex';
  }

  if (itens.length === 0) {
    lista.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🗒️</div>
        <div>Nenhum item adicionado ainda.<br>Vá para "Novo Pedido" para começar.</div>
      </div>`;
    clearBtn.style.display = 'none';
    return;
  }

  clearBtn.style.display = 'inline-block';

  lista.innerHTML = itens.map((item, idx) => {
    let detalhes = '';

    if (item.tipo === 'petisco') {
      detalhes = '<span class="pill pill-neutral">🍽️ Petisco</span>';
    }

    else if (item.tipo === 'suco-copo') {
      detalhes = `
        <div class="item-copos-lista">
          <div class="item-copo-row">
            <span class="pill ${item.gelo   === 'sim' ? 'pill-yes' : 'pill-no'}">${item.gelo   === 'sim' ? '✓ Gelo'   : '✗ Gelo'}</span>
            <span class="pill ${item.acucar === 'sim' ? 'pill-yes' : 'pill-no'}">${item.acucar === 'sim' ? '✓ Açúcar' : '✗ Açúcar'}</span>
          </div>
        </div>`;
    }

    else if (item.tipo === 'suco-jarra') {
      detalhes = `
        <div class="item-copos-lista">
          <div class="item-copo-row">
            <span class="pill pill-neutral">🥤 ${item.qtdCopos} copo${item.qtdCopos > 1 ? 's' : ''}</span>
            <span class="pill ${item.gelo   === 'sim' ? 'pill-yes' : 'pill-no'}">${item.gelo   === 'sim' ? '✓ Gelo'   : '✗ Gelo'}</span>
            <span class="pill ${item.acucar === 'sim' ? 'pill-yes' : 'pill-no'}">${item.acucar === 'sim' ? '✓ Açúcar' : '✗ Açúcar'}</span>
          </div>
        </div>`;
    }

    else if (item.tipo === 'bebida') {
      const linhas = item.copos.map((copo, ci) => {
        let pills = `<span class="pill ${copo.gelo === 'sim' ? 'pill-yes' : 'pill-no'}">${copo.gelo === 'sim' ? '✓ Gelo' : '✗ Gelo'}</span>`;
        if (copo.limao != null) pills += ` <span class="pill ${copo.limao === 'sim' ? 'pill-yes' : 'pill-no'}">${copo.limao === 'sim' ? '✓ Limão' : '✗ Limão'}</span>`;
        return `<div class="item-copo-row"><span class="item-copo-label">Copo ${ci + 1}</span>${pills}</div>`;
      }).join('');
      detalhes = `<div class="item-copos-lista">${linhas}</div>`;
    }

    return `
      <div class="item-card">
        <div class="item-num">${idx + 1}</div>
        <div class="item-info">
          <div class="item-name">${item.nome}</div>
          ${detalhes}
          ${item.obs ? `<div class="item-obs">📝 ${item.obs}</div>` : ''}
        </div>
        <button class="btn-remove" onclick="removerItem(${item.id})">×</button>
      </div>`;
  }).join('');
}

function removerItem(id) {
  itens = itens.filter(i => i.id !== id);
  salvarItens(); atualizarBadge(); renderResumo();
}

function limparTudo() {
  if (!confirm('Limpar todos os itens do pedido?')) return;
  itens = [];
  salvarItens(); atualizarBadge(); renderResumo();
  document.getElementById('resumo-comanda-info').style.display = 'none';
}

function atualizarBadge() {
  const b = document.getElementById('tab-badge');
  b.textContent   = itens.length;
  b.style.display = itens.length > 0 ? 'inline-block' : 'none';
}

// ============================================================
// FINALIZAR — monta mensagem e abre WhatsApp
// ============================================================
function finalizarPedido() {
  if (itens.length === 0) return;
  const num = wppNum.replace(/\D/g, '');
  if (!num) { mostrarNotif('⚠ Configure o número do WhatsApp no Cardápio'); return; }

  const comanda = itens[0].comanda;
  const emojis  = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'];
  let msg = `🧾 *PEDIDO - COMANDA Nº ${comanda}*\n\n`;

  itens.forEach((item, idx) => {
    const ne = idx < 10 ? emojis[idx] : `${idx + 1}.`;
    msg += `${ne} ${item.nome}\n`;

    if (item.tipo === 'suco-copo') {
      msg += `   • Gelo: ${item.gelo === 'sim' ? 'Sim' : 'Não'}\n`;
      msg += `   • Açúcar: ${item.acucar === 'sim' ? 'Sim' : 'Não'}\n`;
    }

    else if (item.tipo === 'suco-jarra') {
      msg += `   • Copos: ${item.qtdCopos}\n`;
      msg += `   • Gelo: ${item.gelo === 'sim' ? 'Sim' : 'Não'}\n`;
      msg += `   • Açúcar: ${item.acucar === 'sim' ? 'Sim' : 'Não'}\n`;
    }

    else if (item.tipo === 'bebida') {
      item.copos.forEach((copo, ci) => {
        msg += `   • Copo ${ci + 1}: Gelo ${copo.gelo === 'sim' ? 'Sim' : 'Não'}`;
        if (copo.limao != null) msg += ` | Limão ${copo.limao === 'sim' ? 'Sim' : 'Não'}`;
        msg += '\n';
      });
    }

    else if (item.tipo === 'petisco') {
      msg += `   ───────────────────────\n`;
    }

    if (item.obs) msg += `   📝 Obs: ${item.obs}\n`;

    msg += '\n';
  });

  msg += `─────────────────────\nTotal de itens: ${itens.length}`;
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ============================================================
// MODAL — GERENCIAR CARDÁPIO
// ============================================================
function openModal()  { document.getElementById('modal-overlay').classList.add('open'); renderModalCardapio(); }
function closeModal() { document.getElementById('modal-overlay').classList.remove('open'); }
function closeModalOutside(e) { if (e.target === document.getElementById('modal-overlay')) closeModal(); }

function renderModalCardapio() {
  const el       = document.getElementById('modal-cardapio-lista');
  const bebidas  = cardapio.filter(i => i.cat === 'bebida');
  const petiscos = cardapio.filter(i => i.cat === 'petisco');
  if (!cardapio.length) {
    el.innerHTML = '<div style="color:var(--muted);font-size:14px;text-align:center;padding:16px 0;">Nenhum item no cardápio.</div>';
    return;
  }
  let html = '';
  if (bebidas.length)  html += '<div class="cat-group-label">🥤 Bebidas</div>'  + bebidas.map(itemCardapioHTML).join('');
  if (petiscos.length) html += '<div class="cat-group-label">🍟 Petiscos</div>' + petiscos.map(itemCardapioHTML).join('');
  el.innerHTML = html;
}

function itemCardapioHTML(item) {
  const subLabel = item.subcat ? ` · ${capitalize(item.subcat)}` : '';
  return `
    <div class="cardapio-item">
      <div class="cardapio-item-info">
        <div class="cardapio-item-name">${item.nome}</div>
        <div class="cardapio-item-cat">${capitalize(item.cat)}${subLabel}</div>
      </div>
      <button class="btn-del-item" onclick="deletarItemCardapio(${item.id})">×</button>
    </div>`;
}

function deletarItemCardapio(id) {
  cardapio = cardapio.filter(i => i.id !== id);
  salvarCardapio(); renderModalCardapio(); renderCardapioSelect();
}

function adicionarCardapio() {
  const nome   = document.getElementById('novo-nome').value.trim();
  const cat    = document.getElementById('novo-cat').value;
  const subcat = cat === 'bebida' ? document.getElementById('novo-subcat').value : null;
  if (!nome) { mostrarNotif('⚠ Digite o nome do item'); return; }
  cardapio.push({ id: nextId++, nome, cat, subcat });
  salvarCardapio(); renderModalCardapio(); renderCardapioSelect();
  document.getElementById('novo-nome').value = '';
  mostrarNotif('✓ Item adicionado ao cardápio');
}

function onNovoCatChange() {
  const cat = document.getElementById('novo-cat').value;
  document.getElementById('subcat-field').style.display = cat === 'bebida' ? 'block' : 'none';
}

// ============================================================
// PERSISTÊNCIA
// ============================================================
function salvarItens()    { localStorage.setItem('pedido_itens', JSON.stringify(itens));    }
function salvarCardapio() { localStorage.setItem('cardapio',     JSON.stringify(cardapio)); }
function salvarWpp()      { wppNum = document.getElementById('whatsapp-num').value; localStorage.setItem('wpp_num', wppNum); }

// ============================================================
// UTILITÁRIOS
// ============================================================
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

function mostrarNotif(msg) {
  const el = document.getElementById('notif');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(notifTimer);
  notifTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

// ============================================================
// START
// ============================================================
init();
