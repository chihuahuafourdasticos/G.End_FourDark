// --- Address Generator Data ---
// Default addresses, used if nothing is in localStorage
const defaultAddresses = {
    1: `São Paulo\n Endereço 1 \nCidade: São Paulo\n Estado: São Paulo\n Cep: 04078010\n Bairro: moema– planalto paulista\n Endereço: Avenida Divino Salvador\n Numero: 12\n Complemento: 152A apto`,
    2: `Endereço 2\n Cep: 04060000\n Cidade: São Paulo\n Estado: São Paulo\n Bairro: Planalto Paulista\n Endereço: Avenida Pianssanguaba\n Numero: 80\n Complemento: Condominio Flores do campo casa 9, ENTREGA DO RONY\n Id: Flores9`,
    3: `São Paulo\n Endereço 3\n Cep: 04089010\n Cidade: São Paulo\n Estado: São Paulo\n Bairro: Indianópolis / Moema / Moema Índios\n Endereço: Alameda dos Macaratins\n Numero: 305\n Complemento: Edifício Oca Maratins Apartamento 152, ENTREGA DO RONY\n Id: Oca152`,
    4: `Bertioga\n Endereço 4\n Cep: 11262141\n Cidade: Bertioga\n Estado: São Paulo\n Bairro: Riviera de São Lourenço Módulo 8\n Endereço: Passeio do Pontal\n Numero: 420\n Complemento: Condomínio AllTime Riviera Torre 4 Apartamento 52, ENTREGA DO RONY\n Id: Allime52`,
    5: `Bertioga\n Endereço 5\n Cep: 11262129\n Cidade: Bertioga\n Estado: São Paulo\n Bairro: Riviera de São Lourenço Módulo 8\n Endereço: Passeio do Maracaí\n Numero: 145\n Complemento: Edifício Evidence Apartamento 64, ENTREGA DO RONY\n Id: Evidence64`,
    6: `Bertioga\n Endereço 6\n Cep: 11262135\n Cidade: Bertioga\n Estado: São Paulo\n Bairro: Riviera de São Lourenço Módulo 7\n Endereço: Alameda do Monjoleiro\n Numero: 32\n Complemento: Edifício Ipanema Apartamento 52, ENTREGA DO RONY\n Id: Ipanema52`,
    7: `Bertioga\n Endereço 7\n Cep: 11262123\n Cidade: Bertioga\n Estado: São Paulo\n Bairro: Riviera de São Lourenço Módulo 6\n Endereço: Passeio do Jatobá\n Numero: 10\n Complemento: Edifício Porto Belo Apartamento 63, ENTREGA DA IVADI\n Id: Portobelo53`,
    8: `Guarulhos\n Endereço 8\n Cep: 07063010\n Cidade: Guarulhos\n Estado: São Paulo\n Bairro: Torres de bagi\n Endereço: avenida Júlio Prestes\n Numero: 901\n Complemento: casa 4, entregar para M`,
    9: `Amparo\n Endereço 9\n Endereço: Rua Barao Cintra\n Bairro: SantoAntonio, Sjudas, SanJudas, Sanantoniw\n cep: 13901280\n Numero: 336\n Complemento: Condominio Loureiro Colocar casas acima do número 100, exemplos IOOOA, 657B, 876J, 598C, etc)`,
    10: `Amparo\n Endereço 10\n cep: 13900470\n Bairro: Centro\n Endereço: Rua Comendador Guimaraes\n Numero: 456\n Complemento: Apto 32 Ed Brasilial`,
    11: `Amparo\n Endereço 11\n cep: 13900370\n Bairro: Centro\n Endereço: Rua Angelo Lavezzo\n Numero: 111\n Complemento: Apto 103`,
    12: `Amparo\n Endereço 12\n cep: 13901280\n Bairro: SantoAntonio, Sjudas, SanJudas, Sanantoniw\n Endereço: Rua Barao Cintra\n Numero: 261\n Complemento: Entregar VICENTE`,
    13: `Amparo\n Endereço 13\n cep: 13900400\n Bairro: Centro\n Endereço: Avenida Bernardino de Campos\n Numero: 48\n Complemento: Loja Limaozinho, Loja Baby, Loja Bebe`,
    14: `Amparo\n Endereço 14\n cep: 13900400\n Bairro: Centro\n Endereço: Avenida Bernardino de Campos\n Numero: 173\n Complemento: Jose Nilton Clinica, Clinica Gastro, Sonia Maria Rosa Clinica, Clinica dos Rosa, Encomenda do Vicente, Entrega do Vicente`,
    15: `Itapeva MG\n Endereço 15\n Cep: 37655000\n Bairro: Centro\n Endereço: Praça Joaquim Luiz\n Numero: 36\n Complemento: ENTREGAR LUIS, OTICAS BELLA`,
    16: `Itatiba\n Endereço 16\n Cep: 13256490\n Cidade: Itatiba\n Estado: SP\n Bairro: Vila Brasileira\n Endereço: Rua dos Operarios\n Numero: 110\n Complemento: Terça e quinta não entrar antes das 13 , Entregar Marcio`,
    17: `Santa Bárbara d'Oeste\n Endereço 17\n Cep: 13456132\n Cidade: Santa Bárbara d'Oeste\n Estado: SP\n Bairro: Distrito Industrial I\n Endereço: Rua Frederico Amadeo Covolan\n Numero: 270\n Complemento: Entregar Anselmo`,
    18: `Itatiba\n Endereço 18\n Cep: 13255057\n Cidade: Itatiba\n Estado: SP\n Bairro: Não especificado (ou Residencial Beija Flor)\n Endereço: Rua Antenor José Momentel\n Numero: S/N\n Complemento: Bloco 21 apto 23 Condomínio residencial Beija Flor Fase B, Entregar Edna`,
    'e1': `Seropedica - Casa\n Endereço 1\n Cep: 23894330\n Cidade: Seropedica\n Estado: rj\n Bairro: Boa Esperança / coqueiral / mutirão\n Endereço: Rua Tacaratu Marques\n Numero: 6\n Complemento: sem xxxxxxxxxxx`,
    'e2': `Seropedica - Girassol\n Endereço 2\n Cep: 23894338\n Cidade: Seropedica\n Estado: rj\n Bairro: Boa Esperança\n Endereço: Rua Marquês de Valência\n Numero: 228\n Complemento: Para Cátia / Marcelo xxxxxxxxxxxxx`,
    'e3': `Seropedica - Vó\n Endereço 3\n Cep: 23895330\n Cidade: Seropedica\n Estado: rj\n Bairro: Fazenda Caxias\n Endereço: Rua Isidro Borges\n Numero: 123\n Complemento: Ao Lado da Igreja Congregacional xxxxxxxxxxxxx`,
    'e4': `Seropedica - Escola\n Endereço 4\n Cep: 23895075\n Cidade: Seropedica\n Estado: rj\n Bairro: Fazenda Caxias\n Endereço: Rua Josino Fernades Nunes\n Numero: 447\n Complemento: Creche Escola Aquarela`
};
const defaultLockedBalls = ['4', '18'];
const defaultBallMeta = {
    'casa': { display: '🏠', title: 'Endereço Casa' },
    'e2': { display: '🌻', title: 'Endereço Girassol' },
    'e3': { display: '👵', title: 'Endereço Vó' },
    'e4': { display: '🏫', title: 'Endereço Escola' }
};

