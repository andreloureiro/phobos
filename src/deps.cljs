{:foreign-libs [{:file "lib/velocity/animate.js"
                 :file-min "lib/velocity/animate.min.js"
                 :provides ["velocity-animate"]}
                {:file "lib/velocity/react.js"
                 :file-min "lib/velocity/react.min.js"
                 :provides ["velocity-react"]}
                {:file "lib/velocity/ui.js"
                 :file-min "lib/velocity/ui.min.js"
                 :provides ["velocity-ui"]
                 :requires ["velocity-animate"]}]
 :externs ["externs/phobos_externs.js"]}
