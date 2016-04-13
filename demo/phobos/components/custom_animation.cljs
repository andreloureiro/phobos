(ns phobos.components.custom-animation
  (:require [reagent.core :as r]
            [phobos.core :as p]))


(def heart-animation
  {:heart (p/register-effect
           {:defaultDuration 750
            :calls [[{:scale 0} 0.05]
                    [{:scale 0} 0.2]
                    [{:scale 1.2} 0.3 {:easing "ease-out"}]
                    [{:scale 1} 0.4]]})
   :explosion (p/register-effect
               {:defaultDuration 750
                :calls [[{:scale 0 :opacity 1} 0.1]
                        [{:scale 1} 0.2]
                        [{:opacity 0} 0.4]]})})

(defn custom-animation []
  (let [fav? (r/atom false)]
    (fn []
      [:div.custom-animation
       [p/motion-component
        {:animation (when @fav? (get heart-animation :explosion))
         :run-on-mount true}
        [:div.custom-animation__circle
         {:style {:position "absolute"}}]]
       [p/motion-component
        {:animation (when @fav? (get heart-animation :heart))
         :run-on-mount true}
        [:div.custom-animation__heart
         {:class-name (if @fav?
                        "custom-animation__heart
                         custom-animation__heart--active"
                        "custom-animation__heart")
          :style {:position "absolute"}
          :on-click #(reset! fav? (not @fav?))}]]])))
