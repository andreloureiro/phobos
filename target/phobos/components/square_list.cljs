(ns phobos.components.square-list
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [reagent.core :as r]
            [phobos.core :as p]
            [cljs.core.async :refer [<! timeout]]))


(def transition-list
  ["fade"
   "flipX"
   "flipY"
   "flipBounceX"
   "flipBounceY"
   "swoop"
   "whirl"
   "shrink"
   "expand"
   "bounce"
   "bounceUp"
   "bounceDown"
   "bounceLeft"
   "bounceRight"
   "slideUp"
   "slideDown"
   "slideLeft"
   "slideRight"
   "slideUpBig"
   "slideDownBig"
   "slideLeftBig"
   "slideRightBig"
   "perspectiveUp"
   "perspectiveDown"
   "perspectiveLeft"
   "perspectiveRight"])

(defn square [item]
  [:div.square-list__item
   {:key item}])

(def squares (r/atom []))

(defn render-square-list [transition]
  (fn []
    [:div {:style {:text-align "center"}}
     [:label "Transition"][:br]
     [:select.toggle-transition
      {:on-change #(reset! transition
                           (.. % -target -value))}
      (for [t transition-list]
        ^{:key t}[:option {:value t} t])]
     [p/motion-group
      {:class-name "square-list"
       :enter {:animation (str "transition." @transition "In")}
       :leave {:animation (str "transition." @transition "Out")}}
      (map square @squares)]]))

(defn on-mount-square-list []
  (go-loop []
    (<! (timeout (* 1000 (rand-int 3))))
    (swap! squares conj (rand-int 999))
    (recur)))

(defn square-list []
  (let [transition (r/atom "bounceUp")]
    (r/create-class
     {:component-did-mount on-mount-square-list
      :reagent-render (render-square-list transition)})))
