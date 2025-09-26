# Configuração Dinâmica - Colaboradores e Patrocinadores

Esta pasta contém os arquivos JSON para configurar dinamicamente as seções de colaboradores e patrocinadores.

## Colaboradores (colaboradores.json)

### Estrutura do arquivo:
```json
[
  {
    "id": 1,
    "nome": "Nome do Colaborador",
    "cargo": "Função na organização",
    "foto": "images/colaboradores/foto.jpg",
    "descricao": "Breve descrição do colaborador",
    "instagram": "@usuario_instagram",
    "whatsapp": "5511999999999"
  }
]
```

### Campos obrigatórios:
- `id`: Número único identificador
- `nome`: Nome completo
- `cargo`: Função/cargo na organização
- `descricao`: Descrição breve (máx. 100 caracteres)

### Campos opcionais:
- `foto`: Caminho para foto (200x200px)
- `instagram`: Usuário do Instagram (com @)
- `whatsapp`: Número com código do país

## Patrocinadores (patrocinadores.json)

### Estrutura do arquivo:
```json
[
  {
    "id": 1,
    "nome": "Nome da Empresa",
    "categoria": "Ouro",
    "logo": "images/patrocinadores/logo.png",
    "descricao": "Tipo de apoio oferecido",
    "website": "https://site.com.br",
    "contato": "email@empresa.com"
  }
]
```

### Campos obrigatórios:
- `nome`: Nome da empresa/pessoa
- `descricao`: Tipo de apoio (máx. 80 caracteres)
- `instagram`: Usuário do Instagram (com @)

### Campos opcionais:
- `categoria`: "Ouro", "Prata" ou "Bronze"
- `logo`: Caminho para logo (120x80px)
- `website`: Site da empresa
- `contato`: E-mail ou telefone

## Como Adicionar/Editar

1. **Adicionar colaborador**: Inclua novo objeto no array do `colaboradores.json`
2. **Adicionar patrocinador**: Inclua novo objeto no array do `patrocinadores.json`
3. **Remover**: Delete o objeto correspondente
4. **Editar**: Modifique os campos desejados

## Dicas Importantes

- **IDs únicos**: Cada entrada deve ter um ID diferente
- **Fotos**: Adicione as imagens nas pastas correspondentes
- **Categorias**: Use exatamente "Ouro", "Prata" ou "Bronze"
- **WhatsApp**: Formato internacional (5511999999999)
- **Instagram**: Inclua o @ no início

## Exemplo Prático

Para adicionar um novo colaborador:
```json
{
  "id": 4,
  "nome": "Pedro Oliveira",
  "cargo": "Voluntário",
  "foto": "images/colaboradores/pedro.jpg",
  "descricao": "Ajuda nas entregas e eventos",
  "instagram": "@pedro.oliveira",
  "whatsapp": "5511666666666"
}
```

O site atualizará automaticamente ao recarregar a página!