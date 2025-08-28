# Mãos Amigas - Site da Ação Voluntária

Site web estático para a ação voluntária "Mãos Amigas", desenvolvido com Bootstrap 5 e jQuery.

## Estrutura do Projeto

```
maos-amigas/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos personalizados
├── js/
│   └── script.js       # Scripts JavaScript
├── data/               # Configurações dinâmicas
│   ├── colaboradores.json
│   ├── patrocinadores.json
│   ├── numeros-rifa.csv    # 🎯 Números da rifa
│   ├── NUMEROS-README.md   # Guia da rifa
│   └── README.md
├── images/             # Pasta para imagens
│   ├── colaboradores/
│   └── patrocinadores/
├── PERSONALIZACAO.md   # 🎨 Guia completo
├── README.md           # Este arquivo
└── LICENSE            # Licença do projeto
```

## Seções do Site

- **Hero Section**: Apresentação principal da ação
- **Hero Section**: Apresentação principal da ação
- **Sobre**: Informações sobre a ação voluntária
- **Como Funciona a Rifa**: Explicação detalhada da rifa
- **Números da Rifa**: 🎯 Sistema interativo com 500 números
- **Como Contribuir**: Formas de apoio (rifa, doações, voluntariado)
- **Fototeca**: Galeria de fotos de ações passadas
- **Colaboradores**: 👥 Equipe da organização (configurável via JSON)
- **Patrocinadores**: 🏢 Apoiadores e parceiros (configurável via JSON)
- **Contato**: Informações de contato e redes sociais

## Tecnologias Utilizadas

- HTML5
- CSS3
- Bootstrap 5.3.0
- jQuery 3.6.0
- Font Awesome 6.0.0

## Características

- ✅ **Design responsivo** - Funciona em qualquer dispositivo
- ✅ **Navegação suave** - Scroll animado entre seções
- ✅ **Sistema de rifa completo** - 500 números interativos
- ✅ **Configuração dinâmica** - JSON/CSV editáveis
- ✅ **Integração WhatsApp** - Reservas automáticas
- ✅ **Otimizado para Instagram** - Screenshots perfeitos
- ✅ **Interface moderna** - Bootstrap 5 + animações CSS

## 🚀 Como Usar

### Uso Básico:
1. **Abra** `index.html` no navegador
2. **Personalize** textos e contatos no HTML
3. **Configure** colaboradores/patrocinadores nos JSONs
4. **Gerencie** números da rifa no CSV

### Configuração Rápida:
- 🎨 **Cores**: Edite variáveis CSS em `css/style.css`
- 🖼️ **Imagens**: Adicione na pasta `images/`
- 👥 **Equipe**: Configure `data/colaboradores.json`
- 🎯 **Rifa**: Gerencie `data/numeros-rifa.csv`

### Guias Detalhados:
- 📚 `PERSONALIZACAO.md` - Guia completo
- 📊 `data/NUMEROS-README.md` - Sistema de rifa
- 🖼️ `images/README.md` - Gerenciamento de imagens

## Próximos Passos

- [x] 🎯 Sistema de números da rifa (500 números)
- [ ] 🖼️ Adicionar galeria de fotos real
- [ ] 📧 Integrar formulário de contato
- [ ] 💳 Adicionar sistema de pagamento
- [ ] 🛠️ Implementar painel administrativo
- [x] 👥 Sistema dinâmico de colaboradores
- [x] 🏢 Sistema dinâmico de patrocinadores

## Personalização

### 🎨 Cores e Temas

O site usa um sistema de variáveis CSS para fácil personalização:

```css
/* Edite estas variáveis em css/style.css */
:root {
    --primary-color: #0d6efd;      /* Cor principal */
    --accent-color: #ffc107;       /* Cor de destaque */
    --success-color: #198754;      /* Verde (WhatsApp) */
}
```

**Temas pré-definidos disponíveis:**
- 🔵 Azul (padrão) - Confiança e profissionalismo
- 🟢 Verde - Natureza e esperança
- 🟠 Laranja - Energia e entusiasmo
- 🟣 Roxo - Criatividade e inspiração

### 🖼️ Imagens e Logo

1. **Logo**: Adicione `logo.png` (200x60px) na pasta `images/`
2. **Hero**: Adicione `hero-bg.jpg` (1920x1080px) para fundo principal
3. **Galeria**: Substitua placeholders por fotos reais (800x600px)

**Instruções detalhadas**: Veja `images/README.md`

### 📝 Conteúdo

**Textos principais** (edite no `index.html`):
- Título e descrição da organização
- Informações da rifa (valores, regras, premiação)
- Dados de contato (WhatsApp, Instagram, e-mail)

**Seções personalizáveis**:
- Sobre a ação (missão e valores)
- Como funciona a rifa
- Formas de contribuir
- Informações de contato

### 📱 Contatos e Redes Sociais

**Atualize os links** no `index.html`:
```html
<!-- WhatsApp -->
<a href="https://wa.me/5511999999999">Conversar</a>

<!-- Instagram -->
<a href="https://instagram.com/maosamigas">Seguir</a>

<!-- E-mail -->
<a href="mailto:contato@maosamigas.org">Enviar</a>
```

### ⚙️ Configurações Avançadas

**JavaScript** (`js/script.js`):
- Animações e efeitos
- Integração com WhatsApp
- Compartilhamento social

**CSS** (`css/style.css`):
- Responsividade
- Animações personalizadas
- Temas alternativos

## Suporte

Para dúvidas ou sugestões, entre em contato através dos canais disponíveis no site.