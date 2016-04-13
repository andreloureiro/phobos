(ns phobos.core
  (:require [phobos.util :as u]
            [reagent.core :as r]
            [cljsjs.react]
            [velocity-react]
            [velocity-animate]
            [velocity-ui]))

(def ^:private VelocityReact js/VelocityReact)
(def ^:private VelocityComponent (aget VelocityReact "VelocityComponent"))
(def ^:private VelocityTransitionGroup (aget VelocityReact
                                             "VelocityTransitionGroup"))
(def ^:private velocityHelpers (aget VelocityReact "velocityHelpers"))

(defn register-effect [config]
  (let [js-config (clj->js config)]
    (.registerEffect velocityHelpers js-config)))

(defn ^:private motion-component-impl [config children]
  (let [child {:children (r/as-element children)}
        props (clj->js (merge (u/camelcase-map config) child))]
    (cond
      (nil? children)
      (u/throw-err (u/error-messages :nil-children-to-collection))

      (seq? children)
      (u/throw-err (u/error-messages :collection-to-component) children)

      :else
      (r/create-element VelocityComponent props))))

(def motion-component
  (with-meta motion-component-impl
    {:display-name "MotionComponent"}))

(defn ^:private motion-group-impl [config children]
  (let [child {:children (r/as-element children)}
        props (clj->js (merge (u/camelcase-map config) child))]
    (cond
      (and (seq? config)
           (nil? children))
      (u/throw-err (u/error-messages :config-nil-to-group))

      (nil? children)
      (u/throw-err (u/error-messages :nil-children-to-group))

      (not (seq? children))
      (u/throw-err (u/error-messages :children-not-collection) children)

      :else
      (r/create-element VelocityTransitionGroup props))))

(def motion-group
  (with-meta motion-group-impl
    {:display-name "MotionGroup"}))
