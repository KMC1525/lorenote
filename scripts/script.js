// Função para atualizar o JSON no lado direito
function updateJSON() {
    const title = document.getElementById('title').value;
    const world = document.getElementById('world').value;
    const places = document.getElementById('places').value;
    const characters = document.getElementById('characters').value;
    
    const lorebook = {
        nodes: {
            title: title,
            world: world,
            places: places,
            characters: characters
        }
    };
    
    document.getElementById('json-output').textContent = JSON.stringify(lorebook, null, 4);
}

// Adicionar listeners para atualizar JSON em tempo real
const textareas = document.querySelectorAll('textarea');
textareas.forEach(textarea => {
    textarea.addEventListener('input', updateJSON);
});

// Função para exportar JSON como arquivo
document.getElementById('export-btn').addEventListener('click', () => {
    const jsonContent = document.getElementById('json-output').textContent;
    if (!jsonContent) {
        alert('Nenhum conteúdo para exportar!');
        return;
    }
    
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lorebook.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Inicializar JSON vazio
updateJSON();