const prefixes = [
  "enviar para", "destinado a", "encomenda pra", "mercadoria para",
  "objeto destinado", "a morador de", "localizado em", "deixar em",
  "Remeter a", "Dirigido a", "Pedido para", "Produto para",
  "Item destinado a", "Para residente de", "Situado em", "Depositar em"
];

// --- Persistent State ---
let addresses = {};
let lockedBalls = [];
let ballMeta = {};
let addressGeneratorTitle = 'Gerador_CH_3.0'; // Default title

// Load state from localStorage or use defaults
function loadState() {
    try {
        const storedAddresses = localStorage.getItem('addressGenerator_addresses');
        const storedLocked = localStorage.getItem('addressGenerator_lockedBalls');
        const storedMeta = localStorage.getItem('addressGenerator_ballMeta');
        const storedTitle = localStorage.getItem('addressGenerator_title');

        addresses = storedAddresses ? JSON.parse(storedAddresses) : { ...defaultAddresses };
        lockedBalls = storedLocked ? JSON.parse(storedLocked) : [...defaultLockedBalls];
        ballMeta = storedMeta ? JSON.parse(storedMeta) : { ...defaultBallMeta };
        addressGeneratorTitle = storedTitle || 'Gerador_CH_3.0';

        // Update title element on load
        const titleEl = document.getElementById('address-generator-title');
        if (titleEl) {
            titleEl.textContent = addressGeneratorTitle;
        }
    } catch (e) {
        console.error("Failed to load state from localStorage, using defaults.", e);
        addresses = { ...defaultAddresses };
        lockedBalls = [...defaultLockedBalls];
        ballMeta = { ...defaultBallMeta };
        addressGeneratorTitle = 'Gerador_CH_3.0';
    }
}

