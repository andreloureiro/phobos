(ns phobos.components.toggle-box
  (:require [reagent.core :as r]
            [phobos.core :as p]))


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


(defn toggle-box []
  (let [visible? (r/atom true)
        transition (r/atom "fade")
        duration (r/atom 1000)]
    (fn []
      [:div.toggle-box-container
       [:label "Transition"]
       [:select.toggle-transition
        {:on-change #(reset! transition
                             (.. % -target -value))}
        (for [t transition-list]
          ^{:key t}[:option {:value t} t])]
       [:label "Duration"]
       [:input.toggle-duration
        {:type "text"
         :value @duration
         :on-change #(reset! duration (.. % -target -value))}]
       [:div.toggle-box {:on-click #(reset! visible? (not @visible?))}
        [p/motion-component
         {:key @transition
          :duration @duration
          :stagger @duration
          :animation (if @visible?
                       (str "transition." @transition "In")
                       (str "transition." @transition "Out"))}
         [:div {:style {:width "100%"
                        :height "100%"
                        :background-color "indigo"}}]]]])))
