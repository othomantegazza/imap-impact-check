# Content

A Quarto project starter for the workshop in [Data Visualization for Scientists](https://github.com/othomantegazza/dataviz-for-scientists-slides/).

# Use

1. Fork and clone this repo.

2. Change the project title in [_quarto.yml](_quarto.yml).

3. Update the [LICENSE](LICENSE). 

4. Edit at will, starting from [index.qmd](index.qmd). Enjoy.

# Deploy Locally

To deploy locally:

1. Install Quarto: https://quarto.org/docs/get-started/

2. Open `quarto-example.Rproj` in Rstudio.

3. At the R console, install all R packages with:

```r
renv::restore()
```

4 At the shell console, deploy the slides with:

```sh
quarto preview
```

The analysis will be available at localhost:4200.

# License

See file [LICENSE](LICENSE).
