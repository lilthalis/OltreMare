# OltreMare

Landing page estatica para a marca OltreMare.

## Estrutura

- `index.html`: estrutura principal da pagina.
- `style.css`: ajustes de tipografia, acessibilidade e componentes complementares.
- `script.js`: interacoes leves, incluindo o menu mobile.
- `OltreMareimg/`: imagens usadas na composicao do site.

## Como rodar

Abra `index.html` diretamente no navegador ou sirva a pasta com um servidor simples:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Melhorias aplicadas

- correcao das ancoras internas quebradas;
- inclusao de menu mobile funcional;
- melhoria de semantica e acessibilidade basica;
- substituicao de placeholders remotos por imagens locais;
- revisao de copy para reduzir inconsistencias de idioma;
- documentacao minima para manutencao do projeto.

## Proximos passos recomendados

- migrar o Tailwind CDN para um fluxo de build local;
- otimizar as imagens para WebP/AVIF;
- criar paginas reais para journal e catalogo;
- adicionar analytics e formulario de contato.