// Save state to localStorage
function saveState() {
    try {
        localStorage.setItem('addressGenerator_addresses', JSON.stringify(addresses));
        localStorage.setItem('addressGenerator_lockedBalls', JSON.stringify(lockedBalls));
        localStorage.setItem('addressGenerator_ballMeta', JSON.stringify(ballMeta));
        localStorage.setItem('addressGenerator_title', addressGeneratorTitle);
    } catch (e) {
        console.error("Failed to save state to localStorage.", e);
        alert("Erro ao salvar as alterações. O armazenamento pode estar cheio.");
    }
}

// Make addresses available for other modules
export { addresses };

// Mapping for emoji balls - DEPRECATED in favor of ballMeta
const emojiMap = {
    'e1': '🏠', // casa
    'e2': '🌻', // girassol
    'e3': '👵', // vó
    'e4': '🏫'  // escola
};

// --- Robot Sequencer State ---
let robotSequence = [];
let currentRobotIndex = 0;
let robotViewMode = 'blue'; // 'blue' or 'black'

// --- Address Generator Functions ---
function generateRandomPunctuation() {
  const puncts = ['.', ',', ';', '(', ')', '-', '/', ''];
  return puncts[Math.floor(Math.random() * puncts.length)];
}

function modifyWord(word) {
  let result = '';
  // Remove existing punctuation before adding new ones
  const cleanWord = word.replace(/[.,;()\-/\s]/g, '');
  for (let i = 0; i < cleanWord.length; i++) {
    result += cleanWord[i];
    if (Math.random() < 0.3) {
      result += generateRandomPunctuation();
    }
  }
  return result;
}

function generateVariation(address) {
  // Extract the core address part after "Endereço:"
  const addressRegex = /Endereço:\s*(.*)/i;
  const match = address.match(addressRegex);
  const coreAddress = match ? match[1].trim() : address.trim(); // Use full input if no "Endereço:"
  return modifyWord(coreAddress);
}

function getRandomPrefix() {
  return prefixes[Math.floor(Math.random() * prefixes.length)];
}

