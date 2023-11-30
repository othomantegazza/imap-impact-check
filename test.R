  webr::install("readr")
# webr::install("stringr")

read_input <- function(vr) {
  # warning("No input")
  # vr <- 
  #   vr |> stringr::str_remove("blob:")
  out <- readr::read_csv("/data/myfile.csv")
  #out <- getwd()
  return(out)
}
    