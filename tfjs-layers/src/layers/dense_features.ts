/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */

/**
 * TensorFlow.js Layers: DenseFeatures Layer.
 *
 * Original source: https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/feature_column/dense_features_v2.py
 */

import {Layer, LayerArgs} from "../engine/topology";
import {EmbeddingLayerArgs} from "./embeddings";
import {Shape} from "..";
import {StateManager} from "../feature_column/StateManager";

export declare interface DenseFeaturesLayerArgs extends LayerArgs {
    /**
     * An iterable containing the FeatureColumns to use as inputs to your model.
     * All items should be instances of classes derived from `DenseColumn` such as
     * `numeric_column`, `embedding_column`, `bucketized_column`, `indicator_column`.
     * If you have categorical features, you can wrap them with an `embedding_column` or `indicator_column`.
     */
    featureColumns: [];
}
/**
 * A layer that produces a dense `Tensor` based on given `feature_columns`.
 *
 */
export class DenseFeatures extends Layer {
    /** @nocollapse */
    static className = 'DenseFeatures';

    stateManager: Object;
    featureColumns: [];

    constructor(args: DenseFeaturesLayerArgs) {
        super(args);
        this.featureColumns = args.featureColumns;
        this.stateManager = new StateManager(this);
        /*
        self._state_manager = fc._StateManagerImplV2(self, self.trainable)
         */
    }

    public build(): void {
        /*
        for column in self._feature_columns:
            with ops.name_scope(column.name):
                column.create_state(self._state_manager)
         */
        for(let column of this.featureColumns) {
            column.createState(this.stateManager);
        }
        super.build(null);
    }
}