export function generateVariations() {
  const originalText = document.getElementById('originalText').value;
  const count = parseInt(document.getElementById('count').value);
  const output = document.getElementById('output');
  if (!output) {
      console.error("Output element not found");
      return;
  }

  // Find the line containing "Endereço:"
  const lines = originalText.split('\n');
  let addressLine = '';
  let addressLineIndex = -1;
  for(let i=0; i< lines.length; i++) {
      // More robust regex to find "Endereço:" ignoring leading/trailing whitespace
      if (lines[i].trim().match(/^Endereço:/i)) {
          addressLine = lines[i];
          addressLineIndex = i;
          break;
      }
  }

  let variationsHtml = '';

  if (addressLineIndex !== -1) {
    const addressRegex = /Endereço:\s*(.*)/i;
    const match = addressLine.match(addressRegex);

    if (match && match[1] !== undefined && match[1].trim() !== '') {
      const originalAddressPart = match[1].trim(); // Get only the text after "Endereço:"

      for (let i = 0; i < count; i++) {
        const prefix = getRandomPrefix();
        // Generate variation based ONLY on the part after "Endereço:"
        const modifiedAddressPart = modifyWord(originalAddressPart);
        const fullVariationText = `${prefix} ${modifiedAddressPart}`;

        // Escape quotes for the onclick handler
        const escapedPrefix = prefix.replace(/'/g, "\\'");
        const escapedVariation = modifiedAddressPart.replace(/'/g, "\\'");

        variationsHtml += `
          <div class="variation">
            <span>${i + 1}) ${fullVariationText}</span>
            <button onclick="addressGenerator.copyVariation(this, '${escapedPrefix}', '${escapedVariation}')">Copiar</button>
          </div>
        `;
      }
    } else {
       variationsHtml += `<div class="variation"><span>A linha "Endereço:" foi encontrada, mas está vazia ou em formato inválido.</span></div>`;
    }
  } else {
     variationsHtml += `<div class="variation"><span>Linha começando com "Endereço:" não encontrada no texto original.</span></div>`;
  }

  output.innerHTML = variationsHtml;
}

export function copyVariation(buttonElement, prefix, variation) {
  const originalText = document.getElementById('originalText').value;
  const lines = originalText.split('\n');
  let addressLineIndex = -1;

  // Find the original "Endereço:" line again
  for(let i=0; i< lines.length; i++) {
      if (lines[i].trim().match(/^Endereço:/i)) {
          addressLineIndex = i;
          break;
      }
  }

  if (addressLineIndex !== -1) {
    // Keep the original "Endereço: " part and append the generated prefix + variation
    const newAddressLine = `Endereço: ${prefix} ${variation}`;
    lines[addressLineIndex] = newAddressLine; // Replace the original address line
    const newText = lines.join('\n'); // Join the lines back

    navigator.clipboard.writeText(newText).then(() => {
        const originalButtonText = buttonElement.textContent;
        buttonElement.textContent = 'Copiado!';
        setTimeout(() => {
            buttonElement.textContent = originalButtonText;
        }, 1500);
    }).catch(err => {
      console.error('Falha ao copiar texto: ', err);
       alert('Falha ao copiar texto.');
    });
  } else {
    alert('Linha "Endereço:" não encontrada no texto original para copiar.');
  }
}

function createBalls() {
    const ballContainer = document.querySelector('#address-generator .ball-container');
    if (!ballContainer) return; // Exit if container not found
    ballContainer.innerHTML = ''; // Clear existing balls if any

    // --- Context Menu Handling ---
    const hideContextMenu = () => {
        const existingMenu = document.getElementById('ball-context-menu');
        if (existingMenu) existingMenu.remove();
        document.removeEventListener('click', hideContextMenu);
    };

    const showContextMenu = (e, key, isLocked) => {
        e.preventDefault();
        hideContextMenu(); // Hide any previous menu

        const menu = document.createElement('div');
        menu.id = 'ball-context-menu';
        menu.className = 'context-menu';
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;

        menu.innerHTML += `<div class="context-menu-item" onclick="addressGenerator.handleBallAction('edit', '${key}')">Editar</div>`;

        if (isLocked) {
            menu.innerHTML += `<div class="context-menu-item" onclick="addressGenerator.handleBallAction('unlock', '${key}')">Desbloquear</div>`;
        } else {
            menu.innerHTML += `<div class="context-menu-item" onclick="addressGenerator.handleBallAction('lock', '${key}')">Bloquear</div>`;
        }
        menu.innerHTML += `<div class="context-menu-item delete" onclick="addressGenerator.handleBallAction('delete', '${key}')">Excluir</div>`;

        document.body.appendChild(menu);

        // Use a timeout to add the event listener, preventing it from firing immediately on the same click
        setTimeout(() => document.addEventListener('click', hideContextMenu), 0);
    };
    // --- End Context Menu Handling ---

    const sortedKeys = Object.keys(addresses).sort((a, b) => {
        const aIsNum = /^\d+$/.test(a);
        const bIsNum = /^\d+$/.test(b);
        if (aIsNum && bIsNum) return Number(a) - Number(b); // Sort numbers numerically
        if (aIsNum) return -1; // Numbers first
        if (bIsNum) return 1;
        return a.localeCompare(b); // Sort others alphabetically
    });

    sortedKeys.forEach(key => {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        const isLocked = lockedBalls.includes(key);

        if (isLocked) {
            ball.textContent = (ballMeta[key]?.display || key) + '🔒';
            ball.classList.add('locked');
            ball.title = "Endereço bloqueado";
            ball.addEventListener('click', () => { /* Do nothing */ });
        } else if (ballMeta[key]) {
            ball.classList.add('emoji-ball'); // Assumes black ball for meta entries
            ball.textContent = ballMeta[key].display;
            ball.title = ballMeta[key].title || `Endereço ${key}`;
            ball.addEventListener('click', () => populateAndGenerate(key));
        } else {
            ball.textContent = key;
            ball.title = `Endereço ${key}`;
            ball.addEventListener('click', () => populateAndGenerate(key));
        }

        // Add right-click listener
        ball.addEventListener('contextmenu', (e) => showContextMenu(e, key, isLocked));

        ballContainer.appendChild(ball);
    });

    // --- Add the Green "Add" Ball ---
    const addBall = document.createElement('div');
    addBall.classList.add('ball', 'add-ball');
    addBall.textContent = '+';
    addBall.title = 'Adicionar novo endereço';
    addBall.addEventListener('click', handleAddNewBall);
    ballContainer.appendChild(addBall);
}

function updateRobotSequence() {
    const allKeys = Object.keys(addresses);

    if (robotViewMode === 'blue') {
        robotSequence = allKeys
            .filter(key => /^\d+$/.test(key) && !lockedBalls.includes(key))
            .map(Number)
            .sort((a, b) => a - b)
            .map(String);
    } else { // 'black' mode
        robotSequence = allKeys
            .filter(key => !/^\d+$/.test(key) && !lockedBalls.includes(key))
            .sort((a, b) => a.localeCompare(b)); // Sort black balls alphabetically by key
    }

    currentRobotIndex = 0; // Reset index whenever the sequence/view changes
    populateBallSelector();
    updateRobotDisplay();
}

/**
 * Generates a full data package for a given ball key.
 * This is the core reusable logic for robot-style generation.
 * @param {string} ballKey - The key of the address ball to use.
 * @returns {Promise<string|null>} - The combined text data, or null on failure.
 */
async function generateFullDataPackage(ballKey) {
    // 1. Get Name/CPF data from nameModifier
    const nameDataModule = await import('./nameModifier.js');
    const nameData = await nameDataModule.getNewName(true); // true = called by robot

    if (!nameData) {
        console.error('Failed to get name data for batch generation.');
        return null; // Critical failure
    }

    // 2. Generate a random phone number
    const phoneNumber = generateRandomPhoneNumber();

    // 3. Generate Address Variation
    const addressData = addresses[ballKey];
    if (!addressData) {
        console.error(`Address for ball ${ballKey} not found.`);
        return null;
    }

    const prefix = getRandomPrefix();
    const addressVariationPart = generateVariation(addressData);

    // 4. Replace the original "Endereço:" and "Complemento:" lines
    const lines = addressData.split('\n');
    let addressLineIndex = -1;
    let complementoLineIndex = -1;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().match(/^Endereço:/i)) addressLineIndex = i;
        if (lines[i].trim().match(/^Complemento:/i)) complementoLineIndex = i;
    }

    if (addressLineIndex !== -1) {
        lines[addressLineIndex] = `Endereço: ${prefix} ${addressVariationPart}`;
    }

    if (complementoLineIndex !== -1) {
        const complementoRegex = /Complemento:\s*(.*)/i;
        const match = lines[complementoLineIndex].match(complementoRegex);
        if (match && match[1]) {
            const originalComplemento = match[1];
            const modifiedComplemento = nameDataModule.createSingleComplementVariation(originalComplemento);
            lines[complementoLineIndex] = `Complemento: ${modifiedComplemento}`;
        }
    }

    const modifiedAddressBlock = lines.join('\n');

    // 5. Combine and return
    return `${nameData}\ntelefone: ${phoneNumber}\n${modifiedAddressBlock}`;
}

