# Pasta de Imagens - Mãos Amigas

Esta pasta contém todas as imagens utilizadas no site. Siga as instruções abaixo para personalizar as imagens.

## Estrutura Recomendada

```
images/
├── logo.png              # Logo da organização (200x60px)
├── hero-bg.jpg           # Imagem de fundo do hero (1920x1080px)
├── natal-2023.jpg        # Foto da ação de Natal
├── criancas-2023.jpg     # Foto do Dia das Crianças
├── cestas-2023.jpg       # Foto da entrega de cestas
├── galeria/              # Pasta para mais fotos da galeria
│   ├── acao1.jpg
│   ├── acao2.jpg
│   └── ...
└── README.md             # Este arquivo
```

## Especificações das Imagens

### Logo (logo.png)
- **Tamanho**: 200x60px
- **Formato**: PNG com fundo transparente
- **Uso**: Navbar do site
- **Como usar**: Descomente a linha no index.html

### Hero Background (hero-bg.jpg)
- **Tamanho**: 1920x1080px (Full HD)
- **Formato**: JPG
- **Qualidade**: Alta (80-90%)
- **Uso**: Fundo da seção principal
- **Como usar**: Descomente as linhas CSS em style.css

### Fotos da Galeria
- **Tamanho**: 800x600px (4:3)
- **Formato**: JPG
- **Qualidade**: Média (70-80%)
- **Uso**: Seção Fototeca
- **Como usar**: Substitua os placeholders no index.html

## Como Adicionar Suas Imagens

1. **Adicione as imagens** nesta pasta seguindo os nomes sugeridos
2. **Para o logo**: Descomente a linha no `index.html`:
   ```html
   <img src="images/logo.png" alt="Mãos Amigas Logo">
   ```
3. **Para o hero background**: Descomente as linhas no `css/style.css`:
   ```css
   background-image: url('../images/hero-bg.jpg');
   background-size: cover;
   background-position: center;
   ```
4. **Para a galeria**: Substitua os placeholders no `index.html`:
   ```html
   <img src="images/natal-2023.jpg" class="card-img-top" alt="Ação de Natal">
   ```

## Dicas de Otimização

- **Comprima as imagens** antes de usar (use ferramentas como TinyPNG)
- **Use WebP** quando possível para melhor performance
- **Mantenha proporções** adequadas para evitar distorções
- **Teste em diferentes dispositivos** para garantir responsividade

## Exemplos de Imagens Gratuitas

Se precisar de imagens temporárias, use:
- **Unsplash**: https://unsplash.com/s/photos/charity
- **Pexels**: https://www.pexels.com/search/volunteer/
- **Pixabay**: https://pixabay.com/images/search/helping/

## Suporte

Para dúvidas sobre como adicionar imagens, consulte a documentação no README.md principal.