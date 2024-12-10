let medicos = [];

const formCadastro = document.getElementById('formCadastro');
const tabelaMedicos = document.getElementById('tabelaMedicos');
const inserirBtn = document.getElementById('inserirBtn');

function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const especialidade = document.getElementById('especialidade').value.trim();
    const crm = document.getElementById('crm').value.trim();

    if (!nome || !especialidade || !crm) {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    if (!/^\d+$/.test(crm)) {
        alert("O CRM deve conter apenas números!");
        return false;
    }

    return true;
}

function criarCabecalhoTabela() {
    const headerRow = tabelaMedicos.querySelector('thead tr');
    const campos = ['Nome', 'Especialidade', 'CRM', 'Ações'];

    campos.forEach(campo => {
        const th = document.createElement('th');
        th.textContent = campo;
        headerRow.appendChild(th);
    });
}

function adicionarMedicoTabela(medico) {
    const tbody = tabelaMedicos.querySelector('tbody');
    const tr = document.createElement('tr');

    Object.values(medico).forEach(valor => {
        const td = document.createElement('td');
        td.textContent = valor;
        tr.appendChild(td);
    });

    const tdAcoes = document.createElement('td');
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('btn-excluir');

    btnExcluir.addEventListener('mouseenter', () => {
        btnExcluir.style.transform = 'scale(1.1)';
    });

    btnExcluir.addEventListener('mouseleave', () => {
        btnExcluir.style.transform = 'scale(1)'; 
    });

    btnExcluir.onclick = () => excluirMedico(tbody, tr);
    tdAcoes.appendChild(btnExcluir);
    tr.appendChild(tdAcoes);

    tbody.appendChild(tr);
}

function excluirMedico(tbody, tr) {
    const index = Array.from(tbody.children).indexOf(tr);
    medicos.splice(index, 1);
    tr.remove();
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('especialidade').value = '';
    document.getElementById('crm').value = '';
}

function gravarDados() {
    const nome = document.getElementById('nome').value.trim();
    const especialidade = document.getElementById('especialidade').value.trim();
    const crm = document.getElementById('crm').value.trim();

    if (!validarFormulario()) return;

    const medico = {
        nome,
        especialidade,
        crm
    };

    medicos.push(medico);

    adicionarMedicoTabela(medico);

    limparCampos();
}

inserirBtn.addEventListener('click', gravarDados);

criarCabecalhoTabela();