function generateRandomPhoneNumber() {
    // Generates a random Brazilian-style mobile number (e.g., 21987654321)
    const ddds = [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62,
        63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99
    ];
    const ddd = ddds[Math.floor(Math.random() * ddds.length)];
    // 8-digit random number (10000000 to 99999999)
    const numberPart = Math.floor(Math.random() * 90000000) + 10000000;
    return `${ddd}9${numberPart}`;
}

async function handleRobotBallClick() {
    if (robotSequence.length === 0) return;
    const feedbackDiv = document.getElementById('robot-feedback');
    const ballDisplay = document.getElementById('robot-ball-display');
    const currentBallKey = robotSequence[currentRobotIndex];

    const combinedText = await generateFullDataPackage(currentBallKey);

    if (!combinedText) {
        alert('Falha ao gerar pacote de dados completo. Verifique o console para erros.');
        feedbackDiv.textContent = `Falha ao gerar dados da bolinha ${currentBallKey}.`;
        feedbackDiv.style.borderColor = 'red';
        feedbackDiv.style.backgroundColor = '#fde2e2';
        feedbackDiv.style.display = 'block';
        return;
    }

    // 5. Combine and Copy
    try {
        await navigator.clipboard.writeText(combinedText);

        // UI Feedback for success
        feedbackDiv.textContent = `Copiado! Bolinha: ${currentBallKey}`;
        feedbackDiv.style.borderColor = '#4CAF50';
        feedbackDiv.style.backgroundColor = '#e7f4e8';
        feedbackDiv.style.display = 'block';

        const originalText = ballDisplay.textContent;
        ballDisplay.textContent = 'OK!';
        setTimeout(() => {
            ballDisplay.textContent = originalText;
            feedbackDiv.style.display = 'none';
        }, 1500);

    } catch (err) {
        console.error('Falha ao copiar dados do robô:', err);
        // UI Feedback for failure
        feedbackDiv.textContent = `Falha ao copiar dados da bolinha ${currentBallKey}.`;
        feedbackDiv.style.borderColor = 'red';
        feedbackDiv.style.backgroundColor = '#fde2e2';
        feedbackDiv.style.display = 'block';
    }
}

// --- Ball Management Functions ---

