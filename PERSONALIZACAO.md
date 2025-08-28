# 🎨 Guia Completo de Personalização - Mãos Amigas

Este guia te ajudará a personalizar completamente o site da sua ação voluntária.

## 🚀 Início Rápido

### 1. Alterar Cores (5 minutos)
```css
/* Abra css/style.css e modifique: */
:root {
    --primary-color: #28a745;      /* Verde em vez de azul */
    --accent-color: #fd7e14;       /* Laranja em vez de amarelo */
}
```

### 2. Adicionar Logo (2 minutos)
1. Salve sua logo como `images/logo.png` (200x60px)
2. No `index.html`, descomente:
```html
<img src="images/logo.png" alt="Sua Logo">
```

### 3. Trocar Textos (10 minutos)
Edite diretamente no `index.html`:
- Nome da organização
- Descrição da missão
- Valores da rifa
- Contatos

## 🎨 Temas Prontos

### Tema Verde (Esperança)
```css
:root {
    --primary-color: #28a745;
    --primary-dark: #1e7e34;
    --accent-color: #fd7e14;
    --hero-gradient: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
}
```

### Tema Roxo (Inspiração)
```css
:root {
    --primary-color: #6f42c1;
    --primary-dark: #5a32a3;
    --accent-color: #e83e8c;
    --hero-gradient: linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%);
}
```

### Tema Laranja (Energia)
```css
:root {
    --primary-color: #fd7e14;
    --primary-dark: #e8590c;
    --accent-color: #20c997;
    --hero-gradient: linear-gradient(135deg, #fd7e14 0%, #e8590c 100%);
}
```

## 📸 Guia de Imagens

### Tamanhos Recomendados
| Tipo | Tamanho | Formato | Uso |
|------|---------|---------|-----|
| Logo | 200x60px | PNG | Navbar |
| Hero | 1920x1080px | JPG | Fundo principal |
| Galeria | 800x600px | JPG | Fotos de ações |
| Ícones | 64x64px | PNG/SVG | Seções |

### Onde Encontrar Imagens Gratuitas
- **Unsplash**: https://unsplash.com/s/photos/charity
- **Pexels**: https://www.pexels.com/search/volunteer/
- **Pixabay**: https://pixabay.com/images/search/helping/

## 📝 Personalização de Conteúdo

### Seção Hero
```html
<h1>Nome da Sua Organização</h1>
<p>Sua missão em uma frase impactante</p>
```

### Informações da Rifa
```html
<li><strong>Valor:</strong> R$ 10,00 por número</li>
<li><strong>Total de números:</strong> 500</li>
<li><strong>1º Prêmio:</strong> R$ 3.000,00</li>
```

### Contatos
```html
<!-- WhatsApp -->
<a href="https://wa.me/5511999999999">

<!-- Instagram -->
<a href="https://instagram.com/seuusuario">

<!-- E-mail -->
<a href="mailto:seu@email.com">
```

## 🔧 Funcionalidades Avançadas

### Adicionar Google Analytics
```html
<!-- Adicione antes do </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Integração com Facebook Pixel
```html
<!-- Adicione antes do </head> -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 📱 Responsividade

O site já é totalmente responsivo, mas você pode ajustar:

### Breakpoints Personalizados
```css
/* Mobile */
@media (max-width: 576px) {
    .hero-section h1 { font-size: 2rem; }
}

/* Tablet */
@media (max-width: 768px) {
    .card { margin-bottom: 1rem; }
}
```

## 🎯 Otimização SEO

### Meta Tags Essenciais
```html
<meta name="description" content="Sua descrição aqui">
<meta name="keywords" content="ação social, rifa, voluntariado">
<meta property="og:title" content="Nome da Organização">
<meta property="og:description" content="Descrição para redes sociais">
<meta property="og:image" content="images/og-image.jpg">
```

## 🚀 Deploy e Hospedagem

### Opções Gratuitas
1. **GitHub Pages**: Hospedagem gratuita
2. **Netlify**: Deploy automático
3. **Vercel**: Performance otimizada
4. **Firebase Hosting**: Google Cloud

### Checklist Antes do Deploy
- [ ] Todas as imagens adicionadas
- [ ] Contatos atualizados
- [ ] Cores personalizadas
- [ ] Textos revisados
- [ ] Links testados
- [ ] Responsividade verificada

## 🆘 Solução de Problemas

### Imagem não aparece
- Verifique o caminho: `images/nome-da-imagem.jpg`
- Confirme o formato: JPG, PNG, WebP
- Teste o tamanho: máximo 2MB

### Cores não mudaram
- Limpe o cache do navegador (Ctrl+F5)
- Verifique a sintaxe CSS
- Confirme que salvou o arquivo

### Site não responsivo
- Teste em diferentes dispositivos
- Use as ferramentas de desenvolvedor (F12)
- Verifique os breakpoints CSS

## 📞 Suporte

Precisa de ajuda? Entre em contato:
- 📧 E-mail: suporte@exemplo.com
- 💬 WhatsApp: (11) 99999-9999
- 📱 Telegram: @suporte

---

**Dica**: Faça sempre backup dos arquivos antes de modificar!