# Thesis Template for UCB Students

## Proyecto San Miguel

Documento activo: `main.tex`. La propuesta que utiliza es
`chapters/marcopractico/propuesta.tex`.

Compilar desde esta carpeta con el comando de `AGENTS.md`:

```powershell
latexmk -synctex=1 -interaction=nonstopmode -file-line-error -halt-on-error -pdf main.tex
```

La configuración `.latexmkrc` concentra los archivos auxiliares en `build/`;
el resultado sigue siendo `main.pdf` en esta carpeta. El material sustituido
se conserva en [el archivo general](../../archive/README.md).

## Procedencia de la plantilla

Latex Template for Thesis at the university "Universidad Catolica Boliviana" 

Used some ideas from:
 - [Tino Wagner](https://github.com/tuxu/ethz-thesis)
 - [Patrick Pletscher](https://github.com/ppletscher/phd-thesis-sample)
 
 The bibliography used in this template is:
 - [ISO 690](https://github.com/michal-h21/biblatex-iso690)
 
 Note: Since biblatex is used, the bib-file should be specified with \addbibresource{...}. Therefore
	avoid `\bibliography` and compile it using `biber` after `pdflatex` otherwise you will face an error