function checkPassword() {
    const pass = prompt("Para esta ação, por favor, digite a senha:");
    if (pass === '019026') {
        return true;
    } else if (pass !== null) { // User didn't click cancel
        alert("Senha incorreta.");
    }
    return false;
}

export function handleBallAction(action, key) {
    if (!checkPassword()) return;

    switch (action) {
        case 'edit':
            { // Use block scope to keep variables local
                const currentAddress = addresses[key];
                const newAddress = prompt(`Editando endereço para a bolinha "${key}":`, currentAddress);

                if (newAddress === null) {
                    // User cancelled, do nothing.
                    return;
                }

                if (newAddress.trim() === '') {
                    alert('O endereço não pode ser vazio. A edição foi cancelada.');
                    return;
                }

                addresses[key] = newAddress;
                alert(`Bolinha "${key}" atualizada com sucesso!`);
                // No re-render needed, but we must save state.
            }
            break;
        case 'lock':
            if (!lockedBalls.includes(key)) {
                lockedBalls.push(key);
            }
            break;
        case 'unlock':
            lockedBalls = lockedBalls.filter(k => k !== key);
            break;
        case 'delete':
            if (confirm(`Tem certeza que deseja excluir permanentemente o endereço "${key}"?`)) {
                delete addresses[key];
                if (ballMeta[key]) delete ballMeta[key];
                lockedBalls = lockedBalls.filter(k => k !== key);
            } else {
                return; // Do not save or refresh if user cancels
            }
            break;
        default:
            return;
    }
    saveState();
    createBalls(); // Re-render balls with new state
    updateRobotSequence();
}

async function handleAddNewBall() {
    if (!checkPassword()) return;

    const color = prompt("Qual a cor da nova bolinha?\n(Digite 'azul' ou 'preta')")?.toLowerCase();

    let newKey, newBallMeta = {};

    if (color === 'azul') {
        newKey = prompt("Digite o número para a nova bolinha azul:");
        if (!newKey || !/^\d+$/.test(newKey) || addresses[newKey]) {
            alert("Número inválido ou já existente.");
            return;
        }
    } else if (color === 'preta') {
        const display = prompt("Digite o ícone ou texto para a nova bolinha preta:");
        if (!display) {
            alert("O ícone/texto não pode ser vazio.");
            return;
        }
        // Generate a unique key for custom balls
        let i = 1;
        while (addresses[`c${i}`]) { i++; }
        newKey = `c${i}`;
        newBallMeta = { display, title: `Endereço Personalizado ${display}` };

    } else {
        alert("Cor inválida. A operação foi cancelada.");
        return;
    }

    const addressText = prompt(`Cole o texto completo do endereço para a nova bolinha "${newKey}":`);
    if (addressText === null || addressText.trim() === '') {
        alert("O texto do endereço não pode ser vazio. A operação foi cancelada.");
        return;
    }

    addresses[newKey] = addressText;
    if (Object.keys(newBallMeta).length > 0) {
        ballMeta[newKey] = newBallMeta;
    }

    alert(`Bolinha "${newKey}" adicionada com sucesso!`);
    saveState();
    createBalls();
    updateRobotSequence();
}

export function populateAndGenerate(ballNumber) {
    const addressText = addresses[ballNumber];
    if (addressText) {
        document.getElementById('originalText').value = addressText;
        generateVariations(); 
    } else {
        alert('Endereço para a bola ' + ballNumber + ' não encontrado.');
    }
}

// --- Robot Sequencer Functions ---

function updateRobotDisplay() {
    const ballDisplay = document.getElementById('robot-ball-display');
    if (robotSequence.length > 0) {
        const currentBallKey = robotSequence[currentRobotIndex];
        ballDisplay.textContent = currentBallKey;

        // Update the highlight in the selector panel
        const selectorBalls = document.querySelectorAll('#robot-ball-selector .selector-ball');
        selectorBalls.forEach((ball, index) => {
            if (index === currentRobotIndex) {
                ball.classList.add('selected');
            } else {
                ball.classList.remove('selected');
            }
        });

    } else {
        ballDisplay.textContent = 'X';
        ballDisplay.title = 'Nenhuma bolinha válida encontrada';
    }
}

