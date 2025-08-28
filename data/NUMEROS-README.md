# 🎯 Sistema de Números da Rifa

## 📋 Arquivo CSV Principal

**Arquivo**: `numeros-rifa.csv`

### Formato obrigatório:
```csv
numero,status
001,disponivel
002,comprada
003,disponivel
```

### Status válidos:
- `disponivel` - Número livre para compra (verde)
- `comprada` - Número já vendido (cinza)

## ⚡ Como Atualizar Rapidamente

### Método 1: Edição Manual
1. Abra `numeros-rifa.csv`
2. Altere `disponivel` para `comprada`
3. Salve o arquivo
4. Recarregue o site (F5)

### Método 2: Arquivo Separado
- Use `numeros-comprados.csv` apenas com vendidos
- Sistema mescla automaticamente
- Mais fácil para controle

## 🚀 Funcionalidades do Sistema

### Interface Otimizada:
- ✅ **500 números**: Grid responsiva 001-500
- ✅ **Renderização inteligente**: 50 números por lote
- ✅ **Filtros rápidos**: Todos/Disponíveis/Vendidos
- ✅ **Busca instantânea**: Digite o número
- ✅ **Seleção múltipla**: Clique para escolher
- ✅ **WhatsApp direto**: Reserva automática

### Visual Instagram-Ready:
- 🟢 **Verde**: Números disponíveis
- ⚫ **Cinza**: Números vendidos  
- 🟡 **Amarelo**: Números selecionados
- 📱 **Responsivo**: Perfeito em qualquer tela

## 📸 Dicas para Instagram

### Screenshots Perfeitos:
1. **F11**: Tela cheia
2. **Ctrl +**: Zoom para números maiores
3. **Filtro "Disponíveis"**: Só números livres
4. **Captura**: Windows + Shift + S

### Posts Sugeridos:
```
🎯 RIFA MÃOS AMIGAS

✅ Números disponíveis na imagem
💰 R$ 5,00 cada número
🏆 Prêmios de até R$ 2.000

👆 Link na bio para escolher

#RifaSolidaria #MãosAmigas #Ajudar
```

## 🔧 Configurações Avançadas

### Personalizar Valores:
```javascript
// Em js/script.js, linha ~150
const VALOR_NUMERO = 5.00; // Altere aqui
```

### Alterar WhatsApp:
```javascript
// Em js/script.js, linha ~200
const whatsapp = 'https://wa.me/5511999999999'; // Seu número
```

## 📊 Exemplo Prático

### Marcar números vendidos:
```csv
numero,status
001,comprada
015,comprada
234,comprada
```

### Resultado automático:
- ❌ Remove da seleção
- 📊 Atualiza contador
- 🔒 Bloqueia cliques
- 🎨 Fica cinza

## 🆘 Solução de Problemas

### Números não aparecem:
- Verifique formato CSV
- Confirme encoding UTF-8
- Teste com arquivo exemplo

### Performance lenta:
- Sistema otimizado para 500 números
- Renderização em lotes
- Cache automático

### Erro no WhatsApp:
- Verifique número no código
- Formato: 5511999999999
- Teste manualmente

---

**💡 Dica**: Mantenha backup do CSV antes de grandes alterações!