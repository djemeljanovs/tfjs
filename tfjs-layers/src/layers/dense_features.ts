import {Layer, LayerArgs} from "../engine/topology";
import {EmbeddingLayerArgs} from "./embeddings";

export declare interface DenseFeaturesLayerArgs extends LayerArgs {
    featureColumns: [];
}
/**
 * A layer that produces a dense `Tensor` based on given `feature_columns`.
 * https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/feature_column/dense_features_v2.py
 */
export class DenseFeatures extends Layer {
    /** @nocollapse */
    static className = 'DenseFeatures';

    constructor(args: DenseFeaturesLayerArgs) {
        super(args);
    }
}