function populateBallSelector() {
    const selectorContainer = document.getElementById('robot-ball-selector');
    if (!selectorContainer) return;

    selectorContainer.innerHTML = ''; // Clear previous content

    if (robotSequence.length === 0) {
        selectorContainer.innerHTML = `<span class="no-balls-message">Nenhuma bolinha ${robotViewMode === 'blue' ? 'azul' : 'preta'} disponível.</span>`;
        return;
    }

    robotSequence.forEach((ballKey, index) => {
        const selectorBall = document.createElement('div');
        selectorBall.classList.add('selector-ball');
        // Use emoji/display text if available, otherwise the key
        const displayContent = ballMeta[ballKey]?.display || ballKey;
        selectorBall.textContent = displayContent;
        selectorBall.title = ballMeta[ballKey]?.title || `Endereço ${ballKey}`;

        selectorBall.dataset.index = index; // Store index for easy lookup

        selectorBall.addEventListener('click', () => {
            currentRobotIndex = index; // Set the main index
            updateRobotDisplay(); // Update main display and highlights
        });

        selectorContainer.appendChild(selectorBall);
    });
}

// --- Initialization ---
export function initAddressGenerator() {
    loadState(); // Load addresses and states from localStorage
    createBalls(); 

    const titleElement = document.getElementById('address-generator-title');
    if (titleElement) {
        titleElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            if (checkPassword()) {
                const newTitle = prompt('Digite o novo título:', addressGeneratorTitle);
                if (newTitle && newTitle.trim() !== '') {
                    addressGeneratorTitle = newTitle.trim();
                    titleElement.textContent = addressGeneratorTitle;
                    saveState();
                    alert('Título atualizado com sucesso!');
                } else if (newTitle !== null) {
                    alert('O título não pode ser vazio.');
                }
            }
        });
    }

    const originalTextArea = document.getElementById('originalText');
    const countInput = document.getElementById('count');

    if (originalTextArea) {
        originalTextArea.addEventListener('keypress', function(event) {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); 
            generateVariations();
          }
        });
    }

    if (countInput) {
        countInput.addEventListener('keypress', function(event) {
          if (event.key === 'Enter') {
            generateVariations();
          }
        });
    }

    // Init Robot Sequencer
    const robotToggle = document.getElementById('robot-toggle');
    const robotSequencer = document.getElementById('robot-sequencer');
    const robotNextBtn = document.getElementById('robot-next-btn');

    if (robotToggle) {
        robotToggle.addEventListener('click', () => {
            const isVisible = robotSequencer.style.display !== 'none';
            robotSequencer.style.display = isVisible ? 'none' : 'flex';
            // Also show/hide the batch button along with the sequencer
            document.getElementById('batch-generate-controls').style.display = isVisible ? 'none' : 'block';
        });
        // Hide batch button initially
        document.getElementById('batch-generate-controls').style.display = 'none';
    }

    // --- New Robot Filter Logic ---
    const filterBlueBtn = document.getElementById('filter-blue');
    const filterBlackBtn = document.getElementById('filter-black');

    const handleFilterClick = (view) => {
        if (robotViewMode === view) return; // Do nothing if already active

        robotViewMode = view;
        // Update active class on filter buttons
        filterBlueBtn.classList.toggle('active', view === 'blue');
        filterBlackBtn.classList.toggle('active', view === 'black');
        // Re-generate the sequence and update UI
        updateRobotSequence();
    };

    if (filterBlueBtn) {
        filterBlueBtn.addEventListener('click', () => handleFilterClick('blue'));
    }
    if (filterBlackBtn) {
        filterBlackBtn.addEventListener('click', () => handleFilterClick('black'));
    }
    // --- End New Robot Filter Logic ---

    if (robotNextBtn) {
        robotNextBtn.addEventListener('click', () => {
            if (robotSequence.length > 0) {
                currentRobotIndex = (currentRobotIndex + 1) % robotSequence.length;
                updateRobotDisplay();
            }
        });
    }

    // Populate the new selector panel and set initial state
    updateRobotSequence();

    // Attach click listener to the main robot ball display
    const robotBallDisplay = document.getElementById('robot-ball-display');
    if (robotBallDisplay) {
        robotBallDisplay.addEventListener('click', handleRobotBallClick);
    }
    
    // --- Batch Generator Init ---
    const batchModal = document.getElementById('batch-generator-modal');
    const batchOpenBtn = document.getElementById('batch-generate-btn');
    const batchCloseBtn = document.querySelector('.close-button.batch-close');
    const batchCopyBtn = document.getElementById('batch-copy-btn');
    
    if (batchOpenBtn) {
        batchOpenBtn.addEventListener('click', openBatchGenerator);
    }
    if (batchCloseBtn) {
        batchCloseBtn.addEventListener('click', () => batchModal.style.display = 'none');
    }
    window.addEventListener('click', (event) => {
        if (event.target == batchModal) {
            batchModal.style.display = 'none';
        }
    });
    if (batchCopyBtn) {
        batchCopyBtn.addEventListener('click', handleBatchCopy);
    }
    setupBatchQuickSelect();
}

function openBatchGenerator() {
    const modal = document.getElementById('batch-generator-modal');
    const listContainer = document.getElementById('batch-ball-list-container');
    if (!modal || !listContainer) return;

    listContainer.innerHTML = ''; // Clear previous list

    const allUnlockedBalls = Object.keys(addresses).filter(key => !lockedBalls.includes(key));
    
    // Sort them: blue (numeric) first, then black (non-numeric)
    allUnlockedBalls.sort((a, b) => {
        const aIsNum = /^\d+$/.test(a);
        const bIsNum = /^\d+$/.test(b);
        if (aIsNum && !bIsNum) return -1;
        if (!aIsNum && bIsNum) return 1;
        if (aIsNum && bIsNum) return Number(a) - Number(b);
        return a.localeCompare(b);
    });

    if (allUnlockedBalls.length === 0) {
        listContainer.innerHTML = '<p>Nenhuma bolinha desbloqueada disponível.</p>';
    } else {
        allUnlockedBalls.forEach(key => {
            const isBlue = /^\d+$/.test(key);
            const item = document.createElement('div');
            item.className = 'batch-ball-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `batch-ball-${key}`;
            checkbox.value = key;
            checkbox.dataset.color = isBlue ? 'blue' : 'black';

            const label = document.createElement('label');
            label.htmlFor = `batch-ball-${key}`;
            const displayContent = ballMeta[key]?.display || key;
            label.textContent = displayContent;

            item.appendChild(checkbox);
            item.appendChild(label);
            listContainer.appendChild(item);
        });
    }

    modal.style.display = 'flex';
}

function setupBatchQuickSelect() {
    document.getElementById('batch-select-all')?.addEventListener('click', () => {
        document.querySelectorAll('#batch-ball-list-container input[type="checkbox"]').forEach(cb => cb.checked = true);
    });
    document.getElementById('batch-select-blue')?.addEventListener('click', () => {
        document.querySelectorAll('#batch-ball-list-container input[type="checkbox"]').forEach(cb => {
            cb.checked = cb.dataset.color === 'blue';
        });
    });
     document.getElementById('batch-select-black')?.addEventListener('click', () => {
        document.querySelectorAll('#batch-ball-list-container input[type="checkbox"]').forEach(cb => {
            cb.checked = cb.dataset.color === 'black';
        });
    });
    document.getElementById('batch-select-none')?.addEventListener('click', () => {
        document.querySelectorAll('#batch-ball-list-container input[type="checkbox"]').forEach(cb => cb.checked = false);
    });
}

async function handleBatchCopy() {
    const quantityInput = document.getElementById('batch-quantity');
    const copyBtn = document.getElementById('batch-copy-btn');
    const feedbackP = document.getElementById('batch-feedback');

    const quantity = parseInt(quantityInput.value, 10);
    const selectedCheckboxes = Array.from(document.querySelectorAll('#batch-ball-list-container input:checked'));
    const selectedBallKeys = selectedCheckboxes.map(cb => cb.value);

    if (isNaN(quantity) || quantity < 1) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    if (selectedBallKeys.length === 0) {
        alert('Por favor, selecione pelo menos uma bolinha.');
        return;
    }

    copyBtn.disabled = true;
    feedbackP.textContent = 'Gerando...';

    const allGeneratedData = [];
    let failures = 0;

    for (let i = 0; i < quantity; i++) {
        // Pick a random ball from the selected list for each iteration
        const randomBallKey = selectedBallKeys[Math.floor(Math.random() * selectedBallKeys.length)];
        const dataPackage = await generateFullDataPackage(randomBallKey);
        
        if (dataPackage) {
            allGeneratedData.push(dataPackage);
        } else {
            failures++;
        }
    }

    if (allGeneratedData.length > 0) {
        const finalText = allGeneratedData.join('\n\n========================================\n\n');
        try {
            await navigator.clipboard.writeText(finalText);
            feedbackP.textContent = `${allGeneratedData.length} variações geradas e copiadas!`;
            if (failures > 0) {
                 feedbackP.textContent += ` (${failures} falhas)`;
            }
        } catch (err) {
            console.error('Failed to copy batch data:', err);
            feedbackP.textContent = 'Falha ao copiar para a área de transferência.';
        }
    } else {
        feedbackP.textContent = 'Nenhuma variação pôde ser gerada.';
    }

    setTimeout(() => {
        copyBtn.disabled = false;
        feedbackP.textContent = '';
    }, 3000);
}
